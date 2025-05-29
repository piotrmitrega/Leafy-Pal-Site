/**
 * This script checks the status of translations for all blog articles.
 * It identifies which articles have translations in each language and which are missing.
 *
 * How to use:
 * 1. Copy this file to your project's scripts directory
 * 2. Run it with Node.js: node scripts/check-translation-status.js
 */

const fs = require("fs")
const path = require("path")

// Directory containing blog article pages
const BLOG_DIR = path.join(process.cwd(), "app", "blog")
// Directory containing translation files
const TRANSLATIONS_DIR = path.join(process.cwd(), "translations")

// Supported languages
const LANGUAGES = ["en", "de", "es", "fr", "zh", "ja", "pt", "pl"]

// Function to list all blog article directories
function listBlogArticles() {
  try {
    const items = fs.readdirSync(BLOG_DIR)
    const directories = items.filter((item) => {
      const itemPath = path.join(BLOG_DIR, item)
      return fs.statSync(itemPath).isDirectory() && item !== "TEMPLATE" && item !== "TEMPLATE-PAGE"
    })
    return directories
  } catch (error) {
    console.error("Error listing blog articles:", error)
    return []
  }
}

// Function to read a translation file
function readTranslationFile(language) {
  const filePath = path.join(TRANSLATIONS_DIR, `${language}.ts`)
  try {
    const content = fs.readFileSync(filePath, "utf8")
    return content
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error)
    return null
  }
}

// Function to check if an article has translations in a language
function checkArticleTranslation(articleSlug, languageContent) {
  if (!languageContent) return false

  // Check if the article section exists in the translation file
  const articleSectionRegex = new RegExp(`"${articleSlug}"\\s*:\\s*{`)
  return articleSectionRegex.test(languageContent)
}

// Function to check if a page uses the translation system
function checkPageUsesTranslations(articleSlug) {
  const pagePath = path.join(BLOG_DIR, articleSlug, "page.tsx")
  try {
    const content = fs.readFileSync(pagePath, "utf8")
    return content.includes("import { T }") || content.includes("T text=")
  } catch (error) {
    console.error(`Error reading ${pagePath}:`, error)
    return false
  }
}

// Main function
function main() {
  console.log("🌐 Blog Translation Status Checker")
  console.log("This script checks the status of translations for all blog articles.\n")

  const articles = listBlogArticles()

  if (articles.length === 0) {
    console.log("No blog articles found in", BLOG_DIR)
    return
  }

  console.log(`Found ${articles.length} blog articles.`)

  // Read all translation files
  const translations = {}
  for (const lang of LANGUAGES) {
    translations[lang] = readTranslationFile(lang)
  }

  // Check translation status for each article
  const results = {}
  let totalUsingTranslationSystem = 0

  for (const article of articles) {
    results[article] = {
      usesTranslationSystem: checkPageUsesTranslations(article),
      languages: {},
    }

    if (results[article].usesTranslationSystem) {
      totalUsingTranslationSystem++
    }

    for (const lang of LANGUAGES) {
      results[article].languages[lang] = checkArticleTranslation(article, translations[lang])
    }
  }

  // Display results
  console.log("\n=== Translation System Usage ===")
  console.log(
    `${totalUsingTranslationSystem} out of ${articles.length} articles use the translation system (${Math.round((totalUsingTranslationSystem / articles.length) * 100)}%)`,
  )

  console.log("\n=== Articles Not Using Translation System ===")
  const notUsingTranslation = articles.filter((article) => !results[article].usesTranslationSystem)
  if (notUsingTranslation.length === 0) {
    console.log("All articles are using the translation system! 🎉")
  } else {
    notUsingTranslation.forEach((article) => {
      console.log(`- ${article}`)
    })
  }

  console.log("\n=== Translation Coverage by Language ===")
  for (const lang of LANGUAGES) {
    if (lang === "en") continue // Skip English as it's the source language

    const translatedCount = articles.filter((article) => results[article].languages[lang]).length
    const percentage = Math.round((translatedCount / articles.length) * 100)

    console.log(`${lang.toUpperCase()}: ${translatedCount}/${articles.length} articles (${percentage}%)`)
  }

  console.log("\n=== Missing Translations by Article ===")
  for (const article of articles) {
    const missingLanguages = LANGUAGES.filter((lang) => lang !== "en" && !results[article].languages[lang])

    if (missingLanguages.length > 0) {
      console.log(`${article}: Missing translations for ${missingLanguages.join(", ")}`)
    }
  }
}

main()
