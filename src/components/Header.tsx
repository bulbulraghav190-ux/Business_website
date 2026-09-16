import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { CLIENT_CONTACT } from '../data/furnitureData';

interface HeaderProps {
  onOpenQuoteModal: () => void;
  onOpenEnquiryModal: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onOpenEnquiryModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Furniture', href: '#furniture-catalog' },
    { label: 'Collections', href: '#collections' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact-showroom' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#D8B77A]/15 py-3 shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D8B77A]/40 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#242424] to-[#121212] border border-[#D8B77A]/40 flex items-center justify-center shadow-lg group-hover:border-[#D8B77A] transition-colors">
              <span className="font-serif-luxury text-xl font-bold text-[#D8B77A] tracking-wider">
                RF
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl sm:text-2xl font-semibold tracking-wide text-[#F4F0E8] group-hover:text-white transition-colors leading-none">
                RAGHAV
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#D8B77A] font-medium mt-1">
                FURNITURE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm text-[#B7B3AC] hover:text-[#F4F0E8] transition-colors rounded-full hover:bg-white/5 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-[#D8B77A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Phone Dropdown */}
            <div className="relative">
              <button
                type="button"
                id="header-phone-btn"
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1A1A1A] border border-[#D8B77A]/20 hover:border-[#D8B77A]/60 text-xs font-medium text-[#F4F0E8] transition-all hover:bg-[#222222]"
                aria-expanded={phoneDropdownOpen}
              >
                <Phone className="w-3.5 h-3.5 text-[#D8B77A]" />
                <span>Call Us</span>
              </button>

              {phoneDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#171717] border border-[#D8B77A]/30 p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setPhoneDropdownOpen(false)}
                >
                  <p className="text-[11px] font-semibold text-[#B7B3AC] px-3 pt-2 pb-1 uppercase tracking-wider">
                    Direct Showroom Helpline
                  </p>
                  <a
                    href={CLIENT_CONTACT.phone1Tel}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#242424] text-sm text-[#F4F0E8] font-medium transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#D8B77A]" />
                      {CLIENT_CONTACT.phone1}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B7B3AC]" />
                  </a>
                  <a
                    href={CLIENT_CONTACT.phone2Tel}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#242424] text-sm text-[#F4F0E8] font-medium transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#D8B77A]" />
                      {CLIENT_CONTACT.phone2}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B7B3AC]" />
                  </a>
                  <div className="mt-1 pt-1 border-t border-white/5">
                    <a
                      href={CLIENT_CONTACT.whatsapp1Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-xs text-[#25D366] font-medium transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Primary Get a Quote Button */}
            <button
              type="button"
              id="header-get-quote-btn"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D8B77A] to-[#C9A464] hover:from-[#E3C68E] hover:to-[#D8B77A] text-[#0D0D0D] font-semibold text-xs tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#D8B77A]/15 focus:outline-none focus:ring-2 focus:ring-[#D8B77A]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Menu & Quick Phone Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={CLIENT_CONTACT.phone1Tel}
              id="mobile-quick-call-header"
              className="p-2.5 rounded-full bg-[#1B1B1B] border border-[#D8B77A]/30 text-[#D8B77A] hover:bg-[#252525] focus:outline-none"
              aria-label="Call Raghav Furniture"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              id="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-[#1B1B1B] border border-white/10 text-[#F4F0E8] hover:text-[#D8B77A] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Slide-Down Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111]/98 backdrop-blur-xl border-b border-[#D8B77A]/20 px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#F4F0E8] hover:text-[#D8B77A] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-xl bg-[#D8B77A] text-[#0D0D0D] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                Get a Free Quote
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={CLIENT_CONTACT.phone1Tel}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#1B1B1B] border border-[#D8B77A]/30 text-xs font-semibold text-[#F4F0E8]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D8B77A]" />
                  9719100250
                </a>
                <a
                  href={CLIENT_CONTACT.phone2Tel}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#1B1B1B] border border-[#D8B77A]/30 text-xs font-semibold text-[#F4F0E8]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D8B77A]" />
                  9058214450
                </a>
              </div>

              <a
                href={CLIENT_CONTACT.whatsapp1Link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with Showroom on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
