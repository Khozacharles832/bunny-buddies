"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactInterests, preferredContactMethods, type EnquiryFormValues, enquirySchema } from "@/lib/validations";

const defaultValues: EnquiryFormValues = {
  name: "",
  email: "",
  phone: "",
  childName: "",
  childAge: "",
  interestedIn: "Play School",
  preferredContactMethod: "Phone",
  message: "",
};

export function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues,
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    setSubmitState("idle");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as { success?: boolean; error?: string; message?: string };

      if (!response.ok || !payload.success) {
        setSubmitState("error");
        setServerMessage(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitState("success");
      setServerMessage(payload.message ?? "Thanks! We have received your enquiry.");
      reset(defaultValues);
    } catch (error) {
      setSubmitState("error");
      setServerMessage(error instanceof Error ? error.message : "Unable to send your enquiry right now.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="soft-card rounded-[30px] p-5 sm:p-6" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-sm font-bold text-navy dark:text-cream">
            Parent / Guardian Name <span className="text-pink">*</span>
          </label>
          <input
            id="name"
            {...register("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20 dark:border-slate-700 dark:bg-slate-950/80 dark:text-cream"
            placeholder="Your full name"
          />
          {errors.name ? <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name.message}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-bold text-navy dark:text-cream">
            Email <span className="text-pink">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20 dark:border-slate-700 dark:bg-slate-950/80 dark:text-cream"
            placeholder="you@example.com"
          />
          {errors.email ? <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email.message}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-bold text-navy dark:text-cream">
            Phone Number <span className="text-pink">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20 dark:border-slate-700 dark:bg-slate-950/80 dark:text-cream"
            placeholder="060 000 0000"
          />
          {errors.phone ? <p id="phone-error" className="mt-2 text-sm text-red-600">{errors.phone.message}</p> : null}
        </div>

        <div>
          <label htmlFor="childName" className="mb-2 block text-sm font-bold text-navy dark:text-cream">
            Child&apos;s Name <span className="text-pink">*</span>
          </label>
          <input
            id="childName"
            {...register("childName")}
            aria-invalid={Boolean(errors.childName)}
            aria-describedby={errors.childName ? "childName-error" : undefined}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20 dark:border-slate-700 dark:bg-slate-950/80 dark:text-cream"
            placeholder="Child's name"
          />
          {errors.childName ? <p id="childName-error" className="mt-2 text-sm text-red-600">{errors.childName.message}</p> : null}
        </div>

        <div>
          <label htmlFor="childAge" className="mb-2 block text-sm font-bold text-navy dark:text-cream">
            Child&apos;s Age <span className="text-pink">*</span>
          </label>
          <input
            id="childAge"
            {...register("childAge")}
            aria-invalid={Boolean(errors.childAge)}
            aria-describedby={errors.childAge ? "childAge-error" : undefined}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20 dark:border-slate-700 dark:bg-slate-950/80 dark:text-cream"
            placeholder="e.g. 4 years"
          />
          {errors.childAge ? <p id="childAge-error" className="mt-2 text-sm text-red-600">{errors.childAge.message}</p> : null}
        </div>

        <div>
          <label htmlFor="interestedIn" className="mb-2 block text-sm font-bold text-navy dark:text-cream">
            Interested In <span className="text-pink">*</span>
          </label>
          <select
            id="interestedIn"
            {...register("interestedIn")}
            aria-invalid={Boolean(errors.interestedIn)}
            aria-describedby={errors.interestedIn ? "interestedIn-error" : undefined}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20 dark:border-slate-700 dark:bg-slate-950/80 dark:text-cream"
          >
            {contactInterests.map((option: string) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.interestedIn ? <p id="interestedIn-error" className="mt-2 text-sm text-red-600">{errors.interestedIn.message}</p> : null}
        </div>

        <div>
          <label htmlFor="preferredContactMethod" className="mb-2 block text-sm font-bold text-navy dark:text-cream">
            Preferred Contact Method
          </label>
          <select
            id="preferredContactMethod"
            {...register("preferredContactMethod")}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20 dark:border-slate-700 dark:bg-slate-950/80 dark:text-cream"
          >
            {preferredContactMethods.map((option: string) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-bold text-navy dark:text-cream">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20 dark:border-slate-700 dark:bg-slate-950/80 dark:text-cream"
            placeholder="Tell us a little about your child or the programme you are interested in"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-pink px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-pink/20 transition hover:bg-pink-strong disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            "Send Enquiry"
          )}
        </button>

        {submitState === "success" ? (
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            <CheckCircle2 className="h-4 w-4" /> {serverMessage}
          </div>
        ) : null}

        {submitState === "error" ? (
          <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
            <AlertCircle className="h-4 w-4" /> {serverMessage}
          </div>
        ) : null}
      </div>
    </form>
  );
}
