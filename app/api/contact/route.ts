
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: string;
  email?: string;
  goals?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP environment variables are not configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    requireTLS: !secure,
    tls: {
      minVersion: "TLSv1.2",
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const goals = body.goals?.trim();

    if (!name || !email || !goals) {
      return NextResponse.json(
        { message: "Name, email, and project goals are required." },
        { status: 400 }
      );
    }

    const transporter = getTransporter();

    const destination = process.env.CONTACT_TO || process.env.SMTP_USER;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeGoals = escapeHtml(goals).replace(/\n/g, "<br />");

    const subject = `New Project Inquiry from ${name}`;

    const text = [
      "Auronex received a new project inquiry.",
      "",
      `Full Name: ${name}`,
      `Work Email: ${email}`,
      "",
      "Project Goals:",
      goals,
    ].join("\n");


const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
</head>

<body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:32px 16px;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" border="0"
style="border-radius:24px;border:1px solid #e2e8f0;overflow:hidden;background:#ffffff;">

<tr>
<td style="padding:32px;background:linear-gradient(135deg,#031126,#0b1f3a,#12355b);">

<div style="
display:inline-block;
padding:8px 14px;
border-radius:999px;
font-size:11px;
font-weight:700;
letter-spacing:0.15em;
text-transform:uppercase;
margin-bottom:14px;
color:#67e8f9 !important;
-webkit-text-fill-color:#67e8f9;
border:1px solid rgba(34,211,238,0.35);
background:rgba(34,211,238,0.08);
">
NEW PROJECT INQUIRY
</div>

<div style="
font-size:30px;
font-weight:700;
line-height:1.25;
color:#ffffff !important;
-webkit-text-fill-color:#ffffff;
">
A new client inquiry has arrived.
</div>

<div style="
margin-top:10px;
font-size:15px;
line-height:1.6;
color:#e2e8f0 !important;
-webkit-text-fill-color:#e2e8f0;
">
Review the details below and reply directly to the sender if you want to continue the conversation.
</div>

</td>
</tr>

<tr>
<td style="padding:28px;color:#0f172a;">

<table width="100%">

<tr>
<td style="width:140px;font-size:13px;text-transform:uppercase;color:#64748b;">
Full Name
</td>

<td style="font-size:18px;font-weight:600;">
${safeName}
</td>
</tr>

<tr><td height="18"></td></tr>

<tr>
<td style="font-size:13px;text-transform:uppercase;color:#64748b;">
Work Email
</td>

<td style="font-size:18px;">
<a href="mailto:${safeEmail}" style="color:#0284c7;text-decoration:none;">
${safeEmail}
</a>
</td>
</tr>

<tr><td height="18"></td></tr>

<tr>
<td style="font-size:13px;text-transform:uppercase;color:#64748b;vertical-align:top;">
Project Goals
</td>

<td style="font-size:17px;">
${safeGoals}
</td>
</tr>

</table>

</td>
</tr>

<tr>
<td style="border-top:1px solid #e2e8f0;padding:18px 28px;font-size:13px;color:#64748b;">
Sent from the Auronex contact form. Replying to this email will go directly to the sender.
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;



    await transporter.verify();

    await transporter.sendMail({
      from: `"Auronex" <${process.env.SMTP_USER}>`,
      to: destination,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({
      message: "Thanks. Your details were sent successfully.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    const message =
      error instanceof Error ? error.message : "We could not send your message right now.";

    return NextResponse.json(
      {
        message:
          process.env.NODE_ENV === "production"
            ? `Mail send failed: ${message}`
            : message,
      },
      { status: 500 }
    );
  }
}
