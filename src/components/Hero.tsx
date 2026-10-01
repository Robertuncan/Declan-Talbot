import React, { useState } from 'react';
import {
  MessageSquare,
  Phone,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Wind,
  Flame,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroProps {
  onSelectServiceTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectServiceTab }) => {
  const [activeChecklist, setActiveChecklist] = useState<'residential' | 'commercial'>('residential');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-800/80 bg-gradient-to-b from-[#0B0F17] via-[#0E1524] to-[#0B0F17]">
      {/* Background ambient gold/subtle grid effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber-500/15 blur-[120px] rounded-full" />
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.12) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Trust Signals, Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clean unboxed local badge (zero-pill discipline: quiet inline metadata) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-400">
              <span className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded text-amber-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Sale, Cheshire · M33 2FS</span>
              </span>
              <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-slate-300 hidden sm:inline">Residential & Commercial Specialist</span>
              <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-amber-400 font-semibold hidden md:inline">
                {BUSINESS_INFO.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-extrabold text-white tracking-tight leading-[1.15] font-display">
                Specialist Air Duct & Ventilation Cleaning in{' '}
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Sale, Cheshire
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                <strong className="text-white font-semibold">Declan Talbot</strong> delivers meticulous,
                high-filtration ductwork sanitization, mold eradication, and airflow restoration. Breathe clean,
                healthy air in your home or workplace with direct local service.
              </p>
            </div>

            {/* Core Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA */}
              <a
                href={`${BUSINESS_INFO.whatsapp.url}?text=${encodeURIComponent(
                  "Hello Declan, I'm interested in an air duct cleaning quote for my property in Sale / Cheshire."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 transition-all transform active:scale-98"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Message on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href={BUSINESS_INFO.phone.telLink}
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 border border-slate-700/80 bg-slate-900/90 hover:bg-slate-800 hover:border-amber-400/50 hover:text-white transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Declan: {BUSINESS_INFO.phone.local}</span>
              </a>
            </div>

            {/* Quick trust reassurance bar */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>12 Core Duct Services</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Direct Local Owner</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Wind className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dust Containment Guard</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern SaaS Interactive System Status & Quick Diagnosis Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-[#101726]/95 p-5 sm:p-6 shadow-2xl relative backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                    <Wind className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white font-display">
                      Ventilation Assessment
                    </h2>
                    <p className="text-[11px] text-slate-400">Sale & Cheshire service overview</p>
                  </div>
                </div>

                {/* Segmented control for residential / commercial */}
                <div className="inline-flex p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveChecklist('residential')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeChecklist === 'residential'
                        ? 'bg-amber-400 text-slate-950 shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Residential
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveChecklist('commercial')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeChecklist === 'commercial'
                        ? 'bg-amber-400 text-slate-950 shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Commercial
                  </button>
                </div>
              </div>

              {/* Dynamic highlights based on type */}
              <div className="mt-4 space-y-3">
                {activeChecklist === 'residential' ? (
                  <>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">Home Air Ducts & Vents</span>
                        <span className="text-[11px] text-amber-400 font-medium">Breathe Cleaner</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Removes dust mite residue, pet dander, and stagnant allergen build-up throughout heating channels.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                          <Flame className="w-3.5 h-3.5 text-amber-400" />
                          Dryer Vent Fire Safety
                        </span>
                        <span className="text-[11px] text-amber-400 font-medium">Lint Clear</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Clears dense lint blockage from tumble dryer exhaust pipes to stop fire hazards and cut drying duration.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          Mold & Mildew Neutralization
                        </span>
                        <span className="text-[11px] text-emerald-400 font-medium">Sanitized</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Hospital-grade sanitization destroys damp spore clusters and musty odors in air vent channels.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">Commercial HVAC & Plenums</span>
                        <span className="text-[11px] text-amber-400 font-medium">Workplace Ready</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        High-capacity ventilation extraction tailored for offices, clinics, retail spaces, and communal facilities.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">AC Coil & Air Handler Hygiene</span>
                        <span className="text-[11px] text-amber-400 font-medium">Energy Efficiency</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Removes insulating grime on cooling fins, saving power costs and extending system operational lifespan.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">Ductwork Inspection</span>
                        <span className="text-[11px] text-emerald-400 font-medium">Full Audit</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Thorough inspection of seams, air quality flow, and leakages for health and safety compliance.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Direct Card Action */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-slate-400 block">Direct booking with</span>
                  <span className="text-white font-semibold">{BUSINESS_INFO.name}</span>
                </div>
                <a
                  href={`${BUSINESS_INFO.whatsapp.url}?text=${encodeURIComponent(
                    `Hi Declan, I need an air duct cleaning assessment for my ${activeChecklist} property in Sale / Cheshire.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-400 text-slate-950 font-semibold text-xs hover:bg-amber-300 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Request Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
