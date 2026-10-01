/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LocationArea } from './components/LocationArea';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Air Duct Cleaning']);

  const handleToggleService = (serviceTitle: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceTitle) ? prev.filter((s) => s !== serviceTitle) : [...prev, serviceTitle]
    );
  };

  const handleClearSelectedServices = () => {
    setSelectedServices([]);
  };

  const handleScrollToQuoteBuilder = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans pb-16 sm:pb-0">
      {/* Top sticky navigation */}
      <Navbar onOpenQuoteBuilder={handleScrollToQuoteBuilder} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onSelectServiceTab={handleScrollToQuoteBuilder} />

        {/* 2. Services Section (All 12 specialized services) */}
        <ServicesSection
          selectedServices={selectedServices}
          onToggleService={handleToggleService}
          onOpenQuoteBuilder={handleScrollToQuoteBuilder}
        />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Trust & 5. Operational Reassurance Standards */}
        <WhyChooseUs />

        {/* 6. Location & Service Area */}
        <LocationArea />

        {/* 7. Contact Hub & Interactive Quote Builder */}
        <ContactSection
          selectedServices={selectedServices}
          onToggleService={handleToggleService}
          onClearSelectedServices={handleClearSelectedServices}
        />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Sticky Mobile Conversion Bar */}
      <StickyMobileBar />
    </div>
  );
}
