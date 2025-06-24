"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"

type ThemeMode = "light" | "dark"

interface ThemeContextType {
  mode: ThemeMode
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useThemeMode = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeContextProvider")
  }
  return context
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [mode, setMode] = useState<ThemeMode>("light")

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as ThemeMode
    if (savedMode) {
      setMode(savedMode)
    }
  }, [])

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light"
    setMode(newMode)
    localStorage.setItem("themeMode", newMode)
  }

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#2196F3",
        light: "#64B5F6",
        dark: "#1976D2",
      },
      secondary: {
        main: "#FF4081",
        light: "#FF80AB",
        dark: "#C2185B",
      },
      background: {
        default: mode === "light" ? "#FAFAFA" : "#121212",
        paper: mode === "light" ? "#FFFFFF" : "#1E1E1E",
      },
    },
    typography: {
      fontFamily: "var(--font-roboto), var(--font-inter), Arial, sans-serif",
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
            fontWeight: 600,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  })

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}