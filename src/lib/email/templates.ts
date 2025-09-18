import { sendEmail, sendEmailToLaura } from './config';
import { TattooRequest, PortraitRequest, WorkshopBooking } from '@/types';

export async function sendTattooRequestConfirmation(request: TattooRequest) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #8B4513;">Confirmation de votre demande de tatouage</h2>
      
      <p>Bonjour ${request.clientName},</p>
      
      <p>Votre demande de tatouage a bien été reçue ! Voici un récapitulatif :</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Détails de votre demande :</h3>
        <ul>
          <li><strong>Type :</strong> ${request.tattooType === 'flash' ? 'Flash' : 'Custom'}</li>
          <li><strong>Description :</strong> ${request.description}</li>
          <li><strong>Taille :</strong> ${request.size}</li>
          <li><strong>Emplacement :</strong> ${request.placement}</li>
          <li><strong>Budget :</strong> ${request.budget}€</li>
          <li><strong>Disponibilités :</strong> ${request.availability.join(', ')}</li>
        </ul>
      </div>
      
      <p>Je vais examiner votre demande et vous recontacter dans les 24h pour confirmer les détails et planifier votre séance.</p>
      
      <p>En attendant, n'hésitez pas à me contacter si vous avez des questions.</p>
      
      <p>À bientôt !<br>Laura</p>
    </div>
  `;

  return sendEmail({
    to: request.clientEmail,
    subject: 'Confirmation de votre demande de tatouage',
    html,
  });
}

export async function sendPortraitRequestConfirmation(request: PortraitRequest) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4A5568;">Confirmation de votre commande de portrait</h2>
      
      <p>Bonjour ${request.clientName},</p>
      
      <p>Votre commande de portrait a bien été reçue ! Voici un récapitulatif :</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Détails de votre commande :</h3>
        <ul>
          <li><strong>Type :</strong> ${request.portraitType === 'digital' ? 'Digital' : 'Traditionnel'}</li>
          <li><strong>Sujet :</strong> ${request.subjectDescription}</li>
          <li><strong>Style :</strong> ${request.style}</li>
          <li><strong>Taille :</strong> ${request.size}</li>
          <li><strong>Budget :</strong> ${request.budget}€</li>
          ${request.deadline ? `<li><strong>Échéance :</strong> ${request.deadline.toLocaleDateString('fr-FR')}</li>` : ''}
        </ul>
      </div>
      
      <p>Je vais examiner votre commande et vous recontacter dans les 24h pour confirmer les détails et le planning de réalisation.</p>
      
      <p>En attendant, n'hésitez pas à me contacter si vous avez des questions.</p>
      
      <p>À bientôt !<br>Laura</p>
    </div>
  `;

  return sendEmail({
    to: request.clientEmail,
    subject: 'Confirmation de votre commande de portrait',
    html,
  });
}

export async function sendWorkshopBookingConfirmation(booking: WorkshopBooking) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2D5016;">Confirmation de votre inscription à l'atelier</h2>
      
      <p>Bonjour ${booking.clientName},</p>
      
      <p>Votre inscription à l'atelier a bien été reçue ! Voici un récapitulatif :</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Détails de votre inscription :</h3>
        <ul>
          <li><strong>Date :</strong> ${booking.workshopDate.toLocaleDateString('fr-FR')}</li>
          <li><strong>Niveau :</strong> ${booking.workshopType === 'beginner' ? 'Débutant' : booking.workshopType === 'intermediate' ? 'Intermédiaire' : 'Avancé'}</li>
          <li><strong>Votre expérience :</strong> ${booking.experience}</li>
          ${booking.specialRequests ? `<li><strong>Demandes particulières :</strong> ${booking.specialRequests}</li>` : ''}
        </ul>
      </div>
      
      <p>Je vais examiner votre inscription et vous recontacter dans les 24h pour confirmer votre place et vous donner tous les détails pratiques.</p>
      
      <p>En attendant, n'hésitez pas à me contacter si vous avez des questions.</p>
      
      <p>À bientôt !<br>Laura</p>
    </div>
  `;

  return sendEmail({
    to: booking.clientEmail,
    subject: 'Confirmation de votre inscription à l\'atelier',
    html,
  });
}

export async function notifyLauraNewRequest(requestType: 'tattoo' | 'portrait' | 'workshop', request: Record<string, unknown>) {
  const typeLabels = {
    tattoo: 'Tatouage',
    portrait: 'Portrait',
    workshop: 'Atelier'
  };

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Nouvelle demande ${typeLabels[requestType]}</h2>
      
      <p>Une nouvelle demande ${typeLabels[requestType].toLowerCase()} a été reçue :</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Informations client :</h3>
        <ul>
          <li><strong>Nom :</strong> ${request.clientName}</li>
          <li><strong>Email :</strong> ${request.clientEmail}</li>
          <li><strong>Téléphone :</strong> ${request.clientPhone}</li>
          <li><strong>Date :</strong> ${new Date().toLocaleDateString('fr-FR')}</li>
        </ul>
        
        <h3>Détails de la demande :</h3>
        <pre style="background-color: white; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${JSON.stringify(request, null, 2)}</pre>
      </div>
      
      <p>Connectez-vous à votre espace admin pour traiter cette demande.</p>
    </div>
  `;

  return sendEmailToLaura(`Nouvelle demande ${typeLabels[requestType]}`, html);
}
