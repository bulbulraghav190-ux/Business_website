import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl rounded-3xl bg-[#161616] border border-[#D8B77A]/35 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden max-h-[80vh] flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#1A1A1A]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#D8B77A]" />
            <h3 className="font-serif-luxury text-2xl font-medium text-[#F4F0E8]">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-[#242424] hover:bg-[#303030] text-[#B7B3AC] hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-[#B7B3AC] leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At <strong>Raghav Furniture</strong>, we respect your privacy and are committed to protecting the contact details and personal information you share with us.
              </p>
              <h4 className="text-sm font-semibold text-[#F4F0E8] uppercase tracking-wider">
                1. Information We Collect
              </h4>
              <p>
                When you submit an enquiry, request a callback, or contact us via WhatsApp or phone, we collect your name, phone number, room requirements, and budget preference strictly to communicate with you about your furniture needs.
              </p>
              <h4 className="text-sm font-semibold text-[#F4F0E8] uppercase tracking-wider">
                2. Use of Information
              </h4>
              <p>
                Your information is used solely to respond to your product inquiries, provide tailored quotation estimates, coordinate showroom visits, and facilitate delivery and warranty service. We never sell, rent, or distribute your contact details to third parties.
              </p>
              <h4 className="text-sm font-semibold text-[#F4F0E8] uppercase tracking-wider">
                3. Direct Showroom Inquiries
              </h4>
              <p>
                You may contact our showroom at any time via 9719100250 or 9058214450 to update or request the removal of your contact information from our callback system.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>Raghav Furniture</strong>. By viewing our collections and utilizing our enquiry services, you acknowledge the following terms:
              </p>
              <h4 className="text-sm font-semibold text-[#F4F0E8] uppercase tracking-wider">
                1. Product Specifications & Wood Finishes
              </h4>
              <p>
                Because our furniture utilizes natural hardwoods, wood grains, veneers, and woven textiles, minor natural grain variations, organic knots, and subtle tone variations are inherent characteristics of authentic craftsmanship.
              </p>
              <h4 className="text-sm font-semibold text-[#F4F0E8] uppercase tracking-wider">
                2. Showroom Estimates & Availability
              </h4>
              <p>
                Displayed catalog prices and quotes are indicative showroom estimates in INR. Custom dimensions, bespoke upholstery upgrades, and specialized delivery configurations will be confirmed directly with our showroom team prior to order placement.
              </p>
              <h4 className="text-sm font-semibold text-[#F4F0E8] uppercase tracking-wider">
                3. Warranty & Care
              </h4>
              <p>
                Applicable craftsmanship and structural frame warranties cover genuine manufacturing defects under normal residential usage conditions as detailed on your showroom invoice.
              </p>
            </>
          )}
        </div>

        <div className="p-4 border-t border-white/10 bg-[#1A1A1A] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#D8B77A] text-black font-semibold text-xs uppercase"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
