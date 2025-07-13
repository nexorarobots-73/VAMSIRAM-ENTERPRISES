
"use server";

import { z } from "zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firestore";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  interest: z.enum(["Post My Property", "Nexora Robotics", "Both"]),
});

export async function addToWaitlist(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error("Invalid form data.");
  }

  try {
    await addDoc(collection(db, "waitlist"), {
      ...validatedFields.data,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error adding document: ", error);
    throw new Error("Could not add to waitlist.");
  }
}
