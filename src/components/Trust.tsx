"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";

const commitments = [
  "Devis gratuit et sans engagement",
  "Réponse sous 24h",
  "Artisans qualifiés et experts",
  "Intervention rapide, y compris en urgence",
  "Un interlocuteur unique du début à la fin",
  "Coordination terrain maîtrisée",
  "Tarification transparente",
  "Disponibilité 7j/7",
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

export default function Trust() {
  return (
    <section className="relative py-32 sm:py-40 lg:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,160vw)] h-[min(800px,160vw)] bg-gold/[0.02] rounded-full blur-[150px]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <AnimatedSection>
            <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gold/60 mb-6 block">
              Nos engagements
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="gold-gradient-text">La confiance</span>
              <span className="text-text-primary font-light block sm:inline sm:ml-3">
                avant tout
              </span>
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-gold/30 to-transparent" />
              <div className="w-2 h-2 rotate-45 border border-gold/30" />
            </div>
            <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed mb-12 max-w-lg">
              Chaque mission est traitée avec le même niveau d&apos;exigence.
              Nous nous engageons sur la qualité, les délais et la
              transparence de nos interventions.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark font-semibold tracking-wider uppercase text-sm rounded-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-500"
              >
                Demander un devis
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:0768208987"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-gold/25 text-gold font-medium tracking-wider uppercase text-sm rounded-lg hover:bg-gold/[0.05] hover:border-gold/40 transition-all duration-300"
              >
                <Phone size={16} />
                07 68 20 89 87
              </a>
            </div>
          </AnimatedSection>

          {/* Right: Commitments grid */}
          <AnimatedSection>
            <div className="grid grid-cols-1 gap-4">
              {commitments.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-dark-card/50 border border-dark-border/80 hover:border-gold/15 transition-all duration-300 group"
                >
                  <CheckCircle2
                    size={18}
                    className="text-gold/50 group-hover:text-gold transition-colors shrink-0"
                  />
                  <span className="text-sm sm:text-[15px] text-text-secondary group-hover:text-text-primary transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
