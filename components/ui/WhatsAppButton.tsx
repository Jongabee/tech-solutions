"use client"

import { useState } from "react"
import { Fab, Tooltip, Box, Typography, Paper, IconButton } from "@mui/material"
import { WhatsApp, Close } from "@mui/icons-material"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "@/hooks/useTranslation"
import { aboutPhone } from "@/utils/constant"

const MotionPaper = motion(Paper)
const MotionFab = motion(Fab)

export default function WhatsAppButton() {
  const { t } = useTranslation()
  const [showTooltip, setShowTooltip] = useState(false)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("whatsapp.message"))
    const whatsappUrl = `https://wa.me/${aboutPhone}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip)
  }

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          zIndex: 1000,
        }}
      >
        <MotionFab
          color="success"
          aria-label="WhatsApp"
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            "&:hover": {
              backgroundColor: "#128C7E",
              transform: "scale(1.1)",
            },
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
            transition: "all 0.3s ease",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <WhatsApp sx={{ fontSize: { xs: 28, md: 32 } }} />
        </MotionFab>

        <AnimatePresence>
          {showTooltip && (
            <MotionPaper
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              transition={{ duration: 0.2 }}
              sx={{
                position: "absolute",
                bottom: "100%",
                right: 0,
                mb: 2,
                p: 2,
                maxWidth: 250,
                backgroundColor: "background.paper",
                boxShadow: 3,
                borderRadius: 2,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: "100%",
                  right: 20,
                  width: 0,
                  height: 0,
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderTop: "8px solid",
                  borderTopColor: "background.paper",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <WhatsApp sx={{ color: "#25D366", fontSize: 20, mt: 0.5 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 0.5 }}>
                    {t("whatsapp.title")}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.875rem" }}>
                    {t("whatsapp.description")}
                  </Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowTooltip(false)
                  }}
                  sx={{ p: 0.5 }}
                >
                  <Close sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>
            </MotionPaper>
          )}
        </AnimatePresence>
      </Box>

      {/* <Box
        sx={{
          position: "fixed",
          bottom: { xs: 90, md: 110 },
          right: { xs: 20, md: 30 },
          zIndex: 999,
          display: { xs: "block", md: "none" },
        }}
      >
        <Tooltip title={t("whatsapp.tooltip")} placement="left">
          <MotionFab
            size="small"
            onClick={toggleTooltip}
            sx={{
              backgroundColor: "rgba(37, 211, 102, 0.1)",
              color: "#25D366",
              width: 40,
              height: 40,
              "&:hover": {
                backgroundColor: "rgba(37, 211, 102, 0.2)",
              },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsApp sx={{ fontSize: 20 }} />
          </MotionFab>
        </Tooltip>
      </Box> */}
    </>
  )
}