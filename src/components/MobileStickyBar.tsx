import React, { useState } from 'react';
import { Phone, MessageCircle, FileText, ChevronUp, X } from 'lucide-react';
import { CLIENT_CONTACT } from '../data/furnitureData';

interface MobileStickyBarProps {
  onOpenEnquiryModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenEnquiryModal }) => {
  const [callSheetOpen, setCallSheetOpen] = useState(false);

  return (
    <>
      {/* Call Selection Sheet on Mobile */}
      {callSheetOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:hidden animate-in fade-in duration-200">
          <div className="w-full bg-[#171717] rounded-t-3xl border-t border-[#D8B77A]/30 p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h4 className="font-serif-luxury text-lg font-semibold text-[#F4F0E8]">
                  Call Raghav Furniture
                </h4>
                <p className="text-xs text-[#B7B3AC]">Choose showroom direct helpline</p>
              </div>
              <button
                type="button"
                onClick={() => setCallSheetOpen(false)}
                className="p-2 rounded-full bg-[#242424] text-[#B7B3AC] hover:text-white"
                aria-label="Close call options"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <a
                href={CLIENT_CONTACT.phone1Tel}
                onClick={() => setCallSheetOpen(false)}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#222] border border-[#D8B77A]/20 hover:border-[#D8B77A]/50 text-[#F4F0E8] font-medium"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D8B77A]/15 flex items-center justify-center text-[#D8B77A]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{CLIENT_CONTACT.phone1}</div>
                    <div className="text-[11px] text-[#B7B3AC]">Primary Showroom Line</div>
                  </div>
                </div>
                <span className="text-xs bg-[#D8B77A] text-black font-semibold px-3 py-1.5 rounded-full">
                  Call
                </span>
              </a>

              <a
                href={CLIENT_CONTACT.phone2Tel}
                onClick={() => setCallSheetOpen(false)}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#222] border border-[#D8B77A]/20 hover:border-[#D8B77A]/50 text-[#F4F0E8] font-medium"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D8B77A]/15 flex items-center justify-center text-[#D8B77A]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{CLIENT_CONTACT.phone2}</div>
                    <div className="text-[11px] text-[#B7B3AC]">Support & Orders</div>
                  </div>
                </div>
                <span className="text-xs bg-[#D8B77A] text-black font-semibold px-3 py-1.5 rounded-full">
                  Call
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Bar */}
      <div
        id="mobile-sticky-contact-bar"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#111111]/95 backdrop-blur-lg border-t border-[#D8B77A]/25 px-3 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.8)]"
      >
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call Option */}
          <button
            type="button"
            id="mobile-sticky-call-btn"
            onClick={() => setCallSheetOpen(true)}
            className="flex flex-col items-center justify-center min-h-[48px] py-1.5 rounded-xl bg-[#1D1D1D] hover:bg-[#252525] active:scale-95 border border-[#D8B77A]/20 text-[#F4F0E8] transition-all"
          >
            <Phone className="w-4 h-4 text-[#D8B77A] mb-0.5" />
            <span className="text-[11px] font-semibold tracking-wide">Call</span>
          </button>

          {/* WhatsApp Option */}
          <a
            id="mobile-sticky-whatsapp-btn"
            href={CLIENT_CONTACT.whatsapp1Link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center min-h-[48px] py-1.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 active:scale-95 border border-[#25D366]/40 text-[#25D366] transition-all"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
          </a>

          {/* Enquire Option */}
          <button
            type="button"
            id="mobile-sticky-enquire-btn"
            onClick={onOpenEnquiryModal}
            className="flex flex-col items-center justify-center min-h-[48px] py-1.5 rounded-xl bg-gradient-to-r from-[#D8B77A] to-[#C9A464] active:scale-95 text-[#0D0D0D] font-bold shadow-md shadow-[#D8B77A]/20 transition-all"
          >
            <FileText className="w-4 h-4 mb-0.5 text-[#0D0D0D]" />
            <span className="text-[11px] font-bold tracking-wide">Enquire</span>
          </button>
        </div>
      </div>
    </>
  );
};
