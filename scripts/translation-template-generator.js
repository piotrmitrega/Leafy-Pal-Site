/**
 * This script generates a template for translating blog articles.
 * It extracts all translatable content from the English translations
 * and creates a template that can be used for other languages.
 */

// Example of how to use this script:
// 1. Run this script to generate templates for each article
// 2. Send the templates to translators
// 3. Import the translated content back into the language files

const fs = require("fs")
const path = require("path")

// Load English translations as the base
const englishTranslations = require("../translations/en").default

// Extract blog articles
const articles = englishTranslations.blog.articles

// Function to create a template for a single article
function createArticleTemplate(slug) {
  const article = articles[slug]
  if (!article) {
    console.error(`Article with slug "${slug}" not found`)
    return null
  }

  // Create a template object with all translatable fields
  const template = {
    title: article.title,
    description: article.description,
    heroAlt: article.heroAlt || "",
    // Extract all other fields that need translation
    // This will vary based on the article structure
  }

  // For articles with more content, extract all paragraphs, headings, etc.
  Object.keys(article).forEach((key) => {
    if (key !== "title" && key !== "description" && key !== "heroAlt") {
      if (typeof article[key] === "string") {
        template[key] = article[key]
      } else if (typeof article[key] === "object") {
        template[key] = article[key]
      }
    }
  })

  return template
}

// Generate templates for all articles
function generateAllTemplates() {
  const templates = {}

  Object.keys(articles).forEach((slug) => {
    templates[slug] = createArticleTemplate(slug)
  })

  return templates
}

// Write templates to a file
function writeTemplatesToFile() {
  const templates = generateAllTemplates()
  const outputPath = path.join(__dirname, "article-templates.json")

  fs.writeFileSync(outputPath, JSON.stringify(templates, null, 2), "utf8")

  console.log(`Templates written to ${outputPath}`)
}

// Execute the script
writeTemplatesToFile()
