import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { email, name, message, company, phone, service } = await request.json();

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email credentials are not set in environment variables.');
    return NextResponse.json(
      { message: 'Server configuration error. Please contact the administrator.' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'askusstudio@gmail.com',
    subject: `New Contact Form Submission from ${name || email}`,
    html: `
      <h1>New Contact Form Submission</h1>
      ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
      ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Failed to send email:', error);
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { message: 'Authentication error. Please check server credentials.' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { message: 'An error occurred while sending the email. Please try again later.' },
      { status: 500 }
    );
  }
}
