import { PITCH_DATA } from '@/components/landing-page';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BrainCircuit, Gem, Milestone, TrendingUp } from 'lucide-react';
import React from 'react';

const ICONS: { [key: string]: React.ElementType } = {
  'Market Opportunity': TrendingUp,
  'Innovation Focus': BrainCircuit,
  'Strategic Roadmap': Milestone,
  'VAMSIRAM’s Value Proposition': Gem,
};

type PitchSectionsProps = {
  highlightedSections: string[];
}

export function PitchSections({ highlightedSections }: PitchSectionsProps) {
  return (
    <section id="pitch" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">{PITCH_DATA.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{PITCH_DATA.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {PITCH_DATA.sections.map((section) => {
            const Icon = ICONS[section.title];
            const isHighlighted = highlightedSections.includes(section.title);
            return (
              <Card 
                key={section.id} 
                id={section.id}
                className={cn(
                  "flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl",
                  isHighlighted ? "border-accent ring-2 ring-accent shadow-2xl" : "border-border"
                )}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/80">
                    {section.content}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
