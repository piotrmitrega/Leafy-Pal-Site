import en from "./en"

export type TranslationKey = string

export function t(key: TranslationKey, language = "en"): string {
  try {
    // Always use English translations
    const translations = en

    // Split the key by dots to access nested properties
    const keys = key.split(".")
    let result: any = translations

    // Navigate through the nested properties
    for (const k of keys) {
      if (result === undefined || result === null) {
        return key // Return the key if we can't navigate further
      }
      result = result[k]
    }

    // Return the translation or the key if no translation found
    return typeof result === "string" ? result : key
  } catch (error) {
    console.error(`Translation error for key: ${key}`, error)
    return key // Return the key as fallback
  }
}

export default t
