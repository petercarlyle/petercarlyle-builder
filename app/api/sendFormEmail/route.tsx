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
    const smtpConfig = {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    //@ts-ignore
    const transporter = nodemailer.createTransport(smtpConfig as Transport);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject,
      text,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
