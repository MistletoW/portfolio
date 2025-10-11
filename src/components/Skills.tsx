import { 
  Shield, 
  Terminal, 
  Network, 
  Lock, 
  Bug, 
  FileSearch, 
  Activity, 
  Zap, 
  Search, 
  Settings, 
  ArrowUp, 
  KeyRound, 
  Building2, 
  Workflow, 
  AlertTriangle, 
  ShieldCheck,
  Wrench,
  Target
} from "lucide-react";

// One skill object per item in the TryHackMe skill matrix the user provided.
// The description field contains the user's concrete skills that map to that item.

const skills = [
  // ===== Security Analyst =====
  { icon: Search, name: "Security Analysis", description: "Log parsing, SIEM queries, ELK/Splunk usage, alert investigation, false-positive identification, triage prioritization, event correlation, security monitoring, playbook following, incident escalation procedures" },
  { icon: FileSearch, name: "Digital Forensics", description: "Disk forensics, memory forensics, timeline building, artifact collection, forensic imaging, NTFS analysis, registry analysis, evidence hashing, Autopsy/KAPE workflows, Volatility memory analysis" },
  { icon: Shield, name: "Incident Response", description: "Containment, eradication, recovery, evidence preservation, root cause analysis, incident reporting & documentation, playbook creation, runbook execution" },
  { icon: ShieldCheck, name: "Security Operations", description: "SOC triage workflows, 24x7 monitoring, IDS/IPS configuration basics, endpoint telemetry collection, alert tuning, Tier 2 escalation, SOC shift handover" },
  { icon: Settings, name: "Detection Engineering", description: "IDS signature creation (Snort), Sigma rule creation, YARA rule creation, detection rule tuning, signature→TTP mapping, log-source onboarding & normalization, detection testing & validation" },
  { icon: Activity, name: "Threat Hunting", description: "Hypothesis-driven hunts, IOC-based hunts (hash/domain/IP), TTP/behavior-based hunts, PCAP-based hunts, Sysmon & Windows event artifact hunting, intel enrichment with MISP/OpenCTI/TheHive" },

  // ===== Penetration Testing =====
  { icon: Terminal, name: "Penetration Testing", description: "Pentest methodology (recon→exploit→post), engagement scoping, reporting & remediation recommendations, framework usage" },
  { icon: Zap, name: "Red Teaming", description: "Initial access (phishing), command & control basics, persistence techniques, adversary simulation mindset, evasion/defense bypass" },
  { icon: Wrench, name: "Exploitation", description: "Web exploitation, service exploitation, CVE research & PoCs, Metasploit/Meterpreter, manual exploit crafting, reverse & bind shells" },
  { icon: Network, name: "Enumeration", description: "Active & passive reconnaissance, Nmap host discovery & port scanning, service/version enumeration, directory & subdomain discovery, banner grabbing, OS/service fingerprinting, protocol analysis (HTTP/SMB/LDAP/etc.)" },
  { icon: ArrowUp, name: "Privilege Escalation", description: "Linux priv esc (SUID/misconfigs), Windows priv esc (services/registry/UAC), credential harvesting, lateral movement fundamentals, post-exploitation persistence, Kerberos/AD privilege concepts" },
  { icon: Bug, name: "Vulnerability Analysis", description: "Vulnerability identification & verification, vulnerability chaining, automated scanner usage & interpretation, exploit dev basics, OWASP Top 10, SQLi, command injection, file inclusion (LFI/RFI), auth bypass, IDOR, SSRF, XSS, race conditions, file upload flaws, Burp Suite (Repeater/Intruder), SQLMap" },

  // ===== Security Engineering =====
  { icon: Building2, name: "Security Architecture", description: "Network segmentation, firewall fundamentals, IDS/IPS fundamentals, secure network design, system hardening (Windows/Linux), logging & telemetry architecture, secure protocol selection (HTTPS/TLS)" },
  { icon: Target, name: "Threat Management", description: "MITRE ATT&CK mapping, Cyber/Unified Kill Chain, Diamond Model, Pyramid of Pain, threat modeling, vulnerability management lifecycle, risk assessment" },
  { icon: KeyRound, name: "Identity Security", description: "Active Directory fundamentals, AD accounts & groups, least privilege, authentication/authorization basics, AD hardening, credential management" },
  { icon: Workflow, name: "Security Automation", description: "Automation scripting (Bash/PowerShell/Python), logging automation & collection, automated detection deployment (rules/signatures), DevSecOps/CI-CD security concepts, configuration management, containers/VMs for lab automation (Docker/WSL/VMs)" },
];

const tools = [
  // Analyst / DFIR / SOC
  "Wireshark", "TShark", "TCPdump", "Zeek", "Snort", "Brim", "NetworkMiner",
  "Sysinternals", "Sysmon", "Autopsy", "KAPE", "Volatility",
  "ELK", "Splunk", "Sigma", "YARA", "Osquery", "Wazuh",
  "TheHive", "MISP", "OpenCTI",
  // Offensive
  "Burp Suite", "Nmap", "Metasploit", "SQLMap", "John the Ripper", "Hashcat", "Netcat",
  // Reversing / Malware & Utilities
  "CyberChef", "CAPA", "REMnux", "FlareVM",
  // Environment / DevOps
  "Kali Linux", "Git", "GitLab", "Docker", "WSL", "Virtual Machines",
  // Misc
  "Curl", "Wget"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--grid-line))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--grid-line))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&gt;</span> Skills <span className="text-accent">&</span> Expertise
          </h2>
          <p className="text-muted-foreground font-mono">
            Mapped to TryHackMe skill matrix: Analyst, Penetration Testing, and Security Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-card border border-border p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-secondary rounded border border-border group-hover:border-primary transition-colors">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card border border-border p-6">
            <h3 className="font-mono text-xl font-bold mb-4 text-accent">
              &gt; Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3 font-mono text-sm">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-secondary border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;