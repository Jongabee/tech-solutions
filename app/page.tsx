import type { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"
import { Box, Container } from "@mui/material"
import ServicesOverview from "@/components/sections/ServicesOverview"
import ContactClient from "@/components/contacto"

export const metadata: Metadata = {
  title: "Inicio - TechSolutions",
  description:
    "Transformamos ideas en soluciones digitales innovadoras. Desarrollo de plataformas web, aplicaciones móviles y sistemas empresariales.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Container>
        <ServicesOverview />
      </Container>
      <Box id="contact">
        <ContactClient />
      </Box>

    </>
  )
}