// types.ts

export enum ServiceCategory {
  WAVE = 'Wave',
  STS = 'STS',
  SOINS_PROFONDS = 'Soins profonds',
  COLORATION = 'Coloration',
}

export enum HairLength {
  COURT = 'Cheveux courts',
  MI_LONG = 'Cheveux mi-longs',
  LONG = 'Cheveux longs',
}

export interface ServiceDetail {
  id: string;
  name: string;
  price: number;
  time: number; // in hours
  description: string;
}

export interface Service {
  category: ServiceCategory;
  length: HairLength;
  detail: ServiceDetail;
}

export interface CartItem {
  service: Service;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  phone: string;
  date: string;
  time: string;
  services: CartItem[];
  totalPrice: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavbarLink {
  path: string;
  label: string;
}

// New types for client testimonials, realizations, and before/after gallery
export interface ClientTestimonial {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Realisation {
  id: string;
  category: HairLength; // Can be categorized by hair length
  defaultImageUrl: string;
  hoverImageUrl: string;
  description?: string;
}

export interface BeforeAfterImage {
  id: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  description?: string;
}