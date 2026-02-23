import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border px-4">
      <div className="container mx-auto max-w-6xl py-12 space-y-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <Link to="/">
              <img
                src="devzennn.png"
                alt="DevZen"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-muted-foreground max-w-md">
              Your trusted partner for SAP solutions. We specialize in CPI, AI,
              BTP, and enterprise integrations that drive digital transformation.
            </p>
          </div>

          {/* Policy Links */}
          <div className="flex items-center gap-6">
            <a className="text-xs text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a className="text-xs text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a className="text-xs text-muted-foreground hover:text-foreground">
              Security
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevZen Software Solutions Pvt Ltd.
            All rights reserved.
          </span>

          {/* Social Redirect Icons */}
          <div className="flex items-center gap-4">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/devzensoftwaresolutions/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DevZen LinkedIn"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/software66797"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DevZen Twitter"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* Mail */}
            <a
              href="mailto:info@devzenenterprises.com"
              aria-label="Email DevZen"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

          </div>
        </div>

      </div>
    </footer>
  );
};
