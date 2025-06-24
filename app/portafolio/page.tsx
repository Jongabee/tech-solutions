import type { Metadata } from "next"
import PortfolioClient from "./PortfolioClient"

export const metadata: Metadata = {
  title: "Portafolio - TechSolutions",
  description: "Explora nuestros proyectos más destacados y casos de éxito en desarrollo de plataformas digitales.",
}

export default function PortfolioPage() {
  return <PortfolioClient />
}