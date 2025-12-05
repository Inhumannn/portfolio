import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'thomas.pnbm@gmail.com',
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message depuis ton portfolio</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    });
  } catch (error) {
    console.error('Erreur:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi' 
    });
  }
}
