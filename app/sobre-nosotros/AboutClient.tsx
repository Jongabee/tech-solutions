"use client"

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Paper,
} from "@mui/material"
import { Visibility, Flag, Group } from "@mui/icons-material"
import { teamData } from "@/data/team"
import { useTranslation } from "@/hooks/useTranslation"

export default function AboutClient() {
  const { t } = useTranslation()

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          {t("about.title")}
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 800, mx: "auto" }}>
          {t("about.history")}
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 4, textAlign: "center", height: "100%" }}>
            <Flag sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
            <Typography variant="h5" component="h3" gutterBottom>
              {t("about.mission.title")}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t("about.mission.description")}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 4, textAlign: "center", height: "100%" }}>
            <Visibility sx={{ fontSize: 60, color: "secondary.main", mb: 2 }} />
            <Typography variant="h5" component="h3" gutterBottom>
              {t("about.vision.title")}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t("about.vision.description")}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 4, textAlign: "center", height: "100%" }}>
            <Group sx={{ fontSize: 60, color: "success.main", mb: 2 }} />
            <Typography variant="h5" component="h3" gutterBottom>
              {t("about.values.title")}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t("about.values.description")}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          {t("about.team.title")}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamData.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card sx={{ textAlign: "center", p: 3 }}>
                <Avatar src={member.photo} alt={member.name} sx={{ width: 120, height: 120, mx: "auto", mb: 2 }} />
                <CardContent>
                  <Typography variant="h6" component="h4" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {member.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
