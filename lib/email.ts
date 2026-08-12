// FormSubmit.co configuration for form submissions
// All form submissions are delivered to: ethcanevents@gmail.com
const FORMSUBMIT_EMAIL = "ethcanevents@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

export type EmailPayload = {
  form_type: string; // e.g. "Registration", "Partnership", "Contact"
  [key: string]: string;
};

export async function sendEmail(payload: EmailPayload): Promise<void> {
  // Prepare form data for FormSubmit
  const formData = new FormData();
  formData.append("email", FORMSUBMIT_EMAIL);
  formData.append("form_type", payload.form_type);

  // Add all other fields
  Object.entries(payload).forEach(([key, value]) => {
    if (key !== "form_type") {
      formData.append(key, value);
    }
  });

  // Add hidden fields for FormSubmit features
  formData.append("_subject", `ETHCAN Website — ${payload.form_type}`);
  formData.append("_captcha", "false");
  formData.append("_template", "table");

  const response = await fetch(FORMSUBMIT_URL, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to send form. Please try again.");
  }
}