import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight, Shield } from 'lucide-react';
import { CLIENT_CONTACT } from '../data/furnitureData';

interface ShowroomContactProps {
  onOpenEnquiryModal: () => void;
  onOpenVisitModal: () => void;
}

export const ShowroomContact: React.FC<ShowroomContactProps> = ({
  onOpenEnquiryModal,
  onOpenVisitModal,
}) => {
  return (
    <section id="contact-showroom" className="py-20 sm:py-28 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-[#D8B77A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#141414] border border-[#D8B77A]/25 p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8B77A]">
                Showroom & Direct Enquiries
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F4F0E8] mt-2 mb-4 tracking-tight leading-[1.12]">
                Let's Create a Space <span className="italic text-[#D8B77A]">You'll Love</span>
              </h2>
              <p className="text-base sm:text-lg text-[#B7B3AC] leading-relaxed mb-8 max-w-xl">
                Tell us what you're looking for and our team will help you find the right furniture for your space.
              </p>

              {/* Showroom Visiting Note (No fake address) */}
              <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#272727] mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#D8B77A]/15 text-[#D8B77A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-lg font-semibold text-[#F4F0E8]">
                      Visit Raghav Furniture
                    </h4>
                    <p className="text-xs sm:text-sm text-[#B7B3AC] mt-1">
                      {CLIENT_CONTACT.showroomNote}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-[#D8B77A]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{CLIENT_CONTACT.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Functional CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={CLIENT_CONTACT.phone1Tel}
                  id="contact-call-now-btn"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#D8B77A] hover:bg-[#E3C68E] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#D8B77A]/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={CLIENT_CONTACT.whatsapp1Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-bold text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                <button
                  type="button"
                  id="contact-enquire-btn"
                  onClick={onOpenEnquiryModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#202020] hover:bg-[#282828] border border-white/10 hover:border-[#D8B77A]/50 text-[#F4F0E8] font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <Mail className="w-4 h-4 text-[#D8B77A]" />
                  <span>Send an Enquiry</span>
                </button>
              </div>
            </div>

            {/* Right Prominent Helpline Cards */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#1B1B1B] border border-[#D8B77A]/35 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8B77A]/5 rounded-bl-full pointer-events-none" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D8B77A] bg-[#D8B77A]/10 px-3 py-1 rounded-full border border-[#D8B77A]/20 inline-block mb-3">
                  Direct Line 01
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F4F0E8] tracking-tight">
                  {CLIENT_CONTACT.phone1Formatted}
                </h3>
                <p className="text-xs text-[#B7B3AC] mt-1 mb-4">
                  Primary Showroom & Living Room Furniture Helpline
                </p>
                <div className="flex gap-2">
                  <a
                    href={CLIENT_CONTACT.phone1Tel}
                    className="flex-1 py-2.5 rounded-xl bg-[#252525] hover:bg-[#2D2D2D] border border-white/5 text-center text-xs font-semibold text-[#F4F0E8] flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D8B77A]" />
                    Call {CLIENT_CONTACT.phone1}
                  </a>
                  <a
                    href={CLIENT_CONTACT.whatsapp1Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-[#1B1B1B] border border-[#2A2A2A] hover:border-[#D8B77A]/30 shadow-xl transition-all">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B7B3AC] bg-white/5 px-3 py-1 rounded-full border border-white/5 inline-block mb-3">
                  Direct Line 02
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F4F0E8] tracking-tight">
                  {CLIENT_CONTACT.phone2Formatted}
                </h3>
                <p className="text-xs text-[#B7B3AC] mt-1 mb-4">
                  Bedrooms, Wardrobes & Custom Home Solutions
                </p>
                <div className="flex gap-2">
                  <a
                    href={CLIENT_CONTACT.phone2Tel}
                    className="flex-1 py-2.5 rounded-xl bg-[#252525] hover:bg-[#2D2D2D] border border-white/5 text-center text-xs font-semibold text-[#F4F0E8] flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D8B77A]" />
                    Call {CLIENT_CONTACT.phone2}
                  </a>
                  <a
                    href={CLIENT_CONTACT.whatsapp2Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
