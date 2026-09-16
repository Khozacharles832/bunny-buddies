import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bunny Buddies Play School & Aftercare | Eldorado Park",
  description: "A registered ECD centre in Eldorado Park offering play school, aftercare and a reading skills programme.",
  openGraph: {
    title: "Bunny Buddies Play School & Aftercare | Eldorado Park",
    description: "A safe, caring and exciting place for little minds to learn, explore and grow.",
    type: "website",
    images: [{ url: "/images/og-placeholder.svg", width: 1200, height: 630, alt: "Bunny Buddies Play School & Aftercare" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider>{children}</ThemeProvider></body></html>;
}
