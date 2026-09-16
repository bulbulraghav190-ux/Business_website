import { Product, CollectionCategory, RoomStyle, ServiceItem, TestimonialTheme } from '../types';
import heroLivingRoomImg from '../assets/images/raghav_hero_living_room_1789567089943.jpg';
import sofaProductImg from '../assets/images/raghav_sofa_product_1789567114779.jpg';
import chairProductImg from '../assets/images/raghav_chair_product_1789567137909.jpg';
import bedProductImg from '../assets/images/raghav_bed_product_1789567157081.jpg';
import natureLivingImg from '../assets/images/raghav_nature_living_1789567179616.jpg';

export { heroLivingRoomImg, sofaProductImg, chairProductImg, bedProductImg, natureLivingImg };

export const CLIENT_CONTACT = {
  name: 'Raghav Furniture',
  phone1: '9719100250',
  phone2: '9058214450',
  phone1Formatted: '+91 97191 00250',
  phone2Formatted: '+91 90582 14450',
  phone1Tel: 'tel:9719100250',
  phone2Tel: 'tel:9058214450',
  whatsapp1Link: 'https://wa.me/919719100250?text=Hello%20Raghav%20Furniture%2C%20I%20would%20like%20to%20enquire%20about%20your%20furniture%20collection.',
  whatsapp2Link: 'https://wa.me/919058214450?text=Hello%20Raghav%20Furniture%2C%20I%20would%20like%20to%20enquire%20about%20your%20furniture%20collection.',
  showroomNote: 'Contact us for showroom location and visiting details',
  hours: 'Monday – Sunday: 10:00 AM – 8:30 PM',
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'prod-sofa-comfort',
    name: 'Modern Comfort Sofa',
    category: 'Living Room',
    room: 'Living Room',
    price: 34999,
    originalPrice: 42000,
    description: 'Deep-seat modular profile wrapped in high-resilience high-density foam and stain-resistant plush charcoal weave with warm brushed brass leg accents.',
    badge: 'Featured',
    image: sofaProductImg,
    dimensions: '88" W x 38" D x 32" H',
    material: 'Kiln-dried solid hardwood frame & premium charcoal weave',
    finish: 'Matte Charcoal & Champagne Accents',
    warranty: '5-Year Structural Frame Warranty',
    features: [
      'High-resilience foam core with down-alternative wrap',
      'Stain-resistant performance fabric upholstery',
      'Solid hardwood internal framework with reinforced corner blocks',
      'Custom fabric swatch consultations available'
    ]
  },
  {
    id: 'prod-lounge-chair',
    name: 'Contemporary Lounge Chair',
    category: 'Living Room',
    room: 'Living Room',
    price: 12999,
    originalPrice: 15500,
    description: 'Sculptural organic silhouette tailored in warm champagne boucle with tapered solid walnut legs. Perfectly angled for reading and relaxation.',
    badge: 'Signature',
    image: chairProductImg,
    dimensions: '31" W x 33" D x 30" H',
    material: 'Champagne boucle textured weave & American walnut legs',
    finish: 'Warm Champagne & Walnut',
    warranty: '3-Year Craftsmanship Warranty',
    features: [
      'Ergonomic curved lumbar support backrest',
      'Heavy-traffic certified boucle weave',
      'Non-scratch floor protection glides',
      'Compact footprint ideal for living corners and master bedrooms'
    ]
  },
  {
    id: 'prod-king-bed',
    name: 'Elegant King Bed',
    category: 'Bedroom',
    room: 'Bedroom',
    price: 29999,
    originalPrice: 36000,
    description: 'Architectural fluted headboard upholstered in soft warm-grey linen with integrated hydraulic storage option and sturdy solid timber slatted base.',
    badge: 'Popular',
    image: bedProductImg,
    dimensions: '78" W x 84" L x 48" H (Fits 72" x 78" King Mattress)',
    material: 'Reinforced engineered timber & premium linen fabric',
    finish: 'Warm Charcoal Grey & Satin Timber',
    warranty: '5-Year Structural Warranty',
    features: [
      'Padded fluted acoustic headboard panel',
      'Heavy-duty gas-lift hydraulic storage mechanism option',
      'Zero-creak engineered slatted platform support',
      'Soft radiused corners to prevent stubbed toes'
    ]
  },
  {
    id: 'prod-dining-set',
    name: 'Premium Dining Set',
    category: 'Dining Room',
    room: 'Dining',
    price: 24999,
    originalPrice: 29999,
    description: '6-Seater solid wood dining ensemble featuring a beveled edge tabletop and six ergonomic upholstered chairs tailored in warm neutral tones.',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80',
    dimensions: '66" L x 36" W x 30" H (Table)',
    material: 'Seasoned Sheesham / Teak hardwood & water-resistant lacquer',
    finish: 'Natural Walnut Grain',
    warranty: '5-Year Wood Integrity Warranty',
    features: [
      'Heat-resistant and water-repellent top protective coat',
      'Comfortably seats 6 adults with generous elbow room',
      'Chairs feature high-density cushioned seat pads',
      'Easy wipe-clean maintenance for daily family dining'
    ]
  },
  {
    id: 'prod-tv-unit',
    name: 'Modern TV Unit',
    category: 'TV Units',
    room: 'Living Room',
    price: 18999,
    originalPrice: 22500,
    description: 'Floating-look lowline media console with fluted sliding panels, warm concealed LED backlighting channel, and smart wire management ports.',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80',
    dimensions: '72" L x 16" D x 20" H',
    material: 'High-density moisture-resistant MDF & natural wood veneer',
    finish: 'Smoked Ash & Champagne Brass Handles',
    warranty: '3-Year Warranty',
    features: [
      'Supports television displays up to 75 inches',
      'Concealed cable management pass-throughs',
      'Soft-close telescopic drawer hardware',
      'Acoustically transparent slat section for soundbars'
    ]
  },
  {
    id: 'prod-wardrobe',
    name: 'Designer Wardrobe',
    category: 'Storage',
    room: 'Bedroom',
    price: 32999,
    originalPrice: 39500,
    description: '4-Door modular wardrobe with soft-closing bronze-tinted glass inserts, internal sensor-activated warm LED illumination, and custom hanging modules.',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=900&q=80',
    dimensions: '72" W x 22" D x 84" H',
    material: 'Borer-proof marine grade ply with melamine laminate',
    finish: 'Matte Charcoal & Warm Champagne Trims',
    warranty: '7-Year Modular Warranty',
    features: [
      'Dual full-length hanging zones with velvet accessory trays',
      'Concealed digital lock compartment for valuables',
      'German soft-close 110° wide-opening hinges',
      'Custom modular configuration available on request'
    ]
  },
  {
    id: 'prod-exec-desk',
    name: 'Walnut Executive Desk',
    category: 'Workspace',
    room: 'Home Office',
    price: 21499,
    originalPrice: 26000,
    description: 'Minimalist executive study desk with integrated leather desk pad inlay, hidden cable trench, and dual push-to-open document drawers.',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80',
    dimensions: '58" W x 28" D x 30" H',
    material: 'Solid American Walnut & matte black powder-coated steel',
    finish: 'Warm Walnut & Satin Black',
    warranty: '5-Year Warranty',
    features: [
      'Integrated wire organizer channel for laptops and monitors',
      'Felt-lined drawers with ball-bearing smooth slides',
      'Rounded chamfered edges for wrist comfort',
      'Minimalist architectural silhouette'
    ]
  },
  {
    id: 'prod-coffee-table',
    name: 'Sculptural Coffee Table',
    category: 'Living Room',
    room: 'Living Room',
    price: 9999,
    originalPrice: 12500,
    description: 'Low-slung nesting coffee table set combining dark tempered fluted glass with a warm brushed champagne gold pedestal base.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80',
    dimensions: '36" Dia x 16" H (Main) & 24" Dia x 18" H (Companion)',
    material: 'Tempered safety glass & brushed electroplated metal',
    finish: 'Champagne Gold & Smoked Charcoal',
    warranty: '2-Year Warranty',
    features: [
      'Nesting 2-piece set can be separated or arranged together',
      'High-impact tempered shatterproof glass surface',
      'Weighted anti-tip base design',
      'Complements both sectional and 3-seater sofa arrangements'
    ]
  }
];

