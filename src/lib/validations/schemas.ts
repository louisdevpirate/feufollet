import { z } from 'zod';

export const tattooRequestSchema = z.object({
  clientName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  clientEmail: z.string().email('Email invalide'),
  clientPhone: z.string().min(10, 'Numéro de téléphone invalide'),
  tattooType: z.enum(['flash', 'custom']),
  description: z.string().min(10, 'Description trop courte'),
  size: z.string().min(1, 'Veuillez préciser la taille'),
  placement: z.string().min(1, 'Veuillez préciser l\'emplacement'),
  budget: z.number().min(50, 'Budget minimum de 50€'),
  availability: z.array(z.string()).min(1, 'Veuillez sélectionner au moins un créneau'),
  referenceImages: z.array(z.string()).optional()
});

export const portraitRequestSchema = z.object({
  clientName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  clientEmail: z.string().email('Email invalide'),
  clientPhone: z.string().min(10, 'Numéro de téléphone invalide'),
  portraitType: z.enum(['digital', 'traditional']),
  subjectDescription: z.string().min(10, 'Description du sujet trop courte'),
  style: z.string().min(1, 'Veuillez préciser le style souhaité'),
  size: z.string().min(1, 'Veuillez préciser la taille'),
  deadline: z.date().optional(),
  budget: z.number().min(30, 'Budget minimum de 30€'),
  referenceImages: z.array(z.string()).optional()
});

export const workshopBookingSchema = z.object({
  clientName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  clientEmail: z.string().email('Email invalide'),
  clientPhone: z.string().min(10, 'Numéro de téléphone invalide'),
  workshopDate: z.date(),
  workshopType: z.enum(['beginner', 'intermediate', 'advanced']),
  experience: z.string().min(10, 'Décrivez votre expérience'),
  specialRequests: z.string().optional()
});

export type TattooRequestForm = z.infer<typeof tattooRequestSchema>;
export type PortraitRequestForm = z.infer<typeof portraitRequestSchema>;
export type WorkshopBookingForm = z.infer<typeof workshopBookingSchema>;
