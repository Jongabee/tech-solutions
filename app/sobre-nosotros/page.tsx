import type { Metadata } from "next"
import AboutClient from "./AboutClient"
import { aboutName } from "@/utils/constant"

export const metadata: Metadata = {
  title: `Sobre Nosotros - ${aboutName}`,
  description: "Conoce nuestra historia, misión, visión y el equipo que hace posible las mejores soluciones digitales.",
}

export default function AboutPage() {
  return <AboutClient />
}