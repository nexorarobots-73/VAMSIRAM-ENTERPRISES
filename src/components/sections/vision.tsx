import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Vision() {
  return (
    <section id="vision" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
                Our Vision & Mission
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
             “We are building India’s most intelligent property tech ecosystem—secure, transparent, and human-first—powered by AI/ML and scalable IoT platforms.”
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-lg border-border/50 text-center">
                <CardHeader>
                    <CardTitle className="text-xl">Founder’s Vision</CardTitle>
                </CardHeader>
                <CardContent>
                    <blockquote className="text-base text-muted-foreground italic">
                    “To democratize property access and real estate data with cutting-edge automation, reshaping how India discovers and manages property.”
                    </blockquote>
                    <p className="mt-4 font-semibold text-sm text-foreground">
                        Vamsee Krishna Kari, Founder
                    </p>
                </CardContent>
            </Card>
            <Card className="shadow-lg border-border/50 text-center">
                <CardHeader>
                    <CardTitle className="text-xl">Co-Founder’s Vision</CardTitle>
                </CardHeader>
                <CardContent>
                    <blockquote className="text-base text-muted-foreground italic">
                    “To blend real estate and AI through sustainable, accessible, and intuitive tools for every Indian household.”
                    </blockquote>
                     <p className="mt-4 font-semibold text-sm text-foreground">
                        Co-Founder
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
