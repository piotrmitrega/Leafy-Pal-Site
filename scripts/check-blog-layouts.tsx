/**
 * This script checks if all blog article pages are using the BlogPostLayout component
 * and the T component for translations.
 */

const fs = require("fs")
const path = require("path")
const glob = require("glob")

// Path to blog articles
const BLOG_DIR = path.join(__dirname, "../app/blog")

// Get all blog article pages
const articlePages = glob.sync(`${BLOG_DIR}/*/page.tsx`)

// Check if a file uses BlogPostLayout and T components
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8")

  const usesBlogPostLayout = content.includes("BlogPostLayout")
  const usesTranslateComponent = content.includes("import { T }") || content.includes("import {T}")
  const usesTComponent = content.match(/<T\s+text=/g)

  return {
    path: filePath,
    usesBlogPostLayout,
    usesTranslateComponent,
    usesTComponent: usesTComponent ? usesTComponent.length : 0,
  }
}

// Process each article page
const results = articlePages
  .map((articlePath) => {
    const dirName = path.basename(path.dirname(articlePath))

    // Skip template directories
    if (dirName === "TEMPLATE" || dirName === "TEMPLATE-PAGE") {
      return null
    }

    return {
      slug: dirName,
      ...checkFile(articlePath),
    }
  })
  .filter(Boolean)

// Print results
console.log("Blog Article Translation Check:")
console.log("==============================")
console.log("")

results.forEach((result) => {
  console.log(`Article: ${result.slug}`)
  console.log(`  Uses BlogPostLayout: ${result.usesBlogPostLayout ? "✅" : "❌"}`)
  console.log(`  Imports T component: ${result.usesTranslateComponent ? "✅" : "❌"}`)
  console.log(`  Number of T components: ${result.usesTComponent}`)
  console.log("")
})

// Summary
const totalArticles = results.length
const usingBlogPostLayout = results.filter((r) => r.usesBlogPostLayout).length
const usingTComponent = results.filter((r) => r.usesTranslateComponent && r.usesTComponent > 0).length

console.log("Summary:")
console.log(`  Total articles: ${totalArticles}`)
console.log(
  `  Using BlogPostLayout: ${usingBlogPostLayout} (${Math.round((usingBlogPostLayout / totalArticles) * 100)}%)`,
)
console.log(`  Using T component: ${usingTComponent} (${Math.round((usingTComponent / totalArticles) * 100)}%)`)
