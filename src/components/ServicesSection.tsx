import React from 'react';
import { Compass, Home, Sparkles, MapPin, PhoneCall, ArrowRight } from 'lucide-react';
import { SERVICES, CLIENT_CONTACT } from '../data/furnitureData';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
  onOpenVisitModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenConsultation,
  onOpenVisitModal,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return Compass;
      case 'Home':
        return Home;
      case 'Sparkles':
        return Sparkles;
      case 'MapPin':
        return MapPin;
      case 'PhoneCall':
        return PhoneCall;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#111111] border-t border-[#D8B77A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8B77A]">
            Comprehensive Service
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F4F0E8] mt-2 mb-4 tracking-tight">
            More Than Furniture
          </h2>
          <div className="w-16 h-[2px] bg-[#D8B77A]/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#B7B3AC] leading-relaxed">
            From initial spatial planning and material selection to showroom walkthroughs and doorstep support.
          </p>
        </div>

        {/* 5 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((serv, idx) => {
            const Icon = getIcon(serv.iconName);
            const isWide = idx === 0 || idx === 3;
            return (
              <div
                key={serv.id}
                id={`service-card-${idx + 1}`}
                className="group rounded-3xl bg-[#171717] border border-[#262626] hover:border-[#D8B77A]/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[0_16px_35px_rgba(0,0,0,0.7)]"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-[#222222] border border-[#D8B77A]/25 text-[#D8B77A] group-hover:bg-[#D8B77A] group-hover:text-[#0D0D0D] flex items-center justify-center mb-6 transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-medium text-[#F4F0E8] group-hover:text-[#D8B77A] transition-colors mb-3">
                    {serv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B7B3AC] leading-relaxed">
                    {serv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#D8B77A] uppercase tracking-wider">
                    Client Benefit
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#B7B3AC] group-hover:text-[#D8B77A] group-hover:bg-[#D8B77A]/10 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct Quick Action Banner */}
          <div className="rounded-3xl bg-gradient-to-br from-[#1E1A14] to-[#121212] border border-[#D8B77A]/40 p-7 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#D8B77A] text-[#0D0D0D] flex items-center justify-center mb-6 shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-medium text-[#F4F0E8] mb-3">
                Need Fast Recommendations?
              </h3>
              <p className="text-xs sm:text-sm text-[#B7B3AC] leading-relaxed">
                Connect with our showroom advisors directly via phone or WhatsApp with your room photos or dimensions.
              </p>
            </div>

            <div className="pt-6 mt-6 space-y-2">
              <button
                type="button"
                id="service-book-consult-btn"
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-xl bg-[#D8B77A] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider transition-all hover:bg-[#E3C68E] shadow-md"
              >
                Book Free Consultation
              </button>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={CLIENT_CONTACT.phone1Tel}
                  className="py-2.5 px-2 rounded-xl bg-[#222] text-center text-xs font-semibold text-[#F4F0E8] hover:border-[#D8B77A]/50 border border-white/5"
                >
                  Call {CLIENT_CONTACT.phone1}
                </a>
                <a
                  href={CLIENT_CONTACT.whatsapp1Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-2 rounded-xl bg-[#25D366]/20 text-center text-xs font-semibold text-[#25D366] hover:bg-[#25D366]/30 border border-[#25D366]/30"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
