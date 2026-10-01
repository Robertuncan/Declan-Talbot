import React from 'react';
import { Wind, Phone, MessageSquare, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070A10] border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-bold">
                <Wind className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="text-base font-bold text-white font-display block">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[11px] text-amber-400 font-medium">
                  {BUSINESS_INFO.businessType}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated ventilation hygiene, HVAC cleaning, and mold removal based in Sale, Cheshire.
              Committed to providing cleaner air and healthier indoor environments for homes and businesses.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={BUSINESS_INFO.phone.telLink} className="hover:text-amber-400 transition-colors">
                  {BUSINESS_INFO.phone.formatted} ({BUSINESS_INFO.phone.local})
                </a>
              </div>
            </div>
          </div>

          {/* Core Services Quick Links */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Specialized Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SERVICES.map((srv) => (
                <a
                  key={srv.id}
                  href={`#services`}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 truncate"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400/60" />
                  <span className="truncate">{srv.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Local Service Area & Direct Actions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Local Service Area
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Covering Sale (M33), Altrincham, Timperley, Stretford, Trafford, Urmston, and surrounding Cheshire localities.
            </p>

            <div className="space-y-2 pt-1">
              <a
                href={BUSINESS_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                <span>Message on WhatsApp</span>
              </a>
              <a
                href={BUSINESS_INFO.phone.telLink}
                className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {BUSINESS_INFO.phone.local}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. {BUSINESS_INFO.tagline}
          </div>
          <div className="flex items-center gap-3">
            <span>Sale, Cheshire · M33 2FS</span>
            <span aria-hidden="true">·</span>
            <a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              Directions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
