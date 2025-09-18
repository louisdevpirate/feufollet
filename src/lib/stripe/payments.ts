import { stripe, formatAmountForStripe } from './config';
import { TattooRequest, PortraitRequest, WorkshopBooking } from '@/types';

export async function createPaymentIntent(
  amount: number,
  currency: string,
  metadata: {
    requestType: 'tattoo' | 'portrait' | 'workshop';
    requestId: string;
    clientEmail: string;
  }
) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: formatAmountForStripe(amount, currency),
      currency,
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw new Error('Impossible de créer le paiement');
  }
}

export async function createTattooPayment(request: TattooRequest) {
  const depositAmount = Math.min(request.budget * 0.3, 100); // 30% ou max 100€
  
  return createPaymentIntent(depositAmount, 'eur', {
    requestType: 'tattoo',
    requestId: request.id,
    clientEmail: request.clientEmail,
  });
}

export async function createPortraitPayment(request: PortraitRequest) {
  const depositAmount = Math.min(request.budget * 0.5, 50); // 50% ou max 50€
  
  return createPaymentIntent(depositAmount, 'eur', {
    requestType: 'portrait',
    requestId: request.id,
    clientEmail: request.clientEmail,
  });
}

export async function createWorkshopPayment(booking: WorkshopBooking) {
  const workshopPrices = {
    beginner: 25,
    intermediate: 35,
    advanced: 45,
  };
  
  const amount = workshopPrices[booking.workshopType];
  
  return createPaymentIntent(amount, 'eur', {
    requestType: 'workshop',
    requestId: booking.id,
    clientEmail: booking.clientEmail,
  });
}
