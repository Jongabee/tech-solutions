import type { Metadata } from "next"
import ServicesClient from "../../components/servicios/ServicesClient"

export const metadata: Metadata = {
  title: "Servicios - TechSolutions",
  description: "Conoce nuestros servicios de desarrollo web, aplicaciones móviles, cloud computing y más.",
}

export default function ServicesPage() {
  return <ServicesClient />
}