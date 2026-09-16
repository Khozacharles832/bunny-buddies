"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteImages } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 lg:pb-24">
      <div className="absolute left-[-8%] top-4 h-56 w-56 rounded-full bg-pink/10 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[-5%] top-10 h-72 w-72 rounded-full bg-sky/10 blur-3xl" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr]">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? { opacity: 1 } : "visible"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="relative z-10"
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink/20 bg-pink-soft px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-pink dark:border-pink/30 dark:bg-pink/10 dark:text-pink-strong"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Bunny Buddies Play School & Aftercare
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl dark:text-cream"
            >
              Play. Learn. Grow.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-8 text-foreground-soft sm:text-lg dark:text-slate-300"
            >
              A safe, caring and exciting place for little minds to learn, explore and grow.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Enquire Now
              </Button>
              <Button href="#programs" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Our Programs
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-5 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-pink" /> Registered ECD centre</div>
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-sky" /> Since 2011</div>
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-mint" /> Ages 1-Grade R</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="blob-shape left-[-10%] top-[8%] h-52 w-52 sm:h-64 sm:w-64" aria-hidden="true" />
            <div className="blob-shape right-[-4%] bottom-[6%] h-52 w-52 bg-sky/10 sm:h-60 sm:w-60" aria-hidden="true" />
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-3 shadow-[0_30px_80px_rgba(23,37,84,0.15)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/80"
            >
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src={siteImages.hero}
                  alt="Children engaging in playful learning activities"
                  width={900}
                  height={900}
                  priority
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />
              </div>
            </motion.div>
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-3 top-7 rounded-2xl border border-pink/20 bg-white/85 p-3 shadow-xl backdrop-blur dark:bg-slate-900/85"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-pink/15 p-2 text-pink"><Sparkles className="h-4 w-4" /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Learning</p>
                  <p className="text-sm font-extrabold text-navy dark:text-cream">Well rounded</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 right-6 rounded-2xl border border-sky/20 bg-white/85 p-3 shadow-xl backdrop-blur dark:bg-slate-900/85"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-sky/15 p-2 text-sky-600"><Sparkles className="h-4 w-4" /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Play</p>
                  <p className="text-sm font-extrabold text-navy dark:text-cream">Joyful care</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
