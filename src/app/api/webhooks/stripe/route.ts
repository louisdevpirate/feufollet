import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/config';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentSuccess(paymentIntent);
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent;
        await handlePaymentFailure(failedPayment);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  const { requestType, requestId } = paymentIntent.metadata;
  
  // Mettre à jour le statut de la demande dans la base de données
  // Envoyer un email de confirmation au client
  // Notifier Laura de la nouvelle réservation
  
  console.log(`Payment succeeded for ${requestType} request ${requestId}`);
  
  // TODO: Implémenter la logique de mise à jour de la base de données
  // TODO: Envoyer les emails de confirmation
}

async function handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
  const { requestType, requestId } = paymentIntent.metadata;
  
  // Notifier le client de l'échec du paiement
  // Mettre à jour le statut de la demande
  
  console.log(`Payment failed for ${requestType} request ${requestId}`);
  
  // TODO: Implémenter la logique de gestion des échecs
}
