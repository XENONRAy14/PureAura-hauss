"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "07 68 20 89 87",
    href: "tel:0768208987",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact.pureaurahaus@yahoo.com",
    href: "mailto:contact.pureaurahaus@yahoo.com",
  },
  {
    icon: MapPin,
    label: "Zone",
    value: "Marseille & alentours",
    href: null,
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "7j/7 — Urgences incluses",
    href: null,
  },
];

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("https://formspree.io/f/xpqyewkj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `Demande de devis — ${service || "Général"} | PureAura Haus`,
          name,
          email,
          phone,
          service,
          message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses =
    "w-full px-3.5 sm:px-4 py-3 bg-dark/50 border border-dark-border/80 rounded-lg text-text-primary text-sm placeholder:text-text-muted/40 focus:border-gold/30 focus:outline-none focus:ring-1 focus:ring-gold/10 transition-all duration-300";

  return (
    <section id="contact" className="relative py-32 sm:py-40 lg:py-48">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-0 left-0 w-[min(400px,90vw)] h-[min(400px,90vw)] bg-gold/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[min(400px,90vw)] h-[min(400px,90vw)] bg-gold/[0.02] rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-20 sm:mb-24 lg:mb-28">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gold/60 mb-6 block">
            Parlons de votre projet
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="gold-gradient-text">Contactez</span>
            <span className="text-text-primary font-light ml-3">-nous</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
            <div className="w-2 h-2 rotate-45 border border-gold/30" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          <p className="text-text-secondary font-light max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Décrivez-nous votre besoin. Nous vous répondons rapidement avec une
            solution adaptée et un devis gratuit.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card rounded-2xl p-6 group"
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-gold/[0.08] flex items-center justify-center border border-gold/15 group-hover:border-gold/30 transition-colors shrink-0">
                        <item.icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <span className="text-[11px] text-text-muted tracking-wide uppercase block mb-1">
                          {item.label}
                        </span>
                        <span className="text-sm text-text-primary group-hover:text-gold transition-colors">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-gold/[0.08] flex items-center justify-center border border-gold/15 group-hover:border-gold/30 transition-colors shrink-0">
                        <item.icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <span className="text-[11px] text-text-muted tracking-wide uppercase block mb-1">
                          {item.label}
                        </span>
                        <span className="text-sm text-text-primary">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick CTA */}
            <div className="glass-card rounded-2xl p-8 text-center">
              <p className="text-sm text-text-secondary mb-5">
                Besoin d&apos;une intervention urgente ?
              </p>
              <a
                href="tel:0768208987"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark font-semibold tracking-wider uppercase text-sm rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
              >
                <Phone size={16} />
                Appeler maintenant
              </a>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 sm:p-10 lg:p-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-[11px] tracking-wide uppercase text-text-muted block mb-2.5">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={inputClasses}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="text-[11px] tracking-wide uppercase text-text-muted block mb-2.5">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className={inputClasses}
                    placeholder="06 00 00 00 00"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-[11px] tracking-wide uppercase text-text-muted block mb-2.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClasses}
                  placeholder="votre@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="text-[11px] tracking-wide uppercase text-text-muted block mb-2.5">
                  Service souhaité
                </label>
                <select
                  name="service"
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="Construction neuve">Construction neuve</option>
                  <option value="Rénovation complète">Rénovation complète</option>
                  <option value="Rénovation partielle">Rénovation partielle (cuisine, salle de bain…)</option>
                  <option value="Nettoyage professionnel">
                    Nettoyage professionnel / Remise en état
                  </option>
                  <option value="Dépannage BTP">Dépannage BTP</option>
                  <option value="Fin de chantier">Fin de chantier</option>
                  <option value="Urgence">Intervention urgente</option>
                  <option value="Autre">Autre demande</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="text-[11px] tracking-wide uppercase text-text-muted block mb-2.5">
                  Votre message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Décrivez votre besoin, le lieu d'intervention, les délais souhaités..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full flex items-center justify-center gap-2 px-8 py-4.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark font-semibold tracking-wider uppercase text-sm rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" && (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Envoi en cours...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle2 size={16} />
                    Message envoyé avec succès !
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle size={16} />
                    Erreur — Réessayez ou appelez-nous
                  </>
                )}
                {status === "idle" && (
                  <>
                    <Send size={16} />
                    Envoyer ma demande
                  </>
                )}
              </button>

              <p className="text-xs text-text-muted/50 text-center mt-5">
                Devis gratuit et sans engagement — Réponse sous 24h
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
