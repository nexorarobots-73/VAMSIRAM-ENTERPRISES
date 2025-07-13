
'use server';
/**
 * @fileOverview A flow for uploading files to Firebase Storage.
 *
 * - uploadFile - A function that handles the file upload process.
 * - UploadFileInput - The input type for the uploadFile function.
 * - UploadFileOutput - The return type for the uploadFile function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { storage } from '@/lib/firebase';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

const UploadFileInputSchema = z.object({
  fileName: z.string().describe('The name of the file to upload.'),
  fileContent: z.string().describe("The Base64-encoded content of the file as a data URI. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
type UploadFileInput = z.infer<typeof UploadFileInputSchema>;

const UploadFileOutputSchema = z.object({
  downloadURL: z.string().describe('The public download URL of the uploaded file.'),
});
type UploadFileOutput = z.infer<typeof UploadFileOutputSchema>;

export async function uploadFile(input: UploadFileInput): Promise<UploadFileOutput> {
  return uploadFileFlow(input);
}

const uploadFileFlow = ai.defineFlow(
  {
    name: 'uploadFileFlow',
    inputSchema: UploadFileInputSchema,
    outputSchema: UploadFileOutputSchema,
  },
  async ({ fileName, fileContent }) => {
    const storageRef = ref(storage, `showcase_uploads/${Date.now()}_${fileName}`);
    
    // Upload the file from the data URI.
    // The 'data_url' format includes the 'data:mime/type;base64,' prefix.
    const snapshot = await uploadString(storageRef, fileContent, 'data_url');
    
    // Get the public download URL.
    const downloadURL = await getDownloadURL(snapshot.ref);

    return { downloadURL };
  }
);
