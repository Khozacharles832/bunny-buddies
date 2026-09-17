"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Bus,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Languages,
  ShieldCheck,
  Sparkles,
  Sprout,
  UserRound,
  UtensilsCrossed,
  Wand2,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteImages } from "@/lib/utils";

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

const facilityPhotos = [
  { title: "Creative movement", image: siteImages.facilities[0] },
  { title: "Hands-on learning", image: siteImages.facilities[1] },
  { title: "Learning spaces", image: siteImages.facilities[2] },
  { title: "Our mission", image: siteImages.facilities[3] },
  { title: "Learning programme", image: siteImages.facilities[4] },
  { title: "Reading hub", image: siteImages.facilities[5] },
  { title: "Spring fun", image: siteImages.facilities[6] },
  { title: "Spring celebrations", image: siteImages.facilities[7] },
  { title: "Story time", image: siteImages.facilities[8] },
  { title: "Reading together", image: siteImages.facilities[9] },
  { title: "Wacky days", image: siteImages.facilities[10] },
];

export function Facilities() {
  const reduceMotion = useReducedMotion();
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const closeViewer = () => setSelectedPhoto(null);
  const showNext = () => setSelectedPhoto((current) => current === null ? 0 : (current + 1) % facilityPhotos.length);
  const showPrevious = () => setSelectedPhoto((current) => current === null ? 0 : (current - 1 + facilityPhotos.length) % facilityPhotos.length);

  useEffect(() => {
    if (selectedPhoto === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPhoto]);

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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {facilityPhotos.map((photo, index) => (
            <motion.button
              key={photo.title}
              type="button"
              onClick={() => setSelectedPhoto(index)}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group relative min-h-64 cursor-zoom-in overflow-hidden rounded-[24px] border border-slate-200 bg-slate-200 text-left shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:min-h-56 lg:min-h-60"
              aria-label={`View ${photo.title} image`}
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(min-width: 1280px) 224px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent px-5 pb-5 pt-14">
                <p className="text-base font-extrabold text-white">{photo.title}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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

      <AnimatePresence>
        {selectedPhoto !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Facility image viewer"
            onClick={closeViewer}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-full w-full max-w-6xl items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={facilityPhotos[selectedPhoto].image}
                alt={facilityPhotos[selectedPhoto].title}
                width={1600}
                height={1200}
                sizes="100vw"
                className="max-h-[82vh] w-auto max-w-full rounded-[22px] object-contain shadow-2xl"
              />
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-slate-950/70 px-4 py-2 text-sm font-bold text-white">
                {facilityPhotos[selectedPhoto].title}
              </p>
              <button type="button" onClick={closeViewer} className="absolute right-0 top-0 inline-flex h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-extrabold text-navy shadow-lg transition hover:bg-pink-soft" aria-label="Cancel image viewer">
                <X className="h-5 w-5" /> Cancel
              </button>
              <button type="button" onClick={showPrevious} className="absolute left-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy shadow-lg transition hover:bg-pink-soft" aria-label="Previous image">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button type="button" onClick={showNext} className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy shadow-lg transition hover:bg-pink-soft" aria-label="Next image">
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
