export interface Product {
  id: string;
  name: string;
  category: 'Living Room' | 'Bedroom' | 'Dining Room' | 'Workspace' | 'Storage' | 'TV Units';
  room: 'Living Room' | 'Bedroom' | 'Dining' | 'Home Office' | 'Complete Home';
  price: number;
  originalPrice?: number;
  description: string;
  badge?: 'Featured' | 'New' | 'Signature' | 'Popular';
  image: string;
  dimensions?: string;
  material?: string;
  finish?: string;
  warranty?: string;
  features?: string[];
}

export interface CollectionCategory {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  image: string;
  itemCount: string;
}

export interface RoomStyle {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  aspectRatioClass: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialTheme {
  id: string;
  aspect: string;
  quote: string;
  clientContext: string;
  rating: number;
}

export interface FilterState {
  category: string;
  room: string;
  budget: string;
  searchQuery: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  productOrCategory: string;
  room: string;
  budget: string;
  preferredContact: 'phone' | 'whatsapp';
  message: string;
}
