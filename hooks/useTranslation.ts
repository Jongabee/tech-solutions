"use client"

import { useLanguage } from "./useLanguage"
import { translations, Language } from "@/i18n/translations"

export function useTranslation() {
  const { language } = useLanguage() as { language: Language } 

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language] || translations.es

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return { t, language }
}