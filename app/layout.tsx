import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import CssBaseline from "@mui/material/CssBaseline"
import { LanguageProvider } from "@/components/providers/LanguageProvider"
import { ThemeContextProvider } from "@/components/providers/ThemeProvider"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Layout from "@/components/layout/Layout"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "TechSolutions - Desarrollo de Plataformas Digitales",
  description:
    "Empresa líder en desarrollo de plataformas digitales, aplicaciones web y soluciones tecnológicas innovadoras.",
  keywords: "desarrollo web, aplicaciones, plataformas digitales, tecnología, software",
  authors: [{ name: "TechSolutions" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <LanguageProvider>
            <ThemeContextProvider>
              <CssBaseline />
              <Layout>{children}</Layout>
            </ThemeContextProvider>
          </LanguageProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
