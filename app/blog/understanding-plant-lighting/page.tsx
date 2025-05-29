import { BlogPostLayout } from "@/components/blog-post-layout"

export default function UnderstandingPlantLightingPage() {
  return (
    <BlogPostLayout
      slug="understanding-plant-lighting"
      title="Understanding Plant Lighting: A Complete Guide"
      description="Master the fundamentals of plant lighting, from natural light assessment to choosing the right grow lights for your indoor garden."
      image="/plant-light-requirements-hero.png"
      category="Plant Care"
      date="April 10, 2024"
      tags={["Plant Lighting", "Grow Lights", "Indoor Gardening", "Plant Care"]}
      heroAlt="Plants receiving optimal lighting conditions"
    >
      <p className="text-lg mb-6">
        Light is one of the most critical factors for plant health, yet it's often misunderstood. This comprehensive
        guide will help you understand your plants' lighting needs and how to meet them.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">Types of Natural Light</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">Direct Light</h3>
          <p className="mb-4">
            Direct sunlight hits the plant for several hours daily. Best for succulents, cacti, and many flowering
            plants.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">Bright Indirect Light</h3>
          <p className="mb-4">
            Bright but filtered light, perfect for most tropical houseplants like monstera and pothos.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">Assessing Your Home's Light</h2>
      <p className="mb-4">
        Understanding the light conditions in different areas of your home is crucial for plant placement success.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">When to Use Grow Lights</h2>
      <p className="mb-4">
        Grow lights can supplement natural light or provide the primary light source for plants in low-light areas.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">Choosing the Right Grow Light</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          <strong>LED lights:</strong> Energy-efficient and long-lasting
        </li>
        <li className="mb-2">
          <strong>Fluorescent lights:</strong> Good for seedlings and low-light plants
        </li>
        <li className="mb-2">
          <strong>Full-spectrum lights:</strong> Mimic natural sunlight
        </li>
      </ul>
    </BlogPostLayout>
  )
}
