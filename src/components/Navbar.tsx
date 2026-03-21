"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Interventions", href: "#interventions" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-xl border-b border-gold/10 shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20 lg:h-22">
            {/* Logo */}
            <a href="#accueil" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-gold/50 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <span className="gold-gradient-text text-base sm:text-lg font-bold tracking-tight">
                  PH
                </span>
              </div>
              <span className="hidden sm:inline gold-gradient-text text-base lg:text-lg font-semibold tracking-wider">
                PUREAURA HAUS
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 xl:px-4 py-2 text-[13px] text-text-secondary hover:text-gold transition-colors duration-300 tracking-wide uppercase font-medium after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-gold/50 hover:after:w-3/4 after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
              <a
                href="tel:0768208987"
                className="flex items-center gap-2 text-sm text-gold/80 hover:text-gold transition-colors"
              >
                <Phone size={13} />
                <span className="text-[13px]">07 68 20 89 87</span>
              </a>
              <a
                href="#contact"
                className="px-5 xl:px-6 py-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark text-[13px] font-semibold tracking-wide uppercase rounded hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
              >
                Devis gratuit
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 -mr-2 text-gold active:scale-95 transition-transform"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/[0.98] backdrop-blur-2xl lg:hidden flex flex-col"
          >
            {/* Close button area at top */}
            <div className="flex justify-end p-4 sm:p-6">
              <button
                onClick={closeMobile}
                className="p-2.5 text-gold"
                aria-label="Fermer le menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links centered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-7 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-xl sm:text-2xl text-text-primary hover:text-gold transition-colors tracking-[0.15em] uppercase font-light"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="h-px w-16 bg-gold/20 my-2"
              />

              <motion.a
                href="tel:0768208987"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 text-gold text-base sm:text-lg"
              >
                <Phone size={16} />
                07 68 20 89 87
              </motion.a>

              <motion.a
                href="#contact"
                onClick={closeMobile}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.56 }}
                className="mt-2 px-8 py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-dark font-semibold tracking-wide uppercase text-sm rounded hover:shadow-lg hover:shadow-gold/20 transition-all"
              >
                Devis gratuit
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
