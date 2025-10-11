import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "root@redteam:~$ whoami";
  
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--grid-line))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--grid-line))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scan pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Terminal header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-t-sm">
            <Terminal className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-muted-foreground">terminal</span>
          </div>
          
          {/* Terminal content */}
          <div className="bg-card border-x border-b border-border p-8 rounded-b-sm shadow-2xl">
            <div className="font-mono text-left space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-accent">$</span>
                <span className="text-foreground">{text}</span>
                <span className="animate-pulse">_</span>
              </div>
              
              <div className="text-primary font-bold text-3xl md:text-5xl mt-4 animate-fade-in">
                &gt; Dylan Haase
              </div>

              {/* Roles */}
              <div className="text-accent text-lg md:text-2xl font-semibold animate-fade-in">
                SOC Analyst&nbsp;|&nbsp;Penetration Tester&nbsp;|&nbsp;Security Engineer
              </div>

              {/* Tagline */}
              <div className="text-muted-foreground text-base md:text-lg mt-6 leading-relaxed animate-fade-in">
                Defending networks. Breaking systems. Engineering security.<br />
                From <span className="text-accent">detection</span> to <span className="text-accent">exploitation</span>, building resilience through offense and analysis.
              </div>

              {/* Optional call-to-action line */}
              <div className="text-sm text-muted-foreground italic mt-4 animate-fade-in-slow">
                # Threat-driven. Data-informed. Mission-focused.
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="font-mono bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] transition-all"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="font-mono border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;