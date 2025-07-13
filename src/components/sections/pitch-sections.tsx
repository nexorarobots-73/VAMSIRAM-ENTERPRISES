import { PITCH_DATA } from '@/components/landing-page';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Cog, BrainCircuit, Bot, FlaskConical } from 'lucide-react';
import React from 'react';

const ICONS: { [key: string]: React.ElementType } = {
  'Custom Robotics Solutions': Cog,
  'AI and Machine Learning Integration': BrainCircuit,
  'Autonomous Systems': Bot,
  'Research and Development': FlaskConical,
};

type PitchSectionsProps = {
  highlightedSections: string[];
}

export function PitchSections({ highlightedSections }: PitchSectionsProps) {
  return (
    <section id="solutions" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">{PITCH_DATA.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{PITCH_DATA.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {PITCH_DATA.sections.map((section) => {
            const Icon = ICONS[section.title];
            const isHighlighted = highlightedSections.includes(section.title);
            return (
              <Card 
                key={section.id} 
                id={section.id}
                className={cn(
                  "flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10 bg-card border-border",
                  isHighlighted ? "border-accent ring-2 ring-accent shadow-2xl shadow-accent/20" : "border-border"
                )}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    {Icon && <Icon className="w-6 h-6 text-accent" />}
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
