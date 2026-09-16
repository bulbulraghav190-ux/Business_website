import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck } from 'lucide-react';
import { heroLivingRoomImg, CLIENT_CONTACT } from '../data/furnitureData';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Cinematic Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.07 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src={heroLivingRoomImg}
            alt="Raghav Furniture luxury living room showroom collection featuring modern modular sofa and warm ambient lighting"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Sophisticated Dark Gradient Overlays for Readability & Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/95 via-[#0D0D0D]/80 to-[#0D0D0D]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0D0D0D_85%)] opacity-70 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Small Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B1B1B]/80 border border-[#D8B77A]/30 backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D8B77A] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#D8B77A] uppercase">
            CRAFTED FOR MODERN LIVING
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-[#F4F0E8] max-w-5xl leading-[1.04] text-balance mb-3"
        >
          Raghav <span className="italic text-[#D8B77A] font-normal">Furniture</span>
        </motion.h1>

        {/* Mini Tagline after Raghav Furniture */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#D8B77A] italic font-normal tracking-wide mb-5"
        >
          Furniture that turns spaces into home.
        </motion.p>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-[#B7B3AC] max-w-2xl font-normal leading-relaxed mb-9"
        >
          Discover thoughtfully designed furniture that brings comfort, character and timeless style to every room.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D8B77A] to-[#C9A464] hover:from-[#E4C992] hover:to-[#D8B77A] text-[#0D0D0D] font-bold text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-[#D8B77A]/20 focus:outline-none focus:ring-2 focus:ring-[#D8B77A] group"
          >
            <span>Explore Furniture</span>
            <ArrowRight className="w-4 h-4 text-[#0D0D0D] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            id="hero-quote-btn"
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#161616]/80 hover:bg-[#202020] border border-[#F4F0E8]/30 hover:border-[#D8B77A] text-[#F4F0E8] hover:text-[#D8B77A] font-semibold text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <Sparkles className="w-4 h-4 text-[#D8B77A]" />
            <span>Get a Free Quote</span>
          </button>
        </motion.div>

        {/* Supporting Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-10 sm:mt-12 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-[#B7B3AC]/90"
        >
          <span className="text-[#D8B77A]">Premium Designs</span>
          <span className="text-[#D8B77A]/40">•</span>
          <span>Quality Craftsmanship</span>
          <span className="text-[#D8B77A]/40">•</span>
          <span className="text-[#D8B77A]">Personal Service</span>
        </motion.div>
      </div>
    </section>
  );
};
