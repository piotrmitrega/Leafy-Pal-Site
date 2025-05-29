"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type Language = "en" | "de" | "es" | "fr" | "zh" | "ja" | "pt" | "pl"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  languages?: string[]
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  languages: ["en", "de", "es", "fr", "zh", "ja", "pt", "pl"],
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language | null
    if (storedLanguage && ["en", "de", "es", "fr", "zh", "ja", "pt", "pl"].includes(storedLanguage)) {
      setLanguage(storedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, languages: ["en", "de", "es", "fr", "zh", "ja", "pt", "pl"] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
