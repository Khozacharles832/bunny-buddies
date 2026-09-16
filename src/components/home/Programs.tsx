"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpenText, Clock3, Sparkles } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const programs = [
  {
    title: "Play School",
    description: "A joyful early learning environment designed to help children feel confident, curious and ready to learn.",
    icon: BookOpenText,
    accent: "bg-pink/10 text-pink dark:bg-pink/15 dark:text-pink-strong",
  },
  {
    title: "Aftercare",
    description: "A safe, supportive after-school space where children can relax, play, complete homework and build routines.",
    icon: Clock3,
    accent: "bg-sky/15 text-sky-600 dark:bg-sky/10 dark:text-sky-300",
  },
  {
    title: "Reading Skills Programme",
    description: "Focused literacy support that develops language confidence and a love of reading from an early age.",
    icon: Sparkles,
    accent: "bg-mint/25 text-emerald-700 dark:bg-emerald-500/15 dark:text-mint",
  },
];

export function Programs() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="programs" className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Our Programs"
            title="Nurturing care, purposeful learning"
            description="Each programme is designed to support children as they grow in confidence, curiosity and capability."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article
                key={program.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="soft-card group relative overflow-hidden rounded-[28px] p-6"
              >
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${program.accent}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-pink via-sky-300 to-mint" />
                <h3 className="text-2xl font-extrabold text-navy dark:text-cream">{program.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{program.description}</p>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-pink transition group-hover:translate-x-1 dark:text-pink-strong"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
