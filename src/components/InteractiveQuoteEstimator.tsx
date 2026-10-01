import React, { useState } from 'react';
import {
  MessageSquare,
  Phone,
  Check,
  Send,
  Building2,
  Home,
  Sliders,
  Sparkles,
  ShieldCheck,
  X,
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/businessData';

interface QuoteEstimatorProps {
  selectedServices: string[];
  onToggleService: (serviceTitle: string) => void;
  onClearSelectedServices: () => void;
}

export const InteractiveQuoteEstimator: React.FC<QuoteEstimatorProps> = ({
  selectedServices,
  onToggleService,
  onClearSelectedServices,
}) => {
  const [propertyType, setPropertyType] = useState<'Residential' | 'Commercial'>('Residential');
  const [propertySize, setPropertySize] = useState<string>('Standard 2-3 Bedroom');
  const [urgency, setUrgency] = useState<string>('Flexible / Standard');
  const [postcodeOrArea, setPostcodeOrArea] = useState<string>('Sale / Cheshire');
  const [notes, setNotes] = useState<string>('');
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  // Generate customized WhatsApp URL
  const generateWhatsAppMessage = () => {
    const servicesList =
      selectedServices.length > 0 ? selectedServices.join(', ') : 'General Air Duct & Ventilation Cleaning';

    const text =
      `Hello Declan Talbot,\n\n` +
      `I would like to request an Air Duct Cleaning quote for my property:\n` +
      `• Property Type: ${propertyType} (${propertySize})\n` +
      `• Services Needed: ${servicesList}\n` +
      `• Location/Postcode: ${postcodeOrArea || 'Sale, Cheshire'}\n` +
      `• Preferred Timing: ${urgency}\n` +
      (notes.trim() ? `• Notes: ${notes.trim()}\n` : '') +
      `\nPlease let me know your pricing and earliest availability. Thank you!`;

    return `${BUSINESS_INFO.whatsapp.url}?text=${encodeURIComponent(text)}`;
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone.trim()) return;

    // Open WhatsApp with callback request or show success
    const text = `Hello Declan, callback request from ${callbackName || 'Customer'} (${callbackPhone}) regarding air duct cleaning in Sale / Cheshire.`;
    window.open(`${BUSINESS_INFO.whatsapp.url}?text=${encodeURIComponent(text)}`, '_blank');
    setCallbackSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101726] p-6 sm:p-8 shadow-2xl relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Fast Direct Estimation
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
            Build Your Air Duct Cleaning Inquiry
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Select your requirements to instantly compose a direct inquiry for Declan Talbot on WhatsApp.
          </p>
        </div>

        {selectedServices.length > 0 && (
          <button
            onClick={onClearSelectedServices}
            className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1 self-start sm:self-center"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset choices</span>
          </button>
        )}
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Options Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Property Type */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-2">
              1. Property Category:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setPropertyType('Residential');
                  setPropertySize('Standard 2-3 Bedroom');
                }}
                className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                  propertyType === 'Residential'
                    ? 'border-amber-400 bg-amber-400/10 text-white font-medium shadow-sm'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <Home className={`w-5 h-5 ${propertyType === 'Residential' ? 'text-amber-400' : 'text-slate-500'}`} />
                <div>
                  <div className="text-xs font-bold text-white">Residential Home</div>
                  <div className="text-[11px] text-slate-400">Houses, flats, bungalows</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setPropertyType('Commercial');
                  setPropertySize('Small Office / Clinic');
                }}
                className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                  propertyType === 'Commercial'
                    ? 'border-amber-400 bg-amber-400/10 text-white font-medium shadow-sm'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <Building2 className={`w-5 h-5 ${propertyType === 'Commercial' ? 'text-amber-400' : 'text-slate-500'}`} />
                <div>
                  <div className="text-xs font-bold text-white">Commercial Premise</div>
                  <div className="text-[11px] text-slate-400">Offices, retail, venues</div>
                </div>
              </button>
            </div>
          </div>

          {/* Size / Scale */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-2">
              2. Approximate Size:
            </label>
            <select
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-white focus:outline-none focus:border-amber-400"
            >
              {propertyType === 'Residential' ? (
                <>
                  <option value="1-2 Bedroom Flat/Terrace">1-2 Bedroom Flat / Terraced House</option>
                  <option value="Standard 2-3 Bedroom">Standard 3 Bedroom Semi-Detached</option>
                  <option value="4+ Bedroom Detached House">Large 4-5+ Bedroom Detached Home</option>
                  <option value="Specific Dryer Vent Only">Dryer Vent Cleaning Only</option>
                </>
              ) : (
                <>
                  <option value="Small Office / Clinic (under 1500 sq ft)">Small Office / Clinic / Surgery</option>
                  <option value="Medium Retail or Multi-Room Facility">Medium Retail Store or Multi-Room Facility</option>
                  <option value="Full Commercial Ducting / Multi-Floor">Multi-Floor Building or Large Ventilation Network</option>
                </>
              )}
            </select>
          </div>

          {/* Select Services (From all 12 services) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300">
                3. Services Required (Select any):
              </label>
              <span className="text-[11px] text-amber-400">
                {selectedServices.length} selected
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
              {SERVICES.map((srv) => {
                const checked = selectedServices.includes(srv.title);
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => onToggleService(srv.title)}
                    className={`flex items-center gap-2 p-2 rounded-lg text-left text-xs transition-colors border ${
                      checked
                        ? 'border-amber-400/80 bg-amber-400/10 text-white font-medium'
                        : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        checked ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-700 bg-slate-800'
                      }`}
                    >
                      {checked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="truncate">{srv.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Postcode & Urgency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Location / Postcode:
              </label>
              <input
                type="text"
                value={postcodeOrArea}
                onChange={(e) => setPostcodeOrArea(e.target.value)}
                placeholder="e.g. M33 2FS or Sale"
                className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Target Timeline:
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-amber-400"
              >
                <option value="Flexible / Standard">Flexible / Next Available</option>
                <option value="Within 1-2 Weeks">Within 1-2 Weeks</option>
                <option value="Urgent / As Soon as Possible">Urgent / As soon as possible</option>
              </select>
            </div>
          </div>

          {/* Extra Notes */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              Additional Details (Optional):
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., musty smell, post-renovation dust, dryer running hot..."
              className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Right Output: Ready-to-Send WhatsApp Message & Quick Callback */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
              <span className="font-semibold text-slate-200">Generated Inquiry Preview</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Instant WhatsApp
              </span>
            </div>

            <div className="text-xs text-slate-300 font-mono bg-slate-900/90 p-3.5 rounded-lg border border-slate-800/80 space-y-1.5 whitespace-pre-wrap leading-relaxed">
              <span className="text-amber-400 font-bold block">Declan Talbot Air Duct Inquiry</span>
              <span className="text-slate-400">Property:</span> {propertyType} ({propertySize})
              <br />
              <span className="text-slate-400">Services:</span>{' '}
              {selectedServices.length > 0 ? selectedServices.join(', ') : 'Air Duct Cleaning'}
              <br />
              <span className="text-slate-400">Area:</span> {postcodeOrArea || 'Sale, Cheshire'}
              <br />
              <span className="text-slate-400">Timeline:</span> {urgency}
              {notes && (
                <>
                  <br />
                  <span className="text-slate-400">Note:</span> {notes}
                </>
              )}
            </div>

            <p className="text-[11px] text-slate-400">
              Clicking below opens WhatsApp directly with Declan Talbot (+44 7460 691567) with this complete brief already written.
            </p>

            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Send via WhatsApp to Declan</span>
            </a>
          </div>

          {/* Alternative Quick Callback Request Form */}
          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Or Prefer a Direct Phone Call?</span>
            </h4>
            {callbackSubmitted ? (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 space-y-1">
                <div className="font-semibold">Inquiry Dispatched!</div>
                <div>Declan Talbot has received your request and will contact you directly.</div>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={callbackName}
                    onChange={(e) => setCallbackName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="tel"
                    required
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="Your Phone Number *"
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-3 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request Declan Call You Back</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
