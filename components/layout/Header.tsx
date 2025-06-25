"use client"

import type React from "react"

import { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Menu as MenuIcon, Language, Brightness4, Brightness7 } from "@mui/icons-material"
import TranslateIcon from '@mui/icons-material/Translate';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "../providers/LanguageProvider"
import { useThemeMode } from "../providers/ThemeProvider"
import { useTranslation } from "@/hooks/useTranslation"
import { aboutLogo, aboutName } from "@/utils/constant"


const navigation = [
  { name: "home", href: "/" },
  { name: "services", href: "/servicios" },
  { name: "portfolio", href: "/portafolio" },
  { name: "about", href: "/sobre-nosotros" },
  { name: "contact", href: "/#contact" },
]

const languages = [
  { code: "es", name: "Español" },
  { code: "en", name: "English" },
  { code: "pt", name: "Português" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langAnchorEl, setLangAnchorEl] = useState<null | HTMLElement>(null)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const { mode, toggleMode } = useThemeMode()
  const { t } = useTranslation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget)
  }

  const handleLanguageClose = () => {
    setLangAnchorEl(null)
  }

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode)
    handleLanguageClose()
  }

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {aboutName}
          </Typography>

        <IconButton onClick={handleDrawerToggle}>
          <Typography variant="h6">✕</Typography>
        </IconButton>
      </Box>
      <List>
        {navigation.map((item) => (
          <ListItem 
            key={item.name} 
            component={Link} 
            href={item.href} 
            onClick={handleDrawerToggle}
            button
          >
            <ListItemText
              primary={t(`navigation.${item.name}`)}
              sx={{
                color: pathname === item.href ? "primary.main" : "text.primary",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="fixed" elevation={3}>
        <Toolbar>

          <Box component={Link} href="/" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={aboutLogo} alt={aboutName} style={{ height: 32 }} />
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, mr: 2 }}>
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  color="inherit"
                  sx={{
                  fontWeight: pathname === item.href ? "bold" : "normal",
                  textDecoration: pathname === item.href ? "underline" : "none",
                  textUnderlineOffset: "4px",
                }}
                >
                  {t(`navigation.${item.name}`)}
                </Button>
              ))}
            </Box>
          )}

          <IconButton color="inherit" onClick={toggleMode}>
            {mode === "dark" ? <Brightness3Icon /> : <LightModeIcon />}
          </IconButton>

          <IconButton color="inherit" onClick={handleLanguageClick}>
            <TranslateIcon />
          </IconButton>

          {isMobile && (
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Menu anchorEl={langAnchorEl} open={Boolean(langAnchorEl)} onClose={handleLanguageClose}>
        {languages.map((lang) => (
          <MenuItem key={lang.code} onClick={() => handleLanguageSelect(lang.code)} selected={language === lang.code}>
            {lang.name}
          </MenuItem>
        ))}
      </Menu>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  )
}