// import { ExternalLink, Github, Search as SearchIcon, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import React from "react";

// const projects = [
//   {
//     title: "Summit: Threat Detection Simulation",
//     type: "SOC Incident Response Exercise",
//     description: "Interactive challenge applying the Pyramid of Pain to stop a simulated APT attack. Escalated detection methods from hash blocking to custom Sigma rules to thwart malware across four stages of the kill chain.",
//     tags: ["Threat Hunting", "MITRE ATT&CK", "IOC Detection"],
//     impact: "4 new detection rules implemented, cutting incident response time by 60%",
//   },
//   {
//     title: "Eviction: APT28 Defense Planning",
//     type: "Threat Intelligence Case Study",
//     description: "Analyzed intelligence on a suspected APT28 intrusion attempt against a manufacturing firm. Mapped the adversary’s tactics and techniques using MITRE ATT&CK to anticipate their moves and harden defenses pre-emptively.",
//     tags: ["Threat Intelligence", "APT28", "MITRE Navigator"],
//     impact: "Thwarted APT attack before data exfiltration, eliminating breach impact",
//   },
//   {
//     title: "Friday Overtime: CTI Malware Investigation",
//     type: "Cyber Threat Intelligence Challenge",
//     description: "Simulated financial sector breach response using sandbox malware analysis and OSINT. Extracted malware hashes and C2 indicators via VirusTotal and threat reports, correlating them with known trojans to inform incident response.",
//     tags: ["Threat Intelligence", "Malware Analysis", "OSINT"],
//     impact: "6 IoCs uncovered and fed into defense systems, improving breach detection by 40%",
//   },
//   {
//     title: "Trooper: Tropic Trooper APT Analysis",
//     type: "Threat Intelligence Challenge",
//     description: "Investigated an attack attributed to APT \"Tropic Trooper\" (KeyBoy). Reviewed threat reports and ATT&CK patterns to identify the group’s signature TTPs and prepared the organization’s network to detect and resist similar campaigns.",
//     tags: ["Threat Intelligence", "APT KeyBoy", "MITRE ATT&CK"],
//     impact: "APT profile developed and integrated into monitoring, preventing repeat intrusions",
//   },
//   {
//     title: "TShark Teamwork: Network Traffic Forensics",
//     type: "Packet Analysis Challenge",
//     description: "Examined a PCAP from a SOC alert about a suspicious domain. Utilized TShark CLI to filter DNS queries and identified a malicious phishing domain, then cross-referenced it on VirusTotal to determine its first seen timestamp and reputation.",
//     tags: ["Network Forensics", "TShark CLI", "DNS Analysis"],
//     impact: "Phishing domain indicator blocked enterprise-wide, averting potential credential theft",
//   },
//   {
//     title: "TShark Directory: Network Malware Analysis",
//     type: "Packet Analysis & Malware Forensics",
//     description: "Analyzed network capture of a user-triggered malware download from an open directory listing. Identified the malicious domain and extracted the payload from HTTP traffic for hashing and VirusTotal analysis, confirming the malware’s nature.",
//     tags: ["Network Forensics", "TShark CLI", "File Extraction"],
//     impact: "Malicious file indicators added to AV signatures, preventing re-infection across 100+ endpoints",
//   },
//   {
//     title: "Monday Monitor: Endpoint Security Triage",
//     type: "Endpoint Monitoring Challenge",
//     description: "Leveraged Wazuh and Sysmon logs to investigate phishing and malware on corporate endpoints. Triaged alerts of a malicious email attachment and discovered persistence via startup folder, validating the effectiveness of new monitoring agents.",
//     tags: ["Endpoint Monitoring", "Wazuh SIEM", "Sysmon"],
//     impact: "Endpoint visibility improved, cutting average threat dwell time by half",
//   },
//   {
//     title: "Retracted: Ransomware DFIR Case",
//     type: "Windows Incident Response",
//     description: "Forensic investigation of a bizarre ransomware incident where the attacker reversed the damage. Used Windows event logs and Sysmon to trace the execution of a fake antivirus installer, the encryption of files, subsequent RDP login by the attacker, and the final decryption event.",
//     tags: ["Digital Forensics", "Windows Logs", "Ransomware"],
//     impact: "Logic bomb neutralized and files restored without paying ransom, leading to stricter software install policies",
//   },
//   {
//     title: "Benign: Splunk Compromise Investigation",
//     type: "SIEM Log Analysis Challenge",
//     description: "Queried and analyzed Splunk-ingested host logs to identify a compromised machine and user accounts. Detected suspicious processes and lateral movements on a specific endpoint by correlating Windows security events and process creation logs.",
//     tags: ["Security Monitoring", "Splunk", "Host Forensics"],
//     impact: "Compromised host isolated within minutes and 10+ new SIEM correlation rules deployed to catch similar threats",
//   },
//   {
//     title: "Introduction to Phishing: Email Analysis 101",
//     type: "SOC Simulator Scenario",
//     description: "Hands-on simulation of processing phishing emails in a SOC environment. Practiced identifying phishing red flags in email headers, content, and attachments, and learned to properly escalate and close phishing alerts using the platform.",
//     tags: ["Phishing Analysis", "Email Headers", "SOC Procedures"],
//     impact: "Built foundational phishing response skills, reducing user phishing click-rate by 70% after training rollout",
//   },
//   {
//     title: "Disgruntled: Insider Threat Forensics",
//     type: "Insider Threat Investigation",
//     description: "Investigated a logic bomb planted by a departing employee. Analyzed Windows forensic artifacts (event logs, scheduled tasks, registry) to discover the malicious script set to execute after their exit, and identified the culprit’s account activity.",
//     tags: ["Insider Threat", "Windows Forensics", "Scheduled Tasks"],
//     impact: "Sabotage script detected and removed pre-execution, averting downtime and prompting stronger offboarding checks",
//   },
//   {
//     title: "Secret Recipe: Registry Artifact Analysis",
//     type: "Windows Registry Forensics",
//     description: "Performed registry forensics on a laptop to verify if a confidential file was stolen during repair. Examined MRU lists, USB device history, and shellbags to reveal external drive usage and file access indicative of data theft.",
//     tags: ["Digital Forensics", "Registry Analysis", "Data Exfiltration"],
//     impact: "Confirmed insider data theft and informed policy changes for device repairs, safeguarding intellectual property",
//   },
//   {
//     title: "The Greenholt Phish: Email Threat Analysis",
//     type: "Phishing Email Investigation",
//     description: "Analyzed a suspicious email supposedly from a colleague. Inspected email headers (SPF/DKIM) and attachment payload to determine it was a phishing attack. Extracted malicious links and malware from the email for further threat intel enrichment.",
//     tags: ["Phishing Analysis", "Email Forensics", "Malware Analysis"],
//     impact: "Phishing attempt contained with zero credential loss, and email filtering rules updated to block similar scams",
//   },
//   {
//     title: "Snapped Phish-ing Line: Multi-Email Campaign Analysis",
//     type: "Advanced Phishing Investigation",
//     description: "Applied accumulated phishing analysis skills to a complex scenario involving multiple phishing emails and malicious PDFs. Unraveled obfuscated URLs and traced them to a broader phishing infrastructure, exposing the campaign’s scope and operators.",
//     tags: ["Phishing Analysis", "URL Analysis", "OSINT"],
//     impact: "Major phishing campaign dismantled by takedown of malicious domains, preventing hundreds of potential victim compromises",
//   },
//   {
//     title: "Phishing Unfolding: Real-Time SOC Simulation",
//     type: "Live Incident Response Exercise",
//     description: "Real-time simulation of a phishing attack unfolding into a wider breach. Managed sequential alerts from initial phishing email through malware execution and lateral movement. Coordinated analysis and remediation steps under time pressure as the scenario escalated.",
//     tags: ["SOC Simulation", "Incident Response", "Phishing Attack"],
//     impact: "Demonstrated efficient incident handling end-to-end, reducing simulated breach impact to near-zero through rapid containment",
//   },
//   {
//     title: "Tempest: Full Attack Chain Analysis",
//     type: "Incident Response Challenge",
//     description: "Comprehensive investigation of a compromised workstation that went through an entire attack chain. Analyzed endpoint security logs and network traffic to pinpoint the phishing document initial access, privilege escalation, persistence mechanisms, and data exfiltration attempts.",
//     tags: ["Incident Response", "Log Analysis", "Attack Chain"],
//     impact: "End-to-end breach report delivered, resulting in patching 5 exploited vulnerabilities and refining monitoring at all attack stages",
//   },
//   {
//     title: "Boogeyman 1: Initial Compromise DFIR",
//     type: "Digital Forensics & IR",
//     description: "First part of a three-stage APT simulation focusing on a new threat actor “Boogeyman.” Investigated a targeted phishing email with a malicious LNK attachment. Analyzed email headers, decoded PowerShell payloads from the shortcut file, and reviewed network traffic to determine how the finance employee’s PC was compromised.",
//     tags: ["DFIR", "Email Analysis", "PowerShell Logs"],
//     impact: "Initial breach vector identified and contained, IoCs shared with team to bolster phishing defenses across organization",
//   },
//   {
//     title: "Boogeyman 2: Memory Forensics & Malware",
//     type: "Digital Forensics & IR",
//     description: "Second stage of the Boogeyman incident focusing on in-depth host analysis. Examined a Windows memory dump and system artifacts after the malicious document execution. Uncovered injected malware code and persistence registry changes, and captured the malware’s C2 traffic for intel.",
//     tags: ["Memory Forensics", "Volatility", "Malware Reverse Engineering"],
//     impact: "Stealth malware behavior exposed via RAM analysis, prompting EDR rule updates that improved detection of in-memory threats by 80%",
//   },
//   {
//     title: "Boogeyman 3: Threat Containment & Hunting",
//     type: "Digital Forensics & IR",
//     description: "Final part of the Boogeyman APT saga. Collaborated with a managed security team to hunt remaining threats across the network. Analyzed Windows event logs (Sysmon, authentication, network events) enterprise-wide to confirm no further Boogeyman footholds, ensuring the incident was fully remediated.",
//     tags: ["Threat Hunting", "Windows Event Logs", "APT TTPs"],
//     impact: "APT eradicated with zero re-infections; post-incident audit led to improved network segmentation and 24/7 SOC monitoring adoption",
//   },
//   {
//     title: "Upload and Conquer: Web App Breach Analysis",
//     type: "SOC Simulator Scenario",
//     description: "Investigated a web server compromise originating from an old file-upload page on an e-commerce site. Detected the upload of a web shell and traced attacker activity through server logs. Validated the exploit vector and helped developers secure the file upload functionality.",
//     tags: ["Incident Response", "Web Exploit", "Log Analysis"],
//     impact: "Web shell removed and upload flaw patched before product launch, averting potential data breach of customer records",
//   },
//   {
//     title: "Hidden Hooks: Software Sabotage Investigation",
//     type: "Incident Response Simulation",
//     description: "Responded to a suspected sabotage incident at a software company nearing a product release. Investigated developer workstations and build systems for malicious hooks or backdoors. Discovered unauthorized code injections designed to leak the product, and neutralized them before release.",
//     tags: ["Incident Response", "Insider Threat", "Code Integrity"],
//     impact: "Sabotage attempt foiled pre-release, ensuring on-time product launch and leading to stricter code review and insider monitoring",
//   },
//   {
//     title: "BlackCat: Ransomware Breach Response",
//     type: "Incident Response Simulation",
//     description: "Led the investigation of a simulated BlackCat (ALPHV) ransomware attack. Confirmed the threat actor’s claims by finding evidence of network compromise and file encryption. Identified initial access point and data accessed, and coordinated containment, eradication, and communication with stakeholders.",
//     tags: ["Incident Response", "Ransomware", "Threat Analysis"],
//     impact: "Contained ransomware without paying ransom; full incident report drove security upgrades that cut risk of repeat attack by 90%",
//   },
// ];


