import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configuración del transportador de correo
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    // Configuración del correo
    const mailOptions = {
      from: process.env.SMTP_FROM || "noreply@techsolutions.com",
      to: process.env.CONTACT_EMAIL || "contacto@techsolutions.com",
      subject: `Nuevo mensaje de contacto: ${subject || "Sin asunto"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2196F3;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject || "Sin asunto"}</p>
            <div style="margin-top: 20px;">
              <strong>Mensaje:</strong>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Este mensaje fue enviado desde el formulario de contacto de TechSolutions.
          </p>
        </div>
      `,
    }

    // Enviar correo
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Mensaje enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al enviar correo:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
