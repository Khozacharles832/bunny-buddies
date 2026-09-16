export const siteImages = {
  logo: "/images/logo.webp",
  favicon: "/images/favicon.svg",
  hero: "/images/hero-placeholder.webp",
  muddyPlay: "/images/muddy-play-placeholder.webp",
  placeholder: "/images/placeholder.webp",
  og: "/images/og-placeholder.webp",
  gallery: [
    "/images/gallery/gallery-1.webp",
    "/images/gallery/gallery-2.webp",
    "/images/gallery/gallery-3.webp",
    "/images/gallery/gallery-4.webp",
    "/images/gallery/gallery-5.webp",
    "/images/gallery/gallery-6.webp",
  ],
};

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