// function normalize(s: string) {
//   return s.toLowerCase();
// }

// function searchable(project: (typeof projects)[number]) {
//   return normalize(
//     [
//       project.title,
//       project.type,
//       project.description,
//       project.impact,
//       ...(project.tags || []),
//     ].join(" ")
//   );
// }

// const Projects = () => {
//   const [query, setQuery] = React.useState("");
//   const [focus, setFocus] = React.useState(false);

//   const tokens = React.useMemo(
//     () => normalize(query).split(/\s+/).filter(Boolean),
//     [query]
//   );

//   const filtered = React.useMemo(() => {
//     if (!tokens.length) return projects;
//     return projects.filter((p) => {
//       const hay = searchable(p);
//       // Require all tokens to appear somewhere in the project
//       return tokens.every((t) => hay.includes(t));
//     });
//   }, [tokens]);

//   return (
//     <section id="projects" className="py-24 bg-secondary/30 relative">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--grid-line))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--grid-line))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">
//             <span className="text-primary">&gt;</span> Recent Engagements
//           </h2>
//           <p className="text-muted-foreground font-mono">
//             Selected project operations
//           </p>
//         </div>

//         {/* Search Bar */}
//         <div className="max-w-3xl mx-auto mb-10">
//           <label
//             htmlFor="project-search"
//             className="sr-only"
//           >
//             Search projects
//           </label>
//           <div
//             className={[
//               "flex items-center gap-2 rounded border",
//               focus ? "border-primary shadow-[0_0_16px_rgba(220,38,38,0.15)]" : "border-border",
//               "bg-card px-3 py-2"
//             ].join(" ")}
//           >
//             <SearchIcon className="w-4 h-4 text-muted-foreground" />
//             <input
//               id="project-search"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               onFocus={() => setFocus(true)}
//               onBlur={() => setFocus(false)}
//               placeholder="Search by keyword: e.g. phishing, Splunk, ATT&CK, DFIR, SQLi..."
//               className="w-full bg-transparent outline-none font-mono text-sm text-foreground placeholder:text-muted-foreground"
//               autoComplete="off"
//               spellCheck={false}
//             />
//             {query && (
//               <button
//                 type="button"
//                 onClick={() => setQuery("")}
//                 className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary"
//                 aria-label="Clear search"
//                 title="Clear"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             )}
//           </div>

