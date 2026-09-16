import React from 'react';
import { ShieldCheck, Compass, Users, MessageSquare } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: 'Quality Craftsmanship',
      description: 'Furniture designed with attention to materials and finishing.',
    },
    {
      icon: Compass,
      title: 'Modern Designs',
      description: 'Contemporary styles created for today’s homes.',
    },
    {
      icon: Users,
      title: 'Personalized Assistance',
      description: 'Helpful guidance based on your room, style and requirements.',
    },
    {
      icon: MessageSquare,
      title: 'Easy Enquiry',
      description: 'Quick assistance through phone and WhatsApp.',
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#0D0D0D] border-y border-[#D8B77A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                id={`trust-item-${idx + 1}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#D8B77A]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1D1D1D] border border-[#D8B77A]/25 flex-shrink-0 flex items-center justify-center text-[#D8B77A] group-hover:bg-[#D8B77A] group-hover:text-[#0D0D0D] transition-colors duration-300 shadow-md">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-lg font-semibold text-[#F4F0E8] group-hover:text-[#D8B77A] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#B7B3AC] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
