
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { CheckCircle, Upload, Loader2 } from "lucide-react";

import { uploadFile } from "@/ai/flows/upload-file-flow";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

export function PmpShowcase() {
  const [imageSrc, setImageSrc] = useState("/images/PMP%20app.png");
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const features = [
    "AI-Powered Property Valuation",
    "Automated Legal Document Analysis",
    "Seamless Digital Onboarding for Agents",
    "Multilingual Support for Tier 2/3 Cities"
  ];

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      toast({
        variant: "destructive",
        title: "Invalid File Type",
        description: "Please select a JPG, PNG, or GIF image.",
      });
      return;
    }

    setIsUploading(true);
    
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64Data = reader.result as string;
        const result = await uploadFile({
          fileName: file.name,
          fileContent: base64Data,
        });

        if (result.downloadURL) {
          setImageSrc(result.downloadURL);
          toast({
            title: "Upload Complete",
            description: "Your image has been successfully uploaded.",
          });
        } else {
          throw new Error("Upload failed to return a URL.");
        }
      };
      reader.onerror = (error) => {
        throw error;
      };
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: "There was a problem uploading your image. Please try again.",
      });
    } finally {
      setIsUploading(false);
    }
  };

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
               <Button asChild variant="outline" disabled={isUploading}>
                  <label htmlFor="showcase-upload" className="cursor-pointer">
                    {isUploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                    {isUploading ? "Uploading..." : "Upload Image"}
                  </label>
               </Button>
               <Input id="showcase-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/jpeg,image/png,image/gif" disabled={isUploading}/>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden shadow-lg shadow-accent/10 transform transition-transform duration-500 hover:scale-105 border border-border">
              <CardContent className="p-0">
                <Image
                  id="showcaseImage"
                  src={imageSrc}
                  alt="Post My Property Platform Showcase"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  data-ai-hint="real estate platform"
                  unoptimized={imageSrc.startsWith('data:')}
                />
              </CardContent>
            </Card>
            {isUploading && (
              <div className="mt-4 text-center">
                 <p className="text-sm text-muted-foreground animate-pulse">Uploading your image, please wait...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
