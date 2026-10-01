import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Wind, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenQuoteBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteBuilder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0B0F17]/90 backdrop-blur-md">
      {/* Top micro bar for direct contact & location */}
      <div className="hidden sm:block border-b border-slate-800/40 bg-slate-950/60 py-1.5 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>12 Kingston Drive, Sale, Cheshire, M33 2FS</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-amber-400/90 font-medium">Breathe Cleaner, Live Healthier</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.phone.telLink}
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Call: {BUSINESS_INFO.phone.local}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={BUSINESS_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>WhatsApp Active</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Wind className="w-5 h-5 text-slate-950 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white font-display group-hover:text-amber-400 transition-colors">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-xs text-slate-400 -mt-0.5 tracking-wide">
              Air Duct & Ventilation Services · Sale
            </span>
          </div>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-amber-400 transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-amber-400 transition-colors">
            About
          </a>
          <a href="#why-choose-us" className="hover:text-amber-400 transition-colors">
            Why Choose Us
          </a>
          <a href="#standards" className="hover:text-amber-400 transition-colors">
            Our Standards
          </a>
          <a href="#service-area" className="hover:text-amber-400 transition-colors">
            Service Area
          </a>
          <a href="#faqs" className="hover:text-amber-400 transition-colors">
            FAQs
          </a>
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BUSINESS_INFO.phone.telLink}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:border-slate-600 transition-all"
            title="Call Declan Talbot directly"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{BUSINESS_INFO.phone.local}</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/25 transition-all transform active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
            <span>Message on WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={BUSINESS_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-amber-400 text-slate-950 font-medium text-xs flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-[#0E1422] px-4 pt-3 pb-5 space-y-3">
          <div className="text-xs text-slate-400 pb-2 border-b border-slate-800/80 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Sale, Cheshire, M33 2FS</span>
          </div>
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Services (12 Specialisms)
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              About Declan Talbot
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Clean Standards & Process
            </a>
            <a
              href="#service-area"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Service Area & Location
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Frequently Asked Questions
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Contact & Quote
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a
              href={BUSINESS_INFO.phone.telLink}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-slate-800 border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Us</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
