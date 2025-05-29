import { BlogPostLayout } from "@/components/blog-post-layout"

export default function BlogPost() {
  return (
    <BlogPostLayout
      title="[Article Title]"
      date="[Publication Date]"
      category="[Category]"
      slug="[Article Slug]"
      heroImage="[Hero Image URL]"
      heroAlt="[Hero Image Alt Text]"
      tags={["Tag1", "Tag2", "Tag3"]}
    >
      {/* Article Content Here */}
    </BlogPostLayout>
  )
}
