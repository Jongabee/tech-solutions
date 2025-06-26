import { aboutEmail, aboutName, aboutPhone, aboutPhoneLink, aboutWebSite, logoEmail } from "./constant"

export function confirmationEmailUser({
  name,
  subject,
  message,
  email,
}: {
  name: string
  subject?: string
  message: string
  companyEmail: string
  companyWebsite: string
  email: string
}) {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="${logoEmail}" alt="${aboutName} logo" style="max-width: 180px;" />
      </div>
      <h2 style="color: #005fa3;">Hola ${name},</h2>
        <p>
        Gracias por contactarte con el equipo de <strong>${aboutName}</strong>. Hemos recibido tu mensaje correctamente y te responderemos a la brevedad a la dirección de correo que nos proporcionaste:
        </p>
        <div style="background-color: #f2f2f2; padding: 12px 20px; margin: 16px 0; border-radius: 6px; text-align: center; word-break: break-word;">
        <strong style="font-size: 1rem; color: #333;">${email}</strong>
        </div>

      <hr />
      <h3>Resumen de tu mensaje:</h3>
      <p><strong>Asunto:</strong> ${subject || '(sin asunto)'}</p>
      <p><strong>Mensaje:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      <hr />
      <p style="font-size: 0.9em;">
        Si lo preferís, también podés contactarnos directamente por WhatsApp haciendo clic
        <a href="${aboutPhoneLink}" style="color: #25D366; text-decoration: none;" target="_blank">aquí</a>
        </p>
        <p style="font-size: 0.9em;">
        Además, podés seguir navegando por nuestra web en <a href="${aboutWebSite}">${aboutWebSite}</a>.
    </p>

      <p style="color: #888; font-size: 0.8em; text-align: center;">© ${new Date().getFullYear()} ${aboutName}. Todos los derechos reservados.</p>
    </div>
  `
}
