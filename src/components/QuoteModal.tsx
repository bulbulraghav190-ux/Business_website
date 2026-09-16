import React, { useState } from 'react';
import { X, Sparkles, Send, MessageCircle, Phone, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { CLIENT_CONTACT } from '../data/furnitureData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: 'Complete Home Furniture',
    budget: '₹50,000+',
    timeline: 'Within 30 Days',
    notes: '',
  });

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
      `Hello Raghav Furniture,\n\nI would like to request a Free Quote:\n- Name: ${formData.name}\n- Contact: ${formData.phone}\n- Requirement: ${formData.requirement}\n- Estimated Budget: ${formData.budget}\n- Timeline: ${formData.timeline}\n- Details: ${formData.notes || 'None'}\n\nPlease share your estimate and available showroom collections.`
    );
    window.open(`https://wa.me/919719100250?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg rounded-3xl bg-[#161616] border border-[#D8B77A]/35 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#1A1A1A]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D8B77A]">
              Personalized Estimate
            </span>
            <h3 className="font-serif-luxury text-2xl font-medium text-[#F4F0E8] mt-0.5">
              Request a Free Furniture Quote
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-[#242424] hover:bg-[#303030] text-[#B7B3AC] hover:text-white transition-colors"
            aria-label="Close quote modal"
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
              Quote Request Received
            </h4>
            <p className="text-xs sm:text-sm text-[#B7B3AC] max-w-sm mx-auto mb-6">
              Thank you, {formData.name}. Our showroom designer will review your requirements for {formData.requirement} and call you at <strong className="text-[#F4F0E8]">{formData.phone}</strong>.
            </p>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp for Faster Quote</span>
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
          <div className="p-6 overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. Vikram Malhotra"
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

              {/* Mobile Phone */}
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

              {/* Scope Requirement */}
              <div>
                <label className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-1.5">
                  Furniture Requirement
                </label>
                <select
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full rounded-xl bg-[#202020] border border-white/10 focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-3.5 py-3 focus:outline-none transition-all cursor-pointer"
                >
                  <option value="Complete Home Furniture" className="bg-[#1A1A1A]">Complete Home Furniture Package</option>
                  <option value="Living Room Setup" className="bg-[#1A1A1A]">Living Room (Sofa, Tables, TV Unit)</option>
                  <option value="Master Bedroom" className="bg-[#1A1A1A]">Master Bedroom (King Bed, Wardrobe)</option>
                  <option value="Dining Room" className="bg-[#1A1A1A]">Dining Room Set (Table + Chairs)</option>
                  <option value="Home Office / Study" className="bg-[#1A1A1A]">Home Office / Study Desk & Storage</option>
                  <option value="Custom Made Furniture" className="bg-[#1A1A1A]">Custom Made Furniture by Dimension</option>
                </select>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-1.5">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full rounded-xl bg-[#202020] border border-white/10 focus:border-[#D8B77A] text-xs sm:text-sm text-[#F4F0E8] px-3 py-3 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Under ₹25,000" className="bg-[#1A1A1A]">Under ₹25,000</option>
                    <option value="₹25,000–₹50,000" className="bg-[#1A1A1A]">₹25k–₹50k</option>
                    <option value="₹50,000–₹1,00,000" className="bg-[#1A1A1A]">₹50k–₹1 Lakh</option>
                    <option value="₹1,00,000+" className="bg-[#1A1A1A]">₹1 Lakh+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-1.5">
                    Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full rounded-xl bg-[#202020] border border-white/10 focus:border-[#D8B77A] text-xs sm:text-sm text-[#F4F0E8] px-3 py-3 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Immediately" className="bg-[#1A1A1A]">Immediately</option>
                    <option value="Within 30 Days" className="bg-[#1A1A1A]">Within 30 Days</option>
                    <option value="1-3 Months" className="bg-[#1A1A1A]">1-3 Months</option>
                    <option value="Exploring Ideas" className="bg-[#1A1A1A]">Exploring</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-1.5">
                  Space Notes or Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Prefer dark walnut wood with grey upholstery..."
                  className="w-full rounded-xl bg-[#202020] border border-white/10 focus:border-[#D8B77A] text-sm text-[#F4F0E8] p-3 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D8B77A] to-[#C9A464] hover:from-[#E3C68E] hover:to-[#D8B77A] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#D8B77A]/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Calculating Quote...' : 'Submit Quote Request'}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#B7B3AC]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D8B77A]" />
                <span>Zero obligations • Confidential consultation</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
