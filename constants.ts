// constants.ts
import { Service, ServiceCategory, HairLength, NavbarLink, Product, ClientTestimonial, Realisation, BeforeAfterImage } from './types';

export const SERVICES: Service[] = [
  // Wave
  {
    category: ServiceCategory.WAVE,
    length: HairLength.COURT,
    detail: {
      id: 'wave-court',
      name: 'Wave Cheveux Courts',
      price: 60,
      time: 2,
      description: 'Mise en forme des cheveux courts pour une texture ondulée et naturelle.',
    },
  },
  {
    category: ServiceCategory.WAVE,
    length: HairLength.MI_LONG,
    detail: {
      id: 'wave-mi-long',
      name: 'Wave Cheveux Mi-longs',
      price: 80,
      time: 3,
      description: 'Création d\'ondulations souples et durables sur cheveux mi-longs.',
    },
  },
  {
    category: ServiceCategory.WAVE,
    length: HairLength.LONG,
    detail: {
      id: 'wave-long',
      name: 'Wave Cheveux Longs',
      price: 100,
      time: 4,
      description: 'Transformation des cheveux longs en une cascade d\'ondes élégantes et volumineuses.',
    },
  },

  // STS (Smooth Texture System)
  {
    category: ServiceCategory.STS,
    length: HairLength.COURT,
    detail: {
      id: 'sts-court',
      name: 'STS Cheveux Courts',
      price: 120,
      time: 2,
      description: 'Traitement lissant pour cheveux courts, réduisant les frisottis et apportant brillance.',
    },
  },
  {
    category: ServiceCategory.STS,
    length: HairLength.MI_LONG,
    detail: {
      id: 'sts-mi-long',
      name: 'STS Cheveux Mi-longs',
      price: 180,
      time: 3,
      description: 'Système de lissage avancé pour cheveux mi-longs, offrant douceur et maniabilité.',
    },
  },
  {
    category: ServiceCategory.STS,
    length: HairLength.LONG,
    detail: {
      id: 'sts-long',
      name: 'STS Cheveux Longs',
      price: 240,
      time: 4,
      description: 'Lissage profond et durable pour cheveux longs, pour un résultat soyeux et discipliné.',
    },
  },

  // Soins Profonds
  {
    category: ServiceCategory.SOINS_PROFONDS,
    length: HairLength.COURT,
    detail: {
      id: 'soins-court',
      name: 'Soin Profond Cheveux Courts',
      price: 40,
      time: 2,
      description: 'Revitalisation intense pour cheveux courts, apportant hydratation et éclat.',
    },
  },
  {
    category: ServiceCategory.SOINS_PROFONDS,
    length: HairLength.MI_LONG,
    detail: {
      id: 'soins-mi-long',
      name: 'Soin Profond Cheveux Mi-longs',
      price: 60,
      time: 3,
      description: 'Traitement nourrissant pour cheveux mi-longs, réparant et renforçant la fibre capillaire.',
    },
  },
  {
    category: ServiceCategory.SOINS_PROFONDS,
    length: HairLength.LONG,
    detail: {
      id: 'soins-long',
      name: 'Soin Profond Cheveux Longs',
      price: 80,
      time: 4,
      description: 'Soin régénérant complet pour cheveux longs, pour une chevelure saine et brillante de la racine aux pointes.',
    },
  },

  // Coloration
  {
    category: ServiceCategory.COLORATION,
    length: HairLength.COURT,
    detail: {
      id: 'coloration-court',
      name: 'Coloration Cheveux Courts',
      price: 70,
      time: 2,
      description: 'Application d\'une couleur vibrante ou naturelle sur cheveux courts.',
    },
  },
  {
    category: ServiceCategory.COLORATION,
    length: HairLength.MI_LONG,
    detail: {
      id: 'coloration-mi-long',
      name: 'Coloration Cheveux Mi-longs',
      price: 110,
      time: 3,
      description: 'Transformation ou rafraîchissement de la couleur sur cheveux mi-longs.',
    },
  },
  {
    category: ServiceCategory.COLORATION,
    length: HairLength.LONG,
    detail: {
      id: 'coloration-long',
      name: 'Coloration Cheveux Longs',
      price: 150,
      time: 4,
      description: 'Coloration experte pour cheveux longs, avec un résultat uniforme et lumineux.',
    },
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'de-almond-avocado-shampoo',
    name: 'Shampooing Amande & Avocat',
    brand: 'Design Essentials',
    description: 'Un shampooing hydratant et démêlant pour tous les types de cheveux, enrichi en amande et avocat.',
    price: 25,
    imageUrl: 'https://picsum.photos/400/300?random=11',
  },
  {
    id: 'de-almond-avocado-conditioner',
    name: 'Après-Shampooing Amande & Avocat',
    brand: 'Design Essentials',
    description: 'Un après-shampooing riche qui nourrit et adoucit les cheveux, facilitant le coiffage.',
    price: 28,
    imageUrl: 'https://picsum.photos/400/300?random=12',
  },
  {
    id: 'de-natural-twist-set-cream',
    name: 'Crème Twist-Set Naturel',
    brand: 'Design Essentials',
    description: 'Crème définissante pour des twists et des boucles hydratées et brillantes.',
    price: 32,
    imageUrl: 'https://picsum.photos/400/300?random=13',
  },
  {
    id: 'de-honey-creme-conditioning-shampoo',
    name: 'Shampooing Conditionneur Miel & Crème',
    brand: 'Design Essentials',
    description: 'Formule douce pour nettoyer et revitaliser les cheveux secs et abîmés.',
    price: 27,
    imageUrl: 'https://picsum.photos/400/300?random=14',
  },
  {
    id: 'de-edge-control-gel',
    name: 'Gel Contrôle Bords',
    brand: 'Design Essentials',
    description: 'Gel non gras pour lisser les petits cheveux et coiffer les bords avec tenue.',
    price: 18,
    imageUrl: 'https://picsum.photos/400/300?random=15',
  },
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  { id: 'client-1', name: 'Laura G.', imageUrl: 'https://picsum.photos/300/300?random=20' },
  { id: 'client-2', name: 'Mathieu D.', imageUrl: 'https://picsum.photos/300/300?random=21' },
  { id: 'client-3', name: 'Sophie L.', imageUrl: 'https://picsum.photos/300/300?random=22' },
  { id: 'client-4', name: 'Thomas P.', imageUrl: 'https://picsum.photos/300/300?random=23' },
  { id: 'client-5', name: 'Clara M.', imageUrl: 'https://picsum.photos/300/300?random=24' },
];

