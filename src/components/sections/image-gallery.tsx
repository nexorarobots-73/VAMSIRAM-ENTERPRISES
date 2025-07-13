"use client";

import { useState, useEffect } from 'react';
import { storage } from '@/lib/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

interface ImageItem {
  url: string;
  name: string;
}

export function ImageGallery() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const storageRef = ref(storage, 'image_cards/');
        const result = await listAll(storageRef);
        
        const imagePromises = result.items.map(async (imageRef) => {
          const url = await getDownloadURL(imageRef);
          return { url, name: imageRef.name };
        });

        const fetchedImages = await Promise.all(imagePromises);
        setImages(fetchedImages);
      } catch (err) {
        console.error("Error fetching images from Firebase Storage:", err);
        setError("Could not load images. Please make sure they are uploaded to the 'image_cards/' folder in Firebase Storage.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
            Image Gallery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our projects and concepts.
          </p>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex flex-col space-y-3">
                 <Skeleton className="h-[250px] w-full rounded-xl" />
                 <div className="space-y-2">
                   <Skeleton className="h-4 w-[200px]" />
                 </div>
              </div>
            ))}
          </div>
        )}

        {error && <p className="text-center text-destructive">{error}</p>}

        {!isLoading && !error && images.length === 0 && (
            <p className="text-center text-muted-foreground">No images found in the gallery. Upload images to the 'image_cards/' folder in Firebase Storage to see them here.</p>
        )}

        {!isLoading && !error && images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <Card key={image.name} className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10">
                <CardContent className="p-0">
                  <Image
                    src={image.url}
                    alt={image.name}
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full h-auto object-cover"
                  />
                </CardContent>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium text-foreground truncate">{image.name}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
