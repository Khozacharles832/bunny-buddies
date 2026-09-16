"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteImages } from "@/lib/utils";

export function Activities() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="activities" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeading
              eyebrow="Muddy Play Fun Friday"
              title="Messy hands. Big smiles. Real learning."
              description="Children learn through sensory, creative and outdoor play—building confidence, curiosity and emotional wellbeing in a fun and natural way."
            />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900/80">
              <div className="grid gap-3 sm:grid-cols-[1.6fr_0.9fr]">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <Image
                    src={siteImages.muddyPlay}
                    alt="Children enjoying muddy play in nature"
                    width={900}
                    height={900}
                    className="h-[350px] w-full object-cover sm:h-[420px]"
                  />
                </div>
                <div className="grid gap-3">
                  <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image
                      src={siteImages.gallery[0]}
                      alt="Children participating in playful learning"
                      width={500}
                      height={500}
                      className="h-[170px] w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image
                      src={siteImages.gallery[1]}
                      alt="Outdoor classroom play"
                      width={500}
                      height={500}
                      className="h-[170px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
