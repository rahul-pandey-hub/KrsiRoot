'use server'

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Define recipient types
export type RecipientType = 'sales' | 'support' | 'info' | 'careers';

// Map recipient types to environment variables
const RECIPIENT_EMAILS: Record<RecipientType, string> = {
  sales: process.env.CONTACT_SALES_EMAIL || 'aditya.sharma@shreemaruti.com',
  support: process.env.CONTACT_SUPPORT_EMAIL || 'ravindrakumar.pandey@shreemaruti.com',
  info: process.env.CONTACT_INFO_EMAIL || 'rajukumar.verma@shreemaruti.com',
  careers: process.env.CONTACT_CAREERS_EMAIL || 'divyang.sharma@shreemaruti.com',
};

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  try {
    // Get all recipient emails
    const allRecipients = Object.values(RECIPIENT_EMAILS).join(', ');
    
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: allRecipients,
      subject: `[KrsiRoots Contact] ${formData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
            .info-item { margin-bottom: 15px; }
            .label { font-weight: bold; color: #4CAF50; }
            .message-box { background-color: white; padding: 15px; border-left: 4px solid #4CAF50; margin-top: 20px; }
            .department { background-color: #e8f5e9; padding: 10px; border-radius: 4px; margin-bottom: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="info-item">
                <span class="label">Name:</span> ${formData.name}
              </div>
              <div class="info-item">
                <span class="label">Email:</span> ${formData.email}
              </div>
              <div class="info-item">
                <span class="label">Phone:</span> ${formData.phone}
              </div>
              <div class="info-item">
                <span class="label">Subject:</span> ${formData.subject}
              </div>
              <div class="message-box">
                <span class="label">Message:</span><br>
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the KrsiRoots contact form.</p>
              <p>© ${new Date().getFullYear()} KrsiRoots. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
} 