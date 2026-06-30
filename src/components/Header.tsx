"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Safety Nets", href: "#services" },
  { name: "Invisible Grills", href: "#invisible-grills" },
  { name: "Cloth Hangers", href: "#cloth-hangers" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    let targetId = href;
    if (href === "#invisible-grills" || href === "#cloth-hangers") {
      targetId = "#services";
      const tabName = href === "#invisible-grills" ? "grills" : "hangers";
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("change-services-tab", { detail: tabName }));
      }
    } else if (href === "#services") {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("change-services-tab", { detail: "nets" }));
      }
    }

    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white shadow-md py-3 text-slate-900 border-b border-slate-100"
          : "bg-transparent py-5 text-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="flex items-center group cursor-pointer"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <Logo
              height={isScrolled ? 58 : 72}
              isScrolled={isScrolled}
              theme="adaptive"
              className="hover:scale-105 transition-transform duration-200"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium hover:text-primary-light transition-colors duration-200 relative group py-2 ${isScrolled ? "text-slate-700" : "text-white/90 hover:text-white"
                  }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Call / WhatsApp CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+917795515500"
              className="flex items-center space-x-1.5 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-light transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>+91 77955 15500</span>
            </a>

            <a
              href="https://wa.me/917795515500?text=Hi%20BMC%20Safety%20Nets%2C%20I%20am%20interested%20in%20a%20free%20inspection%20and%20quote%20for%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-accent hover:bg-accent-dark text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {/* WhatsApp custom SVG for perfect branding */}
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="tel:+917795515500"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-light transition-colors"
              aria-label="Call Customer Care"
            >
              <Phone className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
                }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:text-primary hover:bg-slate-50 transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}

              <div className="grid grid-cols-2 gap-3 pt-4">
                <a
                  href="tel:+917795515500"
                  className="flex items-center justify-center space-x-1 bg-primary text-white py-3 rounded-lg text-sm font-bold shadow-sm"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/917795515500?text=Hi%20BMC%20Safety%20Nets%2C%20I%20am%20interested%20in%20a%20free%20inspection%20and%20quote%20for%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1 bg-accent text-white py-3 rounded-lg text-sm font-bold shadow-sm"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
