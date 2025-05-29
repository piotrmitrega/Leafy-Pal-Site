// This script helps update all blog article imports to use the default import for BlogPostLayout

/*
To update all blog article imports, follow these steps:

1. Find all files in the app/blog directory that import BlogPostLayout
2. Make sure the import is:
   import BlogPostLayout from "@/components/blog-post-layout"

3. Make sure all article pages are using the T component for translations
   with the correct translation keys that match the translation files
*/

// Example of correct usage:
/*
import BlogPostLayout from "@/components/blog-post-layout"
import { T } from "@/components/translate"

export default function ArticlePage() {
  return (
    <BlogPostLayout
      slug="article-slug"
      title={<T text="blog.articles.article-slug.title" />}
      description={<T text="blog.articles.article-slug.description" />}
      image="article-image.png"
      category={<T text="blog.categories.Category" />}
      date="May 10, 2024"
      tags={["Tag1", "Tag2"]}
      heroAlt={<T text="blog.articles.article-slug.heroAlt" />}
    >
      <h2>
        <T text="blog.articles.article-slug.heading1" />
      </h2>
      <p>
        <T text="blog.articles.article-slug.paragraph1" />
      </p>\
      {/* Continue with the rest of the article content */ }
    </BlogPostLayout>
  )
}
*/
