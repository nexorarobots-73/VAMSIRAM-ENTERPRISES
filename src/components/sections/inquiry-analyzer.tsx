
'use client';

import * as React from 'react';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { analyzeInquiry } from '@/ai/flows/inquiry-analyzer';
import { storage } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Loader2, Upload, X } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  inquiry: z.string().min(10, {
    message: 'Please provide some details about your inquiry.',
  }),
  file: z.instanceof(File).optional(),
});

type InquiryFormValues = z.infer<typeof formSchema>;

type InquiryAnalyzerProps = {
  setHighlightedSections: (sections: string[]) => void;
};

export function InquiryAnalyzer({ setHighlightedSections }: InquiryAnalyzerProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inquiry: '',
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue('file', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    form.setValue('file', undefined);
    setPreviewImage(null);
    // Reset file input
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };


  const onSubmit = async (values: InquiryFormValues) => {
    setIsSubmitting(true);
    setAnalysisResult(null);
    setHighlightedSections([]);
    let photoUrl: string | undefined = undefined;

    try {
      if (values.file) {
        const storageRef = ref(storage, `inquiries/${Date.now()}_${values.file.name}`);
        const uploadResult = await uploadBytes(storageRef, values.file);
        photoUrl = await getDownloadURL(uploadResult.ref);
      }

      const result = await analyzeInquiry({
        inquiry: values.inquiry,
        photoUrl,
      });

      setHighlightedSections(result.highlightedSections);
      setAnalysisResult(result.response);
      form.reset();
      removeImage();

    } catch (error) {
      console.error('Error analyzing inquiry:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with our AI analysis. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="analyzer" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-lg shadow-accent/10 border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">AI Powered Insights</CardTitle>
            <CardDescription className="mt-4 text-lg text-muted-foreground">
              Have a specific question or use case? Let our AI analyze your inquiry and highlight the most relevant solutions we offer.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="inquiry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Inquiry</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'I'm interested in AI solutions for real estate property valuation in Tier 2 cities.'"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="file"
                  render={() => (
                     <FormItem>
                      <FormLabel>Attach an Image (Optional)</FormLabel>
                      <FormControl>
                        <div className="relative">
                           <Button asChild variant="outline" className="w-full">
                              <label htmlFor="fileInput" className="cursor-pointer flex items-center justify-center gap-2">
                                <Upload className="h-4 w-4" />
                                <span>{previewImage ? "Change Image" : "Upload Image"}</span>
                              </label>
                           </Button>
                          <Input id="fileInput" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {previewImage && (
                  <div className="relative w-full max-w-xs mx-auto">
                    <Image
                      id="previewImage"
                      src={previewImage}
                      alt="Uploaded image preview"
                      width={200}
                      height={200}
                      className="rounded-md object-contain w-full h-auto"
                    />
                     <Button variant="destructive" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={removeImage}>
                        <X className="h-4 w-4" />
                     </Button>
                  </div>
                )}


                <div className="text-center">
                  <Button type="submit" size="lg" disabled={isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90">
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Analyze My Inquiry
                  </Button>
                </div>
              </form>
            </Form>

            {isSubmitting && (
                <div className="text-center mt-6">
                    <p className="text-muted-foreground animate-pulse">Our AI is analyzing your request... this may take a moment.</p>
                </div>
            )}

            {analysisResult && (
              <div className="mt-8 p-6 rounded-lg bg-secondary border border-border">
                <h3 className="text-xl font-semibold text-primary mb-2">Analysis Complete:</h3>
                <p className="text-base text-muted-foreground whitespace-pre-wrap">{analysisResult}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
