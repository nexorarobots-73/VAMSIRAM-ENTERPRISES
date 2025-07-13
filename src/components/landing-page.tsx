"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { PitchSections } from '@/components/sections/pitch-sections';
import { PmpShowcase } from '@/components/sections/pmp-showcase';
import { InquirySection } from '@/components/sections/inquiry-section';
import { FounderVision } from '@/components/sections/founder-vision';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const PITCH_DATA = {
  title: 'What We Do',
  description: 'We are committed to pushing the boundaries of technology through relentless innovation, rigorous research, and a passion for excellence.',
  sections: [
    {
      id: 'custom-robotics',
      title: 'Custom Robotics Solutions',
      content: "We design and build bespoke robotic systems tailored to meet the specific needs of our clients, from concept to deployment.",
      keywords: 'robotics custom solutions'
    },
    {
      id: 'ai-ml-integration',
      title: 'AI and Machine Learning Integration',
      content: 'Our expertise in AI and ML allows us to imbue our robots with advanced capabilities, such as object recognition, predictive maintenance, and intelligent decision-making.',
      keywords: 'ai machine learning'
    },
    {
      id: 'autonomous-systems',
      title: 'Autonomous Systems',
      content: 'We develop fully autonomous robots that can navigate complex environments, perform tasks without human intervention, and adapt to changing conditions.',
      keywords: 'autonomous systems navigation'
    },
    {
      id: 'r-and-d',
      title: 'Research and Development',
      content: 'Our dedicated R&D team is constantly exploring new frontiers in robotics, ensuring that we remain at the cutting edge of the industry.',
      keywords: 'research development innovation'
    },
  ],
};


export function LandingPage() {
  const [highlightedSections, setHighlightedSections] = useState<string[]>([]);
  const [analysisSummary, setAnalysisSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const pitchSectionTitles = PITCH_DATA.sections.map(s => s.title);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <PitchSections highlightedSections={highlightedSections} />
        <PmpShowcase />
        <InquirySection 
          setHighlightedSections={setHighlightedSections}
          setAnalysisSummary={setAnalysisSummary}
          pitchSectionTitles={pitchSectionTitles}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
        {isLoading && (
          <div className="text-center pb-12">
            <div role="status" className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent">
              <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-2 text-muted-foreground">Analyzing your inquiry...</p>
          </div>
        )}
        {analysisSummary && (
          <section id="analysis-results" className="container mx-auto max-w-4xl pb-16">
            <Card className="bg-secondary border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">AI-Powered Insights</h3>
                <p className="text-muted-foreground mb-4">{analysisSummary}</p>
                <div className="flex flex-wrap gap-2">
                  {highlightedSections.map(section => (
                    <Badge key={section} variant="secondary" className="text-base py-1 px-3 bg-accent/10 border-accent/20 text-accent font-medium">{section}</Badge>
                  ))}
                </div>
                <Button variant="link" className="p-0 h-auto mt-4 text-accent" onClick={() => {
                  const firstHighlightedId = PITCH_DATA.sections.find(s => s.title === highlightedSections[0])?.id;
                  if (firstHighlightedId) {
                    document.getElementById(firstHighlightedId)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  Jump to relevant section
                </Button>
              </CardContent>
            </Card>
          </section>
        )}
        <FounderVision />
      </main>
      <Footer />
    </div>
  );
}
