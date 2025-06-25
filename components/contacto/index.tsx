"use client"

import { Container, Typography, Paper, Box } from "@mui/material"
import ContactForm from "@/components/forms/ContactForm"
import { useTranslation } from "@/hooks/useTranslation"

export default function ContactClient() {
  const { t } = useTranslation()

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 800, mx: "auto" }}>
        {t("contact.subtitle")}
      </Typography>
          <Box sx={{ maxWidth: 600, mx: "auto", my: 6, px: 2 }}>
            <Paper elevation={2} sx={{ p: 4 }}>
              <ContactForm />
            </Paper>
          </Box>
    </Container>
  )
}