export const REALISATIONS: Realisation[] = [
  {
    id: 'real-1',
    category: HairLength.COURT,
    defaultImageUrl: 'https://picsum.photos/400/300?random=30',
    hoverImageUrl: 'https://picsum.photos/400/300?random=31',
    description: 'Coupe courte dynamique et stylisée.',
  },
  {
    id: 'real-2',
    category: HairLength.COURT,
    defaultImageUrl: 'https://picsum.photos/400/300?random=32',
    hoverImageUrl: 'https://picsum.photos/400/300?random=33',
    description: 'Pixie cut moderne et audacieux.',
  },
  {
    id: 'real-3',
    category: HairLength.MI_LONG,
    defaultImageUrl: 'https://picsum.photos/400/300?random=34',
    hoverImageUrl: 'https://picsum.photos/400/300?random=35',
    description: 'Carré plongeant élégant et lumineux.',
  },
  {
    id: 'real-4',
    category: HairLength.MI_LONG,
    defaultImageUrl: 'https://picsum.photos/400/300?random=36',
    hoverImageUrl: 'https://picsum.photos/400/300?random=37',
    description: 'Dégradé mi-long avec balayage subtil.',
  },
  {
    id: 'real-5',
    category: HairLength.LONG,
    defaultImageUrl: 'https://picsum.photos/400/300?random=38',
    hoverImageUrl: 'https://picsum.photos/400/300?random=39',
    description: 'Longueurs ondulées et coloration ombrée.',
  },
  {
    id: 'real-6',
    category: HairLength.LONG,
    defaultImageUrl: 'https://picsum.photos/400/300?random=40',
    hoverImageUrl: 'https://picsum.photos/400/300?random=41',
    description: 'Cheveux longs et lisses, reflets cendrés.',
  },
];

export const BEFORE_AFTER_GALLERY: BeforeAfterImage[] = [
  {
    id: 'ba-1',
    beforeImageUrl: 'https://picsum.photos/500/400?random=50',
    afterImageUrl: 'https://picsum.photos/500/400?random=51',
    description: 'Transformation d\'une couleur terne en un roux flamboyant.',
  },
  {
    id: 'ba-2',
    beforeImageUrl: 'https://picsum.photos/500/400?random=52',
    afterImageUrl: 'https://picsum.photos/500/400?random=53',
    description: 'Passage de cheveux abîmés à une chevelure soyeuse grâce à nos soins.',
  },
  {
    id: 'ba-3',
    beforeImageUrl: 'https://picsum.photos/500/400?random=54',
    afterImageUrl: 'https://picsum.photos/500/400?random=55',
    description: 'Coupe audacieuse pour un nouveau look rajeunissant.',
  },
];

export const NAV_LINKS: NavbarLink[] = [
  { path: '/', label: 'Accueil' },
  { path: '/a-propos', label: 'Qui sommes-nous' },
  { path: '/tarifs', label: 'Tarifs' },
  { path: '/marriage', label: 'Mariage' },
  { path: '/realisations', label: 'Mes Réalisations' }, // New link for realizations page
  { path: '/reservation', label: 'Réservation' },
  { path: '/contact', label: 'Contact' },
];

export const COMPANY_INFO = {
  phone: '+33 1 23 45 67 89',
  address: '17, rue de Chateau Landon, 75010 Paris, France',
  email: 'contact@eclatcheveux.com',
  hours: {
    Lundi: 'Fermé',
    Mardi: '10:00 - 19:00',
    Mercredi: '10:00 - 19:00',
    Jeudi: '10:00 - 19:00',
    Vendredi: '10:00 - 19:00',
    Samedi: '09:00 - 18:00',
    Dimanche: 'Fermé',
  },
  instagramUrl: 'https://www.instagram.com/bthebestcoiffure', // Placeholder URL
  tiktokUrl: 'https://www.tiktok.com/@bthebest.coiffure?_r=1&_t=ZN-96iIx5x0VNu', // Placeholder URL
};