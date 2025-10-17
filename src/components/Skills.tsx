import { useState } from "react";
import {
  Search,
  FileSearch,
  Shield,
  ShieldCheck,
  Settings,
  Activity,
  Terminal,
  Zap,
  Wrench,
  Network,
  ArrowUp,
  Bug,
  Building2,
  Target,
  KeyRound,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ========= Categories (unchanged) =========
const CATEGORIES = [
  { key: "analyst", label: "Security Analyst" },
  { key: "pentest", label: "Penetration Testing" },
  { key: "engineering", label: "Security Engineering" },
] as const;

type CatKey = typeof CATEGORIES[number]["key"];

// ========= Skills (from user list) =========
// Kept exactly, but organized into categories for reveal-on-click UI.
const SKILLS_BY_CATEGORY: Record<CatKey, { icon: any; name: string; description: string }[]> = {
  analyst: [
    { icon: Search, name: "Security Analysis", description: "Log parsing, SIEM queries, ELK/Splunk usage, alert investigation, false-positive identification, triage prioritization, event correlation, security monitoring, playbook following, incident escalation procedures" },
    { icon: FileSearch, name: "Digital Forensics", description: "Disk forensics, memory forensics, timeline building, artifact collection, forensic imaging, NTFS analysis, registry analysis, evidence hashing, Autopsy/KAPE workflows, Volatility memory analysis" },
    { icon: Shield, name: "Incident Response", description: "Containment, eradication, recovery, evidence preservation, root cause analysis, incident reporting & documentation, playbook creation, runbook execution" },
    { icon: ShieldCheck, name: "Security Operations", description: "SOC triage workflows, 24x7 monitoring, IDS/IPS configuration basics, endpoint telemetry collection, alert tuning, Tier 2 escalation, SOC shift handover" },
    { icon: Settings, name: "Detection Engineering", description: "IDS signature creation (Snort), Sigma rule creation, YARA rule creation, detection rule tuning, signature→TTP mapping, log-source onboarding & normalization, detection testing & validation" },
    { icon: Activity, name: "Threat Hunting", description: "Hypothesis-driven hunts, IOC-based hunts (hash/domain/IP), TTP/behavior-based hunts, PCAP-based hunts, Sysmon & Windows event artifact hunting, intel enrichment with MISP/OpenCTI/TheHive" },
  ],
  pentest: [
    { icon: Terminal, name: "Penetration Testing", description: "Pentest methodology (recon→exploit→post), engagement scoping, reporting & remediation recommendations, framework usage" },
    { icon: Zap, name: "Red Teaming", description: "Initial access (phishing), command & control basics, persistence techniques, adversary simulation mindset, evasion/defense bypass" },
    { icon: Wrench, name: "Exploitation", description: "Web exploitation, service exploitation, CVE research & PoCs, Metasploit/Meterpreter, manual exploit crafting, reverse & bind shells" },
    { icon: Network, name: "Enumeration", description: "Active & passive reconnaissance, Nmap host discovery & port scanning, service/version enumeration, directory & subdomain discovery, banner grabbing, OS/service fingerprinting, protocol analysis (HTTP/SMB/LDAP/etc.)" },
    { icon: ArrowUp, name: "Privilege Escalation", description: "Linux priv esc (SUID/misconfigs), Windows priv esc (services/registry/UAC), credential harvesting, lateral movement fundamentals, post-exploitation persistence, Kerberos/AD privilege concepts" },
    { icon: Bug, name: "Vulnerability Analysis", description: "Vulnerability identification & verification, vulnerability chaining, automated scanner usage & interpretation, exploit dev basics, OWASP Top 10, SQLi, command injection, file inclusion (LFI/RFI), auth bypass, IDOR, SSRF, XSS, race conditions, file upload flaws, Burp Suite (Repeater/Intruder), SQLMap" },
  ],
  engineering: [
    { icon: Building2, name: "Security Architecture", description: "Network segmentation, firewall fundamentals, IDS/IPS fundamentals, secure network design, system hardening (Windows/Linux), logging & telemetry architecture, secure protocol selection (HTTPS/TLS)" },
    { icon: Target, name: "Threat Management", description: "MITRE ATT&CK mapping, Cyber/Unified Kill Chain, Diamond Model, Pyramid of Pain, threat modeling, vulnerability management lifecycle, risk assessment" },
    { icon: KeyRound, name: "Identity Security", description: "Active Directory fundamentals, AD accounts & groups, least privilege, authentication/authorization basics, AD hardening, credential management" },
    { icon: Workflow, name: "Security Automation", description: "Automation scripting (Bash/PowerShell/Python), logging automation & collection, automated detection deployment (rules/signatures), DevSecOps/CI-CD security concepts, configuration management, containers/VMs for lab automation (Docker/WSL/VMs)" },
  ],
};

// ========= Tools (grouped by commented categories) =========
const TOOL_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Analyst / DFIR / SOC",
    items: [
      "Wireshark", "TShark", "TCPdump", "Zeek", "Snort", "Brim", "NetworkMiner",
      "Sysinternals", "Sysmon", "Autopsy", "KAPE", "Volatility",
      "ELK", "Splunk", "Sigma", "YARA", "Osquery", "Wazuh",
      "TheHive", "MISP", "OpenCTI",
    ],
  },
  {
    title: "Offensive",
    items: [
      "Burp Suite", "Nmap", "Metasploit", "SQLMap", "John the Ripper", "Hashcat", "Netcat",
    ],
  },
  {
    title: "Reversing / Malware & Utilities",
    items: [
      "CyberChef", "CAPA", "REMnux", "FlareVM",
    ],
  },
  {
    title: "Environment / DevOps",
    items: [
      "Kali Linux", "Git", "GitLab", "Docker", "WSL", "Virtual Machines",
    ],
  },
  {
    title: "Programming Languages & Scripting",
    items: [
      "Python", "SQL", "C++", "JavaScript", "HTML", "CSS",
      "PowerShell", "Bash",
    ],
  },
  {
    title: "Misc",
    items: [
      "Curl", "Wget",
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState<CatKey>("analyst");

  return (
    <section id="skills" className="py-24 relative">
      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--grid-line))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--grid-line))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* header */}
        <div className="text-center mb-10">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">&gt;</span> Skills
          </h2>
          <p className="text-muted-foreground font-mono">Explore categories to reveal skills</p>
        </div>

        {/* category buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.key}
              variant={active === cat.key ? "default" : "outline"}
              className={`font-mono ${active === cat.key ? "" : "border-border hover:border-primary hover:text-primary"}`}
              onClick={() => setActive(cat.key)}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* skills grid for active category */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS_BY_CATEGORY[active].map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="bg-card border border-border p-5 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
              >
                <div className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <h3 className="font-mono text-base font-bold">{s.name}</h3>
                    <p className="font-mono text-sm text-muted-foreground mt-1">{s.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools & Technologies Section */}
        <div className="text-center mt-16 mb-6">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">&gt;</span> Tools <span className="text-accent">&</span> Technologies
          </h2>
          <p className="text-muted-foreground font-mono">
            Frameworks, platforms, and utilities I work with
          </p>
        </div>

        {/* Tools (separate, grouped) */}
        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 gap-6">
          {TOOL_GROUPS.map((group) => (
            <div key={group.title} className="bg-card border border-border p-6">
              <h3 className="font-mono text-lg font-bold mb-4 text-accent">&gt; {group.title}</h3>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {group.items.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-secondary border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
