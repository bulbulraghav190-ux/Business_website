import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, Send, CheckCircle2, AlertCircle, Shield } from 'lucide-react';
import { CLIENT_CONTACT } from '../data/furnitureData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  productName,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: productName || '',
    message: '',
    preferredContact: 'whatsapp' as 'whatsapp' | 'phone',
  });

  useEffect(() => {
    if (productName) {
      setFormData((prev) => ({ ...prev, product: productName }));
    }
  }, [productName]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Raghav Furniture,\n\nI want to enquire regarding:\n- Product/Collection: ${formData.product || 'General Enquiry'}\n- Name: ${formData.name}\n- Contact: ${formData.phone}\n- Message: ${formData.message || 'Please share details and best price.'}`
    );
    window.open(`https://wa.me/919719100250?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg rounded-3xl bg-[#161616] border border-[#D8B77A]/35 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#1A1A1A]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D8B77A]">
              Direct Showroom Enquiry
            </span>
            <h3 className="font-serif-luxury text-2xl font-medium text-[#F4F0E8] mt-0.5">
              {formData.product ? `Enquire: ${formData.product}` : 'Furniture Enquiry'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-[#242424] hover:bg-[#303030] text-[#B7B3AC] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif-luxury text-2xl font-medium text-[#F4F0E8] mb-2">
              Enquiry Sent Successfully
            </h4>
            <p className="text-xs sm:text-sm text-[#B7B3AC] max-w-sm mx-auto mb-6">
              Our showroom advisor will get in touch with you shortly at <strong className="text-[#F4F0E8]">{formData.phone}</strong>.
            </p>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 rounded-xl bg-[#242424] text-xs font-semibold text-[#B7B3AC] hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. Ankit Verma"
                  className={`w-full rounded-xl bg-[#202020] border ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  } focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-3.5 py-3 focus:outline-none transition-all`}
                />
                {errors.name && (
                  <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  placeholder="e.g. 9876543210"
                  maxLength={14}
                  className={`w-full rounded-xl bg-[#202020] border ${
                    errors.phone ? 'border-red-500' : 'border-white/10'
                  } focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-3.5 py-3 focus:outline-none transition-all`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Product */}
              <div>
                <label className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-1.5">
                  Furniture / Product
                </label>
                <input
                  type="text"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  placeholder="e.g. Modern Comfort Sofa, Dining Set, Wardrobe"
                  className="w-full rounded-xl bg-[#202020] border border-white/10 focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-3.5 py-3 focus:outline-none transition-all"
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      formData.preferredContact === 'whatsapp'
                        ? 'bg-[#25D366]/20 border-[#25D366] text-[#25D366]'
                        : 'bg-[#202020] border-white/10 text-[#B7B3AC]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredContact: 'phone' })}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      formData.preferredContact === 'phone'
                        ? 'bg-[#D8B77A]/20 border-[#D8B77A] text-[#D8B77A]'
                        : 'bg-[#202020] border-white/10 text-[#B7B3AC]'
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    Phone Call
                  </button>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-1.5">
                  Specific Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Need custom dimensions, fabric swatches, or delivery timeline..."
                  className="w-full rounded-xl bg-[#202020] border border-white/10 focus:border-[#D8B77A] text-sm text-[#F4F0E8] p-3 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Send Enquiry Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D8B77A] to-[#C9A464] hover:from-[#E3C68E] hover:to-[#D8B77A] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#D8B77A]/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
              </button>
            </form>

            {/* Direct Call Helplines */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-[11px] text-[#B7B3AC] text-center mb-2.5 uppercase tracking-wider font-semibold">
                Or Call Showroom Directly
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={CLIENT_CONTACT.phone1Tel}
                  className="py-2.5 px-2 rounded-xl bg-[#222] border border-white/5 hover:border-[#D8B77A]/40 text-center text-xs font-semibold text-[#F4F0E8] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D8B77A]" />
                  Call {CLIENT_CONTACT.phone1}
                </a>
                <a
                  href={CLIENT_CONTACT.phone2Tel}
                  className="py-2.5 px-2 rounded-xl bg-[#222] border border-white/5 hover:border-[#D8B77A]/40 text-center text-xs font-semibold text-[#F4F0E8] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D8B77A]" />
                  Call {CLIENT_CONTACT.phone2}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
