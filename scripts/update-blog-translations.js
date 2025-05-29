/**
 * This script helps update blog article pages to use the translation system.
 * It provides a template for converting static English text to use the T component.
 *
 * How to use:
 * 1. Copy this file to your project's scripts directory
 * 2. Run it with Node.js: node scripts/update-blog-translations.js
 * 3. Follow the instructions in the console
 */

const fs = require("fs")
const path = require("path")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Directory containing blog article pages
const BLOG_DIR = path.join(process.cwd(), "app", "blog")

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

// Function to read a blog article page file
function readBlogArticlePage(articleSlug) {
  const pagePath = path.join(BLOG_DIR, articleSlug, "page.tsx")
  try {
    return fs.readFileSync(pagePath, "utf8")
  } catch (error) {
    console.error(`Error reading ${pagePath}:`, error)
    return null
  }
}

// Function to convert a page to use translations
function convertPageToUseTranslations(content, slug) {
  // Add necessary imports
  if (!content.includes("import { T }")) {
    content = content.replace(/import/, `import { T } from "@/components/translate"\nimport`)
  }

  // Make the component client-side
  if (!content.includes('"use client"')) {
    content = `"use client"\n\n${content}`
  }

  // Replace static text with T components
  // This is a simplified example - you'll need to adapt this to your specific page structure

  // Replace title
  content = content.replace(/title="([^"]+)"/, `title={<T text="blog.articles.${slug}.title" fallback="$1" />}`)

  // Replace description
  content = content.replace(
    /description="([^"]+)"/,
    `description={<T text="blog.articles.${slug}.description" fallback="$1" />}`,
  )

  // Replace category
  content = content.replace(/category="([^"]+)"/, `category={<T text="blog.categories.$1" fallback="$1" />}`)

  // Replace heroAlt
  content = content.replace(/heroAlt="([^"]+)"/, `heroAlt={<T text="blog.articles.${slug}.heroAlt" fallback="$1" />}`)

  // Replace h2 headings
  let headingCount = 1
  content = content.replace(/<h2[^>]*>(.*?)<\/h2>/g, (match, text) => {
    return `<h2 className="text-2xl font-bold mt-8 mb-4 text-[#1F682E]">
        <T text="blog.articles.${slug}.heading${headingCount++}" fallback="${text.trim()}" />
      </h2>`
  })

  // Replace paragraphs
  let paragraphCount = 1
  content = content.replace(/<p[^>]*>((?!<T).+?)<\/p>/g, (match, text) => {
    // Skip if it already contains a T component
    if (text.includes("<T ")) return match
    return `<p className="mb-4">
        <T text="blog.articles.${slug}.paragraph${paragraphCount++}" fallback="${text.trim().replace(/"/g, '\\"')}" />
      </p>`
  })

  return content
}

// Function to write the updated content back to the file
function writeUpdatedPage(articleSlug, content) {
  const pagePath = path.join(BLOG_DIR, articleSlug, "page.tsx")
  try {
    fs.writeFileSync(pagePath, content, "utf8")
    console.log(`✅ Successfully updated ${pagePath}`)
    return true
  } catch (error) {
    console.error(`Error writing to ${pagePath}:`, error)
    return false
  }
}

// Main function
async function main() {
  console.log("🌱 Blog Translation Updater")
  console.log("This script helps convert blog articles to use the translation system.\n")

  const articles = listBlogArticles()

  if (articles.length === 0) {
    console.log("No blog articles found in", BLOG_DIR)
    rl.close()
    return
  }

  console.log("Found the following blog articles:")
  articles.forEach((article, index) => {
    console.log(`${index + 1}. ${article}`)
  })

  rl.question('\nEnter the number of the article to update (or "all" for all articles): ', async (answer) => {
    if (answer.toLowerCase() === "all") {
      for (const article of articles) {
        const content = readBlogArticlePage(article)
        if (content) {
          const updatedContent = convertPageToUseTranslations(content, article)
          writeUpdatedPage(article, updatedContent)
        }
      }
      console.log("\n✅ All articles have been updated to use translations.")
    } else {
      const index = Number.parseInt(answer) - 1
      if (isNaN(index) || index < 0 || index >= articles.length) {
        console.log("Invalid selection. Please run the script again.")
      } else {
        const article = articles[index]
        const content = readBlogArticlePage(article)
        if (content) {
          const updatedContent = convertPageToUseTranslations(content, article)
          writeUpdatedPage(article, updatedContent)
          console.log(`\n✅ Article "${article}" has been updated to use translations.`)
        }
      }
    }

    rl.close()
  })
}

main()
