// src/ai/flows/inquiry-analyzer.ts
'use server';

/**
 * @fileOverview An AI agent that analyzes user inquiries and prioritizes parts of the pitch.
 *
 * - analyzeInquiry - A function that handles the analysis of user inquiries and returns prioritized sections of the pitch.
 * - AnalyzeInquiryInput - The input type for the analyzeInquiry function.
 * - AnalyzeInquiryOutput - The return type for the analyzeInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeInquiryInputSchema = z.object({
  inquiry: z.string().describe('The inquiry submitted by the website visitor.'),
  pitchSections: z.array(z.string()).describe('The key sections of the pitch deck.'),
});
export type AnalyzeInquiryInput = z.infer<typeof AnalyzeInquiryInputSchema>;

const AnalyzeInquiryOutputSchema = z.object({
  prioritizedSections: z
    .array(z.string())
    .describe(
      'The key sections of the pitch deck, prioritized based on the user inquiry.'
    ),
  summary: z.string().describe('A brief summary of why these sections were prioritized'),
});
export type AnalyzeInquiryOutput = z.infer<typeof AnalyzeInquiryOutputSchema>;

export async function analyzeInquiry(input: AnalyzeInquiryInput): Promise<AnalyzeInquiryOutput> {
  return analyzeInquiryFlow(input);
}

const analyzeInquiryPrompt = ai.definePrompt({
  name: 'analyzeInquiryPrompt',
  input: {schema: AnalyzeInquiryInputSchema},
  output: {schema: AnalyzeInquiryOutputSchema},
  prompt: `You are an AI assistant designed to analyze user inquiries and prioritize relevant sections from a pitch deck.

  Given the following user inquiry:
  {{inquiry}}

  And the following sections from the pitch deck:
  {{#each pitchSections}}- {{{this}}}\n{{/each}}

  Prioritize the pitch sections that are most relevant to the user's inquiry. Return a list of the prioritized sections, and a summary of why these sections were chosen. Be concise.
  Ensure that you return the sections verbatim from the input; do not modify the content.
  Output should be valid JSON that conforms to the following schema:
  ${JSON.stringify(AnalyzeInquiryOutputSchema.describe, null, 2)}`,
});

const analyzeInquiryFlow = ai.defineFlow(
  {
    name: 'analyzeInquiryFlow',
    inputSchema: AnalyzeInquiryInputSchema,
    outputSchema: AnalyzeInquiryOutputSchema,
  },
  async input => {
    const {output} = await analyzeInquiryPrompt(input);
    return output!;
  }
);
