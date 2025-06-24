"use client"

import type React from "react"
import { useState } from "react"
import { Box, TextField, Button, Typography, Alert, CircularProgress } from "@mui/material"
import { Send } from "@mui/icons-material"
import { useTranslation } from "@/hooks/useTranslation"
import type { ContactFormData, ContactFormErrors } from "@/types"

export default function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t("contact.form.errors.nameRequired")
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.errors.emailRequired")
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.form.errors.emailInvalid")
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.form.errors.messageRequired")
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setError(data.error || t("contact.form.errors.generic"))
      }
    } catch (err) {
      setError(t("contact.form.errors.generic"))
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {t("contact.form.title")}
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {t("contact.form.success")}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField
          name="name"
          label={t("contact.form.name")}
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          required
        />

        <TextField
          name="email"
          label={t("contact.form.email")}
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          required
        />

        <TextField
          name="subject"
          label={t("contact.form.subject")}
          value={formData.subject}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          name="message"
          label={t("contact.form.message")}
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          fullWidth
          required
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          endIcon={loading ? <CircularProgress size={20} /> : <Send />}
          disabled={loading}
          sx={{
            py: 1.5,
            "&:hover": {
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {loading ? t("contact.form.sending") : t("contact.form.send")}
        </Button>
      </Box>
    </Box>
  )
}