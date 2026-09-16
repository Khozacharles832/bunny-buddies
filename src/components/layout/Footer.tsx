import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { siteImages } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="section-shell py-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-pink/10 ring-2 ring-pink/20">
                <Image src={siteImages.logo} alt="Bunny Buddies logo" width={42} height={42} className="object-contain" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-pink">Bunny Buddies</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Play School & Aftercare</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
              A registered ECD centre in Eldorado Park, creating a safe, caring environment where children can learn, play and grow with confidence.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-extrabold text-navy dark:text-cream">Quick links</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#programs">Programs</Link></li>
              <li><Link href="#facilities">Facilities</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-extrabold text-navy dark:text-cream">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-pink" /><a href="tel:0604223149">060 422 3149</a></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-pink" /><a href="tel:0721552225">072 155 2225</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-pink" /><a href="mailto:bunnybuddiesplayschool@gmail.com">bunnybuddiesplayschool@gmail.com</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-pink" />Eldorado Park Ext 4</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          © {new Date().getFullYear()} Bunny Buddies Play School & Aftercare.
        </div>
      </div>
    </footer>
  );
}
