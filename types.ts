export interface Product {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  price: number;
  paymentLink: string;
  features: string[];
  image: string;
  highlight?: boolean; // For Manual 5 or 4
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'instagram' | 'tiktok' | 'facebook' | 'twitter' | 'youtube';
}