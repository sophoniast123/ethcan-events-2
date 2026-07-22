import emailjs from "@emailjs/browser";

// EmailJS configuration — set these in .env.local (see README.md).
// All form submissions are delivered to: ethcanevents@gmail.com
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export type EmailPayload = {
  form_type: string; // e.g. "Registration", "Partnership", "Contact"
  [key: string]: string;
};

export async function sendEmail(payload: EmailPayload): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_* keys to .env.local (see README.md)."
    );
  }
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { to_email: "ethcanevents@gmail.com", ...payload },
    { publicKey: PUBLIC_KEY }
  );
}
