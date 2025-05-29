import { BlogPostLayout } from "@/components/blog-post-layout"

export default function PlantsForCleanAirPage() {
  return (
    <BlogPostLayout
      title="Top 10 Plants for Cleaner Indoor Air"
      description="Discover which houseplants are most effective at purifying your home's air and improving your well-being."
      image="/rubber-plant-air.png"
      category="Plant Science"
      date="April 7, 2024"
      slug="plants-for-clean-air"
    >
      {/* Article content will be rendered by BlogPostLayout */}
    </BlogPostLayout>
  )
}
