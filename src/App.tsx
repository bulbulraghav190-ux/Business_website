import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InquirySearch } from './components/InquirySearch';
import { TrustStrip } from './components/TrustStrip';
import { FeaturedCollections } from './components/FeaturedCollections';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NatureLiving } from './components/NatureLiving';
import { WhyChooseUs } from './components/WhyChooseUs';
import { RoomInspiration } from './components/RoomInspiration';
import { ServicesSection } from './components/ServicesSection';
import { ShowroomContact } from './components/ShowroomContact';
import { LeadForm } from './components/LeadForm';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ProductDetailModal } from './components/ProductDetailModal';
import { EnquiryModal } from './components/EnquiryModal';
import { QuoteModal } from './components/QuoteModal';
import { PolicyModal } from './components/PolicyModal';
import { PRODUCTS } from './data/furnitureData';
import { Product } from './types';

export default function App() {
  // Navigation & Filter States
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRoomFilter, setSelectedRoomFilter] = useState<string>('');

  // Modal States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false);
  const [enquiryProductName, setEnquiryProductName] = useState<string>('');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  // Filtered Products Calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category Match
      const matchesCategory =
        activeCategory === 'All' ||
        item.category.toLowerCase() === activeCategory.toLowerCase() ||
        (activeCategory === 'Workspace' && item.category.toLowerCase().includes('workspace')) ||
        (activeCategory === 'Storage' && item.category.toLowerCase().includes('storage')) ||
        (activeCategory === 'TV Units' && (item.category.toLowerCase().includes('tv') || item.category.toLowerCase().includes('entertainment')));

      // Search Query Match (Title, description, room, material)
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.room && item.room.toLowerCase().includes(q)) ||
        (item.material && item.material.toLowerCase().includes(q));

      // Room filter match if set via hero search
      const matchesRoom =
        !selectedRoomFilter ||
        (item.room && item.room.toLowerCase() === selectedRoomFilter.toLowerCase());

      return matchesCategory && matchesQuery && matchesRoom;
    });
  }, [activeCategory, searchQuery, selectedRoomFilter]);

  // Handlers
  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    setSelectedRoomFilter('');
    const catalogElement = document.getElementById('furniture-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSearch = (query: string, room: string) => {
    setSearchQuery(query);
    setSelectedRoomFilter(room);
    setActiveCategory('All');
    const catalogElement = document.getElementById('furniture-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProductEnquiry = (product: Product) => {
    setEnquiryProductName(product.name);
    setEnquiryModalOpen(true);
  };

  const handleOpenGeneralEnquiry = () => {
    setEnquiryProductName('');
    setEnquiryModalOpen(true);
  };

  const handleExploreNatureLiving = () => {
    setActiveCategory('Dining Room');
    const catalogElement = document.getElementById('furniture-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRoomStyle = (styleTitle: string) => {
    if (styleTitle.includes('Minimal') || styleTitle.includes('Luxury')) {
      setActiveCategory('Living Room');
    } else if (styleTitle.includes('Natural')) {
      setActiveCategory('Dining Room');
    } else {
      setActiveCategory('Bedroom');
    }
    const catalogElement = document.getElementById('furniture-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCatalogClick = () => {
    const catalogElement = document.getElementById('furniture-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F0E8] font-sans antialiased selection:bg-[#D8B77A]/30 selection:text-[#F4F0E8]">
      {/* Top Navigation Bar */}
      <Header
        onOpenEnquiryModal={handleOpenGeneralEnquiry}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      <main>
        {/* Cinematic Hero Section with Search and Entrance Animations */}
        <Hero
          onExploreClick={handleExploreCatalogClick}
          onQuoteClick={() => setQuoteModalOpen(true)}
        >
          <InquirySearch onSearch={handleHeroSearch} />
        </Hero>

        {/* Trust & Quality Craftsmanship Strip */}
        <TrustStrip />

        {/* Featured Furniture Collections (Designed For Every Room) */}
        <FeaturedCollections onSelectCategory={handleSelectCategory} />

        {/* Featured Products / Top Deals with INR Pricing and Filter Tabs */}
        <FeaturedProducts
          products={filteredProducts}
          activeCategory={activeCategory}
          onCategoryChange={(cat) => {
            setActiveCategory(cat);
            setSelectedRoomFilter('');
          }}
          onViewProduct={(product) => setSelectedProduct(product)}
          onEnquireProduct={handleOpenProductEnquiry}
        />

        {/* Editorial Spotlight: Bring Nature Into Your Home */}
        <NatureLiving onExploreNaturalLiving={handleExploreNatureLiving} />

        {/* Why Choose Raghav Furniture: Quality Selection & Real Home Values */}
        <WhyChooseUs onOpenConsultation={handleOpenGeneralEnquiry} />

        {/* Room Inspiration & Curated Aesthetics */}
        <RoomInspiration onSelectStyle={handleSelectRoomStyle} />

        {/* Comprehensive Services: Consultation, Solutions & Walkthroughs */}
        <ServicesSection
          onOpenConsultation={handleOpenGeneralEnquiry}
          onOpenVisitModal={handleOpenGeneralEnquiry}
        />

        {/* Showroom & Helplines (9719100250 & 9058214450) */}
        <ShowroomContact
          onOpenEnquiryModal={handleOpenGeneralEnquiry}
          onOpenVisitModal={handleOpenGeneralEnquiry}
        />

        {/* Interactive Callback & Lead Form */}
        <LeadForm />

        {/* Client Values & Thematic Feedback */}
        <Testimonials />

        {/* Final Cinematic Call To Action */}
        <FinalCTA
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
          onExploreClick={handleExploreCatalogClick}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
        onOpenEnquiryModal={handleOpenGeneralEnquiry}
        onOpenPolicyModal={(type) => setPolicyType(type)}
      />

      {/* Mobile Sticky Contact Bar (Visible on mobile screens) */}
      <MobileStickyBar onOpenEnquiry={handleOpenGeneralEnquiry} />

      {/* Modals & Dialogs */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleOpenProductEnquiry}
      />

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => {
          setEnquiryModalOpen(false);
          setEnquiryProductName('');
        }}
        productName={enquiryProductName}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}
