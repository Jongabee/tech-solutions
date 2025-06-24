import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contacto - TechSolutions",
  description: "Ponte en contacto con nosotros para discutir tu próximo proyecto digital.",
}

export default function ContactPage() {
  return <ContactClient />
}