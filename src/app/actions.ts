"use server";

import { analyzeInquiry, type AnalyzeInquiryInput, type AnalyzeInquiryOutput } from "@/ai/flows/inquiry-analyzer";

type ActionResult = {
  success: boolean;
  data?: AnalyzeInquiryOutput;
  error?: string;
}

export async function handleInquiry(input: AnalyzeInquiryInput): Promise<ActionResult> {
  try {
    const result = await analyzeInquiry(input);
    if (!result || !result.prioritizedSections) {
        throw new Error("AI analysis returned an invalid format.");
    }
    return { success: true, data: result };
  } catch (error) {
    console.error("Error analyzing inquiry:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred during analysis.";
    return { success: false, error: errorMessage };
  }
}
