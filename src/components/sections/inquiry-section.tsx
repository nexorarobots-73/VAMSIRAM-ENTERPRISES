"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { handleInquiry } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Lightbulb } from "lucide-react";

const formSchema = z.object({
  inquiry: z.string().min(10, {
    message: "Please provide a more detailed inquiry.",
  }).max(500, {
    message: "Inquiry must not be longer than 500 characters."
  }),
});

type InquirySectionProps = {
  pitchSectionTitles: string[];
  setHighlightedSections: (sections: string[]) => void;
  setAnalysisSummary: (summary: string | null) => void;
  setIsLoading: (loading: boolean) => void;
  isLoading: boolean;
};

export function InquirySection({
  pitchSectionTitles,
  setHighlightedSections,
  setAnalysisSummary,
  setIsLoading,
  isLoading,
}: InquirySectionProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inquiry: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnalysisSummary(null);
    setHighlightedSections([]);
    
    const result = await handleInquiry({
      inquiry: values.inquiry,
      pitchSections: pitchSectionTitles,
    });

    setIsLoading(false);

    if (result.success && result.data) {
      setHighlightedSections(result.data.prioritizedSections);
      setAnalysisSummary(result.data.summary);
      toast({
        title: "Analysis Complete",
        description: "We've highlighted the most relevant sections for you.",
      });
      document.getElementById('analysis-results')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: result.error || "An unknown error occurred. Please try again.",
      });
    }
  }

  return (
    <section id="inquiry" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
            <div className="inline-block bg-accent/10 p-3 rounded-full mb-4">
                <Lightbulb className="w-8 h-8 text-accent-dark"/>
            </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Get AI-Powered Insights</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question? Enter your inquiry below, and our AI will analyze our pitch to highlight the most relevant sections for you.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-8">
            <FormField
              control={form.control}
              name="inquiry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Your Inquiry</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'What is your competitive advantage in the AI space?' or 'Tell me about your long-term growth strategy.'"
                      className="resize-none min-h-[120px] text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center">
              <Button type="submit" size="lg" disabled={isLoading} className="bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? "Analyzing..." : "Analyze My Inquiry"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
