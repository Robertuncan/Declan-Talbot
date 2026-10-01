import React from 'react';
import {
  ShieldCheck,
  MapPin,
  Wind,
  PhoneCall,
  CheckCircle2,
  FileCheck,
  AlertTriangle,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { TRUST_POINTS, PROCESS_STEPS, BUSINESS_INFO } from '../data/businessData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <span>Practical Trust & Standards</span>
            <span aria-hidden="true">·</span>
            <span>Zero Hype, Real Hygiene</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Why Property Owners in Sale Choose Declan Talbot
          </h2>
          <p className="text-base text-slate-300">
            We focus on genuine ventilation cleanliness, direct communication, and rigorous dust containment.
            Here is what sets our local service apart.
          </p>
        </div>

        {/* 4 Practical Trust Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#101726] border border-slate-800 flex flex-col justify-between hover:border-amber-400/40 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold text-sm">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-base font-bold text-white font-display">
                  {point.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-amber-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility & Reassurance: The Cleaning Standard (Section 5) */}
        <div id="standards" className="mt-20 pt-16 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Operational Reassurance
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                The 5-Step Ventilation Cleaning Methodology
              </h3>
              <p className="text-sm text-slate-300">
                We believe in total transparency. Every residential and commercial project follows our
                structured protocol to ensure zero airborne contamination back into your premises.
              </p>
            </div>

            <a
              href={`${BUSINESS_INFO.whatsapp.url}?text=${encodeURIComponent(
                'Hello Declan, could you explain the cleaning process for my duct system?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-amber-400 hover:text-white hover:border-amber-400 transition-colors self-start md:self-end"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss Your System with Declan</span>
            </a>
          </div>

          {/* Process Timeline Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-[#0E1524] border border-slate-800 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-amber-400/80 font-display">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                      Phase
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-white font-display leading-snug">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Quality checked</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
