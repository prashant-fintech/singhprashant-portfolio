import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/singhprashant",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/prashant-singh-dev",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/singhprashant",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:hello@singhprashant.dev",
    icon: Mail,
  },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/about" },
    ],
  },
  {
    title: "Content",
    links: [
      { name: "RSS Feed", href: "/rss.xml" },
      { name: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Prashant Singh</h3>
              <p className="text-sm text-muted-foreground">
                Full-stack developer passionate about building scalable applications and modern web technologies.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter/CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get notified about new blog posts and project updates.
            </p>
            <Link
              href="/rss.xml"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Subscribe to RSS
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border/40 pt-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prashant Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}