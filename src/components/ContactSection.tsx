import React from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { InteractiveQuoteEstimator } from './InteractiveQuoteEstimator';

interface ContactSectionProps {
  selectedServices: string[];
  onToggleService: (serviceTitle: string) => void;
  onClearSelectedServices: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedServices,
  onToggleService,
  onClearSelectedServices,
}) => {
  return (
    <section id="contact" className="py-20 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <span>Direct Communication</span>
            <span aria-hidden="true">·</span>
            <span>Fast Turnaround</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Ready to Breathe Cleaner Air? Contact Declan Talbot
          </h2>
          <p className="text-base text-slate-300">
            No middleman call centers or automated loops. Connect directly with Declan for fast,
            accurate pricing and priority booking in Sale and Cheshire.
          </p>
        </div>

        {/* 3 Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: WhatsApp (Primary CTA) */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#142036] to-[#0E1626] border border-amber-400/40 relative flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
                  <MessageSquare className="w-6 h-6 fill-slate-950" />
                </div>
                <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">
                  Fastest Response
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white font-display">
                Message on WhatsApp
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Send photos of your vents, ask questions, or request an immediate quote straight to Declan's mobile.
              </p>
              <div className="mt-3 text-xs text-amber-300 font-mono">
                {BUSINESS_INFO.phone.formatted}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={BUSINESS_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Open WhatsApp Chat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone Call */}
          <div className="p-6 rounded-2xl bg-[#101726] border border-slate-800 relative flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white font-display">
                Call Direct
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Prefer speaking directly? Call Declan for immediate advice, scheduling questions, and emergencies.
              </p>
              <div className="mt-3 text-xs text-white font-semibold font-mono">
                {BUSINESS_INFO.phone.local} / {BUSINESS_INFO.phone.formatted}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={BUSINESS_INFO.phone.telLink}
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_INFO.phone.local}</span>
              </a>
            </div>
          </div>

          {/* Card 3: Address & Directions */}
          <div className="p-6 rounded-2xl bg-[#101726] border border-slate-800 relative flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white font-display">
                Local Base & Office
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Located on Kingston Drive in Sale. Serving local homeowners, landlords, and commercial facilities.
              </p>
              <div className="mt-3 text-xs text-slate-300">
                {BUSINESS_INFO.address.full}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Quote Estimator */}
        <div className="mt-8">
          <InteractiveQuoteEstimator
            selectedServices={selectedServices}
            onToggleService={onToggleService}
            onClearSelectedServices={onClearSelectedServices}
          />
        </div>
      </div>
    </section>
  );
};
