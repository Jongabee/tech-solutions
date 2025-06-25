"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { aboutEmail, aboutFacebook, aboutInsta, aboutLinkedin, aboutName, aboutPhone, aboutTwitter } from "@/utils/constant"
import { Email, Facebook, Instagram, LinkedIn, LocationOn, Phone, Twitter } from "@mui/icons-material"
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from "@mui/material"

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {aboutName}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {t("footer.description")}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton size="small" color="primary" component={Link} href={`${aboutFacebook}`} target="_blank" rel="noopener noreferrer">
                <Facebook />
              </IconButton>
              <IconButton size="small" color="primary" component={Link} href={`${aboutTwitter}`} target="_blank" rel="noopener noreferrer">
                <Twitter />
              </IconButton>
              <IconButton size="small" color="primary" component={Link} href={`${aboutLinkedin}`} target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </IconButton>
              <IconButton size="small" color="primary" component={Link} href={`${aboutInsta}`} target="_blank" rel="noopener noreferrer">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t("footer.services")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/servicios" color="text.secondary" underline="hover">
                {t("services.items.webDevelopment.title")}
              </Link>
              <Link href="/servicios" color="text.secondary" underline="hover">
                {t("services.items.mobileDevelopment.title")}
              </Link>
              <Link href="/servicios" color="text.secondary" underline="hover">
                {t("services.items.processAutomation.title")}
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t("footer.company")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/sobre-nosotros" color="text.secondary" underline="hover">
                {t("navigation.about")}
              </Link>
              <Link href="/portafolio" color="text.secondary" underline="hover">
                {t("navigation.portfolio")}
              </Link>
              <Link href="/contacto" color="text.secondary" underline="hover">
                {t("navigation.contact")}
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t("footer.contact")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email sx={{ fontSize: 16 }} />
                <Typography variant="body2" color="text.secondary">
                  {aboutEmail}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ fontSize: 16 }} />
                <Typography variant="body2" color="text.secondary">
                  {aboutPhone}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} {aboutName}. {t("footer.rights")}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
