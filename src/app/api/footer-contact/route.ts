import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECEIVER_EMAIL = "aminachabchoub84@gmail.com";
const SUBJECT = "Message envoyé depuis Footer";

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email et message sont obligatoires." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            "SMTP_USER ou SMTP_PASS manquant dans .env.local",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      to: RECEIVER_EMAIL,
      subject: SUBJECT,
      replyTo: email,
      text: `Nouveau message depuis le footer

Email expéditeur : ${email}

Message :
${message}`,
      html: `
        <h2>Nouveau message depuis le footer</h2>
        <p><strong>Email expéditeur :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès.",
    });
  } catch (error) {
    console.error("Erreur envoi mail :", error);
    return NextResponse.json(
      { error: "Erreur lors de l’envoi du message." },
      { status: 500 }
    );
  }
}