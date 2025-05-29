import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ScrollRestoration } from "@/components/scroll-restoration"
import { ShareButtons } from "@/components/share-buttons"
import { getRelatedArticles } from "@/data/blog-articles"

export default function WateringIndoorPlantsPage() {
  const currentSlug = "watering-indoor-plants"
  const relatedArticles = getRelatedArticles(currentSlug)

  return (
    <>
      <ScrollRestoration />
      <main className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center text-[#1F682E] hover:text-[#1F682E]/90 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1F682E] mb-6">
              The Essential Guide to Watering Your Indoor Plants
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="text-sm text-[#454238]">May 10, 2024</div>
              <div className="text-sm bg-[#E6F2E9] text-[#1F682E] px-3 py-1 rounded-full">Plant Care</div>
              <ShareButtons title="The Essential Guide to Watering Your Indoor Plants" />
            </div>

            <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
              <Image
                src="/watering-indoor-plants-hero.png"
                alt="Watering indoor plants"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">#Watering</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">#PlantCare</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">#IndoorPlants</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">#Houseplants</span>
            </div>

            <p>
              Water is the lifeblood of plants, facilitating nutrient transport, maintaining turgor pressure for
              structural support, and driving essential metabolic processes. However, watering is a delicate balance,
              and both overwatering and underwatering are common pitfalls for plant enthusiasts. Understanding the
              specific needs of your plants and employing the correct techniques are crucial for their health and
              vitality.
            </p>

            <h2>How Often to Water Specific Plant Types</h2>

            <p>
              There's no one-size-fits-all answer to how often to water. Different plant species have evolved in diverse
              environments, leading to vastly different water requirements. Here's a general guide for some common plant
              types:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="/succulents-watering.png"
                  alt="Succulents and cacti watering"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">Succulents and Cacti</h3>
                <p className="text-[#454238]">
                  These arid-adapted plants store water in their leaves, stems, and roots. They prefer infrequent but
                  thorough watering, allowing the soil to dry out completely between waterings. Overwatering is a
                  significant risk for succulents and cacti, leading to root rot. During their active growing season
                  (typically spring and summer), you might water every 2-4 weeks, but reduce this significantly in the
                  dormant winter months.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">Tropical Foliage Plants</h3>
                <p className="text-[#454238]">
                  Plants like Pothos, Philodendron, and Peace Lily generally prefer consistently moist but not soggy
                  soil. Water when the top inch or two of soil feels dry to the touch. The frequency can vary from once
                  a week to every few days, depending on the environment and the specific plant.
                </p>
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="/tropical-plants-watering.png"
                  alt="Tropical foliage plants watering"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="/flowering-plants-watering.png"
                  alt="Flowering plants watering"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">Flowering Plants</h3>
                <p className="text-[#454238]">
                  Flowering plants like African Violets and Orchids often have specific watering needs related to their
                  blooming cycles. African Violets prefer consistently moist soil but are sensitive to water on their
                  leaves. Orchids, especially epiphytic varieties, require well-draining media and a wet-dry cycle,
                  often needing watering once every 1-2 weeks depending on the type and humidity.
                </p>
              </div>
            </div>

            <h2>Signs of Overwatering or Underwatering</h2>

            <p>Learning to recognize the signs of improper watering is crucial for timely intervention:</p>

            <div className="bg-[#E9F2C5] p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-[#1F682E] mb-4">Signs of Overwatering</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Yellowing Leaves:</strong> Especially lower leaves that turn yellow and may feel soft or
                  mushy.
                </li>
                <li>
                  <strong>Drooping Leaves:</strong> While wilting can indicate underwatering, consistently soggy soil
                  can also lead to drooping as roots struggle for oxygen.
                </li>
                <li>
                  <strong>Brown Spots on Leaves:</strong> Often starting at the tips or edges, these can be a sign of
                  root rot affecting the plant's ability to transport water and nutrients.
                </li>
                <li>
                  <strong>Mold or Fungus Growth on Soil Surface:</strong> This indicates consistently damp conditions.
                </li>
                <li>
                  <strong>Foul Odor from Soil:</strong> A sign of anaerobic conditions and root decay.
                </li>
                <li>
                  <strong>Soft, Mushy Stem or Roots:</strong> This is a clear indication of root rot.
                </li>
              </ul>
            </div>

            <div className="bg-[#F8F7F2] p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-[#1F682E] mb-4">Signs of Underwatering</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Wilting Leaves:</strong> Leaves will appear limp and droopy.
                </li>
                <li>
                  <strong>Dry, Brittle Leaves:</strong> Leaf edges may turn brown and crispy.
                </li>
                <li>
                  <strong>Stunted Growth:</strong> Lack of sufficient water can inhibit new growth.
                </li>
                <li>
                  <strong>Soil Pulling Away from the Sides of the Pot:</strong> This indicates the soil has become very
                  dry and compacted.
                </li>
                <li>
                  <strong>Lightweight Pot:</strong> Dry soil weighs significantly less than moist soil.
                </li>
              </ul>
            </div>

            <h2>Watering Techniques</h2>

            <p>Different watering techniques can benefit various plant types and growing conditions:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">Top Watering</h3>
                <p className="text-[#454238]">
                  The most common method, where water is poured directly onto the soil surface. Ensure you water
                  thoroughly until excess water drains from the bottom of the pot. This helps to flush out accumulated
                  salts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">Bottom Watering</h3>
                <p className="text-[#454238]">
                  Placing the pot in a shallow dish of water and allowing the soil to absorb moisture from the bottom
                  up. This encourages deeper root growth and can be beneficial for plants sensitive to wet foliage (like
                  African Violets). Remove the pot once the top of the soil feels moist.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">Misting</h3>
                <p className="text-[#454238]">
                  Increasing humidity around the plant, particularly beneficial for tropical plants that prefer high
                  humidity. However, misting should not be a substitute for proper watering and should be done in the
                  morning to allow leaves to dry and prevent fungal issues.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">Self-Watering Pots</h3>
                <p className="text-[#454238]">
                  These pots have a reservoir that slowly releases water to the plant's roots. They can be helpful for
                  busy individuals but still require monitoring and occasional manual watering to flush the soil.
                </p>
              </div>
            </div>

            <div className="relative h-[300px] w-full my-8 rounded-lg overflow-hidden">
              <Image
                src="/watering-techniques.png"
                alt="Various watering techniques for indoor plants"
                fill
                className="object-cover"
              />
            </div>

            <h2>Seasonal Watering Needs</h2>

            <p>Plant water requirements fluctuate with the seasons:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">Growing Season (Spring and Summer)</h3>
                <p className="text-[#454238]">
                  Plants are actively growing, photosynthesizing more, and transpiring more water. They will generally
                  require more frequent watering during these months.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">Dormant Season (Fall and Winter)</h3>
                <p className="text-[#454238]">
                  Growth slows down or ceases, and the need for water decreases significantly. Reduce watering
                  frequency, allowing the soil to dry out more between waterings. Overwatering during dormancy is a
                  common cause of root rot.
                </p>
              </div>
            </div>

            <h2>Water Quality</h2>

            <p>The quality of your water can impact plant health:</p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Tap Water:</strong> Often contains chlorine and other minerals that can build up in the soil
                over time and potentially harm sensitive plants. Letting tap water sit out for 24-48 hours can help
                chlorine dissipate.
              </li>
              <li>
                <strong>Filtered Water:</strong> Generally a good option, especially for sensitive plants.
              </li>
              <li>
                <strong>Rainwater:</strong> Often the best option as it is naturally soft and free of added chemicals.
                However, be mindful of potential pollutants in urban areas.
              </li>
              <li>
                <strong>Softened Water:</strong> Usually contains high levels of sodium, which can be detrimental to
                most plants. Avoid using softened water for your houseplants.
              </li>
            </ul>

            <p>
              By understanding these aspects of watering, observing your plants closely, and adapting your techniques to
              their specific needs and the changing environment, you can provide the essential hydration they need to
              thrive.
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
