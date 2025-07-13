import { Card, CardContent } from "@/components/ui/card";

export function FounderVision() {
  return (
    <section id="vision" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            To pioneer advancements in robotics and artificial intelligence to create a smarter, more efficient, and sustainable world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-lg bg-card border-border">
            <CardContent className="p-8">
              <blockquote className="text-lg font-medium text-foreground italic border-l-4 border-accent pl-4">
                “We are committed to pushing the boundaries of technology through relentless innovation, rigorous research, and a passion for excellence.”
              </blockquote>
              <p className="mt-6 font-semibold text-primary">
                Vamsee Krishna Kari
              </p>
              <p className="text-sm text-muted-foreground">
                Founder, CEO & CTO
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg bg-card border-border">
            <CardContent className="p-8">
               <blockquote className="text-lg font-medium text-foreground italic border-l-4 border-accent pl-4">
                “Our focus is on building intelligent systems that not only drive industrial progress but also contribute positively to society and the environment.”
              </blockquote>
              <p className="mt-6 font-semibold text-primary">
                Krishram K
              </p>
              <p className="text-sm text-muted-foreground">
                Co-Founder & COO
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
