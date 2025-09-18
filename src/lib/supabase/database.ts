import { supabaseAdmin } from './client';
import { TattooRequest, PortraitRequest, WorkshopBooking, Payment } from '@/types';

// Fonctions pour les demandes de tatouage
export async function createTattooRequest(request: Omit<TattooRequest, 'id' | 'createdAt' | 'updatedAt'>) {
  const { data, error } = await supabaseAdmin
    .from('tattoo_requests')
    .insert([{
      ...request,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating tattoo request:', error);
    throw new Error('Impossible de créer la demande de tatouage');
  }

  return data;
}

export async function getTattooRequests() {
  const { data, error } = await supabaseAdmin
    .from('tattoo_requests')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching tattoo requests:', error);
    throw new Error('Impossible de récupérer les demandes');
  }

  return data;
}

export async function updateTattooRequestStatus(id: string, status: TattooRequest['status']) {
  const { data, error } = await supabaseAdmin
    .from('tattoo_requests')
    .update({ 
      status,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating tattoo request:', error);
    throw new Error('Impossible de mettre à jour la demande');
  }

  return data;
}

// Fonctions pour les demandes de portraits
export async function createPortraitRequest(request: Omit<PortraitRequest, 'id' | 'createdAt' | 'updatedAt'>) {
  const { data, error } = await supabaseAdmin
    .from('portrait_requests')
    .insert([{
      ...request,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating portrait request:', error);
    throw new Error('Impossible de créer la demande de portrait');
  }

  return data;
}

export async function getPortraitRequests() {
  const { data, error } = await supabaseAdmin
    .from('portrait_requests')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching portrait requests:', error);
    throw new Error('Impossible de récupérer les demandes');
  }

  return data;
}

// Fonctions pour les réservations d'ateliers
export async function createWorkshopBooking(booking: Omit<WorkshopBooking, 'id' | 'createdAt' | 'updatedAt'>) {
  const { data, error } = await supabaseAdmin
    .from('workshop_bookings')
    .insert([{
      ...booking,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating workshop booking:', error);
    throw new Error('Impossible de créer la réservation');
  }

  return data;
}

export async function getWorkshopBookings() {
  const { data, error } = await supabaseAdmin
    .from('workshop_bookings')
    .select('*')
    .order('workshop_date', { ascending: true });

  if (error) {
    console.error('Error fetching workshop bookings:', error);
    throw new Error('Impossible de récupérer les réservations');
  }

  return data;
}

// Fonctions pour les paiements
export async function createPayment(payment: Omit<Payment, 'id' | 'createdAt'>) {
  const { data, error } = await supabaseAdmin
    .from('payments')
    .insert([{
      ...payment,
      created_at: new Date().toISOString(),
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating payment:', error);
    throw new Error('Impossible de créer le paiement');
  }

  return data;
}

export async function updatePaymentStatus(stripePaymentIntentId: string, status: Payment['status']) {
  const { data, error } = await supabaseAdmin
    .from('payments')
    .update({ status })
    .eq('stripe_payment_intent_id', stripePaymentIntentId)
    .select()
    .single();

  if (error) {
    console.error('Error updating payment:', error);
    throw new Error('Impossible de mettre à jour le paiement');
  }

  return data;
}
