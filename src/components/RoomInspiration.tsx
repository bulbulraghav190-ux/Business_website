import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ROOM_STYLES } from '../data/furnitureData';

interface RoomInspirationProps {
  onSelectStyle: (styleTitle: string) => void;
}

export const RoomInspiration: React.FC<RoomInspirationProps> = ({ onSelectStyle }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8B77A]">
            Interior Aesthetics
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F4F0E8] mt-2 mb-4 tracking-tight">
            Find Your Room Style
          </h2>
          <div className="w-16 h-[2px] bg-[#D8B77A]/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#B7B3AC] leading-relaxed">
            Explore curated design directions to inspire your living spaces, bedrooms and dining areas.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {ROOM_STYLES.map((style, idx) => (
            <div
              key={style.id}
              id={`room-style-${idx + 1}`}
              onClick={() => onSelectStyle(style.title)}
              className={`${style.aspectRatioClass} group relative rounded-3xl overflow-hidden bg-[#151515] border border-[#242424] hover:border-[#D8B77A]/50 transition-all duration-500 transform hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] cursor-pointer h-[360px] sm:h-[440px] flex flex-col justify-end`}
            >
              {/* Background Photography */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={style.image}
                  alt={`${style.title} interior style by Raghav Furniture`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Layered Dark Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/65 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

              {/* Content Panel */}
              <div className="relative z-10 p-6 sm:p-8 flex items-end justify-between">
                <div className="max-w-md pr-4">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8B77A] block mb-1">
                    {style.tagline}
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#F4F0E8] group-hover:text-[#D8B77A] transition-colors leading-snug">
                    {style.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B7B3AC] mt-2 leading-relaxed line-clamp-2">
                    {style.description}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#1B1B1B]/90 border border-[#D8B77A]/30 group-hover:border-[#D8B77A] group-hover:bg-[#D8B77A] flex-shrink-0 flex items-center justify-center text-[#F4F0E8] group-hover:text-[#0D0D0D] transition-all duration-300 shadow-xl">
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
