import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["deepthimayip@gmail.com"],
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0d1515; color: #f0f7f7; border-radius: 12px;">
          <h2 style="color: #2dd4d4; font-size: 22px; margin-bottom: 24px; font-weight: 400;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #7aacac; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; width: 80px;">From</td>
              <td style="padding: 10px 0; color: #f0f7f7;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7aacac; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Email</td>
              <td style="padding: 10px 0; color: #2dd4d4;"><a href="mailto:${email}" style="color: #2dd4d4;">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #111d1d; border-radius: 8px; border-left: 2px solid #2dd4d4;">
            <p style="color: #7aacac; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">Message</p>
            <p style="color: #f0f7f7; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; color: #3a6060; font-size: 11px;">Sent via your portfolio contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