export const CATEGORIES: CollectionCategory[] = [
  {
    id: 'cat-living',
    name: 'Living Room',
    slug: 'living-room',
    subtitle: 'Sofas, accent seating, modular coffee tables & entertainment',
    image: heroLivingRoomImg,
    itemCount: '24+ Curated Designs'
  },
  {
    id: 'cat-bedroom',
    name: 'Bedroom',
    slug: 'bedroom',
    subtitle: 'King & queen beds, acoustic headboards & bedside storage',
    image: bedProductImg,
    itemCount: '18+ Handcrafted Beds'
  },
  {
    id: 'cat-dining',
    name: 'Dining Room',
    slug: 'dining-room',
    subtitle: 'Solid timber dining tables, cushioned chairs & sideboards',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80',
    itemCount: '15+ Dining Sets'
  },
  {
    id: 'cat-workspace',
    name: 'Home Workspace',
    slug: 'workspace',
    subtitle: 'Architectural desks, ergonomic chairs & storage shelving',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    itemCount: '12+ Study Solutions'
  },
  {
    id: 'cat-storage',
    name: 'Storage & Wardrobes',
    slug: 'storage',
    subtitle: 'Custom modular wardrobes, shoe consoles & dressers',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=900&q=80',
    itemCount: '20+ Storage Systems'
  },
  {
    id: 'cat-tv-units',
    name: 'TV & Entertainment Units',
    slug: 'tv-units',
    subtitle: 'Wall consoles, media cabinets & fluted display credenzas',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80',
    itemCount: '14+ Media Designs'
  }
];

