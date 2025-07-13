import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-24 text-center md:py-32 lg:py-40">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl font-headline">
          Crafting the Future of PropTech 
          <span className="block bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">with Intelligence and Trust</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
           VAMSIRAM AI is building India’s most intelligent property tech ecosystem—secure, transparent, and human-first.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#pmp-showcase">View PMP App Screens</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/join-waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
