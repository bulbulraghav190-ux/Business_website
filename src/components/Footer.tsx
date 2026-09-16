import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ArrowUp, Sparkles } from 'lucide-react';
import { CLIENT_CONTACT } from '../data/furnitureData';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenQuoteModal: () => void;
  onOpenEnquiryModal: () => void;
  onOpenPolicyModal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenQuoteModal,
  onOpenEnquiryModal,
  onOpenPolicyModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exploreLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Furniture', href: '#furniture-catalog' },
    { label: 'Collections', href: '#collections' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact-showroom' },
  ];

  const furnitureCategories = [
    'Living Room',
    'Bedroom',
    'Dining Room',
    'Workspace',
    'Storage',
    'TV Units',
  ];

  return (
    <footer className="bg-[#090909] text-[#B7B3AC] border-t border-[#D8B77A]/15 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/5">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#222] to-[#111] border border-[#D8B77A]/40 flex items-center justify-center">
                  <span className="font-serif-luxury text-xl font-bold text-[#D8B77A]">RF</span>
                </div>
                <div>
                  <h3 className="font-serif-luxury text-2xl font-medium text-[#F4F0E8] leading-none">
                    RAGHAV FURNITURE
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D8B77A] font-medium mt-1 block">
                    PREMIUM HOME CRAFTSMANSHIP
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#B7B3AC] leading-relaxed max-w-sm mb-6">
                Furniture for modern homes, thoughtfully selected for comfort, style and everyday living.
              </p>

              <div className="p-4 rounded-2xl bg-[#141414] border border-[#242424] text-xs">
                <span className="text-[#D8B77A] font-semibold block mb-1">Showroom Visits</span>
                <p className="text-[#B7B3AC]">
                  {CLIENT_CONTACT.showroomNote}. Call or WhatsApp prior to visiting for reserved assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#F4F0E8] mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#D8B77A] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Furniture Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#F4F0E8] mb-5">
              Furniture
            </h4>
            <ul className="space-y-3 text-sm">
              {furnitureCategories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#furniture-catalog"
                    onClick={() => onSelectCategory(cat)}
                    className="hover:text-[#D8B77A] transition-colors flex items-center justify-between group"
                  >
                    <span>{cat}</span>
                    <span className="text-xs text-[#B7B3AC]/40 group-hover:text-[#D8B77A] opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Helplines */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#F4F0E8] mb-5">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={CLIENT_CONTACT.phone1Tel}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#141414] border border-white/5 hover:border-[#D8B77A]/40 text-[#F4F0E8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D8B77A]" />
                <span className="font-semibold">{CLIENT_CONTACT.phone1Formatted}</span>
              </a>

              <a
                href={CLIENT_CONTACT.phone2Tel}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#141414] border border-white/5 hover:border-[#D8B77A]/40 text-[#F4F0E8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D8B77A]" />
                <span className="font-semibold">{CLIENT_CONTACT.phone2Formatted}</span>
              </a>

              <a
                href={CLIENT_CONTACT.whatsapp1Link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/25 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenEnquiryModal}
                className="w-full py-2.5 px-4 rounded-xl bg-[#222] hover:bg-[#2A2A2A] border border-white/10 text-xs font-semibold text-[#F4F0E8] flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#D8B77A]" />
                <span>Enquire Online</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B7B3AC]/80 gap-4">
          <div>
            © 2026 Raghav Furniture. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenPolicyModal('privacy')}
              className="hover:text-[#D8B77A] transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenPolicyModal('terms')}
              className="hover:text-[#D8B77A] transition-colors"
            >
              Terms of Service
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="p-2.5 rounded-xl bg-[#171717] border border-white/10 hover:border-[#D8B77A]/50 text-[#F4F0E8] hover:text-[#D8B77A] transition-colors flex items-center gap-1.5"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[11px] font-medium uppercase tracking-wider">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
