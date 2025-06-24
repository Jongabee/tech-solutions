"use client"

import type { ReactNode } from "react"
import { Box } from "@mui/material"
import Header from "./Header"
import Footer from "./Footer"
import WhatsAppButton from "../ui/WhatsAppButton"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 7, sm: 8 } }}>
        {children}
      </Box>
      <Footer />
      <WhatsAppButton />
    </Box>
  )
}
