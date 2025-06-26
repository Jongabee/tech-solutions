"use client"

import { Container, Typography, Card, CardContent, Box, Grid } from "@mui/material"
import {
  Code,
  Web,
  Cloud,
  Security,
  Insights,
  MobileFriendly,
  AutoAwesomeMotion,
  SwapHoriz,
} from "@mui/icons-material"
import { useTranslation } from "@/hooks/useTranslation"

const services = [
  { icon: Web, key: "webDevelopment", color: "#2196F3" },
  { icon: MobileFriendly, key: "mobileDevelopment", color: "#4CAF50" },
  { icon: Code, key: "customSoftware", color: "#607D8B" },
  { icon: Insights, key: "dataAnalytics", color: "#9C27B0" },
  { icon: AutoAwesomeMotion, key: "processAutomation", color: "#00ACC1" },
  { icon: SwapHoriz, key: "dataMigration", color: "#8E24AA" },
  { icon: Cloud, key: "cloudSolutions", color: "#FF9800" },
  { icon: Security, key: "cybersecurity", color: "#F44336" },
]

export default function ServicesClient() {
  const { t } = useTranslation()

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        {t("services.title")}
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 8, maxWidth: 800, mx: "auto" }}
      >
        {t("services.subtitle")}
      </Typography>

      <Grid container spacing={4}>
        {services.map((service) => {
          const IconComponent = service.icon
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} key={service.key}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Box sx={{ mb: 3 }}>
                    <IconComponent sx={{ fontSize: 60, color: service.color }} />
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t(`services.items.${service.key}.title`)}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {t(`services.items.${service.key}.description`)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}