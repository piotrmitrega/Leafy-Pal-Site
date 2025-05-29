/**
 * This script adds the blog-article class to all blog article pages
 * to ensure consistent font sizing across all articles and helps update all blog article pages to use the translation system.
 * It scans the blog article pages and generates a template for each article.
 */

import fs from "fs"
import path from "path"

const BLOG_DIR = path.join(process.cwd(), "app/blog")

// Get all blog article directories
const blogDirs = fs
  .readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)

// Template for a translated blog article page
const generateArticleTemplate = (slug) => `import { Metadata } from "next"
import { BlogPostLayout } from "@/components/blog-post-layout"
import { blogArticles } from "@/data/blog-articles"
import { T } from "@/components/translate"

export const metadata: Metadata = {
  title: "Article Title",
  description: "Article Description",
}

const article = blogArticles.find((article) => article.slug === "${slug}")

export default function ${slug
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join("")}Page() {
  if (!article) {
    return null
  }

  return (
    <BlogPostLayout
      slug={article.slug}
      title={article.title}
      description={article.description}
      image={article.image}
      category={article.category}
      date={article.date}
      tags={article.tags}
      heroAlt="blog.articles.${slug}.heroAlt"
    >
      {/* Replace with your article content using T components */}
      <p>
        <T text="blog.articles.${slug}.paragraph1" />
      </p>

      <h2>
        <T text="blog.articles.${slug}.heading1" />
      </h2>
      <p>
        <T text="blog.articles.${slug}.paragraph2" />
      </p>

      {/* Add more sections as needed */}
    </BlogPostLayout>
  )
}
`

// Process each blog article
blogDirs.forEach((dir) => {
  const pagePath = path.join(BLOG_DIR, dir, "page.tsx")

  // Skip if page doesn't exist
  if (!fs.existsSync(pagePath)) return

  let content = fs.readFileSync(pagePath, "utf8")

  // Check if the file is using BlogPostLayout
  if (content.includes("BlogPostLayout")) {
    console.log(`${dir} is already using BlogPostLayout`)
    return
  }

  // Add blog-article class to the main article element
  if (content.includes("<article")) {
    content = content.replace(/<article([^>]*)>/g, '<article$1 className="blog-article">')

    // If article already has a className, merge them
    content = content.replace(/className="([^"]*)" className="blog-article"/g, 'className="$1 blog-article"')

    fs.writeFileSync(pagePath, content)
    console.log(`Added blog-article class to ${dir}`)
  } else {
    console.log(`Could not find article element in ${dir}`)
  }

  console.log(`Processing article: ${dir}`)

  // Generate template for this article
  const template = generateArticleTemplate(dir)

  // Write to a new file to avoid overwriting existing files
  fs.writeFileSync(path.join(BLOG_DIR, dir, "page.template.tsx"), template)

  console.log(`Template created for: ${dir}`)
})

console.log("Blog article update complete")
console.log("Done! Review the .template.tsx files and update your article pages accordingly.")
