import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(hsl(var(--accent))_1px,transparent_1px)] dark:bg-[radial-gradient(hsla(var(--accent),0.3)_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background to-transparent"></div>

      <div className="container mx-auto px-4 py-24 text-center md:py-32 lg:py-40">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl font-headline">
          AI-Powered by Design.
          <span className="block bg-gradient-to-r from-blue-400 via-accent to-blue-300 bg-clip-text text-transparent">Built for the Next Billion.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          VAMSIRAM AI is building India's deep tech backbone, delivering sovereign AI solutions for real estate, legal tech, and defense.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#product">Explore Our Platform</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
