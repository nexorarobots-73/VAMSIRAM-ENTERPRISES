import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export function PmpShowcase() {
  const features = [
    "AI-Powered Property Matching",
    "Intuitive Design for All Users",
    "Scalable Real Estate Platform",
  ];

  return (
    <section id="pmp" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Flagship Platform: Post My Property
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our first proof-of-concept, "Post My Property" (PMP), revolutionizes the real estate market by integrating our core AI + Design philosophy. It's more than a platform; it's the future of property technology.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-base text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#">Request PMP Demo</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x450.png"
                  alt="Post My Property Platform Showcase"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  data-ai-hint="real estate dashboard"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
