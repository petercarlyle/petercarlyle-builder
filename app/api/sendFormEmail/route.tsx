import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transport } from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: any, res: any) {
  try {
    const data = await req.json();
    const subject = 'Peter Carlyle - Contact Form Submission';
    const text = `
      A message form a Potential Client/Company has been submitted on your website. \r\n
      Name: ${data.FirstName} \r\n
      Company Name: ${data.LastName} \r\n
      Email: ${data.Email}\r\n
      phone: ${data.PhoneNumber}\r\n
      Message: ${data.Message}\r\n
      ------------------------------------------------------------------------\r\n
      Date: ${new Date().toLocaleString()} - Peter Carlyle Website
      ------------------------------------------------------------------------\r\n
    `;

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: process.env.CONTACT_EMAIL, // Change to your recipient
      from: process.env.CONTACT_EMAIL, // Change to your verified sender
      subject: 'Peter Carlyle - Website Contact Form Submission',
      text: text,
      html: text.replace(/\r\n/g, '<br>'),
    };
    try {
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent');
        })
        .catch((error: any) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
