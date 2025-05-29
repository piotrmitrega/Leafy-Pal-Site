"use client"

import { t } from "@/translations"

interface TranslateProps {
  text: string
  params?: Record<string, string | number>
  fallback?: string
}

export function Translate({ text, params, fallback }: TranslateProps) {
  // If the text starts with "blog.articles." and no fallback is provided,
  // extract the last part of the key as a fallback
  let defaultFallback = fallback
  if (!fallback && text.startsWith("blog.articles.")) {
    const parts = text.split(".")
    const lastPart = parts[parts.length - 1]
    // Convert camelCase to sentence case
    defaultFallback = lastPart
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim()
  }

  // Try to get the translation
  let translatedText = t(text)

  // If no translation is found, use the fallback or the key itself
  if (!translatedText) {
    translatedText = defaultFallback || text
  }

  // Replace any parameters in the text
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      translatedText = translatedText.replace(`{${key}}`, String(value))
    })
  }

  return <>{translatedText}</>
}

// Shorthand component for easier use
export function T({ text, params, fallback }: TranslateProps) {
  // Use the Translate component for consistency
  return <Translate text={text} params={params} fallback={fallback} />
}
