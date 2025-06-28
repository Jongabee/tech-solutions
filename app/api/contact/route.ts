import { confirmationEmailUser } from '@/utils/confirmationEmailUser'
import { aboutEmail, aboutName, aboutWebSite } from '@/utils/constant'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, subject, message } = body
  

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Faltan campos obligatorios' }, { status: 400 })
  }

  try {
  const responseEmpresa = await resend.emails.send({
    from: `${aboutName} <${aboutEmail}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL as string,
    subject: subject || `Nuevo mensaje de ${name}`,
    text: `
      Nombre: ${name}
      Correo: ${email}
      Asunto: ${subject || '(sin asunto)'}
      Mensaje:
      ${message}
    `.trim(),
  })

  console.log('Respuesta de envío a empresa:', responseEmpresa)

  const responseCliente = await resend.emails.send({
    from: `${aboutName} <${aboutEmail}>`,
    to: aboutEmail,
    subject: 'Hemos recibido tu mensaje',
    html: confirmationEmailUser({
    name,
    subject,
    message,
    companyEmail: aboutEmail,
    companyWebsite: aboutWebSite,
    email,
  }),
            })

            console.log('Respuesta de envío al cliente:', responseCliente)

            return NextResponse.json({ success: true }, { status: 200 })
          } catch (error) {
            console.error('Error al enviar correos:', error)
            return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 })
          }
        }