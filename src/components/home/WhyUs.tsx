"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookHeart, CalendarDays, GraduationCap, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "2011", label: "Serving children since", icon: CalendarDays },
  { value: "1 – Grade R", label: "Children from 1 year through Grade R", icon: GraduationCap },
  { value: "ECD", label: "Registered ECD Centre", icon: BookHeart },
  { value: "Personal", label: "Small classroom sizes", icon: Users },
];

export function WhyUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionHeading
            eyebrow="Why Us"
            title="Why Bunny Buddies?"
            description="Bunny Buddies Play School and Aftercare is a registered ECD Centre. We have been in the childcare business since 2011 and provide a nurturing environment where children can learn, play and develop."
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="soft-card rounded-[28px] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-soft text-pink dark:bg-pink/10 dark:text-pink-strong">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mb-2 text-3xl font-extrabold text-navy dark:text-cream">{stat.value}</div>
                <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
