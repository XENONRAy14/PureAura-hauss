"use client";

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Secteurs", href: "#interventions" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Construction neuve",
  "Rénovation complète",
  "Gros œuvre & second œuvre",
  "Nettoyage professionnel",
  "Remise en état",
  "Fin de chantier",
  "Dépannage BTP",
  "Plomberie & Électricité",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-light border-t border-gold/10">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#accueil" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full border-2 border-gold/50 flex items-center justify-center">
                  <span className="gold-gradient-text text-lg font-bold tracking-tight">
                    PH
                  </span>
                </div>
                <span className="gold-gradient-text text-lg font-semibold tracking-wider">
                  PUREAURA HAUS
                </span>
              </div>
            </a>
            <p className="text-sm text-text-secondary font-light leading-relaxed mb-8 max-w-xs">
              Construction, rénovation, nettoyage professionnel et dépannage
              BTP à Marseille. Excellence et réactivité au service des
              particuliers et professionnels.
            </p>
            <div className="space-y-3.5">
              <a
                href="tel:0768208987"
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-gold transition-colors"
              >
                <Phone size={15} className="text-gold/50 shrink-0" />
                07 68 20 89 87
              </a>
              <a
                href="mailto:contact.pureaurahaus@yahoo.com"
                className="flex items-center gap-3 text-sm text-text-secondary hover:text-gold transition-colors"
              >
                <Mail size={15} className="text-gold/50 shrink-0" />
                contact.pureaurahaus@yahoo.com
              </a>
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <MapPin size={15} className="text-gold/50 shrink-0" />
                Marseille, PACA
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold/60 mb-8 font-medium">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold/60 mb-8 font-medium">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-text-secondary">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold/60 mb-8 font-medium">
              Besoin d&apos;un devis ?
            </h4>
            <p className="text-sm text-text-secondary font-light leading-relaxed mb-8">
              Décrivez votre besoin et recevez une réponse personnalisée sous
              24h.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark font-semibold tracking-wider uppercase text-xs rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/5">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted text-center sm:text-left">
            © {currentYear} PureAura Haus — Tous droits réservés
          </p>
          <div className="flex items-center gap-5">
            <span className="text-xs text-text-muted">
              Facilities Services · Marseille
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 rounded-full border border-gold/15 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold/30 transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
