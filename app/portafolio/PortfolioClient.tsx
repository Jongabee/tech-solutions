"use client"

import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Box,
} from "@mui/material"
import { rawPortfolioData } from "@/data/portfolio"
import { useTranslation } from "@/hooks/useTranslation"

export default function PortfolioClient() {
  const { t } = useTranslation()
  const portfolioData = rawPortfolioData.map(project => ({
    ...project,
    description: t(project.description),
  }))

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        {t("portfolio.title")}
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 800, mx: "auto" }}>
        {t("portfolio.subtitle")}
      </Typography>
      <Grid container spacing={4}>
        {portfolioData.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia component="img" height="200" image={project.image} alt={project.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip key={tech} label={tech} size="small" variant="outlined" />
                  ))}
                </Box>
              </CardContent>
              
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}