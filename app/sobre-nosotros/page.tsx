import type { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
  title: "Sobre Nosotros - TechSolutions",
  description: "Conoce nuestra historia, misión, visión y el equipo que hace posible las mejores soluciones digitales.",
}

export default function AboutPage() {
  return <AboutClient />
}