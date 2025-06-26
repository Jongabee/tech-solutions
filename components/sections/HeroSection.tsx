"use client"

import { Box, Container, Typography, Button, Grid } from "@mui/material"
import { ArrowForward, PlayArrow } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useTranslation } from "@/hooks/useTranslation"

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)
const MotionButton = motion(Button)

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <MotionTypography
                variant="h2"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("hero.title")}
              </MotionTypography>

              <MotionTypography
                variant="h6"
                sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("hero.subtitle")}
              </MotionTypography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <MotionButton
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  href="/contacto"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": {
                      bgcolor: "grey.100",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {t("hero.cta.primary")}
                </MotionButton>

                <MotionButton
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrow />}
                  href="/portafolio"
                  sx={{
                    borderColor: "white",
                    color: "primary.main",
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {t("hero.cta.secondary")}
                </MotionButton>
              </Box>
            </MotionBox>
          </Grid>

          {/* <Grid item xs={12} md={6}>
            <MotionBox
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: 300, md: 400 },
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Box
                component="img"
                src="/header-logo-4.webp"
                // src="/placeholder.svg?height=400&width=500"
                alt="Digital Solutions"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              />
            </MotionBox>
          </Grid> */}
        </Grid>
      </Container>

      <Box
        sx={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: "50%",
          bgcolor: "rgba(70, 30, 21, 0.2)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          bgcolor: "rgba(70, 30, 21, 0.2)",
          zIndex: 0,
        }}
      />
    </Box>
  )
}
