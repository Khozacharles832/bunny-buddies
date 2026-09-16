"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Baby,
  BookHeart,
  CarFront,
  Code2,
  Drum,
  Flower2,
  Gamepad2,
  Music,
  Palette,
  Rocket,
  Sparkles,
  Target,
  Tv,
  UtensilsCrossed,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const enrichment = [
  { title: "Culinary Classes", icon: UtensilsCrossed, accent: "bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300" },
  { title: "Sports", icon: Target, accent: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" },
  { title: "Robotics", icon: Rocket, accent: "bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300" },
  { title: "LEGO", icon: Gamepad2, accent: "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300" },
  { title: "Bible Programme", icon: BookHeart, accent: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-300" },
  { title: "TV Programme", icon: Tv, accent: "bg-pink-100 text-pink-700 dark:bg-pink-500/10 dark:text-pink-300" },
  { title: "Music", icon: Music, accent: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300" },
  { title: "Dance & Movement", icon: Baby, accent: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-500/10 dark:text-fuchsia-300" },
  { title: "Instrumental Skills", icon: Drum, accent: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300" },
  { title: "Arts & Crafts", icon: Palette, accent: "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300" },
  { title: "Construction", icon: CarFront, accent: "bg-lime-100 text-lime-700 dark:bg-lime-500/10 dark:text-lime-300" },
  { title: "Engineering", icon: Code2, accent: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300" },
  { title: "Science", icon: Sparkles, accent: "bg-teal-100 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300" },
  { title: "Computer Classes", icon: Code2, accent: "bg-slate-200 text-slate-700 dark:bg-slate-500/10 dark:text-slate-200" },
  { title: "Soccer", icon: Target, accent: "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-300" },
  { title: "Drama", icon: Music, accent: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300" },
  { title: "Gardening", icon: Flower2, accent: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" },
];

export function Enrichment() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-rose-50/65 py-20 dark:bg-slate-950/50 sm:py-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <SectionHeading
            eyebrow="Curriculum Enrichment"
            title="A rich programme that inspires curiosity"
            description="We blend creativity, movement, technology and practical learning so children can explore their interests in meaningful ways."
          />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {enrichment.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${item.accent}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-extrabold text-navy dark:text-cream">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
