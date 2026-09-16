"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Facilities", href: "#facilities" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-2xl px-3 py-2.5 text-base font-bold text-navy transition-colors hover:bg-pink-soft dark:text-cream dark:hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-slate-200 pt-3 dark:border-slate-700">
              <ThemeToggle />
              <Link
                href="#contact"
                onClick={onClose}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-pink px-4 py-2.5 text-sm font-bold text-white"
              >
                Enquire Now
              </Link>
            </div>
          </nav>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 text-navy transition hover:bg-slate-100 dark:text-cream dark:hover:bg-slate-800"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
