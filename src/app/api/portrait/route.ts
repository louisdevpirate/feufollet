import { NextRequest, NextResponse } from 'next/server';
import { createPortraitRequest } from '@/lib/supabase/database';
import { sendPortraitRequestConfirmation, notifyLauraNewRequest } from '@/lib/email/templates';
import { portraitRequestSchema } from '@/lib/validations/schemas';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const validatedData = portraitRequestSchema.parse(body);
    
    // Création de la demande dans la base de données
    const portraitRequest = await createPortraitRequest({
      ...validatedData,
      status: 'pending',
    });
    
    // Envoi des emails
    await Promise.all([
      sendPortraitRequestConfirmation(portraitRequest),
      notifyLauraNewRequest('portrait', portraitRequest)
    ]);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Commande envoyée avec succès',
      requestId: portraitRequest.id 
    });
    
  } catch (error) {
    console.error('Error processing portrait request:', error);
    
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
