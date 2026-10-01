import React from 'react';
import { Wind, ShieldCheck, MapPin, Check, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0E1422] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Local Relevance */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <span>About Declan Talbot</span>
              <span aria-hidden="true">·</span>
              <span>Sale, Cheshire</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Dedicated Ventilation Hygiene & Clean Air for Sale and Cheshire
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Indoor air ducts are the respiratory system of your building. Over time, heating channels,
                vent grilles, and dryer exhausts silently accumulate layers of fine dust, pet dander,
                construction debris, and condensation-induced mold.
              </p>
              <p>
                Based at <strong className="text-white">12 Kingston Drive in Sale (M33 2FS)</strong>,{' '}
                <strong className="text-white">Declan Talbot</strong> provides dedicated air duct and ventilation
                cleaning services for both homeowners and commercial managers throughout Sale, Cheshire, and
                surrounding localities.
              </p>
              <p>
                Our philosophy is simple: <strong className="text-amber-400">"{BUSINESS_INFO.tagline}"</strong>.
                By using negative pressure extraction systems and targeted sanitization methods, we clean duct
                interiors thoroughly without releasing settled dust back into your furnished rooms.
              </p>
            </div>

            {/* Practical commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white">Direct Personal Accountability</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      You speak directly with Declan Talbot—ensuring transparent pricing and tailored attention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white">Full-Spectrum Service</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Equipped for everything from dryer vent fire safety to deep mold eradication and AC coil care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Message Declan on WhatsApp</span>
              </a>
              <a
                href={BUSINESS_INFO.phone.telLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-700 font-semibold text-xs hover:text-white hover:border-slate-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Direct Call: {BUSINESS_INFO.phone.local}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Operating Principles Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-[#101726] p-6 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Service Reassurance</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1 font-display">
                  Local Hygiene Focus
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Residential Health & Clean Air</h4>
                    <p className="text-slate-400 mt-0.5">
                      Eliminate stale air, trapped pet hair, and dust mite allergens to support children and sensitive residents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Dryer Fire Risk Prevention</h4>
                    <p className="text-slate-400 mt-0.5">
                      Clear out hidden lint obstructions to protect your home or laundromat from preventable heat buildup.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Commercial HVAC Compliance</h4>
                    <p className="text-slate-400 mt-0.5">
                      Keep staff and visitors safe with clean workplace ductwork, improved airflow, and lower motor strain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Sale, Cheshire Base</h4>
                    <p className="text-slate-400 mt-0.5">
                      Direct local availability at 12 Kingston Drive means responsive appointments and dependable communication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-400 block">Registered Location:</span>
                  <span className="text-white font-medium">12 Kingston Drive, Sale, M33 2FS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
