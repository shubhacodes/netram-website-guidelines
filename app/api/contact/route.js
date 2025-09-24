import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message, source } = body;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to the same email
      subject: source.includes('LASIK') ? `LASIK applicant: ${name}` : `Cataract Surgery applicant: ${name}`,
      html: `
        <h2>New ${source.includes('LASIK') ? 'LASIK' : 'Cataract Surgery'} Inquiry</h2>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message || 'Not provided'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
