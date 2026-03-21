"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Shield, Clock, Star } from "lucide-react";

const badges = [
  { icon: Shield, label: "Qualité garantie" },
  { icon: Clock, label: "Intervention rapide" },
  { icon: Star, label: "Excellence terrain" },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        alt="Chantier de construction"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay on top of image */}
      <div className="absolute inset-0 bg-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark/90" />

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,168,76,0.5) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[min(800px,150vw)] h-[min(800px,150vw)] bg-gold/[0.03] rounded-full blur-[120px]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 sm:h-28 lg:h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 sm:h-28 lg:h-32 bg-gradient-to-t from-transparent via-gold/20 to-transparent" />

      {/* Side decorative lines — desktop only */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-8 xl:left-16 w-px h-48 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-8 xl:right-16 w-px h-48 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center pt-24 pb-32 sm:pt-32 sm:pb-40">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 mb-8 sm:mb-10 rounded-full border border-gold/15 bg-gold/[0.04]"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gold/90 font-medium">
            Marseille & alentours — Disponible 7j/7
          </span>
        </motion.div>

        {/* Logo text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-5 sm:mb-6"
        >
          <h1 className="text-[2.5rem] leading-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight">
            <span className="gold-gradient-text">PureAura</span>
            <span className="text-text-primary font-extralight ml-1.5 sm:ml-3 lg:ml-4">
              Haus
            </span>
          </h1>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          <div className="h-px w-10 sm:w-20 lg:w-24 bg-gradient-to-r from-transparent to-gold/40" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
          <div className="h-px w-10 sm:w-20 lg:w-24 bg-gradient-to-l from-transparent to-gold/40" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary font-light tracking-wide max-w-3xl mx-auto mb-2 sm:mb-3"
        >
          Construction · Rénovation · Nettoyage professionnel
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-sm sm:text-base text-text-muted tracking-[0.12em] sm:tracking-[0.15em] uppercase mb-8 sm:mb-10"
        >
          — Dépannage BTP —
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-sm sm:text-base lg:text-lg text-text-secondary/80 font-light max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2"
        >
          Trois pôles d&apos;expertise complémentaires à Marseille :
          construction et rénovation de A&nbsp;à&nbsp;Z, nettoyage
          professionnel et dépannage BTP, avec capacité d&apos;intervention
          rapide et urgente.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14"
        >
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark font-semibold tracking-wider uppercase text-sm rounded overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gold/20 text-center"
          >
            <span className="relative z-10">Demander un devis</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 border border-gold/25 text-gold font-medium tracking-wider uppercase text-sm rounded hover:bg-gold/[0.05] hover:border-gold/40 transition-all duration-300 text-center"
          >
            Nos services
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10"
        >
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 text-text-muted"
            >
              <badge.icon size={14} className="text-gold/50" />
              <span className="text-xs sm:text-sm tracking-wide">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#services"
          className="flex flex-col items-center gap-1.5 text-text-muted/60 hover:text-gold/70 transition-colors"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Découvrir</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
