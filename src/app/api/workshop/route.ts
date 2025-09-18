import { NextRequest, NextResponse } from 'next/server';
import { createWorkshopBooking } from '@/lib/supabase/database';
import { sendWorkshopBookingConfirmation, notifyLauraNewRequest } from '@/lib/email/templates';
import { workshopBookingSchema } from '@/lib/validations/schemas';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const validatedData = workshopBookingSchema.parse(body);
    
    // Création de la réservation dans la base de données
    const workshopBooking = await createWorkshopBooking({
      ...validatedData,
      status: 'pending',
    });
    
    // Envoi des emails
    await Promise.all([
      sendWorkshopBookingConfirmation(workshopBooking),
      notifyLauraNewRequest('workshop', workshopBooking)
    ]);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Inscription envoyée avec succès',
      bookingId: workshopBooking.id 
    });
    
  } catch (error) {
    console.error('Error processing workshop booking:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
