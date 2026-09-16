import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIAL_THEMES } from '../data/furnitureData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8B77A]">
            Client Experiences
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F4F0E8] mt-2 mb-4 tracking-tight">
            What Customers Value
          </h2>
          <div className="w-16 h-[2px] bg-[#D8B77A]/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#B7B3AC] leading-relaxed">
            The values and craftsmanship principles that consistently matter to homeowners and families choosing Raghav Furniture.
          </p>
        </div>

        {/* 4 Thematic Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIAL_THEMES.map((item, idx) => (
            <div
              key={item.id}
              id={`testimonial-card-${idx + 1}`}
              className="rounded-3xl bg-[#151515] border border-[#242424] hover:border-[#D8B77A]/40 p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D8B77A] text-[#D8B77A]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#D8B77A]/30" />
                </div>

                <h3 className="text-xs uppercase tracking-wider font-bold text-[#D8B77A] mb-3">
                  {item.aspect}
                </h3>

                <p className="text-xs sm:text-sm text-[#F4F0E8]/90 italic leading-relaxed mb-6 font-serif-luxury">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-xs text-[#B7B3AC] font-medium block">
                  {item.clientContext}
                </span>
                <span className="text-[10px] text-[#D8B77A]/70 uppercase tracking-wider mt-0.5 block">
                  Raghav Furniture Client Feedback
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
