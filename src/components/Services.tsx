"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  Hammer,
  Building2,
  Key,
  Clock,
  AlertTriangle,
  CalendarCheck,
  Paintbrush,
  Wrench,
  Zap,
  Layers,
  Grid3X3,
  PenTool,
  ShieldCheck,
  Droplets,
  BrickWall,
  Home,
  Ruler,
  HardHat,
  DoorOpen,
  Pipette,
  Fan,
  Fence,
  Bath,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

/* ── Pole 1 — Construction & Rénovation (PRF2) ──────────────── */
const constructionGrosOeuvre = [
  { icon: BrickWall, label: "Maçonnerie & structure" },
  { icon: HardHat, label: "Fondations & terrassement" },
  { icon: Home, label: "Construction neuve" },
  { icon: Ruler, label: "Extensions & surélévations" },
  { icon: Fence, label: "Charpente & couverture" },
  { icon: DoorOpen, label: "Ouvertures & menuiseries extérieures" },
];

const constructionSecondOeuvre = [
  { icon: BrickWall, label: "Placo & cloisons" },
  { icon: Paintbrush, label: "Peinture & revêtements muraux" },
  { icon: Zap, label: "Électricité & domotique" },
  { icon: Droplets, label: "Plomberie & sanitaires" },
  { icon: Layers, label: "Isolation thermique & phonique" },
  { icon: Grid3X3, label: "Carrelage & faïence" },
  { icon: PenTool, label: "Revêtements de sol" },
  { icon: Bath, label: "Salles de bain & cuisines" },
  { icon: Fan, label: "Climatisation & ventilation" },
  { icon: Pipette, label: "Étanchéité" },
  { icon: LayoutGrid, label: "Faux plafonds" },
  { icon: Wrench, label: "Finitions & ajustements" },
];

/* ── Pole 2 — Nettoyage professionnel ────────────────────────── */
const nettoyageItems = [
  { icon: Building2, label: "Fin de chantier et préparation avant réception" },
  { icon: Key, label: "Remise en état avant location ou vente" },
  { icon: CalendarCheck, label: "Départ locataire" },
  { icon: AlertTriangle, label: "Urgences clients" },
  { icon: Clock, label: "Retards de livraison" },
  { icon: Sparkles, label: "Nettoyage ciblé avant exploitation" },
];

