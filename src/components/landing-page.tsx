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
  title: 'Pitch Sections',
  description: 'Our approach is multifaceted, addressing key areas to build a robust deep tech ecosystem.',
  sections: [
    {
      id: 'market-opportunity',
      title: 'Market Opportunity',
      content: "India's digital economy is projected to reach $1 trillion by 2025. We are positioned to capture a significant share by providing the critical AI-driven design infrastructure for emerging startups and established enterprises.",
      keywords: 'market economy growth'
    },
    {
      id: 'innovation-focus',
      title: 'Innovation Focus',
      content: 'We are at the nexus of AI and Design, creating a new paradigm of products that are not only intelligent but also intuitive and user-centric. This convergence is our core innovation.',
      keywords: 'innovation ai design'
    },
    {
      id: 'strategic-roadmap',
      title: 'Strategic Roadmap',
      content: 'Our roadmap includes a 3-phase plan: 1. Launch flagship product (PMP). 2. Expand platform capabilities. 3. Foster a developer ecosystem. Each phase is designed for sustainable growth.',
      keywords: 'strategy roadmap plan'
    },
    {
      id: 'value-proposition',
      title: 'VAMSIRAM’s Value Proposition',
      content: 'We offer a unique combination of speed, scalability, and design excellence. Our AI-first platforms reduce development time by up to 40%, giving our clients a competitive edge.',
      keywords: 'value proposition competitive'
    },
  ],
};


export function LandingPage() {
  const [highlightedSections, setHighlightedSections] = useState<string[]>([]);
  const [analysisSummary, setAnalysisSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const pitchSectionTitles = PITCH_DATA.sections.map(s => s.title);

  return (
    <div className="flex min-h-screen flex-col">
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
            <Card className="bg-primary/5 border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">AI-Powered Insights</h3>
                <p className="text-muted-foreground mb-4">{analysisSummary}</p>
                <div className="flex flex-wrap gap-2">
                  {highlightedSections.map(section => (
                    <Badge key={section} variant="secondary" className="text-base py-1 px-3 bg-primary/10 border-primary/20 text-primary-dark font-medium">{section}</Badge>
                  ))}
                </div>
                <Button variant="link" className="p-0 h-auto mt-4" onClick={() => {
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
