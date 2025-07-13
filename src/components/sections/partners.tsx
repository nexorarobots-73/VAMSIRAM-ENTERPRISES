import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function Partners() {
  return (
    <section id="partners" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
            Our Partners
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We collaborate with leading organizations to innovate and scale our solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 flex flex-col items-center justify-center text-center bg-secondary border-border/50 hover:border-accent transition-colors">
            <h3 className="text-xl font-semibold text-primary mb-2">Incubation Partner</h3>
            <p className="text-muted-foreground mb-4">Supported by a premier incubation center.</p>
            <Link href="https://emerge.vamsiram.ai" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
              EMERGE
            </Link>
          </Card>
           <Card className="p-8 flex flex-col items-center justify-center text-center bg-secondary border-border/50 hover:border-accent transition-colors">
            <h3 className="text-xl font-semibold text-primary mb-2">Innovation Partner</h3>
            <p className="text-muted-foreground mb-4">Driving innovation with a key strategic partner.</p>
            <Link href="https://emerge.vamsiram.ai" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
               EMERGE
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
