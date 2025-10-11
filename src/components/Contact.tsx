import { Mail, Github, Linkedin, Twitter, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--grid-line))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--grid-line))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">&gt;</span> Get In Touch
            </h2>
            <p className="text-muted-foreground font-mono">
              Open for red team engagements and security consulting
            </p>
          </div>

          <div className="bg-card border border-border p-8 space-y-6">
            <div className="font-mono space-y-2">
              <div className="text-accent">$ cat contact.txt</div>
              <div className="pl-4 space-y-1 text-sm">
                <div><span className="text-primary">email:</span> haasedylan@gmail.com</div>
                <div><span className="text-primary">timezone:</span> UTC-7 (MST)</div>
                <div><span className="text-primary">availability:</span> Contract & Full-time</div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  className="font-mono border-border hover:border-primary hover:text-primary"
                  asChild
                >
                  <a href="mailto:haasedylan@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="hidden md:inline">Email</span>
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  className="font-mono border-border hover:border-accent hover:text-accent"
                  asChild
                >
                  <a href="https://github.com/MistletoW" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span className="hidden md:inline">GitHub</span>
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  className="font-mono border-border hover:border-accent hover:text-accent"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/dylan-haase-b72827279/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <span className="hidden md:inline">LinkedIn</span>
                  </a>
                </Button>
                
              </div>
            </div>

            <div className="bg-secondary border border-border p-4 mt-6">
              <div className="font-mono text-sm space-y-2">
                <div className="text-accent"># Certifications & Training</div>
                <div className="pl-4 text-muted-foreground space-y-1">
                  <div>• COMPTIA SEC+ (Scheduled November 2025)</div>
                  <div>• TryHackMe Cyber Security 101</div>
                  <div>• TryHackMe Pre Security</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center font-mono text-sm text-muted-foreground">
            <p>$ echo "Always test in scope. Stay legal. Stay ethical."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
