import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ComingSoon() {
  return (
    <section id="coming-soon" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline bg-gradient-to-r from-primary via-accent to-purple-400 bg-clip-text text-transparent animate-pulse">
          Full Product Launch Coming Soon
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Our team is hard at work on the next generation of AI solutions. Be the first to know when we launch.
        </p>
        <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/join-waitlist">Join Waitlist</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
