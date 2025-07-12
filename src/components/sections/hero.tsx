import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="container mx-auto px-4 py-20 text-center md:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-background dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl font-headline">
          Empowering India's
          <span className="block bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Deep Tech Future</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          We are building the backbone for India's next technological leap by pioneering AI-first design principles for scalable and intelligent enterprise solutions.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#pitch">Explore The Pitch</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#inquiry">Get AI Insights</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