/* ── Pole 3 — Dépannage BTP ──────────────────────────────────── */
const depannageItems = [
  { icon: BrickWall, label: "Placo" },
  { icon: Paintbrush, label: "Peinture" },
  { icon: Droplets, label: "Plomberie" },
  { icon: Zap, label: "Électricité" },
  { icon: Layers, label: "Isolation" },
  { icon: Grid3X3, label: "Carrelage" },
  { icon: PenTool, label: "Revêtements de sol" },
  { icon: Wrench, label: "Finitions" },
  { icon: ShieldCheck, label: "Reprises très courtes" },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 lg:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light/50 to-dark" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16 sm:mb-20 lg:mb-24">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gold/60 mb-6 block">
            Ce que nous faisons
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="gold-gradient-text">Nos services</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
            <div className="w-2 h-2 rotate-45 border border-gold/30" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          <p className="text-text-secondary font-light max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            De la construction neuve à la rénovation complète, du nettoyage
            professionnel au dépannage BTP — trois pôles d&apos;expertise
            complémentaires, une seule exigence&nbsp;: l&apos;excellence.
          </p>
        </AnimatedSection>

        {/* ═══════════════════════════════════════════════════════════
            PÔLE 1 — CONSTRUCTION & RÉNOVATION (featured, full-width)
            ═══════════════════════════════════════════════════════════ */}
        <AnimatedSection className="mb-10 lg:mb-14">
          <div className="relative glass-card rounded-2xl overflow-hidden group">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark opacity-60 z-10" />

            {/* Hero image for Construction */}
            <div className="relative w-full h-56 sm:h-72 lg:h-80">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80"
                alt="Chantier de construction et rénovation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-dark/60 backdrop-blur-sm flex items-center justify-center border border-gold/30 shrink-0">
                    <Home className="text-gold" size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-gold/80 block mb-1">
                      Pôle 1 — Service phare
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                      Construction{" "}
                      <span className="gold-gradient-text">&amp;</span>{" "}
                      Rénovation
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Description */}
              <p className="text-[15px] sm:text-base text-text-secondary font-light leading-relaxed mb-3">
                Nous réalisons vos projets de construction et de rénovation de
                A&nbsp;à&nbsp;Z&nbsp;: maisons individuelles, appartements,
                locaux professionnels. Du gros œuvre aux finitions, chaque
                étape est assurée par des artisans qualifiés avec un suivi
                rigoureux du chantier.
              </p>
              <p className="text-[15px] sm:text-base text-text-secondary font-light leading-relaxed mb-10">
                Un interlocuteur unique coordonne l&apos;ensemble des corps de
                métier pour garantir le respect des délais, du budget et de la
                qualité attendue.
              </p>

              {/* Gros Œuvre */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px flex-1 bg-gold/10" />
                  <span className="text-[11px] tracking-[0.15em] uppercase text-gold/50 whitespace-nowrap font-medium">
                    Gros œuvre
                  </span>
                  <div className="h-px flex-1 bg-gold/10" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {constructionGrosOeuvre.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3.5 px-5 py-4 rounded-xl bg-dark/40 border border-dark-border/80 hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-300 group/item"
                    >
                      <item.icon
                        size={16}
                        className="text-gold/50 group-hover/item:text-gold transition-colors shrink-0"
                      />
                      <span className="text-sm text-text-secondary group-hover/item:text-text-primary transition-colors">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Second Œuvre */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px flex-1 bg-gold/10" />
                  <span className="text-[11px] tracking-[0.15em] uppercase text-gold/50 whitespace-nowrap font-medium">
                    Second œuvre &amp; finitions
                  </span>
                  <div className="h-px flex-1 bg-gold/10" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {constructionSecondOeuvre.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-dark/40 border border-dark-border/80 hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-300 group/item"
                    >
                      <item.icon
                        size={14}
                        className="text-gold/40 group-hover/item:text-gold/80 transition-colors shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-text-secondary group-hover/item:text-text-primary transition-colors">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* RGE + CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6 border-t border-gold/10">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-gold/60 shrink-0" />
                  <span className="text-xs sm:text-sm text-text-muted">
                    Artisans certifiés — Intervention possible d&apos;un
                    représentant RGE
                  </span>
                </div>
                <a
                  href="#contact"
                  className="group/cta inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark font-semibold tracking-wider uppercase text-xs rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 shrink-0"
                >
                  Demander un devis
                  <ArrowRight
                    size={14}
                    className="group-hover/cta:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ═══════════════════════════════════════════════════════════
            PÔLES 2 & 3 — NETTOYAGE + DÉPANNAGE (side by side)
            ═══════════════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Pole 2 — Nettoyage */}
          <AnimatedSection className="h-full">
            <div className="glass-card rounded-2xl overflow-hidden h-full group flex flex-col">
              {/* Photo */}
              <div className="relative w-full h-48 sm:h-56">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Nettoyage professionnel de locaux"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-dark/60 backdrop-blur-sm flex items-center justify-center border border-gold/30 shrink-0">
                      <Sparkles className="text-gold" size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gold/70 block">
                        Pôle 2
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        Nettoyage professionnel
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Description */}
                <p className="text-[15px] text-text-secondary font-light leading-relaxed mb-7">
                  Prise en charge complète des prestations de nettoyage, remise en
                  état et préparation avant réception, mise en location, vente ou
                  remise de clés. Nous intervenons également en urgence
                  lorsqu&apos;un site doit être rendu propre, exploitable et
                  présentable dans un délai court.
                </p>

                {/* Subtitle */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px flex-1 bg-gold/10" />
                  <span className="text-[11px] tracking-[0.15em] uppercase text-gold/40 whitespace-nowrap">
                    Exemples d&apos;interventions
                  </span>
                  <div className="h-px flex-1 bg-gold/10" />
                </div>

                {/* Items */}
                <div className="space-y-3 flex-1">
                  {nettoyageItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3.5 group/item"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gold/[0.05] flex items-center justify-center shrink-0 group-hover/item:bg-gold/[0.08] transition-colors">
                        <item.icon
                          size={15}
                          className="text-gold/50 group-hover/item:text-gold/80 transition-colors"
                        />
                      </div>
                      <span className="text-sm sm:text-[15px] text-text-secondary group-hover/item:text-text-primary transition-colors">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Pole 3 — Dépannage BTP */}
          <AnimatedSection className="h-full">
            <div className="glass-card rounded-2xl overflow-hidden h-full group flex flex-col">
              {/* Photo */}
              <div className="relative w-full h-48 sm:h-56">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                  alt="Dépannage et travaux BTP"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-dark/60 backdrop-blur-sm flex items-center justify-center border border-gold/30 shrink-0">
                      <Hammer className="text-gold" size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gold/70 block">
                        Pôle 3
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        Dépannage BTP
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Description */}
                <p className="text-[15px] text-text-secondary font-light leading-relaxed mb-3">
                  Prise en charge des besoins de dépannage BTP, des réserves, des
                  blocages techniques et des corrections nécessaires avant
                  livraison ou remise en exploitation.
                </p>
                <p className="text-[15px] text-text-secondary font-light leading-relaxed mb-7">
                  Chaque intervention est assurée par un artisan qualifié, expert
                  du corps de métier concerné.
                </p>

                {/* Subtitle */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px flex-1 bg-gold/10" />
                  <span className="text-[11px] tracking-[0.15em] uppercase text-gold/40 whitespace-nowrap">
                    Corps de métier
                  </span>
                  <div className="h-px flex-1 bg-gold/10" />
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1">
                  {depannageItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-dark/40 border border-dark-border/80 hover:border-gold/15 hover:bg-gold/[0.02] transition-all duration-300 group/item"
                    >
                      <item.icon
                        size={14}
                        className="text-gold/40 group-hover/item:text-gold/80 transition-colors shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-text-secondary group-hover/item:text-text-primary transition-colors">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* RGE note */}
                <div className="mt-6 flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gold/[0.03] border border-gold/10">
                  <ShieldCheck size={15} className="text-gold/60 shrink-0" />
                  <span className="text-xs sm:text-sm text-text-muted">
                    Intervention possible d&apos;un représentant RGE selon la
                    nature du besoin
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom callout */}
        <AnimatedSection className="mt-10 sm:mt-14">
          <div className="text-center glass-card rounded-2xl p-8 sm:p-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock size={18} className="text-gold" />
              <span className="text-sm tracking-[0.15em] uppercase text-gold font-medium">
                Urgences &amp; interventions rapides
              </span>
            </div>
            <p className="text-[15px] sm:text-base text-text-secondary font-light leading-relaxed max-w-3xl mx-auto">
              Notre organisation est pensée pour le terrain : délais courts,
              coordination avec les intervenants, traitement ciblé des urgences
              et recherche d&apos;une remise en exploitation rapide.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
