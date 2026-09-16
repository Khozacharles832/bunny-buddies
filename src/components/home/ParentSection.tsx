"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  { title: "Safe and caring environment", icon: ShieldCheck },
  { title: "Personal attention", icon: Users },
  { title: "Educational enrichment", icon: Sparkles },
  { title: "Dedicated staff", icon: HeartHandshake },
  { title: "Aftercare", icon: ArrowRight },
  { title: "Transport available", icon: ArrowRight },
  { title: "Uniform available", icon: ArrowRight },
  { title: "Activities and field trips", icon: ArrowRight },
];

export function ParentSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Parents"
              title="Designed with parents in mind"
              description="We understand that parents want a setting that feels secure, warm and purposeful. Our approach supports both development and peace of mind."
            />
            <Link href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-pink dark:text-pink-strong">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="soft-card flex items-center gap-3 rounded-[24px] p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-soft text-pink dark:bg-pink/10 dark:text-pink-strong">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{feature.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
