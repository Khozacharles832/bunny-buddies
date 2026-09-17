"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/EnquiryForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactDetails = [
  { title: "Call us", value: "060 422 3149", href: "tel:0604223149", icon: Phone },
  { title: "Call us", value: "072 155 2225", href: "tel:0721552225", icon: Phone },
  { title: "Email us", value: "bunnybuddiesplayschool@gmail.com", href: "mailto:bunnybuddiesplayschool@gmail.com", icon: Mail },
  { title: "Visit us", value: "64 Minerton street Eldorado Park Ext 4", icon: MapPin },
];

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch with Bunny Buddies"
            description="We’d love to hear more about your child and how we can support their early development journey."
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              const content = detail.href ? (
                <a href={detail.href} className="text-base font-bold text-navy transition hover:text-pink dark:text-cream dark:hover:text-pink-strong">
                  {detail.value}
                </a>
              ) : (
                <p className="text-base font-bold text-navy dark:text-cream">{detail.value}</p>
              );

              return (
                <motion.div
                  key={detail.value}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="soft-card rounded-[28px] p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-soft text-pink dark:bg-pink/10 dark:text-pink-strong">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{detail.title}</p>
                      {content}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
