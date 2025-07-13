import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export function NexoraRobotics() {
  return (
    <section id="nexora" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-lg bg-gradient-to-r from-primary to-accent p-1 rounded-xl">
          <CardContent className="bg-background rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-primary/10 p-4 rounded-full">
                <Rocket className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl font-headline text-foreground">
                NEXORA ROBOTICS
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Automation with Precision, Intelligence with Purpose. Explore our innovations in real-time automation, robotics, and smart IoT platforms.
              </p>
            </div>
            <Button asChild size="lg" className="flex-shrink-0">
              <Link href="https://nexora-robotics-org.netlify.app/" target="_blank" rel="noopener noreferrer">
                Visit Nexora Robotics
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
