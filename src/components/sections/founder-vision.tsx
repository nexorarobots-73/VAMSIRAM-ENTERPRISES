import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function FounderVision() {
  return (
    <section id="founder" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Founder's Vision
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A message from our founder on the future we are building together.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-primary">
                <AvatarImage src="https://placehold.co/128x128.png" alt="Founder" data-ai-hint="man portrait" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <blockquote className="text-xl font-medium text-foreground italic">
                  “We are not just building software; we are architecting the future of India's technological sovereignty. Our mission is to empower a million creators and businesses with the tools to innovate and build for a better India.”
                </blockquote>
                <p className="mt-4 font-semibold text-primary">
                  Vamsiram, Founder & CEO
                </p>
                <p className="text-sm text-muted-foreground">
                  VAMSIRAM ENTERPRISES PVT LTD
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
