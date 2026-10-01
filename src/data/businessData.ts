export interface ServiceItem {
  id: string;
  title: string;
  category: 'core' | 'specialized' | 'air-health';
  shortDesc: string;
  bulletPoints: string[];
  recommendedFor: string;
}

export const BUSINESS_INFO = {
  name: 'Declan Talbot',
  businessType: 'Air duct cleaning services',
  tagline: 'Breathe Cleaner, Live Healthier.',
  headline: 'Specialist Air Duct & Ventilation Cleaning in Sale, Cheshire',
  subheadline:
    'Dedicated residential and commercial ventilation hygiene, thorough ductwork inspection, and dust & mold eradication to restore peak indoor air quality across Sale and Cheshire.',
  address: {
    street: '12 Kingston Drive',
    city: 'Sale',
    county: 'Cheshire',
    country: 'England',
    postcode: 'M33 2FS',
    full: '12 Kingston Drive, Sale, Cheshire, England, M33 2FS',
  },
  phone: {
    raw: '447460691567',
    formatted: '+44 7460 691567',
    local: '07460 691567',
    telLink: 'tel:+447460691567',
  },
  whatsapp: {
    raw: '447460691567',
    url: 'https://wa.me/447460691567',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=12+Kingston+Drive,+Sale,+Cheshire,+England,+M33+2FS',
  coverageAreas: [
    'Sale (M33)',
    'Ashton upon Mersey',
    'Brooklands',
    'Timperley',
    'Altrincham',
    'Stretford & Trafford',
    'Urmston',
    'Hale & Bowdon',
    'Wider Cheshire & Greater Manchester',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'air-duct-cleaning',
    title: 'Air Duct Cleaning',
    category: 'core',
    shortDesc: 'Complete extraction of deep dust, allergens, and build-up across all internal supply and return duct runs.',
    bulletPoints: [
      'Removal of accumulated fine dust & particulate',
      'Improved airflow and ventilation balancing',
      'Non-invasive, high-filtration vacuum containment',
    ],
    recommendedFor: 'Properties with persistent dust or sluggish airflow',
  },
  {
    id: 'hvac-system-cleaning',
    title: 'HVAC System Cleaning',
    category: 'core',
    shortDesc: 'Comprehensive hygiene maintenance for the complete heating, ventilation, and air circulation unit.',
    bulletPoints: [
      'Cleaning of internal housing and air handlers',
      'Decreased strain on mechanical fans and motors',
      'Enhanced operating efficiency and energy savings',
    ],
    recommendedFor: 'Central heating and forced air climate installations',
  },
  {
    id: 'residential-duct-cleaning',
    title: 'Residential Duct Cleaning',
    category: 'core',
    shortDesc: 'Tailored duct cleansing engineered for family homes, apartments, and domestic residential properties.',
    bulletPoints: [
      'Protects living spaces with drop cloths and floor guards',
      'Targeted for family allergens, pet dander, and dust mites',
      'Quiet, respectful on-site service in your home',
    ],
    recommendedFor: 'Homeowners, landlords, and new property buyers',
  },
  {
    id: 'commercial-duct-cleaning',
    title: 'Commercial Duct Cleaning',
    category: 'core',
    shortDesc: 'Industrial and commercial duct sanitization designed to meet UK workplace health and ventilation standards.',
    bulletPoints: [
      'Tailored scheduling to avoid business disruption',
      'High-capacity ducting runs and ceiling plenums',
      'Documentation for health & safety record-keeping',
    ],
    recommendedFor: 'Offices, retail spaces, clinics, and hospitality venues',
  },
  {
    id: 'vent-cleaning',
    title: 'Vent Cleaning',
    category: 'specialized',
    shortDesc: 'Meticulous cleaning and degreasing of ceiling diffusers, wall vents, and air transfer grilles.',
    bulletPoints: [
      'Removes unsightly dark soot rings around vent grilles',
      'Restores unrestricted fresh air intake and exhaust',
      'Deep wash and sanitize of vent faceplates',
    ],
    recommendedFor: 'Visible vent covers showing dust accumulation or dark edges',
  },
  {
    id: 'dryer-vent-cleaning',
    title: 'Dryer Vent Cleaning',
    category: 'specialized',
    shortDesc: 'Crucial lint clearing from tumble dryer exhaust ducts to eliminate serious fire risks and speed up drying cycles.',
    bulletPoints: [
      'Direct prevention of combustible lint fire hazards',
      'Shortens clothes drying times substantially',
      'Reduces electricity bills and prevents dryer overheating',
    ],
    recommendedFor: 'Any domestic or commercial tumble dryer running regularly',
  },
  {
    id: 'air-vent-sanitization',
    title: 'Air Vent Sanitization',
    category: 'air-health',
    shortDesc: 'Targeted antimicrobial treatment applied through ductwork to neutralize bacteria, pathogens, and foul odours.',
    bulletPoints: [
      'Eliminates stale, musty odors at the microbial source',
      'Hospital-safe, non-toxic sanitizing formulations',
      'Leaves the building smelling clean, neutral, and fresh',
    ],
    recommendedFor: 'Properties recovering from damp, musty smells, or renovations',
  },
  {
    id: 'ductwork-inspection',
    title: 'Ductwork Inspection',
    category: 'core',
    shortDesc: 'Detailed physical and visual assessment of duct integrity, leakages, disconnected joints, and contamination.',
    bulletPoints: [
      'Checks for structural gaps, tears, or loose duct seams',
      'Quantifies dust layer thickness and identifies moisture risks',
      'Transparent diagnosis before any work begins',
    ],
    recommendedFor: 'Older properties or before undertaking extensive renovation',
  },
  {
    id: 'mold-mildew-removal',
    title: 'Mold & Mildew Removal',
    category: 'air-health',
    shortDesc: 'Specialist eradication of mold spores and mildew colonies thriving inside damp or condensation-prone ducts.',
    bulletPoints: [
      'Identifies condensation sources within the ventilation run',
      'Safe spore containment preventing cross-room spread',
      'Antimicrobial surface barrier application',
    ],
    recommendedFor: 'Properties with visible black spotting or high indoor humidity',
  },
  {
    id: 'dust-debris-removal',
    title: 'Dust & Debris Removal',
    category: 'specialized',
    shortDesc: 'Deep vacuum extraction of post-construction plaster dust, sawdust, pet hair, and trapped renovation debris.',
    bulletPoints: [
      'Essential post-decorating and plastering remediation',
      'Captures microscopic silica and gypsum dust',
      'Prevents fine building dust from recirculating for months',
    ],
    recommendedFor: 'Homes or buildings that recently had builders, plastering, or joinery',
  },
  {
    id: 'ac-coil-cleaning',
    title: 'AC Coil Cleaning',
    category: 'specialized',
    shortDesc: 'Precision chemical-free or gentle foaming clean of evaporator and condenser coils to optimize thermal exchange.',
    bulletPoints: [
      'Clears insulating grime from delicate aluminum cooling fins',
      'Restores rapid cooling performance during warm months',
      'Prevents ice build-up and compressor burnout',
    ],
    recommendedFor: 'Split systems, heat pumps, and ducted air conditioning',
  },
  {
    id: 'air-quality-improvement',
    title: 'Air Quality Improvement',
    category: 'air-health',
    shortDesc: 'Holistic air hygiene service designed to reduce airborne triggers, allergens, and stagnant indoor atmosphere.',
    bulletPoints: [
      'Measurable reduction in airborne respirable particulates',
      'Relief for residents with asthma, hay fever, or allergies',
      'Balanced airflow distribution throughout all living zones',
    ],
    recommendedFor: 'Allergy sufferers and health-conscious households',
  },
];

export const TRUST_POINTS = [
  {
    title: 'Local Sale, Cheshire Specialist',
    description: 'Based directly on Kingston Drive in Sale (M33 2FS). Fast local scheduling with no remote call center middlemen.',
  },
  {
    title: '12 Comprehensive Clean Services',
    description: 'From routine residential ducts and dryer vent fire-hazard clearing to full commercial HVAC and mold eradication.',
  },
  {
    title: 'Direct Personal Service',
    description: 'Communicate directly with Declan Talbot for accurate quotes, honest inspections, and clear answers.',
  },
  {
    title: 'High-Filtration Dust Containment',
    description: 'Specialist negative pressure extraction keeps your furniture, carpets, and living rooms spotless during work.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Initial Assessment & Inspection',
    description: 'We evaluate the ventilation network, checking vent grilles, return channels, and identifying dust burden or moisture risks.',
  },
  {
    step: '02',
    title: 'System Containment & Negative Pressure',
    description: 'Powerful extraction equipment seals the ductwork under negative pressure so dislodged contaminants cannot enter your living areas.',
  },
  {
    step: '03',
    title: 'Mechanical Agitation & Deep Extraction',
    description: 'Specialized rotary brushes and air whips navigate the duct bends, dislodging stuck dirt, dander, lint, and debris directly into HEPA filtration.',
  },
  {
    step: '04',
    title: 'Sanitization & Component Cleansing',
    description: 'Air vents, faceplates, and system points undergo targeted sanitization to neutralize odors, mold spores, and bacteria.',
  },
  {
    step: '05',
    title: 'Final Airflow & Clean Verification',
    description: 'We test airflow delivery at key diffusers and present you with clear evidence of clean, unobstructed duct channels.',
  },
];

export const FAQS = [
  {
    question: 'How do I know if my air ducts or vents need cleaning?',
    answer:
      'Common indicators include visible dust billowing from vents when the system starts, dark gray staining around vent grilles, persistent musty odors, higher heating/cooling bills, or family members experiencing increased allergy symptoms indoors.',
  },
  {
    question: 'How often should residential ductwork be professionally cleaned?',
    answer:
      'For most homes in the UK, a thorough clean every 2 to 3 years is recommended. However, if you have pets, residents with asthma, or have recently completed building/renovation work, an annual inspection is ideal.',
  },
  {
    question: 'Why is dryer vent cleaning so important?',
    answer:
      'Tumble dryer vents accumulate highly flammable lint over time. When restricted, the dryer overheats, creating a severe fire hazard and doubling drying times. Regular cleaning ensures safety and reduces electricity waste.',
  },
  {
    question: 'Do you service both residential homes and commercial premises?',
    answer:
      'Yes. Declan Talbot handles private houses, flats, and bungalows as well as commercial offices, retail shops, and communal ventilation systems across Sale, Cheshire, and surrounding regions.',
  },
  {
    question: 'What do I need to prepare before the service?',
    answer:
      'Very little preparation is required. Simply ensure reasonable access to your main heating/ventilation unit, dryer vent, and room air grilles. We take care of floor protection and dust containment.',
  },
  {
    question: 'How can I get an exact quote or book a visit?',
    answer:
      'You can message directly on WhatsApp (+44 7460 691567) or call Declan Talbot on 07460 691567. We can discuss your property type, number of vents, and specific requirements to provide a straightforward price.',
  },
];
