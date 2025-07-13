import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function ComingSoon() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
          Something Big is Coming
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Our team is hard at work on the next generation of AI solutions. Stay tuned for our official launch.
        </p>
        <div className="mt-10 max-w-3xl mx-auto">
          <Card className="overflow-hidden shadow-lg shadow-accent/10 transform transition-transform duration-500 hover:scale-105 border border-border">
            <CardContent className="p-0">
              <Image
                src="https://placehold.co/1200x600.png"
                alt="Coming Soon"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint="rocket launch"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
