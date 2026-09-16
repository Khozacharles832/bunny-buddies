import { z } from "zod";

export const contactInterests = [
  "Play School",
  "Aftercare",
  "Reading Skills Programme",
  "General Enquiry",
] as const;

export const preferredContactMethods = ["Phone", "Email", "WhatsApp"] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Parent / guardian name is required."),
  email: z.string().trim().email("Please provide a valid email address."),
  phone: z.string().trim().min(10, "Please provide a valid phone number."),
  childName: z.string().trim().min(2, "Child's name is required."),
  childAge: z.string().trim().min(1, "Child's age is required."),
  interestedIn: z.union([
    z.literal("Play School"),
    z.literal("Aftercare"),
    z.literal("Reading Skills Programme"),
    z.literal("General Enquiry"),
  ]).refine((value) => Boolean(value), { message: "Please choose an enquiry type." }),
  preferredContactMethod: z.union([z.literal("Phone"), z.literal("Email"), z.literal("WhatsApp")]).optional(),
  message: z.string().trim().max(1000, "Message is too long.").optional().or(z.literal("")),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
