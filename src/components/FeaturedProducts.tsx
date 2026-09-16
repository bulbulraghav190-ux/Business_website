import React, { useState } from 'react';
import { Sparkles, Eye, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { Product } from '../types';

interface FeaturedProductsProps {
  products: Product[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  onViewProduct: (product: Product) => void;
  onEnquireProduct: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  activeCategory,
  onCategoryChange,
  onViewProduct,
  onEnquireProduct,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = [
    'All',
    'Living Room',
    'Bedroom',
    'Dining Room',
    'Workspace',
    'Storage',
    'TV Units',
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="furniture-catalog" className="py-20 sm:py-28 bg-[#111111] border-t border-[#D8B77A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8B77A]">
              Top Selections
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F4F0E8] mt-2 mb-3 tracking-tight">
              Featured Furniture
            </h2>
            <p className="text-sm sm:text-base text-[#B7B3AC] max-w-xl leading-relaxed">
              Signature pieces selected for comfort, style and everyday living.
            </p>
          </div>

          {/* Direct WhatsApp Prompt Note */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#1A1A1A] border border-[#D8B77A]/20">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span className="text-xs text-[#B7B3AC]">
              Custom sizing & wood finishes available on request
            </span>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#D8B77A] text-[#0D0D0D] shadow-md shadow-[#D8B77A]/20'
                    : 'bg-[#1A1A1A] text-[#B7B3AC] hover:text-[#F4F0E8] hover:bg-[#242424] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {products.length === 0 ? (
          <div className="text-center py-20 bg-[#161616] rounded-3xl border border-white/5 p-8">
            <p className="text-[#B7B3AC] text-lg font-medium">No furniture pieces matched your current filter.</p>
            <button
              type="button"
              onClick={() => onCategoryChange('All')}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#D8B77A] text-black font-semibold text-xs uppercase"
            >
              View All Furniture
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((product) => {
              const isHovered = hoveredId === product.id;
              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group rounded-3xl bg-[#1A1A1A] border border-[#272727] hover:border-[#D8B77A]/50 transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col"
                >
                  {/* Image Container with Zoom and Badge */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#121212]">
                    <img
                      src={product.image}
                      alt={`${product.name} at Raghav Furniture showroom`}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-black/30 pointer-events-none" />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-[#0D0D0D]/85 backdrop-blur-md border border-[#D8B77A]/40 text-[10px] uppercase font-bold tracking-widest text-[#D8B77A]">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Category Tag */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#161616]/90 text-[11px] text-[#B7B3AC] border border-white/5">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif-luxury text-2xl font-medium text-[#F4F0E8] group-hover:text-[#D8B77A] transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#B7B3AC] line-clamp-2 leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Pricing Display in INR */}
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between mb-5">
                      <div>
                        <span className="text-[11px] text-[#B7B3AC] uppercase tracking-wider block">
                          Showroom Price
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl sm:text-2xl font-bold text-[#F4F0E8] tracking-tight">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-[#B7B3AC]/60 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-[#D8B77A] bg-[#D8B77A]/10 px-2 py-0.5 rounded border border-[#D8B77A]/20">
                          {product.room}
                        </span>
                      </div>
                    </div>

                    {/* Interactive Action Buttons */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        id={`view-details-${product.id}`}
                        onClick={() => onViewProduct(product)}
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#242424] hover:bg-[#2A2A2A] border border-white/10 text-xs font-semibold text-[#F4F0E8] hover:text-[#D8B77A] transition-all"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      <button
                        type="button"
                        id={`enquire-now-${product.id}`}
                        onClick={() => onEnquireProduct(product)}
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#D8B77A] hover:bg-[#E3C68E] text-[#0D0D0D] text-xs font-bold uppercase tracking-wider transition-all transform group-hover:scale-[1.02] shadow-md shadow-[#D8B77A]/20"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Enquire Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
