import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT!),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(template: EmailTemplate) {
  try {
    const info = await transporter.sendMail({
      from: `"Laura - Artiste" <${process.env.EMAIL_USER}>`,
      to: template.to,
      subject: template.subject,
      html: template.html,
      text: template.text,
    });

    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Impossible d\'envoyer l\'email');
  }
}

export async function sendEmailToLaura(subject: string, html: string) {
  return sendEmail({
    to: process.env.EMAIL_USER!,
    subject: `[Site Laura] ${subject}`,
    html,
  });
}
