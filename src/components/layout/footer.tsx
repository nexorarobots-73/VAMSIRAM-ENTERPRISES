import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-secondary/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 px-8 md:flex-row md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block">VAMSIRAM AI</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} VAMSIRAM ENTERPRISES PRIVATE LIMITED. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <a href="https://nexora-robotics-org.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                Explore Nexora Robotics
            </a>
        </div>
      </div>
    </footer>
  );
}
