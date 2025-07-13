'use server';
/**
 * @fileOverview An inquiry analysis AI agent.
 *
 * - analyzeInquiry - A function that handles the inquiry analysis process.
 * - AnalyzeInquiryInput - The input type for the analyzeInquiry function.
 * - AnalyzeInquiryOutput - The return type for the analyzeInquiry function.
 */

import { PITCH_DATA } from '@/lib/pitch-data';
import { ai } from '@/ai/genkit';
import { z } from 'zod';

const AnalyzeInquiryInputSchema = z.object({
  inquiry: z.string().describe('The user\'s inquiry text.'),
});
export type AnalyzeInquiryInput = z.infer<typeof AnalyzeInquiryInputSchema>;

const AnalyzeInquiryOutputSchema = z.object({
  highlightedSections: z.array(z.string()).describe('A list of pitch section titles that are most relevant to the user\'s inquiry.'),
  response: z.string().describe('A helpful response to the user\'s inquiry.'),
});
export type AnalyzeInquiryOutput = z.infer<typeof AnalyzeInquiryOutputSchema>;

export async function analyzeInquiry(input: AnalyzeInquiryInput): Promise<AnalyzeInquiryOutput> {
  return analyzeInquiryFlow(input);
}

const sectionsPrompt = PITCH_DATA.sections.map(s => `- ${s.title}: ${s.content} (Keywords: ${s.keywords})`).join('\n');

const prompt = ai.definePrompt({
  name: 'analyzeInquiryPrompt',
  input: { schema: AnalyzeInquiryInputSchema },
  output: { schema: AnalyzeInquiryOutputSchema },
  prompt: `You are an expert at VAMSIRAM AI. Your task is to analyze a user's inquiry and determine which parts of the company pitch are most relevant to them.

Based on the user's inquiry, identify the most relevant sections from the list below.

Here are the available sections of the pitch deck:
${sectionsPrompt}

User Inquiry: "{{inquiry}}"

Your response should be helpful and guide the user towards the relevant sections. Also, return the titles of the most relevant sections in the 'highlightedSections' field.
`,
});

const analyzeInquiryFlow = ai.defineFlow(
  {
    name: 'analyzeInquiryFlow',
    inputSchema: AnalyzeInquiryInputSchema,
    outputSchema: AnalyzeInquiryOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
