const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-accent">$</span> whoami
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            Red Team Specialist | Ethical Hacker | Security Researcher
          </div>
          <div className="font-mono text-xs text-muted-foreground pt-4 border-t border-border">
            © {new Date().getFullYear()} Red Team Portfolio. Built with React & TypeScript.
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">[WARNING]</span> This portfolio contains descriptions of security testing performed within authorized scope only.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;