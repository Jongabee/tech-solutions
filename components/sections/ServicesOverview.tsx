"use client"

import { Box, Typography, Card, CardContent, Button } from "@mui/material"
import Grid from "@mui/material/Grid"
import {
  Web,
  Insights,
  Code,
  MobileFriendly,
  ArrowForward,
} from "@mui/icons-material"
import { motion } from "framer-motion"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"

const MotionCard = motion(Card)

const services = [{
    icon: Insights,
    key: "dataAnalytics",
    color: "#9C27B0",
  },
  {
    icon: Web,
    key: "webDevelopment",
    color: "#1976D2",
  },
  {
    icon: MobileFriendly,
    key: "mobileDevelopment",
    color: "#388E3C",
  },
  {
    icon: Code,
    key: "customSoftware",
    color: "#F57C00",
  },
  
]

export default function ServicesOverview() {
  const { t } = useTranslation()

  return (
    <Box>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
        {t("home.services.title")}
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 8, maxWidth: 800, mx: "auto" }}
      >
        {t("home.services.subtitle")}
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <Grid item xs={12} sm={6} md={3} key={service.key}>
              <MotionCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                sx={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: 3,
                  transition: "box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 3 }}>
                    <IconComponent sx={{ fontSize: 60, color: service.color }} />
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {t(`services.items.${service.key}.title`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(`services.items.${service.key}.description`)}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          )
        })}
      </Grid>

      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          component={Link}
          href="/servicios"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 999,
            backgroundColor: "#2196F3",
            "&:hover": {
              backgroundColor: "#5e35b1",
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {t("home.services.viewAll") || "Descubre Todos los Servicios"}
        </Button>
      </Box>
    </Box>
  )
}