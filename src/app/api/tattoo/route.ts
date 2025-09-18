import { NextRequest, NextResponse } from 'next/server';
import { createTattooRequest } from '@/lib/supabase/database';
import { sendTattooRequestConfirmation, notifyLauraNewRequest } from '@/lib/email/templates';
import { tattooRequestSchema } from '@/lib/validations/schemas';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const validatedData = tattooRequestSchema.parse(body);
    
    // Création de la demande dans la base de données
    const tattooRequest = await createTattooRequest({
      ...validatedData,
      status: 'pending',
    });
    
    // Envoi des emails
    await Promise.all([
      sendTattooRequestConfirmation(tattooRequest),
      notifyLauraNewRequest('tattoo', tattooRequest)
    ]);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Demande envoyée avec succès',
      requestId: tattooRequest.id 
    });
    
  } catch (error) {
    console.error('Error processing tattoo request:', error);
    
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
