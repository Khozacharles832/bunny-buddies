"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteImages } from "@/lib/utils";

const galleryImages = siteImages.gallery;

export function Gallery() {
  const reduceMotion = useReducedMotion();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <SectionHeading
            eyebrow="Gallery"
            title="Little moments, big memories"
            description="Real learning, joyful play and nurturing moments shared across the Bunny Buddies community."
          />
        </motion.div>

        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
          {galleryImages.map((image: string, index: number) => (
            <motion.button
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={reduceMotion ? undefined : { scale: 1.01 }}
              className="group mb-4 block w-full overflow-hidden rounded-[24px] border border-slate-200 bg-white text-left shadow-sm transition-shadow hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"
              aria-label="Open gallery image"
            >
              <div className="overflow-hidden">
                <Image
                  src={image}
                  alt="Bunny Buddies learning environment"
                  width={800}
                  height={800}
                  className="h-auto max-h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl dark:bg-slate-900"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close gallery image"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/70 text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <Image src={selectedImage} alt="Expanded Bunny Buddies gallery image" width={1400} height={1200} className="max-h-[82vh] w-full object-contain" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
