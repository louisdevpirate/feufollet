export interface TattooRequest {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  tattooType: 'flash' | 'custom';
  description: string;
  size: string;
  placement: string;
  budget: number;
  availability: string[];
  referenceImages?: string[];
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface PortraitRequest {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  portraitType: 'digital' | 'traditional';
  subjectDescription: string;
  style: string;
  size: string;
  deadline?: Date;
  referenceImages?: string[];
  budget: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkshopBooking {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  workshopDate: Date;
  workshopType: 'beginner' | 'intermediate' | 'advanced';
  experience: string;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  requestId: string;
  requestType: 'tattoo' | 'portrait' | 'workshop';
  amount: number;
  currency: 'eur';
  status: 'pending' | 'succeeded' | 'failed' | 'cancelled';
  stripePaymentIntentId: string;
  createdAt: Date;
}

export type Universe = 'tatouage' | 'portraits' | 'ateliers';

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  gradient: string;
}
