import { BlogPostLayout } from "@/components/blog-post-layout"

export default function CommonHouseplantDiseasesPage() {
  return (
    <BlogPostLayout
      slug="common-houseplant-diseases"
      title="Common Houseplant Diseases and How to Treat Them"
      description="Learn to identify and treat the most common diseases that affect indoor plants, from fungal infections to bacterial problems."
      image="/diseased-plant-leaf.png"
      category="Plant Health"
      date="April 15, 2024"
      tags={["Plant Diseases", "Plant Health", "Treatment", "Prevention"]}
      heroAlt="Close-up of a diseased plant leaf showing symptoms"
    >
      <p className="text-lg mb-6">
        Even with the best care, houseplants can sometimes fall victim to diseases. Early identification and proper
        treatment are key to saving your plants and preventing the spread to your entire collection.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">Common Fungal Diseases</h2>
      <p className="mb-4">
        Fungal diseases are among the most common issues affecting houseplants, often caused by overwatering, poor air
        circulation, or high humidity.
      </p>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">Root Rot</h3>
      <p className="mb-4">
        Root rot is caused by overwatering and poor drainage. Symptoms include yellowing leaves, mushy stems, and a foul
        smell from the soil.
      </p>
      <p className="mb-4">
        <strong>Treatment:</strong> Remove affected roots, repot in fresh, well-draining soil, and adjust watering
        schedule.
      </p>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">Powdery Mildew</h3>
      <p className="mb-4">
        Appears as white, powdery spots on leaves and stems. Common in humid conditions with poor air circulation.
      </p>
      <p className="mb-4">
        <strong>Treatment:</strong> Improve air circulation, reduce humidity, and apply fungicidal spray.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">Bacterial Diseases</h2>
      <p className="mb-4">
        Bacterial infections often enter through wounds in the plant and can spread quickly if not treated promptly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">Prevention Tips</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Ensure proper drainage in all pots</li>
        <li className="mb-2">Avoid overwatering and water at soil level</li>
        <li className="mb-2">Provide adequate air circulation</li>
        <li className="mb-2">Quarantine new plants before adding to your collection</li>
        <li className="mb-2">Clean tools between plants to prevent spread</li>
      </ul>
    </BlogPostLayout>
  )
}
