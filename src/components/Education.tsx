import { GraduationCap, MapPin, Calendar, Award, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

// NOTE
// This section has been simplified to ONLY include Colorado School of Mines
// and ongoing TryHackMe training, per request.
// Future placeholders:
// - HackTheBox (commented out below)
// - Certifications (commented out below)

const EDU = [
  {
    school: "Colorado School of Mines",
    degree: "B.S. in Computer Science",
    location: "Golden, CO",
    period: "Aug 2021 – Dec 2024",
    bullets: [
      "Key Coursework: Information Security & Privacy, Network Security, Database Management (Postgres, MySQL), Advanced Machine Learning",
    ],
  },
];

const TRAINING = {
  tryhackme: {
    label: "TryHackMe — Ongoing Training",
    profile: "https://tryhackme.com/p/G1ldedWarden",
    notes: [
      "Hands-on rooms for SOC fundamentals, DFIR, malware analysis, and threat hunting",
      "Regular progress in blue-team and incident response paths",
    ],
  },
  // hackthebox: {
  //   label: "HackTheBox — (future) Labs & Tracks",
  //   profile: "https://app.hackthebox.com/profile/your-id",
  //   notes: ["Planned: Starting tracks and easy/medium boxes"],
  // },
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--grid-line))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--grid-line))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">&gt;</span> Education
          </h2>
          <p className="text-muted-foreground font-mono">Academic foundations and ongoing training</p>
        </div>

        {/* Terminal strip */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="font-mono bg-card border border-border p-4">
            <div className="text-accent">$ cat education.txt</div>
            <div className="text-sm text-muted-foreground mt-1">Colorado School of Mines and current blue-team training</div>
          </div>
        </div>

        {/* Mines Card */}
        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {EDU.map((e, idx) => (
            <div
              key={idx}
              className="bg-card border border-border p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-mono text-xl font-bold text-foreground">
                    <span className="inline-flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      {e.school}
                    </span>
                  </h3>
                  <p className="text-accent font-mono text-sm">{e.degree}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm font-mono text-muted-foreground">
                <div className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{e.period}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{e.location}</span>
                </div>
              </div>

              <ul className="mt-4 space-y-2 font-mono text-sm text-muted-foreground list-disc pl-5">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ongoing Training */}
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 gap-6">
          <div className="bg-secondary/30 border border-border p-6">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-primary" />
              <h3 className="font-mono text-lg font-bold">{TRAINING.tryhackme.label}</h3>
            </div>
            <div className="font-mono text-sm text-muted-foreground space-y-2">
              {TRAINING.tryhackme.notes.map((n, i) => (
                <div key={i}>• {n}</div>
              ))}
            </div>
            <div className="mt-4">
              <Button
                variant="outline"
                className="font-mono border-border hover:border-primary hover:text-primary"
                asChild
              >
                <a href={TRAINING.tryhackme.profile} target="_blank" rel="noreferrer">View TryHackMe Profile</a>
              </Button>
            </div>
          </div>

          {/* Future: HackTheBox */}
          {/**
          <div className="bg-secondary/30 border border-border p-6">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-primary" />
              <h3 className="font-mono text-lg font-bold">{TRAINING.hackthebox.label}</h3>
            </div>
            <div className="font-mono text-sm text-muted-foreground space-y-2">
              {TRAINING.hackthebox.notes.map((n, i) => (
                <div key={i}>• {n}</div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="font-mono border-border hover:border-primary hover:text-primary" asChild>
                <a href={TRAINING.hackthebox.profile} target="_blank" rel="noreferrer">View HackTheBox Profile</a>
              </Button>
            </div>
          </div>
          */}
        </div>

        {/* Future: Certifications */}
        {/**
        <div className="mt-6 max-w-5xl mx-auto">
          <div className="bg-card border border-border p-6">
            <div className="inline-flex items-center gap-2 text-accent">
              <Award className="w-4 h-4" />
              <span className="font-mono font-bold">Planned Certifications</span>
            </div>
            <ul className="mt-3 font-mono text-sm text-muted-foreground list-disc pl-5">
              <li>CompTIA Security+ (in progress / scheduled)</li>
              <li>AWS Certified Database – Specialty (studying)</li>
              <li>Other blue-team / DFIR certs TBD</li>
            </ul>
          </div>
        </div>
        */}

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            className="font-mono border-border hover:border-primary hover:text-primary"
            asChild
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
