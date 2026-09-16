import React from 'react';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { natureLivingImg } from '../data/furnitureData';

interface NatureLivingProps {
  onExploreNaturalLiving: () => void;
}

export const NatureLiving: React.FC<NatureLivingProps> = ({ onExploreNaturalLiving }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#0D0D0D] relative overflow-hidden">
      {/* Subtle Warm Amber Glow Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D8B77A]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#141414] border border-[#D8B77A]/25 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Editorial Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 order-2 lg:order-1 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1F1F] border border-[#D8B77A]/30 w-fit mb-6">
                <Leaf className="w-3.5 h-3.5 text-[#D8B77A]" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-[#D8B77A]">
                  EDITORIAL SPOTLIGHT
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-5xl font-medium text-[#F4F0E8] leading-[1.12] mb-6 tracking-tight">
                Bring Nature Into Your <span className="italic text-[#D8B77A]">Home</span>
              </h2>

              <p className="text-base sm:text-lg text-[#B7B3AC] font-normal leading-relaxed mb-8">
                Natural materials, warm textures and timeless forms come together to create spaces that feel calm, welcoming and beautifully lived in.
              </p>

              {/* Material Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-9">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#D8B77A] font-semibold">
                    Seasoned Timber
                  </h4>
                  <p className="text-xs text-[#B7B3AC] mt-1">
                    Kiln-dried solid woods with exposed natural grain
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#D8B77A] font-semibold">
                    Organic Weaves
                  </h4>
                  <p className="text-xs text-[#B7B3AC] mt-1">
                    Breathable linen & textured boucles in warm stone tones
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  id="explore-natural-living-btn"
                  onClick={onExploreNaturalLiving}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D8B77A] to-[#C9A464] hover:from-[#E3C68E] hover:to-[#D8B77A] text-[#0D0D0D] font-bold text-xs tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#D8B77A]/15 group"
                >
                  <span>Explore Natural Living</span>
                  <ArrowRight className="w-4 h-4 text-[#0D0D0D] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Large Magazine-style Interior Photography */}
            <div className="lg:col-span-7 h-[360px] sm:h-[480px] lg:h-[580px] relative overflow-hidden order-1 lg:order-2">
              <img
                src={natureLivingImg}
                alt="Nature-inspired luxury dining room interior with solid teak wood table and organic textures at Raghav Furniture"
                className="w-full h-full object-cover object-center transform hover:scale-104 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#141414] lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
