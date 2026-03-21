"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building,
  Home,
  Briefcase,
  HardHat,
  MapPin,
  Landmark,
} from "lucide-react";

const sectors = [
  {
    icon: Home,
    title: "Particuliers",
    description: "Construction, rénovation complète ou partielle de maisons et appartements, de A à Z.",
  },
  {
    icon: Building,
    title: "Promoteurs & investisseurs",
    description: "Construction neuve, rénovation d'immeubles et préparation avant commercialisation.",
  },
  {
    icon: Landmark,
    title: "Syndics & copropriétés",
    description: "Rénovation des parties communes, maintenance, remise en état et interventions ponctuelles.",
  },
  {
    icon: Briefcase,
    title: "Gestionnaires & conciergeries",
    description: "Préparation de biens, remise en état, nettoyage express et maintenance locative.",
  },
  {
    icon: HardHat,
    title: "Entreprises de travaux",
    description: "Fin de chantier, nettoyage, levée de réserves et dépannages techniques.",
  },
  {
    icon: MapPin,
    title: "Professionnels du bâtiment",
    description: "Sous-traitance, dépannage BTP, reprises et corrections avant livraison.",
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

export default function Sectors() {
  return (
    <section id="interventions" className="relative py-32 sm:py-40 lg:py-48">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light/50 to-dark" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-20 sm:mb-24 lg:mb-28">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gold/60 mb-6 block">
            Secteurs d&apos;intervention
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="gold-gradient-text">À qui</span>
            <span className="text-text-primary font-light ml-3">
              nous nous adressons
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
            <div className="w-2 h-2 rotate-45 border border-gold/30" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          <p className="text-text-secondary font-light max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Nous travaillons aux côtés des professionnels qui ont besoin
            d&apos;un partenaire fiable, réactif et exigeant.
          </p>
        </AnimatedSection>

        {/* Sectors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 sm:p-10 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/[0.08] flex items-center justify-center border border-gold/15 group-hover:border-gold/30 transition-colors mb-6">
                <sector.icon className="text-gold" size={22} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-3 tracking-wide">
                {sector.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-text-secondary font-light leading-relaxed">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Zone géographique */}
        <AnimatedSection className="mt-16 sm:mt-20">
          <div className="glass-card rounded-2xl p-10 sm:p-14 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <MapPin size={18} className="text-gold" />
              <span className="text-sm tracking-[0.15em] uppercase text-gold font-medium">
                Zone d&apos;intervention
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-5">
              Marseille <span className="text-text-muted font-light">&</span>{" "}
              alentours
            </h3>
            <p className="text-[15px] sm:text-base text-text-secondary font-light leading-relaxed max-w-xl mx-auto">
              Basés à Marseille, nous couvrons l&apos;ensemble de la métropole
              Aix-Marseille-Provence et les communes environnantes. Déplacements
              possibles selon la nature du besoin.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