export const ROOM_STYLES: RoomStyle[] = [
  {
    id: 'style-minimal',
    title: 'Warm Minimal',
    tagline: 'Less Clutter, Pure Warmth',
    description: 'Clean geometric lines paired with tactile fabrics and warm earth pigments to create a serene sanctuary.',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80',
    aspectRatioClass: 'md:col-span-7'
  },
  {
    id: 'style-luxury',
    title: 'Modern Luxury',
    tagline: 'Dark Sophistication & Gold Nuances',
    description: 'Charcoal backdrops, rich walnut woods, champagne metal finishes, and cinematic mood lighting for elevated evening living.',
    image: heroLivingRoomImg,
    aspectRatioClass: 'md:col-span-5'
  },
  {
    id: 'style-natural',
    title: 'Natural Living',
    tagline: 'Organic Wood & Earth Tones',
    description: 'Raw live-edge woods, breathable textured linens, and warm ambient sunlight that connect your indoor retreat with nature.',
    image: natureLivingImg,
    aspectRatioClass: 'md:col-span-5'
  },
  {
    id: 'style-contemporary',
    title: 'Contemporary Comfort',
    tagline: 'Family Living with Refinement',
    description: 'Plush cushioning, stain-resistant high performance weaves, and modular layouts designed for effortless everyday gatherings.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    aspectRatioClass: 'md:col-span-7'
  }
];

export const TRUST_INDICATORS = [
  {
    title: 'Thoughtful Designs',
    desc: 'Each piece balanced between visual poise, ergonomic posture, and timeless proportions.'
  },
  {
    title: 'Quality-Focused Selection',
    desc: 'Seasoned solid hardwoods, high-density cold-cure foam, and certified durable hardware.'
  },
  {
    title: 'Personal Assistance',
    desc: 'Direct consultation via call, WhatsApp, or showroom walk-ins to customize your rooms.'
  },
  {
    title: 'Complete Home Solutions',
    desc: 'From single statement chairs to full living, bedroom, and dining room furniture packages.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'serv-consult',
    title: 'Furniture Consultation',
    description: 'Get honest, tailored guidance on choosing furniture dimensions, fabrics, and finishes that fit your floor plan and lighting.',
    iconName: 'Compass'
  },
  {
    id: 'serv-solutions',
    title: 'Home Furniture Solutions',
    description: 'Coordinated packages across living rooms, master bedrooms, dining areas, and study spaces for cohesive interior harmony.',
    iconName: 'Home'
  },
  {
    id: 'serv-personal',
    title: 'Personalized Assistance',
    description: 'Compare wood species, fabric textures, cushion firmness, and storage layouts side-by-side with our knowledgeable team.',
    iconName: 'Sparkles'
  },
  {
    id: 'serv-showroom',
    title: 'Showroom Visit',
    description: 'Experience the tactile textures, sit-depth comfort, and wood finishes in person. Contact us to schedule your preferred visiting time.',
    iconName: 'MapPin'
  },
  {
    id: 'serv-enquiry',
    title: 'Enquiry Support',
    description: 'Instant answers via call (9719100250 / 9058214450) and WhatsApp for price quotes, dimensions, and availability.',
    iconName: 'PhoneCall'
  }
];

export const TESTIMONIAL_THEMES: TestimonialTheme[] = [
  {
    id: 'test-1',
    aspect: 'Product Quality & Finishing',
    quote: 'The woodwork finishing on the dining table and the fabric stitching on our sofa exceeded our expectations. The solid wood has a substantial, premium feel that looks like it belongs in a design magazine.',
    clientContext: 'Homeowner, 3BHK Residence',
    rating: 5
  },
  {
    id: 'test-2',
    aspect: 'Helpful Assistance & Guidance',
    quote: 'We were unsure about sofa dimensions for our living room layout. The team helped us measure and suggested the perfect 3-seater modular arrangement. Direct phone and WhatsApp communication was seamless.',
    clientContext: 'Renovating Family Home',
    rating: 5
  },
  {
    id: 'test-3',
    aspect: 'Comfortable Everyday Designs',
    quote: 'Finding a king bed with generous storage that does not squeak or wobble was critical for us. The hydraulic lift on our Raghav Furniture bed works effortlessly and the headboard cushioning is so comfortable.',
    clientContext: 'New Home Furnishing',
    rating: 5
  },
  {
    id: 'test-4',
    aspect: 'Furniture Variety & Practical Value',
    quote: 'A rare showroom where the aesthetic is genuinely luxury and dark-modern, yet the pricing remains sensible and transparent. Got our TV unit and lounge chair together.',
    clientContext: 'Modern Apartment Owner',
    rating: 5
  }
];

export const PRODUCTS = FEATURED_PRODUCTS;
