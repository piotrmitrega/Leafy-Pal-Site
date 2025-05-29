/**
 * This script checks translation coverage across all languages.
 * It identifies missing translations and generates a report.
 */

const fs = require("fs")
const path = require("path")

// Supported languages
const languages = ["en", "de", "es", "fr", "zh", "ja", "pt", "pl"]

// Load all translation files
const translations = {}
languages.forEach((lang) => {
  try {
    translations[lang] = require(`../translations/${lang}`).default
  } catch (error) {
    console.error(`Error loading translations for ${lang}:`, error.message)
    translations[lang] = {}
  }
})

// Check blog article coverage
function checkBlogArticleCoverage() {
  const englishArticles = translations.en?.blog?.articles || {}
  const articleSlugs = Object.keys(englishArticles)

  const coverage = {}

  languages.forEach((lang) => {
    if (lang === "en") return // Skip English as it's the base

    const langArticles = translations[lang]?.blog?.articles || {}
    coverage[lang] = {
      total: articleSlugs.length,
      translated: 0,
      missing: [],
      incomplete: [],
    }

    articleSlugs.forEach((slug) => {
      if (!langArticles[slug]) {
        coverage[lang].missing.push(slug)
      } else {
        // Check if all required fields are translated
        const enArticle = englishArticles[slug]
        const langArticle = langArticles[slug]

        const requiredFields = ["title", "description"]
        const missingFields = requiredFields.filter((field) => !langArticle[field])

        if (missingFields.length > 0) {
          coverage[lang].incomplete.push({
            slug,
            missingFields,
          })
        } else {
          coverage[lang].translated++
        }
      }
    })
  })

  return coverage
}

// Generate a coverage report
function generateCoverageReport() {
  const coverage = checkBlogArticleCoverage()

  console.log("Blog Article Translation Coverage Report")
  console.log("=======================================")

  Object.keys(coverage).forEach((lang) => {
    const langCoverage = coverage[lang]
    const percentage = Math.round((langCoverage.translated / langCoverage.total) * 100)

    console.log(`\n${lang.toUpperCase()} - ${percentage}% complete (${langCoverage.translated}/${langCoverage.total})`)

    if (langCoverage.missing.length > 0) {
      console.log("\nMissing articles:")
      langCoverage.missing.forEach((slug) => {
        console.log(`- ${slug}`)
      })
    }

    if (langCoverage.incomplete.length > 0) {
      console.log("\nIncomplete articles:")
      langCoverage.incomplete.forEach((item) => {
        console.log(`- ${item.slug} (missing: ${item.missingFields.join(", ")})`)
      })
    }
  })
}

// Execute the script
generateCoverageReport()
