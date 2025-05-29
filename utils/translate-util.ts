import { t as i18nTranslate } from "@/translations"
import type { Language } from "@/contexts/language-context"

export function t(key: string, language = "en", fallback?: string): string {
  // Always return the fallback if provided
  if (fallback) return fallback

  // Otherwise try to get the translation
  try {
    const keys = key.split(".")
    let translation: any = i18nTranslate(key, language)

    for (const k of keys) {
      if (!translation) return key
      translation = translation[k]
    }

    return translation || key
  } catch (error) {
    console.error(`Translation error for key: ${key}`, error)
    return key
  }
}

// For use in non-React contexts or when you need to get a translation directly
export function translate(key: string, language: Language, params?: Record<string, string | number>): string {
  let translatedText = i18nTranslate(key, language)

  // Replace any parameters in the text
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      translatedText = translatedText.replace(`{${key}}`, String(value))
    })
  }

  return translatedText
}
