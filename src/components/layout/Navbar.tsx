"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { siteImages } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Facilities", href: "#facilities" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative mx-auto max-w-7xl overflow-visible rounded-full border border-[#eef1f8] bg-white/80 px-3 py-2.5 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-950/75 ${
          scrolled ? "scale-[0.99]" : "scale-100"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <Link href="#top" className="flex items-center gap-3 min-w-0" aria-label="Bunny Buddies home">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-pink/10 ring-2 ring-pink/20">
              <Image src={siteImages.logo} alt="Bunny Buddies logo" width={40} height={40} className="object-contain" />
            </div>
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-xs font-black uppercase tracking-[0.18em] text-pink dark:text-pink-strong">
                Bunny Buddies
              </p>
              <p className="truncate text-[10px] text-slate-500 dark:text-slate-300">Play School & Aftercare</p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-bold text-navy transition-colors hover:bg-pink-soft hover:text-pink dark:text-cream dark:hover:bg-white/5 dark:hover:text-pink-strong"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-pink px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-pink/20 transition hover:-translate-y-0.5 hover:bg-pink-strong"
            >
              Enquire Now
              <Sparkles className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-navy shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-cream"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        <MobileMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </motion.nav>
    </header>
  );
}
