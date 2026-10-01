import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0A0E18]/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={BUSINESS_INFO.phone.telLink}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold active:scale-95 transition-all shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call Declan</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-bold active:scale-95 transition-all shadow-md shadow-amber-500/20"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
