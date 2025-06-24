"use client"

import { Container, Typography, Grid, Paper, Box } from "@mui/material"
import { Email, Phone, LocationOn } from "@mui/icons-material"
import ContactForm from "@/components/forms/ContactForm"
import { useTranslation } from "@/hooks/useTranslation"
import {aboutEmail, aboutPhone} from "@/utils/constant"

export default function ContactClient() {
  const { t } = useTranslation()

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        {t("contact.title")}
      </Typography>

      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 800, mx: "auto" }}>
        {t("contact.subtitle")}
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <ContactForm />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Paper elevation={2} sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 }}>
              <Email sx={{ color: "primary.main", fontSize: 30 }} />
              <Box>
                <Typography variant="h6">{t("contact.email")}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {aboutEmail}
                </Typography>
              </Box>
            </Paper>

            <Paper elevation={2} sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 }}>
              <Phone sx={{ color: "primary.main", fontSize: 30 }} />
              <Box>
                <Typography variant="h6">{t("contact.phone")}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {aboutPhone}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}