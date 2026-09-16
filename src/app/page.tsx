import { Activities } from "@/components/home/Activities";
import { CTA } from "@/components/home/CTA";
import { ContactSection } from "@/components/home/ContactSection";
import { Enrichment } from "@/components/home/Enrichment";
import { Facilities } from "@/components/home/Facilities";
import { Gallery } from "@/components/home/Gallery";
import { Hero } from "@/components/home/Hero";
import { Languages } from "@/components/home/Languages";
import { ParentSection } from "@/components/home/ParentSection";
import { Programs } from "@/components/home/Programs";
import { WhyUs } from "@/components/home/WhyUs";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip pb-20 sm:pb-0">
      <Navbar />
      <main>
        <Hero /><WhyUs /><Programs /><Facilities /><Activities /><Enrichment />
        <Languages /><Gallery /><ParentSection /><CTA /><ContactSection />
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-700 dark:bg-slate-950/95 sm:hidden">
        <a href="tel:0604223149" className="rounded-xl px-4 py-3 text-center text-sm font-extrabold text-navy dark:text-cream">Call</a>
        <a href="#contact" className="rounded-xl bg-pink px-4 py-3 text-center text-sm font-extrabold text-white">Enquire</a>
      </div>
    </div>
  );
}
