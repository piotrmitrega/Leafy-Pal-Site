import BlogPostLayout from "@/components/blog-post-layout"
import Image from "next/image"

export default function PlantDiseasesPage() {
  return (
    <BlogPostLayout
      title="Common Plant Diseases and How to Treat Them"
      date="May 10, 2023"
      category="Plant Health"
      slug="plant-diseases"
      heroImage="/diseased-plant-leaf.png"
      heroAlt="Close-up of a plant leaf showing disease symptoms"
      tags={["plant health", "disease prevention", "plant care"]}
    >
      <p>
        Even with the best care, houseplants can sometimes fall victim to various diseases. Identifying plant diseases
        early and taking appropriate action can save your beloved plants and prevent the spread to others in your
        collection.
      </p>

      <h2>Common Houseplant Diseases</h2>

      <h3>Powdery Mildew</h3>
      <p>
        This fungal disease appears as white powdery spots on leaves and stems. It thrives in humid environments with
        poor air circulation.
      </p>
      <p>
        <strong>Treatment:</strong> Improve air circulation, reduce humidity, and apply a fungicide specifically
        formulated for powdery mildew. Remove severely affected leaves.
      </p>

      <h3>Leaf Spot Diseases</h3>
      <p>
        These appear as brown or black spots on leaves, often with yellow halos. They can be caused by various fungi and
        bacteria.
      </p>
      <p>
        <strong>Treatment:</strong> Remove affected leaves, avoid overhead watering, and apply appropriate fungicide.
        Ensure good air circulation around plants.
      </p>

      <h3>Root Rot</h3>
      <p>
        This disease causes roots to turn brown and mushy, often due to overwatering or poor drainage. Plants may wilt
        despite moist soil.
      </p>
      <p>
        <strong>Treatment:</strong> Remove the plant from its pot, trim away rotted roots, and repot in fresh,
        well-draining soil. Adjust watering habits to prevent recurrence.
      </p>

      <div className="my-8 relative w-full h-[300px] rounded-lg overflow-hidden">
        <Image src="/root-bound-plant.png" alt="Plant with root rot being examined" fill className="object-cover" />
      </div>

      <h3>Botrytis Blight (Gray Mold)</h3>
      <p>
        This fungal disease appears as gray, fuzzy mold on leaves, flowers, and stems. It thrives in cool, humid
        conditions.
      </p>
      <p>
        <strong>Treatment:</strong> Remove affected plant parts, improve air circulation, and apply a fungicide labeled
        for Botrytis control.
      </p>

      <h2>Prevention is Better Than Cure</h2>
      <p>Preventing plant diseases is always easier than treating them. Here are some preventive measures:</p>
      <ul>
        <li>Provide adequate spacing between plants for good air circulation</li>
        <li>Water at the base of plants rather than from overhead</li>
        <li>Use clean pots and tools when planting or pruning</li>
        <li>Quarantine new plants for a few weeks before introducing them to your collection</li>
        <li>Regularly inspect plants for early signs of disease</li>
        <li>Maintain appropriate humidity levels for your specific plants</li>
      </ul>

      <h2>When to Discard a Plant</h2>
      <p>Sometimes, despite your best efforts, a plant may be too far gone to save. Consider discarding a plant if:</p>
      <ul>
        <li>The disease has spread throughout the entire plant</li>
        <li>Multiple treatment attempts have failed</li>
        <li>The plant poses a risk of infecting your other healthy plants</li>
      </ul>

      <div className="my-8 relative w-full h-[300px] rounded-lg overflow-hidden">
        <Image
          src="/plant-diagnosis.png"
          alt="Person examining plant leaves for disease"
          fill
          className="object-cover"
        />
      </div>

      <h2>Using Technology to Identify Plant Diseases</h2>
      <p>
        Modern plant care apps like Leafy Pal can help you identify diseases early through image recognition technology.
        Simply take a photo of the affected plant part, and the app can suggest potential issues and treatment options.
      </p>

      <p>
        By staying vigilant and addressing plant diseases promptly, you can maintain a healthy indoor garden that
        thrives year-round. Remember that different plants may show different symptoms for the same disease, so
        familiarizing yourself with your specific plants&apos; normal appearance is key to early detection.
      </p>
    </BlogPostLayout>
  )
}
