import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Code, Camera, Video, Newspaper, Rss } from "lucide-react";

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

export function HeroSection({ onSectionChange }: HeroSectionProps) {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const fullText =
    "AI_ML_Engineer.UI_Architect.Accessibility_Researcher.Security_Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative matrix-bg">
      <div
        className="container mx-auto px-4 text-center"
        style={{ marginTop: "100px" }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Terminal Window */}
          <div className="cyber-border bg-black-light/50 rounded-lg p-8 mb-8">
            <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="ml-4 font-mono text-sm text-muted-foreground">
                terminal.app
              </span>
            </div>

            <div className="text-left space-y-2 font-mono">
              <div className="text-primary">
                <span className="text-muted-foreground">$</span> whoami
              </div>
              <div className="text-green-dark">
                I’m Vishnu Ramineni (aka 0x1bitcrack3r), an AI & ML Engineer and
                security enthusiast specializing in UI architecture, React
                Native, and cross-platform application development.
              </div>
              <div className="text-primary">
                <span className="text-muted-foreground">$</span> ls -la
                portfolio/
              </div>
              <div className="text-green-dark">drwxr-xr-x projects/</div>
              <div className="text-green-dark">drwxr-xr-x research/</div>
              <div className="text-green-dark">drwxr-xr-x blog/</div>
              <div className="text-primary">
                <span className="text-muted-foreground">$</span> cat mission.txt
              </div>
              <div className="text-green-dark">
                I focus on building scalable, secure, and accessible digital
                systems across mobile, web, and desktop platforms. My work
                blends advanced front-end engineering with AI-driven interfaces,
                pushing the boundaries of modern software architecture and user
                experience.
                <br />
                As a digital accessibility researcher, my work centers on
                applying AI to automate UI generation from design systems
                (Figma, Zeplin), enhance healthcare and e-commerce
                accessibility, and actively participate in application security
                bug reporting programs. I’m passionate about creating inclusive,
                human-centered products that combine machine learning, modern UI
                frameworks, and strong architectural principles to deliver
                impactful, future-ready experiences.
              </div>
              <div className="text-primary">
                <span className="text-muted-foreground">$</span> echo "{text}"
                {showCursor && <span className="text-primary">_</span>}
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Button
              onClick={() => onSectionChange("projects")}
              className="cyber-border bg-black-light hover:bg-primary/10 text-primary border-primary p-6 h-auto flex flex-col items-center space-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              variant="outline"
            >
              <Code className="w-8 h-8" />
              <span>./projects.sys</span>
              <span className="text-xs text-muted-foreground">
                Projects Portfolio
              </span>
            </Button>

            <Button
              onClick={() => onSectionChange("research")}
              className="cyber-border bg-black-light hover:bg-primary/10 text-primary border-primary p-6 h-auto flex flex-col items-center space-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              variant="outline"
            >
              <Newspaper className="w-8 h-8" />
              <span>./research.pdf</span>
              <span className="text-xs text-muted-foreground">
                Research Papers
              </span>
            </Button>

            <Button
              onClick={() => onSectionChange("blog")}
              className="cyber-border bg-black-light hover:bg-primary/10 text-primary border-primary p-6 h-auto flex flex-col items-center space-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              variant="outline"
            >
              <Rss className="w-8 h-8" />
              <span>./blog.txt</span>
              <span className="text-xs text-muted-foreground">Blog</span>
            </Button>
          </div>
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center space-y-2 text-primary animate-bounce">
            <span className="font-mono text-sm">scroll_down()</span>
            <ChevronDown className="w-5 h-5" />
          </div>
          <a
            class="twitter-timeline"
            data-lang="en"
            data-width="220"
            data-height="200"
            data-theme="dark"
            href="https://twitter.com/0x1bitcrack3r?ref_src=twsrc%5Etfw"
          >
            Tweets by 0x1bitcrack3r
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>

      {/* Matrix-style background effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="text-primary font-mono text-xs leading-none overflow-hidden h-full">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 100 }, (_, j) => (
                <span key={j} className="inline-block w-3">
                  {Math.random() > 0.5 ? "1" : "0"}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
