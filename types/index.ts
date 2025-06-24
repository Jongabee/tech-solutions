export interface NavigationItem {
  name: string
  href: string
}

export interface Language {
  code: string
  name: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

export type ThemeMode = "light" | "dark"

export interface ThemeContextType {
  mode: ThemeMode
  toggleMode: () => void
}

export interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
}
