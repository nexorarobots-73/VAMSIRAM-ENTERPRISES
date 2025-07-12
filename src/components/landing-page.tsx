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
  title: 'Our Solutions',
  description: 'We are building a diverse portfolio of AI-powered solutions tailored for India\'s unique challenges and opportunities.',
  sections: [
    {
      id: 'real-estate-ai',
      title: 'Post My Property (Real Estate AI)',
      content: "AI-driven platform to streamline property listings, valuation, and transactions for India's booming real estate market, focusing on Tier 2/3 cities.",
      keywords: 'real estate property ai'
    },
    {
      id: 'defense-healthcare',
      title: 'Sonic Radar (Defense/Healthcare)',
      content: 'Advanced sensor fusion and AI analysis for defense surveillance and non-invasive healthcare diagnostics. A high-impact, dual-use technology.',
      keywords: 'radar defense healthcare'
    },
    {
      id: 'govtech',
      title: 'Civic Chatbots (GovTech)',
      content: 'Multilingual chatbots to improve citizen-government interaction, providing information and services efficiently and transparently.',
      keywords: 'govtech chatbot citizen'
    },
    {
      id: 'ai-plugins',
      title: 'AI Plugins (OCR, HR, Legal)',
      content: 'A suite of versatile AI plugins for enterprises, including high-accuracy OCR, HR process automation, and legal document analysis.',
      keywords: 'ai plugins enterprise'
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
