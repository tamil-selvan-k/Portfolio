import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tamil-selvan-k"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tamilselvan2007"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="icon-link"
              aria-label="Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground text-sm">
            Always learning. Always building.
          </p>
          
          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Tamil Selvan K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;