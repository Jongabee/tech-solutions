"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { aboutEmail, aboutFacebook, aboutInsta, aboutLinkedin, aboutName, aboutPhone, aboutTwitter } from "@/utils/constant"
import { Email, Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CircleIcon from '@mui/icons-material/Circle';
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
              <Link href="/faq" color="text.secondary" underline="hover">
                {t("navigation.FAQ")}
              </Link>
              <Link href="/#contacto " color="text.secondary" underline="hover">
                {t("navigation.contact")}
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t("footer.location")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FmdGoodOutlinedIcon sx={{ fontSize: 16 }} />
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{fontWeight: "bold"}}>
                    Argentina
                  </Typography>
                  <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                    <CircleIcon sx={{ fontSize: 5 }} />
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: 11}}>
                      Buenos Aires
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FmdGoodOutlinedIcon sx={{ fontSize: 16 }} />
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{fontWeight: "bold"}}>
                    Chile
                  </Typography>
                  <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                    <CircleIcon sx={{ fontSize: 5 }} />
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: 11}}>
                      Santiago
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} {aboutName}. {t("footer.rights")} 😊
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
