import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const LocationArea: React.FC = () => {
  return (
    <section id="service-area" className="py-20 bg-[#0E1422] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Address, Coverage details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Location & Service Coverage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Serving Sale, Cheshire & Surrounding Communities
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Declan Talbot is based on <strong className="text-white">Kingston Drive in Sale, Cheshire (M33 2FS)</strong>.
              Being genuinely local means we arrive on time, understand typical building architectures in our region,
              and don't impose inflated travel call-out fees.
            </p>

            {/* Address Card */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                Full Operating Address
              </div>
              <div className="text-sm font-medium text-white">
                {BUSINESS_INFO.address.full}
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-semibold text-xs hover:bg-amber-300 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={BUSINESS_INFO.phone.telLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 font-medium text-xs hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {BUSINESS_INFO.phone.local}</span>
                </a>
              </div>
            </div>

            {/* Local Coverage List */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Key Coverage Locations:
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {BUSINESS_INFO.coverageAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Local Location & Map Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-[#101726] p-6 shadow-xl relative overflow-hidden">
              {/* Map visualization banner */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-6 text-center space-y-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.4) 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                    <MapPin className="w-6 h-6 text-amber-400 animate-bounce" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-display">
                      Sale, Cheshire (M33 2FS)
                    </h4>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                      Direct local dispatches from Kingston Drive to homes, flats, shops, and offices across the region.
                    </p>
                  </div>

                  <div className="inline-block p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                    <span className="text-amber-400 font-semibold">Postcode Base:</span> M33 2FS · Trafford / Cheshire
                  </div>
                </div>

                <div className="relative z-10 pt-2">
                  <a
                    href={BUSINESS_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs hover:from-amber-300 hover:to-amber-400 transition-all shadow-md"
                  >
                    <span>View Exact Location & Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct appointment availability note */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Appointments scheduled Monday to Saturday</span>
                </div>
                <a
                  href={`${BUSINESS_INFO.whatsapp.url}?text=${encodeURIComponent(
                    "Hi Declan, what is your next availability for an air duct cleaning in Sale / Cheshire?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-semibold hover:underline shrink-0 ml-2"
                >
                  Check Availability →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
