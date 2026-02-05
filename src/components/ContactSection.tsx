import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Github, Linkedin, Terminal, Send, MapPin } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "> system_status: online",
    "> contact_form: initialized",
    "> waiting_for_input...",
  ]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Add terminal-style feedback
    const newOutput = [...terminalOutput];
    newOutput.push(
      `> ${field}_updated: "${value.substring(0, 20)}${value.length > 20 ? "..." : ""}"`,
    );
    if (newOutput.length > 10) newOutput.shift(); // Keep only last 10 lines
    setTerminalOutput(newOutput);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Submit to Formspree (works from static sites)
    // Set your Formspree form ID in an env var at build time, e.g. VITE_FORMSPREE_ID
    const formId = (import.meta as any).env?.VITE_FORMSPREE_ID || "mgolwele";
    const endpoint = `https://formspree.io/f/${formId}`;

    setTerminalOutput((prev) => [
      ...prev,
      "> processing_message...",
      "> validating_input...",
    ]);

    try {
      setTerminalOutput((prev) => [...prev, "> establishing_connection..."]);

      const payload = new URLSearchParams();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("message", formData.message);

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setTerminalOutput((prev) => [
          ...prev,
          "> message_sent: success",
          "> thank_you_for_reaching_out!",
        ]);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setTerminalOutput((prev) => [
          ...prev,
          `> message_failed: ${data.error || res.status}`,
          "> please_try_again_later",
        ]);
      }
    } catch (err: any) {
      setTerminalOutput((prev) => [
        ...prev,
        `> sending_error: ${err?.message || "network_error"}`,
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    // {
    //   icon: <Mail className="w-5 h-5" />,
    //   label: "email.sh",
    //   value: "hello@portfolio.dev",
    //   href: "mailto:hello@portfolio.dev",
    // },
    {
      icon: <Github className="w-5 h-5" />,
      label: "github.com",
      value: "/0x1bitcrack3r",
      href: "https://github.com/0x1bitcrack3r",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "linkedin.com",
      value: "/in/vishnu-ramineni-7a581383",
      href: "https://linkedin.com/in/vishnu-ramineni-7a581383",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "location.geo",
      value: "Plano, TX",
      href: "#",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block cyber-border bg-black-light/50 rounded px-6 py-3 mb-4">
            <h2 className="font-mono text-primary">CONTACT.INTERFACE</h2>
          </div>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Initialize a connection and let's create
            something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="cyber-border bg-black-light/30 border-primary/20 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Terminal className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-primary">message.send()</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-sm text-primary mb-2">
                  --name
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="font-mono bg-black-light border-primary/30 focus:border-primary text-primary"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-primary mb-2">
                  --email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="font-mono bg-black-light border-primary/30 focus:border-primary text-primary"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-primary mb-2">
                  --message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="font-mono bg-black-light border-primary/30 focus:border-primary text-primary min-h-[120px]"
                  placeholder="Hello! I'd like to discuss..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-black hover:bg-primary/90 font-mono"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full mr-2"></div>
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Execute Send
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Terminal Output & Contact Info */}
          <div className="space-y-6">
            {/* Terminal Output */}
            <Card className="cyber-border bg-black-light/30 border-primary/20 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="ml-2 font-mono text-sm text-muted-foreground">
                  terminal.log
                </span>
              </div>

              <div className="font-mono text-sm space-y-1 max-h-48 overflow-y-auto">
                {terminalOutput.map((line, index) => (
                  <div key={index} className="text-green-dark">
                    {line}
                  </div>
                ))}
                <div className="text-primary">
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </Card>

            {/* Contact Links */}
            <Card className="cyber-border bg-black-light/30 border-primary/20 p-6">
              <h3 className="font-mono text-primary mb-4">connection.links</h3>
              <div className="space-y-3">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-3 p-3 rounded hover:bg-primary/10 transition-colors duration-200 group"
                  >
                    <div className="text-primary group-hover:text-primary">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-sm text-primary">
                        {link.label}
                      </div>
                      <div className="font-mono text-xs text-muted-foreground">
                        {link.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