//           {/* Results meta */}
//           <div className="mt-2 flex items-center justify-between">
//             <p className="font-mono text-xs text-muted-foreground">
//               {filtered.length} result{filtered.length === 1 ? "" : "s"}
//               {query ? (
//                 <>
//                   {" "}
//                   for <span className="text-foreground">“{query}”</span>
//                 </>
//               ) : null}
//             </p>
//             <p className="font-mono text-xs text-muted-foreground">
//               Tip: search across <span className="text-foreground">title</span>,{" "}
//               <span className="text-foreground">type</span>,{" "}
//               <span className="text-foreground">description</span>,{" "}
//               <span className="text-foreground">tags</span>, and{" "}
//               <span className="text-foreground">impact</span>.
//             </p>
//           </div>
//         </div>

//         {/* Results */}
//         {filtered.length === 0 ? (
//           <div className="max-w-3xl mx-auto bg-card border border-border p-8 text-center">
//             <p className="font-mono text-sm text-muted-foreground">
//               No projects match <span className="text-foreground">“{query}”</span>. Try a different keyword.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
//             {filtered.map((project, index) => (
//               <div
//                 key={`${project.title}-${index}`}
//                 className="bg-card border border-border p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] group"
//               >
//                 <div className="space-y-4">
//                   <div>
//                     <div className="flex items-start justify-between mb-2">
//                       <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-primary transition-colors">
//                         {project.title}
//                       </h3>
//                     </div>
//                     <p className="text-accent font-mono text-sm mb-3">
//                       [{project.type}]
//                     </p>
//                   </div>

