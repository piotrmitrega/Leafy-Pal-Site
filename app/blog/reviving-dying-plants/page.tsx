import { BlogPostLayout } from "@/components/blog-post-layout"

export default function RevivingDyingPlantsPage() {
  return (
    <BlogPostLayout
      title="How to Revive a Dying Plant: Rescue Techniques That Actually Work"
      description="Step-by-step guide to bringing your struggling plants back to life with proven rescue methods."
      image="/drought-stressed-plant.png"
      category="Plant Care"
      date="April 10, 2024"
      slug="reviving-dying-plants"
    >
      {/* Article content will be rendered by BlogPostLayout */}
    </BlogPostLayout>
  )
}
