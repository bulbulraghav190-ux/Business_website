import React from 'react';
import { Sparkles, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { heroLivingRoomImg, CLIENT_CONTACT } from '../data/furnitureData';

interface FinalCTAProps {
  onOpenQuoteModal: () => void;
  onExploreClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuoteModal, onExploreClick }) => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-[#D8B77A]/15">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroLivingRoomImg}
          alt="Raghav Furniture atmospheric dark luxury background"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Deep dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/85" />
        <div className="absolute inset-0 bg-[#0D0D0D]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B1B1B]/80 border border-[#D8B77A]/30 backdrop-blur-md mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D8B77A]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D8B77A] uppercase">
            RAGHAV FURNITURE
          </span>
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-medium text-[#F4F0E8] tracking-tight max-w-3xl leading-[1.08] mb-6">
          Your Space Deserves <span className="italic text-[#D8B77A]">Better Furniture</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#B7B3AC] max-w-2xl font-normal leading-relaxed mb-10">
          Explore furniture designed to make everyday living more comfortable, functional and beautiful.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <button
            type="button"
            id="final-cta-explore-btn"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D8B77A] to-[#C9A464] hover:from-[#E3C68E] hover:to-[#D8B77A] text-[#0D0D0D] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#D8B77A]/25 group"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 text-[#0D0D0D] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            id="final-cta-quote-btn"
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#141414]/90 hover:bg-[#1E1E1E] border border-[#F4F0E8]/25 hover:border-[#D8B77A] text-[#F4F0E8] hover:text-[#D8B77A] font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-[#D8B77A]" />
            <span>Get a Quote</span>
          </button>
        </div>

        {/* Phone Numbers Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-[#F4F0E8]">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#D8B77A]" />
            <span className="text-[#B7B3AC] text-xs">Direct Showroom:</span>
            <a href={CLIENT_CONTACT.phone1Tel} className="font-semibold hover:text-[#D8B77A] transition-colors">
              {CLIENT_CONTACT.phone1}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#D8B77A]" />
            <span className="text-[#B7B3AC] text-xs">Orders & Inquiries:</span>
            <a href={CLIENT_CONTACT.phone2Tel} className="font-semibold hover:text-[#D8B77A] transition-colors">
              {CLIENT_CONTACT.phone2}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <a
              href={CLIENT_CONTACT.whatsapp1Link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#25D366] hover:underline"
            >
              WhatsApp Us (Instant Reply)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
