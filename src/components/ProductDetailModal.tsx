import React from 'react';
import { X, Check, Phone, MessageCircle, ShieldCheck, Ruler, Layers, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { CLIENT_CONTACT } from '../data/furnitureData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onEnquire,
}) => {
  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Raghav Furniture,\n\nI am interested in:\nProduct: ${product.name}\nPrice: ${formatPrice(product.price)}\nCategory: ${product.category}\n\nPlease share availability, finish options, and delivery timeline.`
    );
    window.open(`https://wa.me/919719100250?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl rounded-3xl bg-[#161616] border border-[#D8B77A]/35 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-[#1A1A1A]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D8B77A] bg-[#D8B77A]/10 px-2.5 py-1 rounded-md border border-[#D8B77A]/25">
              {product.category}
            </span>
            <span className="text-xs text-[#B7B3AC] hidden sm:inline">
              Model Ref: {product.id}
            </span>
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

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Image Container */}
            <div className="md:col-span-6 rounded-2xl overflow-hidden bg-[#111] border border-white/5 relative aspect-[4/3]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0D0D0D]/85 backdrop-blur-md border border-[#D8B77A]/40 text-[10px] uppercase font-bold tracking-widest text-[#D8B77A]">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Core Info */}
            <div className="md:col-span-6 flex flex-col">
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#F4F0E8] leading-tight mb-2">
                {product.name}
              </h2>

              <p className="text-sm text-[#B7B3AC] leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Price Box */}
              <div className="p-4 rounded-2xl bg-[#1F1F1F] border border-[#2B2B2B] mb-5">
                <span className="text-[11px] text-[#B7B3AC] uppercase tracking-wider block">
                  Showroom Price (INR)
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl font-bold text-[#F4F0E8] tracking-tight">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#B7B3AC]/60 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#D8B77A] mt-1.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Inclusive of craftsmanship warranty & taxes
                </p>
              </div>

              {/* Quick Specs */}
              <div className="space-y-2 text-xs">
                {product.dimensions && (
                  <div className="flex items-center gap-2 text-[#B7B3AC]">
                    <Ruler className="w-3.5 h-3.5 text-[#D8B77A] flex-shrink-0" />
                    <span>Dimensions: <strong className="text-[#F4F0E8]">{product.dimensions}</strong></span>
                  </div>
                )}
                {product.material && (
                  <div className="flex items-center gap-2 text-[#B7B3AC]">
                    <Layers className="w-3.5 h-3.5 text-[#D8B77A] flex-shrink-0" />
                    <span>Material: <strong className="text-[#F4F0E8]">{product.material}</strong></span>
                  </div>
                )}
                {product.warranty && (
                  <div className="flex items-center gap-2 text-[#B7B3AC]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D8B77A] flex-shrink-0" />
                    <span>Warranty: <strong className="text-[#F4F0E8]">{product.warranty}</strong></span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features Checklist */}
          {product.features && product.features.length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#D8B77A] mb-3">
                Craftsmanship & Design Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#B7B3AC]">
                    <Check className="w-4 h-4 text-[#D8B77A] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons Footer */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#B7B3AC] w-full sm:w-auto">
            <span>Helpline:</span>
            <a href={CLIENT_CONTACT.phone1Tel} className="text-[#F4F0E8] hover:text-[#D8B77A] font-semibold">
              {CLIENT_CONTACT.phone1}
            </a>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onEnquire(product);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D8B77A] hover:bg-[#E3C68E] text-[#0D0D0D] text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-[#D8B77A]/20"
            >
              <span>Enquire Online</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
