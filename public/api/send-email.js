import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, recaptchaToken } = req.body;

  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Vérification reCAPTCHA
  try {
    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });
    
    const verifyData = await verifyResponse.json();
    
    if (!verifyData.success || verifyData.score < 0.5) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'reCAPTCHA verification error' });
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
