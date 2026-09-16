import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { CLIENT_CONTACT } from '../data/furnitureData';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    furnitureType: '',
    room: 'Living Room',
    budget: '₹25,000–₹50,000',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.furnitureType.trim()) {
      errs.furnitureType = 'Please specify what furniture you are looking for';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Raghav Furniture,\n\nI am looking for custom furniture:\n- Name: ${formData.fullName}\n- Phone: ${formData.phone}\n- Looking for: ${formData.furnitureType}\n- Room: ${formData.room}\n- Budget: ${formData.budget}\n- Note: ${formData.message || 'None'}\n\nPlease share catalog options and pricing.`
    );
    window.open(`https://wa.me/919719100250?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 sm:py-28 bg-[#111111] border-t border-[#D8B77A]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#171717] border border-[#D8B77A]/30 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8B77A]">
              Personalized Inquiries
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F4F0E8] mt-2 mb-3 tracking-tight">
              Looking For Something Specific?
            </h2>
            <p className="text-sm sm:text-base text-[#B7B3AC] leading-relaxed">
              Tell us your dimensions, space requirements or design ideas. Our showroom specialists will prepare options and estimated pricing for you.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 sm:p-10 rounded-2xl bg-[#141414] border border-[#25D366]/40 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#F4F0E8] mb-2">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-sm text-[#B7B3AC] max-w-md mx-auto mb-6">
                We have received your furniture requirement for your {formData.room}. Our team will contact you shortly at <strong className="text-[#F4F0E8]">{formData.phone}</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Direct on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      furnitureType: '',
                      room: 'Living Room',
                      budget: '₹25,000–₹50,000',
                      message: '',
                    });
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#222] hover:bg-[#282828] text-xs font-semibold text-[#B7B3AC] hover:text-[#F4F0E8] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="lead-full-name"
                    className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="lead-full-name"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Rajesh Sharma"
                    className={`w-full rounded-2xl bg-[#1F1F1F] border ${
                      errors.fullName ? 'border-red-500' : 'border-white/10 hover:border-[#D8B77A]/40'
                    } focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#D8B77A] transition-all`}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label
                    htmlFor="lead-phone"
                    className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-2"
                  >
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="lead-phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="e.g. 9876543210"
                    maxLength={14}
                    className={`w-full rounded-2xl bg-[#1F1F1F] border ${
                      errors.phone ? 'border-red-500' : 'border-white/10 hover:border-[#D8B77A]/40'
                    } focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#D8B77A] transition-all`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* What furniture are you looking for */}
              <div>
                <label
                  htmlFor="lead-furniture-type"
                  className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-2"
                >
                  What furniture are you looking for? *
                </label>
                <input
                  type="text"
                  id="lead-furniture-type"
                  value={formData.furnitureType}
                  onChange={(e) => {
                    setFormData({ ...formData, furnitureType: e.target.value });
                    if (errors.furnitureType) setErrors({ ...errors, furnitureType: '' });
                  }}
                  placeholder="e.g. 6-Seater wooden dining table, or L-shape modular sofa"
                  className={`w-full rounded-2xl bg-[#1F1F1F] border ${
                    errors.furnitureType ? 'border-red-500' : 'border-white/10 hover:border-[#D8B77A]/40'
                  } focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#D8B77A] transition-all`}
                />
                {errors.furnitureType && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.furnitureType}
                  </p>
                )}
              </div>

              {/* Room & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="lead-room"
                    className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-2"
                  >
                    Target Room
                  </label>
                  <select
                    id="lead-room"
                    value={formData.room}
                    onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                    className="w-full rounded-2xl bg-[#1F1F1F] border border-white/10 focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#D8B77A] transition-all cursor-pointer"
                  >
                    <option value="Living Room" className="bg-[#1A1A1A]">Living Room</option>
                    <option value="Bedroom" className="bg-[#1A1A1A]">Bedroom</option>
                    <option value="Dining Area" className="bg-[#1A1A1A]">Dining Area</option>
                    <option value="Home Workspace" className="bg-[#1A1A1A]">Home Workspace</option>
                    <option value="Complete Home" className="bg-[#1A1A1A]">Complete Home</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="lead-budget"
                    className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-2"
                  >
                    Approximate Budget
                  </label>
                  <select
                    id="lead-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full rounded-2xl bg-[#1F1F1F] border border-white/10 focus:border-[#D8B77A] text-sm text-[#F4F0E8] px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#D8B77A] transition-all cursor-pointer"
                  >
                    <option value="Under ₹10,000" className="bg-[#1A1A1A]">Under ₹10,000</option>
                    <option value="₹10,000–₹25,000" className="bg-[#1A1A1A]">₹10,000–₹25,000</option>
                    <option value="₹25,000–₹50,000" className="bg-[#1A1A1A]">₹25,000–₹50,000</option>
                    <option value="₹50,000+" className="bg-[#1A1A1A]">₹50,000+</option>
                  </select>
                </div>
              </div>

              {/* Message / Space details */}
              <div>
                <label
                  htmlFor="lead-message"
                  className="block text-xs font-semibold text-[#D8B77A] uppercase tracking-wider mb-2"
                >
                  Additional Details or Room Dimensions (Optional)
                </label>
                <textarea
                  id="lead-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any details like wall length, preferred fabric colour, or specific wood finish..."
                  className="w-full rounded-2xl bg-[#1F1F1F] border border-white/10 hover:border-[#D8B77A]/40 focus:border-[#D8B77A] text-sm text-[#F4F0E8] p-4 focus:outline-none focus:ring-1 focus:ring-[#D8B77A] transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="lead-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#D8B77A] to-[#C9A464] hover:from-[#E3C68E] hover:to-[#D8B77A] text-[#0D0D0D] font-bold text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#D8B77A]/20 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#D8B77A]"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request a Callback</span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Microcopy */}
              <div className="flex items-center justify-center gap-2 text-center text-xs text-[#B7B3AC] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D8B77A]" />
                <span>Your details are used only to respond to your enquiry.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
