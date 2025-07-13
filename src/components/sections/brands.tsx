import { Card, CardContent } from "@/components/ui/card";
import { Home, Bot } from "lucide-react";

export function Brands() {
  return (
    <section id="brands" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Home className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-headline text-primary">Post My Property</h3>
              <p className="text-muted-foreground text-lg">
                Search. List. Sell. Smarter.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center gap-4">
                <div className="p-4 bg-accent/10 rounded-full">
                    <Bot className="w-10 h-10 text-accent" />
                </div>
              <h3 className="text-2xl font-bold font-headline text-accent">NEXORA ROBOTICS</h3>
              <p className="text-muted-foreground text-lg">
                Automation with Precision, Intelligence with Purpose.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