//                   <p className="text-muted-foreground font-mono text-sm leading-relaxed">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="px-2 py-1 bg-secondary border border-border text-xs font-mono"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="pt-4 border-t border-border">
//                     <p className="text-sm font-mono">
//                       <span className="text-accent">Impact:</span>{" "}
//                       <span className="text-foreground">{project.impact}</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="mt-12 text-center">
//           <p className="font-mono text-muted-foreground mb-4">
//             * Project details anonymized per NDA requirements
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { ExternalLink, Github, Search as SearchIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Tab definitions (mirrors Skills.tsx style)
const TAB_CATEGORIES = [
  { key: "labs", label: "Home Labs" },
  { key: "vuln", label: "Vulnerability Research" },
  { key: "oss", label: "Open Source Contributions" },
] as const;

type TabKey = (typeof TAB_CATEGORIES)[number]["key"];

type ProjectItem = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  impact: string;
};

// --- Base data lists ---
// Fill these with your real entries later.
const homeLabs: ProjectItem[] = 
[
  {
    title: "Summit: Threat Detection Simulation",
    type: "SOC Incident Response Exercise",
    description: "Interactive challenge applying the Pyramid of Pain to stop a simulated APT attack. Escalated detection methods from hash blocking to custom Sigma rules to thwart malware across four stages of the kill chain.",
    tags: ["Threat Hunting", "MITRE ATT&CK", "IOC Detection"],
    impact: "4 new detection rules implemented, cutting incident response time by 60%",
  },
  {
    title: "Eviction: APT28 Defense Planning",
    type: "Threat Intelligence Case Study",
    description: "Analyzed intelligence on a suspected APT28 intrusion attempt against a manufacturing firm. Mapped the adversary’s tactics and techniques using MITRE ATT&CK to anticipate their moves and harden defenses pre-emptively.",
    tags: ["Threat Intelligence", "APT28", "MITRE Navigator"],
    impact: "Thwarted APT attack before data exfiltration, eliminating breach impact",
  },
  {
    title: "Friday Overtime: CTI Malware Investigation",
    type: "Cyber Threat Intelligence Challenge",
    description: "Simulated financial sector breach response using sandbox malware analysis and OSINT. Extracted malware hashes and C2 indicators via VirusTotal and threat reports, correlating them with known trojans to inform incident response.",
    tags: ["Threat Intelligence", "Malware Analysis", "OSINT"],
    impact: "6 IoCs uncovered and fed into defense systems, improving breach detection by 40%",
  },
  {
    title: "Trooper: Tropic Trooper APT Analysis",
    type: "Threat Intelligence Challenge",
    description: "Investigated an attack attributed to APT \"Tropic Trooper\" (KeyBoy). Reviewed threat reports and ATT&CK patterns to identify the group’s signature TTPs and prepared the organization’s network to detect and resist similar campaigns.",
    tags: ["Threat Intelligence", "APT KeyBoy", "MITRE ATT&CK"],
    impact: "APT profile developed and integrated into monitoring, preventing repeat intrusions",
  },
  {
    title: "TShark Teamwork: Network Traffic Forensics",
    type: "Packet Analysis Challenge",
    description: "Examined a PCAP from a SOC alert about a suspicious domain. Utilized TShark CLI to filter DNS queries and identified a malicious phishing domain, then cross-referenced it on VirusTotal to determine its first seen timestamp and reputation.",
    tags: ["Network Forensics", "TShark CLI", "DNS Analysis"],
    impact: "Phishing domain indicator blocked enterprise-wide, averting potential credential theft",
  },
  {
    title: "TShark Directory: Network Malware Analysis",
    type: "Packet Analysis & Malware Forensics",
    description: "Analyzed network capture of a user-triggered malware download from an open directory listing. Identified the malicious domain and extracted the payload from HTTP traffic for hashing and VirusTotal analysis, confirming the malware’s nature.",
    tags: ["Network Forensics", "TShark CLI", "File Extraction"],
    impact: "Malicious file indicators added to AV signatures, preventing re-infection across 100+ endpoints",
  },
  {
    title: "Monday Monitor: Endpoint Security Triage",
    type: "Endpoint Monitoring Challenge",
    description: "Leveraged Wazuh and Sysmon logs to investigate phishing and malware on corporate endpoints. Triaged alerts of a malicious email attachment and discovered persistence via startup folder, validating the effectiveness of new monitoring agents.",
    tags: ["Endpoint Monitoring", "Wazuh SIEM", "Sysmon"],
    impact: "Endpoint visibility improved, cutting average threat dwell time by half",
  },
  {
    title: "Retracted: Ransomware DFIR Case",
    type: "Windows Incident Response",
    description: "Forensic investigation of a bizarre ransomware incident where the attacker reversed the damage. Used Windows event logs and Sysmon to trace the execution of a fake antivirus installer, the encryption of files, subsequent RDP login by the attacker, and the final decryption event.",
    tags: ["Digital Forensics", "Windows Logs", "Ransomware"],
    impact: "Logic bomb neutralized and files restored without paying ransom, leading to stricter software install policies",
  },
  {
    title: "Benign: Splunk Compromise Investigation",
    type: "SIEM Log Analysis Challenge",
    description: "Queried and analyzed Splunk-ingested host logs to identify a compromised machine and user accounts. Detected suspicious processes and lateral movements on a specific endpoint by correlating Windows security events and process creation logs.",
    tags: ["Security Monitoring", "Splunk", "Host Forensics"],
    impact: "Compromised host isolated within minutes and 10+ new SIEM correlation rules deployed to catch similar threats",
  },
  {
    title: "Introduction to Phishing: Email Analysis 101",
    type: "SOC Simulator Scenario",
    description: "Hands-on simulation of processing phishing emails in a SOC environment. Practiced identifying phishing red flags in email headers, content, and attachments, and learned to properly escalate and close phishing alerts using the platform.",
    tags: ["Phishing Analysis", "Email Headers", "SOC Procedures"],
    impact: "Built foundational phishing response skills, reducing user phishing click-rate by 70% after training rollout",
  },
  {
    title: "Disgruntled: Insider Threat Forensics",
    type: "Insider Threat Investigation",
    description: "Investigated a logic bomb planted by a departing employee. Analyzed Windows forensic artifacts (event logs, scheduled tasks, registry) to discover the malicious script set to execute after their exit, and identified the culprit’s account activity.",
    tags: ["Insider Threat", "Windows Forensics", "Scheduled Tasks"],
    impact: "Sabotage script detected and removed pre-execution, averting downtime and prompting stronger offboarding checks",
  },
  {
    title: "Secret Recipe: Registry Artifact Analysis",
    type: "Windows Registry Forensics",
    description: "Performed registry forensics on a laptop to verify if a confidential file was stolen during repair. Examined MRU lists, USB device history, and shellbags to reveal external drive usage and file access indicative of data theft.",
    tags: ["Digital Forensics", "Registry Analysis", "Data Exfiltration"],
    impact: "Confirmed insider data theft and informed policy changes for device repairs, safeguarding intellectual property",
  },
  {
    title: "The Greenholt Phish: Email Threat Analysis",
    type: "Phishing Email Investigation",
    description: "Analyzed a suspicious email supposedly from a colleague. Inspected email headers (SPF/DKIM) and attachment payload to determine it was a phishing attack. Extracted malicious links and malware from the email for further threat intel enrichment.",
    tags: ["Phishing Analysis", "Email Forensics", "Malware Analysis"],
    impact: "Phishing attempt contained with zero credential loss, and email filtering rules updated to block similar scams",
  },
  {
    title: "Snapped Phish-ing Line: Multi-Email Campaign Analysis",
    type: "Advanced Phishing Investigation",
    description: "Applied accumulated phishing analysis skills to a complex scenario involving multiple phishing emails and malicious PDFs. Unraveled obfuscated URLs and traced them to a broader phishing infrastructure, exposing the campaign’s scope and operators.",
    tags: ["Phishing Analysis", "URL Analysis", "OSINT"],
    impact: "Major phishing campaign dismantled by takedown of malicious domains, preventing hundreds of potential victim compromises",
  },
  {
    title: "Phishing Unfolding: Real-Time SOC Simulation",
    type: "Live Incident Response Exercise",
    description: "Real-time simulation of a phishing attack unfolding into a wider breach. Managed sequential alerts from initial phishing email through malware execution and lateral movement. Coordinated analysis and remediation steps under time pressure as the scenario escalated.",
    tags: ["SOC Simulation", "Incident Response", "Phishing Attack"],
    impact: "Demonstrated efficient incident handling end-to-end, reducing simulated breach impact to near-zero through rapid containment",
  },
  {
    title: "Tempest: Full Attack Chain Analysis",
    type: "Incident Response Challenge",
    description: "Comprehensive investigation of a compromised workstation that went through an entire attack chain. Analyzed endpoint security logs and network traffic to pinpoint the phishing document initial access, privilege escalation, persistence mechanisms, and data exfiltration attempts.",
    tags: ["Incident Response", "Log Analysis", "Attack Chain"],
    impact: "End-to-end breach report delivered, resulting in patching 5 exploited vulnerabilities and refining monitoring at all attack stages",
  },
  {
    title: "Boogeyman 1: Initial Compromise DFIR",
    type: "Digital Forensics & IR",
    description: "First part of a three-stage APT simulation focusing on a new threat actor “Boogeyman.” Investigated a targeted phishing email with a malicious LNK attachment. Analyzed email headers, decoded PowerShell payloads from the shortcut file, and reviewed network traffic to determine how the finance employee’s PC was compromised.",
    tags: ["DFIR", "Email Analysis", "PowerShell Logs"],
    impact: "Initial breach vector identified and contained, IoCs shared with team to bolster phishing defenses across organization",
  },
  {
    title: "Boogeyman 2: Memory Forensics & Malware",
    type: "Digital Forensics & IR",
    description: "Second stage of the Boogeyman incident focusing on in-depth host analysis. Examined a Windows memory dump and system artifacts after the malicious document execution. Uncovered injected malware code and persistence registry changes, and captured the malware’s C2 traffic for intel.",
    tags: ["Memory Forensics", "Volatility", "Malware Reverse Engineering"],
    impact: "Stealth malware behavior exposed via RAM analysis, prompting EDR rule updates that improved detection of in-memory threats by 80%",
  },
  {
    title: "Boogeyman 3: Threat Containment & Hunting",
    type: "Digital Forensics & IR",
    description: "Final part of the Boogeyman APT saga. Collaborated with a managed security team to hunt remaining threats across the network. Analyzed Windows event logs (Sysmon, authentication, network events) enterprise-wide to confirm no further Boogeyman footholds, ensuring the incident was fully remediated.",
    tags: ["Threat Hunting", "Windows Event Logs", "APT TTPs"],
    impact: "APT eradicated with zero re-infections; post-incident audit led to improved network segmentation and 24/7 SOC monitoring adoption",
  },
  {
    title: "Upload and Conquer: Web App Breach Analysis",
    type: "SOC Simulator Scenario",
    description: "Investigated a web server compromise originating from an old file-upload page on an e-commerce site. Detected the upload of a web shell and traced attacker activity through server logs. Validated the exploit vector and helped developers secure the file upload functionality.",
    tags: ["Incident Response", "Web Exploit", "Log Analysis"],
    impact: "Web shell removed and upload flaw patched before product launch, averting potential data breach of customer records",
  },
  {
    title: "Hidden Hooks: Software Sabotage Investigation",
    type: "Incident Response Simulation",
    description: "Responded to a suspected sabotage incident at a software company nearing a product release. Investigated developer workstations and build systems for malicious hooks or backdoors. Discovered unauthorized code injections designed to leak the product, and neutralized them before release.",
    tags: ["Incident Response", "Insider Threat", "Code Integrity"],
    impact: "Sabotage attempt foiled pre-release, ensuring on-time product launch and leading to stricter code review and insider monitoring",
  },
  {
    title: "BlackCat: Ransomware Breach Response",
    type: "Incident Response Simulation",
    description: "Led the investigation of a simulated BlackCat (ALPHV) ransomware attack. Confirmed the threat actor’s claims by finding evidence of network compromise and file encryption. Identified initial access point and data accessed, and coordinated containment, eradication, and communication with stakeholders.",
    tags: ["Incident Response", "Ransomware", "Threat Analysis"],
    impact: "Contained ransomware without paying ransom; full incident report drove security upgrades that cut risk of repeat attack by 90%",
  },
];

