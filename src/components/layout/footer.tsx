import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/nexora-robotics/" },
  ];

  return (
    <footer className="border-t border-border/20 bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Nexora Robotics</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Nexora Robotics. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-x-4">
             <a href="mailto:info@nexorarobotics.com" className="text-sm text-muted-foreground hover:text-foreground">
                info@nexorarobotics.com
            </a>
            <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">{link.name}</span>
                </Link>
            ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
