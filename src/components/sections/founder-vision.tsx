import { Card, CardContent } from "@/components/ui/card";

export function FounderVision() {
  return (
    <section id="vision" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Card className="shadow-lg bg-card border-border/50 shadow-accent/10">
            <CardContent className="p-8 md:p-12">
              <blockquote className="text-xl font-medium text-foreground italic border-l-4 border-accent pl-6 md:text-2xl">
                “We’re building Bharat’s Deep Tech AI backbone.”
              </blockquote>
              <p className="mt-8 font-semibold text-lg text-primary">
                Vamsee Krishna Kari
              </p>
              <p className="text-sm text-muted-foreground">
                Founder & CEO, VAMSIRAM ENTERPRISES
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