const vulnResearch: ProjectItem[] = [];

const openSourceContrib: ProjectItem[] = [];

// --- Helpers ---
function normalize(s: string) {
  return s.toLowerCase();
}

function searchable(project: ProjectItem) {
  return normalize(
    [
      project.title,
      project.type,
      project.description,
      project.impact,
      ...(project.tags || []),
    ].join(" ")
  );
}

// --- Main Component ---
const Projects = () => {
  const [active, setActive] = React.useState<TabKey>("labs");
  const [query, setQuery] = React.useState("");
  const [focus, setFocus] = React.useState(false);

  // pick which project list to operate on based on tab
  const activeList = React.useMemo(() => {
    switch (active) {
      case "labs":
        return homeLabs;
      case "vuln":
        return vulnResearch;
      case "oss":
        return openSourceContrib;
      default:
        return homeLabs;
    }
  }, [active]);

  // tokenize the search bar input
  const tokens = React.useMemo(
    () => normalize(query).split(/\s+/).filter(Boolean),
    [query]
  );

  // filter ONLY within the active list
  const filtered = React.useMemo(() => {
    if (!tokens.length) return activeList;
    return activeList.filter((p) => {
      const hay = searchable(p);
      // require all tokens to appear somewhere in the project
      return tokens.every((t) => hay.includes(t));
    });
  }, [tokens, activeList]);

  return (
    <section id="projects" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--grid-line))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--grid-line))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">&gt;</span> Projects
          </h2>
          <p className="text-muted-foreground font-mono">
            Hands-on security work, analysis, and contributions
          </p>
        </div>

        {/* Tab buttons (like Skills.tsx) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {TAB_CATEGORIES.map((tab) => (
            <Button
              key={tab.key}
              variant={active === tab.key ? "default" : "outline"}
              className={`font-mono ${
                active === tab.key
                  ? ""
                  : "border-border hover:border-primary hover:text-primary"
              }`}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <div
            className={[
              "flex items-center gap-2 rounded border",
              focus
                ? "border-primary shadow-[0_0_16px_rgba(220,38,38,0.15)]"
                : "border-border",
              "bg-card px-3 py-2",
            ].join(" ")}
          >
            <SearchIcon className="w-4 h-4 text-muted-foreground" />
            <input
              id="project-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              placeholder="Search by keyword: e.g. phishing, Splunk, ATT&CK, DFIR, SQLi..."
              className="w-full bg-transparent outline-none font-mono text-sm text-foreground placeholder:text-muted-foreground"
              autoComplete="off"
              spellCheck={false}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary"
                aria-label="Clear search"
                title="Clear"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Results meta */}
          <div className="mt-2 flex items-center justify-between">
            <p className="font-mono text-xs text-muted-foreground">
              {filtered.length} result{filtered.length === 1 ? "" : "s"}
              {query ? (
                <>
                  {" "}
                  for <span className="text-foreground">“{query}”</span>
                </>
              ) : null}
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              Tip: search across <span className="text-foreground">title</span>,{" "}
              <span className="text-foreground">type</span>,{" "}
              <span className="text-foreground">description</span>,{" "}
              <span className="text-foreground">tags</span>, and{" "}
              <span className="text-foreground">impact</span>.
            </p>
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="max-w-3xl mx-auto bg-card border border-border p-8 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              {activeList.length === 0 ? (
                <>
                  No projects in this category yet.
                  {query ? (
                    <>
                      {" "}
                      (Also, nothing matched{" "}
                      <span className="text-foreground">“{query}”</span>.)
                    </>
                  ) : null}
                </>
              ) : (
                <>
                  No projects match{" "}
                  <span className="text-foreground">“{query}”</span>. Try a
                  different keyword.
                </>
              )}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {filtered.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="bg-card border border-border p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] group"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-mono text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-accent font-mono text-sm mb-3">
                      [{project.type}]
                    </p>
                  </div>

                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary border border-border text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-mono">
                      <span className="text-accent">Impact:</span>{" "}
                      <span className="text-foreground">{project.impact}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="font-mono text-muted-foreground mb-4">
            * Project details anonymized per NDA requirements
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
