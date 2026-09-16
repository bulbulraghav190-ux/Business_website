import React from 'react';
import { CheckCircle2, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { TRUST_INDICATORS, CLIENT_CONTACT, heroLivingRoomImg } from '../data/furnitureData';

interface WhyChooseUsProps {
  onOpenConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about-us" className="py-20 sm:py-28 bg-[#111111] border-t border-[#D8B77A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Interior Showcase with Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#D8B77A]/30 shadow-2xl bg-[#161616]">
              <img
                src={heroLivingRoomImg}
                alt="Raghav Furniture showroom quality interior showcase"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />

              {/* Floating Trust Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-[#D8B77A]/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D8B77A]/15 text-[#D8B77A] flex items-center justify-center font-serif-luxury font-bold text-lg">
                      RF
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F4F0E8]">
                        Showroom Authenticity
                      </h4>
                      <p className="text-xs text-[#B7B3AC]">
                        Touch, feel, and inspect fabrics in person
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#D8B77A] uppercase tracking-wider">
                    Showroom Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Value Proposition */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8B77A]">
              The Raghav Standard
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-medium text-[#F4F0E8] mt-2 mb-6 tracking-tight leading-[1.12]">
              Furniture Chosen For <span className="italic text-[#D8B77A]">Real Homes</span>
            </h2>

            <p className="text-sm sm:text-base text-[#B7B3AC] leading-relaxed mb-8">
              We curate and craft furniture that strikes the ideal balance between aspirational luxury and practical everyday resilience. No fragile showpieces—every frame, cushion, and hinge is built to support comfortable family living for years to come.
            </p>

            {/* 4 Qualitative Trust Indicators (Zero deceptive metrics) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {TRUST_INDICATORS.map((indicator) => (
                <div
                  key={indicator.title}
                  className="p-4 rounded-2xl bg-[#171717] border border-[#262626] hover:border-[#D8B77A]/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D8B77A] flex-shrink-0" />
                    <h4 className="text-sm font-semibold text-[#F4F0E8]">
                      {indicator.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#B7B3AC] leading-relaxed pl-6">
                    {indicator.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Helpline and Consultation Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                id="why-choose-consult-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D8B77A] hover:bg-[#E3C68E] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#D8B77A]/15"
              >
                <Sparkles className="w-4 h-4" />
                <span>Speak With Our Team</span>
              </button>

              <a
                href={CLIENT_CONTACT.phone1Tel}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1F1F1F] hover:bg-[#282828] border border-white/10 text-xs font-semibold text-[#F4F0E8]"
              >
                <Phone className="w-3.5 h-3.5 text-[#D8B77A]" />
                <span>{CLIENT_CONTACT.phone1Formatted}</span>
              </a>

              <a
                href={CLIENT_CONTACT.whatsapp1Link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs font-semibold text-[#25D366]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
