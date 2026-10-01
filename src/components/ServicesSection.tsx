import React, { useState } from 'react';
import {
  Wind,
  Shield,
  Home,
  Building2,
  Sliders,
  Flame,
  Sparkles,
  Search,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { SERVICES, ServiceItem, BUSINESS_INFO } from '../data/businessData';

interface ServicesSectionProps {
  selectedServices: string[];
  onToggleService: (serviceTitle: string) => void;
  onOpenQuoteBuilder: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedServices,
  onToggleService,
  onOpenQuoteBuilder,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'specialized' | 'air-health'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'air-duct-cleaning':
        return <Wind className="w-5 h-5 text-amber-400" />;
      case 'hvac-system-cleaning':
        return <Sliders className="w-5 h-5 text-amber-400" />;
      case 'residential-duct-cleaning':
        return <Home className="w-5 h-5 text-amber-400" />;
      case 'commercial-duct-cleaning':
        return <Building2 className="w-5 h-5 text-amber-400" />;
      case 'vent-cleaning':
        return <Wind className="w-5 h-5 text-amber-400" />;
      case 'dryer-vent-cleaning':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'air-vent-sanitization':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'ductwork-inspection':
        return <Search className="w-5 h-5 text-amber-400" />;
      case 'mold-mildew-removal':
        return <Shield className="w-5 h-5 text-amber-400" />;
      case 'dust-debris-removal':
        return <Wind className="w-5 h-5 text-amber-400" />;
      case 'ac-coil-cleaning':
        return <Sliders className="w-5 h-5 text-amber-400" />;
      case 'air-quality-improvement':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <Wind className="w-5 h-5 text-amber-400" />;
    }
  };

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <span>Specialist Solutions</span>
            <span aria-hidden="true">·</span>
            <span>Sale & Cheshire Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Comprehensive Air Duct & Ventilation Services
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Every building has unique airflow demands. From domestic vent cleaning to industrial HVAC
            restoration, Declan Talbot delivers targeted, high-performance hygiene across all 12 key ventilation areas.
          </p>
        </div>

        {/* Filter and Search Bar Controls (Functional buttons, clean styling) */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 p-2 bg-[#101726] border border-slate-800 rounded-xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              All 12 Services
            </button>
            <button
              onClick={() => setActiveCategory('core')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'core'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              Core Duct & HVAC
            </button>
            <button
              onClick={() => setActiveCategory('specialized')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'specialized'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              Vents, Coils & Dryers
            </button>
            <button
              onClick={() => setActiveCategory('air-health')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'air-health'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              Mold & Air Sanitization
            </button>
          </div>

          {/* Quick search input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/80 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Services Grid (All 12 items rendered clearly) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isSelected = selectedServices.includes(service.title);
            const whatsappMsg = `Hello Declan, I'd like to inquire about "${service.title}" for my property in Sale / Cheshire.`;

            return (
              <div
                key={service.id}
                className={`group rounded-2xl border transition-all duration-200 p-6 flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-400 bg-[#141d30] shadow-lg shadow-amber-500/10'
                    : 'border-slate-800/90 bg-[#101726]/80 hover:border-slate-700 hover:bg-[#121a2c]'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Action */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                      {getServiceIcon(service.id)}
                    </div>
                    <button
                      type="button"
                      onClick={() => onToggleService(service.title)}
                      className={`text-xs px-2.5 py-1 rounded font-medium border transition-colors ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-amber-400 font-semibold'
                          : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white hover:border-slate-600'
                      }`}
                      title="Add to instant quote message"
                    >
                      {isSelected ? '✓ In Quote list' : '+ Add to Quote'}
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 text-lg font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Bullets */}
                  <ul className="mt-4 space-y-2 text-xs text-slate-300">
                    {service.bulletPoints.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer with Direct WhatsApp link & target */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400 truncate max-w-[170px]" title={service.recommendedFor}>
                    <span className="text-amber-400/90 font-medium">Ideal:</span> {service.recommendedFor}
                  </div>

                  <a
                    href={`${BUSINESS_INFO.whatsapp.url}?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Builder Banner */}
        {selectedServices.length > 0 && (
          <div className="mt-10 p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-sm text-slate-200">
                You have selected <strong className="text-amber-400">{selectedServices.length}</strong> service
                {selectedServices.length > 1 ? 's' : ''} for your inquiry.
              </span>
            </div>
            <button
              onClick={onOpenQuoteBuilder}
              className="px-5 py-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors"
            >
              Generate Quote Message →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
