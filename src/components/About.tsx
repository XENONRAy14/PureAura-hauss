"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Target,
  Users,
  Gauge,
  HandshakeIcon,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Précision",
    description:
      "Chaque intervention est ciblée, planifiée et exécutée avec rigueur pour un résultat irréprochable.",
  },
  {
    icon: Gauge,
    title: "Réactivité",
    description:
      "Disponibles pour les urgences, nous intervenons dans les délais les plus courts pour débloquer vos situations.",
  },
  {
    icon: Users,
    title: "Expertise",
    description:
      "Des artisans qualifiés, experts de leur corps de métier, mobilisés selon la nature exacte du besoin.",
  },
  {
    icon: HandshakeIcon,
    title: "Fiabilité",
    description:
      "Un interlocuteur unique, une coordination terrain maîtrisée et un engagement sur le résultat final.",
  },
];

const stats = [
  { value: "3", label: "Pôles de services" },
  { value: "15+", label: "Corps de métier" },
  { value: "7j/7", label: "Disponibilité" },
  { value: "1h", label: "Délai d'urgence" },
];

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="apropos" className="relative py-32 sm:py-40 lg:py-48">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-0 right-0 w-[min(500px,100vw)] h-[min(500px,100vw)] bg-gold/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[min(300px,70vw)] h-[min(300px,70vw)] bg-gold/[0.02] rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-20 sm:mb-24 lg:mb-28">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gold/60 mb-6 block">
            Qui sommes-nous
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="gold-gradient-text">L&apos;excellence</span>
            <span className="text-text-primary font-light ml-3">au service du terrain</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
            <div className="w-2 h-2 rotate-45 border border-gold/30" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          <p className="text-text-secondary font-light max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Depuis mai 2024, PureAura Haus structure trois pôles de services
            complémentaires à Marseille : construction et rénovation,
            nettoyage professionnel et dépannage BTP, dédiés aux
            professionnels exigeants. Notre organisation est pensée pour le
            terrain : réactivité, coordination et traitement ciblé.
          </p>
        </AnimatedSection>

        {/* Image banner */}
        <AnimatedSection className="mb-16 sm:mb-20">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80"
              alt="Équipe PureAura Haus sur chantier"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
            <div className="absolute inset-0 bg-dark/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white max-w-2xl">
                Une équipe structurée, des artisans qualifiés, une exigence de résultat.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats bar */}
        <AnimatedSection className="mb-20 sm:mb-24 lg:mb-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 sm:p-10 glass-card rounded-2xl"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient-text block mb-3">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-text-muted tracking-wide uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-8 sm:p-10 h-full group text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gold/[0.08] flex items-center justify-center border border-gold/15 group-hover:border-gold/30 transition-colors mb-8">
                  <value.icon className="text-gold" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-text-secondary font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
