"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const languages = [
  { label: "English", accent: "bg-pink/10 text-pink dark:bg-pink/10 dark:text-pink-strong" },
  { label: "Afrikaans", accent: "bg-sky/10 text-sky-700 dark:bg-sky/10 dark:text-sky-300" },
  { label: "Basic Zulu", accent: "bg-mint/25 text-emerald-700 dark:bg-emerald-500/10 dark:text-mint" },
  { label: "Sign Language", accent: "bg-yellow/20 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-300" },
];

export function Languages() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <SectionHeading
            eyebrow="Languages"
            title="Learning in a language-rich environment"
            description="We encourage children to develop confidence in communication through a warm, inclusive and multilingual approach."
            align="center"
          />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {languages.map((language, index) => (
            <motion.div
              key={language.label}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className={`flex items-center justify-between rounded-[26px] border border-slate-200 p-5 shadow-sm ${language.accent}`}
            >
              <span className="text-lg font-extrabold">{language.label}</span>
              <LanguagesIcon className="h-5 w-5" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
