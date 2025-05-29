import { BlogPostLayout } from "@/components/blog-post-layout"

export default function UltimateGuideIndoorPlantsPage() {
  return (
    <BlogPostLayout
      title="The Ultimate Guide to Caring for Indoor Plants"
      description="Learn everything you need to know about light, water, soil, and more to keep your indoor plants thriving."
      image="/indoor-plants-care-guide.png"
      category="Plant Care"
      date="May 1, 2024"
      slug="ultimate-guide-indoor-plants"
    >
      {/* Article content will be rendered by BlogPostLayout */}
    </BlogPostLayout>
  )
}
