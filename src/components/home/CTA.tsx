"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-pink via-pink-500 to-navy px-6 py-10 text-white shadow-[0_24px_60px_rgba(244,103,165,0.25)] sm:px-10"
        >
          <div className="blob-shape left-[-60px] top-[20px] h-28 w-28 bg-white/10" aria-hidden="true" />
          <div className="blob-shape right-[-40px] bottom-[-10px] h-32 w-32 bg-sky/20" aria-hidden="true" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-pink-soft">Ready to join the family?</p>
              <h2 className="max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to give your little one a place to learn, play and grow?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-pink-soft/95">
                Get in touch with Bunny Buddies Play School & Aftercare to find out more about our programmes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-navy transition hover:-translate-y-0.5"
              >
                Send an Enquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:0604223149"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4" /> Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
