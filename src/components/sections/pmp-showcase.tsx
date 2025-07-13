
"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PmpShowcase() {
  const features = [
    "AI-Powered Property Valuation",
    "Automated Legal Document Analysis",
    "Seamless Digital Onboarding for Agents",
    "Multilingual Support for Tier 2/3 Cities"
  ];

  return (
    <section id="product" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
              Post My Property (PMP)
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our flagship platform, Post My Property, revolutionizes the real estate sector with AI-driven insights, streamlined workflows, and unparalleled access for the Indian market.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-base text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-4">
               <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                 <Link href="#">View Live Demo</Link>
               </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden shadow-lg shadow-accent/10 transform transition-transform duration-500 hover:scale-105 border border-border">
              <CardContent className="p-0">
                <Image
                  id="showcaseImage"
                  src="/images/PMP_app_showcase.png"
                  alt="Post My Property Platform Showcase"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain"
                  data-ai-hint="real estate platform"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
