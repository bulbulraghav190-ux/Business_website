import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/furnitureData';

interface FeaturedCollectionsProps {
  onSelectCategory: (categoryName: string) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8B77A]">
            Curated Spaces
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F4F0E8] mt-2 mb-4 tracking-tight">
            Designed For Every Room
          </h2>
          <div className="w-16 h-[2px] bg-[#D8B77A]/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#B7B3AC] leading-relaxed">
            Bring comfort, function and character to every corner of your home.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              id={`collection-card-${idx + 1}`}
              onClick={() => onSelectCategory(cat.name)}
              className="group relative rounded-3xl overflow-hidden bg-[#161616] border border-[#262626] hover:border-[#D8B77A]/50 transition-all duration-500 transform hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] cursor-pointer flex flex-col h-[380px] sm:h-[420px]"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={cat.image}
                  alt={`${cat.name} collection by Raghav Furniture`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Sophisticated Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

              {/* Item Count Pill at Top-Right */}
              <div className="relative z-10 p-5 flex justify-end">
                <span className="px-3 py-1 rounded-full bg-[#0D0D0D]/80 backdrop-blur-md border border-[#D8B77A]/30 text-[11px] font-medium text-[#D8B77A]">
                  {cat.itemCount}
                </span>
              </div>

              {/* Card Footer Information at Bottom */}
              <div className="relative z-10 mt-auto p-6 sm:p-7 flex items-end justify-between">
                <div className="pr-4">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#F4F0E8] group-hover:text-[#D8B77A] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B7B3AC] mt-1.5 line-clamp-2 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Arrow Action Badge */}
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1B]/90 border border-[#D8B77A]/30 group-hover:border-[#D8B77A] group-hover:bg-[#D8B77A] flex-shrink-0 flex items-center justify-center text-[#F4F0E8] group-hover:text-[#0D0D0D] transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
