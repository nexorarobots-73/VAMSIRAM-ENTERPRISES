import { Card, CardContent } from "@/components/ui/card";

export function FounderVision() {
  return (
    <section id="vision" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
            Our Vision
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Driven by a commitment to India's technological sovereignty and inclusive growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-lg bg-card border-border">
            <CardContent className="p-8">
              <blockquote className="text-lg font-medium text-foreground italic border-l-4 border-accent pl-4">
                “As Founder of Vamsiram, I envision building India-first, multilingual, sovereign AI infrastructure to serve real Bharat—from Tier-2 real estate to defense AI. I believe in ethical intelligence, culturally rooted design, and scalable impact.”
              </blockquote>
              <p className="mt-6 font-semibold text-primary">
                Vamsee Krishna Kari
              </p>
              <p className="text-sm text-muted-foreground">
                Founder & CEO, VAMSIRAM ENTERPRISES PVT LTD
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg bg-card border-border">
            <CardContent className="p-8">
               <blockquote className="text-lg font-medium text-foreground italic border-l-4 border-accent pl-4">
                “My mission is to transform ideas into execution at scale—bridging deep tech with human-centric impact across GovTech, LegalTech, and Smart Cities. At Vamsiram, we engineer trust through design, performance, and social alignment.”
              </blockquote>
              <p className="mt-6 font-semibold text-primary">
                [Future Co-Founder]
              </p>
              <p className="text-sm text-muted-foreground">
                COO / CTO
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
