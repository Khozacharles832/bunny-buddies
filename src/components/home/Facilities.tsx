"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Bus,
  CheckCircle2,
  Compass,
  Languages,
  ShieldCheck,
  Sparkles,
  Sprout,
  UserRound,
  UtensilsCrossed,
  Wand2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const facilities = [
  { title: "Compliant Early Learning Centre", description: "A safe, structured environment for early development.", icon: ShieldCheck },
  { title: "Personal Attention", description: "Small-group support and caring guidance for every child.", icon: UserRound },
  { title: "Clean & Safe Environment", description: "Comfortable spaces designed for confidence and wellbeing.", icon: CheckCircle2 },
  { title: "Proven Curriculum", description: "Play-based learning that builds foundational skills.", icon: BookOpen },
  { title: "Life Skills", description: "Practical routines that support independence and confidence.", icon: Sparkles },
  { title: "English & Afrikaans", description: "Language-rich teaching in bilingual settings.", icon: Languages },
  { title: "Basic Zulu & Sign Language", description: "Inclusive communication support for growing learners.", icon: Wand2 },
  { title: "Field Trips", description: "Hands-on experiences that broaden learning and curiosity.", icon: Compass },
  { title: "Uniform Available", description: "A polished, comfortable school identity for each child.", icon: UtensilsCrossed },
  { title: "Dedicated Teachers & Staff", description: "A warm and experienced team committed to care and growth.", icon: UserRound },
  { title: "Transport Services Available", description: "Convenient support for families in the community.", icon: Bus },
  { title: "Educational Enrichment", description: "Creative and engaging activities beyond the classroom.", icon: Sprout },
];

export function Facilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="facilities" className="bg-slate-100/70 py-20 dark:bg-slate-950/35 sm:py-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <SectionHeading
            eyebrow="Facilities"
            title="A comforting environment for learning and growth"
            description="Everything we offer is designed to help children feel secure, engaged and supported throughout the day."
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="group rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-pink/30 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-soft text-pink transition-transform duration-200 group-hover:scale-110 dark:bg-pink/10 dark:text-pink-strong">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold text-navy dark:text-cream">{facility.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{facility.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
