import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Play, Eye, Rss } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: "projects" | "research" | "blog";
  links?: {
    live?: string;
    github?: string;
    behance?: string;
  };
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  type: "projects" | "research" | "blog";
}

export function PortfolioGrid({ items, type }: PortfolioGridProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const getIcon = () => {
    switch (type) {
      case "projects":
        return <Play className="w-4 h-4" />;
      case "research":
        return <Eye className="w-4 h-4" />;
      case "blog":
        return <Rss className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "projects":
        return "PROJECTS";
      case "research":
        return "RESEARCH";
      case "blog":
        return "BLOG";
      default:
        return "PORTFOLIO";
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block cyber-border bg-black-light/50 rounded px-6 py-3 mb-4">
            <h2 className="font-mono text-primary">{getTypeLabel()}</h2>
          </div>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            {type === "design" &&
              "Visual identity, branding, and user interface designs crafted with precision and creativity."}
            {type === "video" &&
              "Cinematic storytelling through motion graphics, commercials, and creative video content."}
            {type === "photo" &&
              "Capturing moments and emotions through the lens with professional photography expertise."}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Card
              key={item.id}
              className="cyber-border bg-black-light/30 border-primary/20 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-primary text-black hover:bg-primary/90"
                    onClick={() => setSelectedItem(item)}
                  >
                    {getIcon()}
                    <span className="ml-2">View Details</span>
                  </Button>
                </div>

                {/* Terminal-style overlay */}
                <div className="absolute top-2 left-2">
                  <div className="bg-black/80 rounded px-2 py-1">
                    <span className="font-mono text-xs text-primary">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-mono text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 font-mono">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs font-mono border-primary/30 text-green-dark"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {item.links && (
                  <div className="flex space-x-2">
                    {item.links.live && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="text-xs font-mono"
                      >
                        <a
                          href={item.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </a>
                      </Button>
                    )}
                    {item.links.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs font-mono"
                      >
                        <a
                          href={item.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for detailed view */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="cyber-border bg-black-light rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-mono text-primary text-xl">
                    {selectedItem.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedItem(null)}
                    className="text-primary hover:bg-primary/10"
                  >
                    ✕
                  </Button>
                </div>

                <ImageWithFallback
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-64 md:h-96 object-cover rounded mb-4"
                />

                <p className="font-mono text-muted-foreground mb-4">
                  {selectedItem.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="font-mono border-primary/30 text-green-dark"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
