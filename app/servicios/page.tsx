import type { Metadata } from "next"
import ServicesClient from "../../components/servicios/ServicesClient"
import { aboutName } from "@/utils/constant"

export const metadata: Metadata = {
  title: `Servicios - ${aboutName}`,
  description: "Conoce nuestros servicios de desarrollo web, aplicaciones móviles, cloud computing y más.",
}

export default function ServicesPage() {
  return <ServicesClient />
}