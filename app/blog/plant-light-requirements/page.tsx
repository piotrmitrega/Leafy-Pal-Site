import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { ShareButtons } from "@/components/share-buttons";
import { getRelatedArticles } from "@/data/blog-articles";

export default function PlantLightRequirementsPage() {
  const currentSlug = "plant-light-requirements";
  const relatedArticles = getRelatedArticles(currentSlug);

  return (
    <div className="min-h-screen bg-white">
      <ScrollRestoration />

      <main className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#1F682E] hover:text-[#1F682E]/90 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <article className="prose prose-lg max-w-none">
            <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
              <Image
                src="./plant-sunlight.png"
                alt="Plant light requirements"
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1F682E]">
              Illuminating Growth: Understanding Plant Light Requirements
            </h1>

            <div className="flex items-center gap-4 mt-4 mb-8">
              <div className="text-sm text-[#454238]">May 10, 2024</div>
              <div className="h-1 w-1 rounded-full bg-[#454238]"></div>
              <div className="text-sm text-[#454238]">7 min read</div>
            </div>

            <ShareButtons title="Illuminating Growth: Understanding Plant Light Requirements" />

            <p>
              Light is the energy source that fuels photosynthesis, the process
              by which plants convert carbon dioxide and water into sugars for
              growth. Providing the correct amount and type of light is as
              crucial as watering for the health and well-being of your indoor
              plants. Different plant species have evolved to thrive in varying
              light intensities, from the bright, direct sun of deserts to the
              dappled shade of rainforest understories.
            </p>

            <h2>How Much Light a Plant Needs</h2>

            <p>
              Plant light requirements are typically categorized into three main
              groups:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-[#F8F7F2] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                  Direct Light
                </h3>
                <p className="text-[#454238]">
                  This refers to bright, unfiltered sunlight that shines
                  directly onto the plant for several hours a day (typically
                  4-6+ hours). South-facing windows often provide direct light,
                  especially during the middle of the day. Plants that thrive in
                  direct light include many cacti, succulents, and some
                  flowering plants like hibiscus.
                </p>
              </div>

              <div className="bg-[#F8F7F2] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                  Indirect Bright Light
                </h3>
                <p className="text-[#454238]">
                  This is bright light that has been diffused or filtered,
                  either by a sheer curtain or by placing the plant a few feet
                  away from a south- or west-facing window. East-facing windows
                  also provide bright, indirect light. Many popular houseplants,
                  such as pothos, philodendron, snake plants, and ZZ plants,
                  thrive in bright, indirect light.
                </p>
              </div>

              <div className="bg-[#F8F7F2] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                  Low Light
                </h3>
                <p className="text-[#454238]">
                  This refers to areas that receive minimal natural light, such
                  as north-facing windows or areas far from any window. While no
                  plant can survive in complete darkness, some species are more
                  tolerant of low light conditions. These include snake plants,
                  ZZ plants, cast iron plants, and some types of peace lilies.
                  However, even "low light" tolerant plants will generally grow
                  better with more light.
                </p>
              </div>
            </div>

            <p>
              It's important to note that these categories are generalizations,
              and the intensity of light can vary depending on the time of year,
              the position of the window, and any obstructions outside.
            </p>

            <h2>Best Spots in the House for Certain Types of Plants</h2>

            <p>
              Understanding the direction your windows face is key to placing
              your plants in optimal light conditions:
            </p>

            <div className="relative h-[300px] w-full my-8 rounded-lg overflow-hidden">
              <Image
                src="./window-light-directions.png"
                alt="Window light directions for plants"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                  South-Facing Windows
                </h3>
                <p className="text-[#454238]">
                  Receive the most intense light throughout the day. Ideal for
                  plants that require direct sun, such as cacti and succulents.
                  You may need to move other plants slightly away from the
                  window or use sheer curtains to filter the light and prevent
                  scorching.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                  East-Facing Windows
                </h3>
                <p className="text-[#454238]">
                  Receive gentler morning light, which is usually bright but not
                  as intense as midday or afternoon sun. Many tropical foliage
                  plants and some flowering plants thrive in this light.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                  West-Facing Windows
                </h3>
                <p className="text-[#454238]">
                  Receive strong afternoon sun, which can be as intense as
                  south-facing light, especially in the summer. Plants that
                  prefer bright, indirect light may need protection from the
                  direct afternoon rays.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                  North-Facing Windows
                </h3>
                <p className="text-[#454238]">
                  Receive the least amount of direct light and provide
                  consistent, low to medium indirect light. Suitable for plants
                  that tolerate lower light conditions.
                </p>
              </div>
            </div>

            <p>
              Observing how the light changes throughout the day in different
              areas of your home will help you determine the best spots for your
              plants.
            </p>

            <h2>How to Supplement with Grow Lights</h2>

            <p>
              When natural light is insufficient, especially during winter
              months or in dimly lit spaces, grow lights can be a valuable tool.
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Types of Grow Lights:</strong> Various types are
                available, including fluorescent, LED, and incandescent. LEDs
                are generally the most energy-efficient and have a long
                lifespan.
              </li>
              <li>
                <strong>Light Spectrum:</strong> Plants primarily use red and
                blue light for photosynthesis. Full-spectrum grow lights provide
                a balance of these colors and are generally recommended for
                overall plant health.
              </li>
              <li>
                <strong>Intensity and Duration:</strong> The appropriate
                intensity and duration of grow light exposure depend on the
                plant species and the amount of natural light it receives.
                Generally, providing 10-14 hours of supplemental light per day
                is sufficient. The distance between the light and the plant also
                affects intensity, so follow the manufacturer's recommendations.
              </li>
            </ul>

            <h2>Symptoms of Too Much or Too Little Light</h2>

            <p>
              Recognizing the signs of incorrect light exposure is crucial for
              adjusting your plant's environment:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-[#E9F2C5] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1F682E] mb-4">
                  Symptoms of Too Much Light
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Scorched or Burnt Leaves:</strong> Brown, crispy
                    patches, especially on the parts of the plant facing the
                    light.
                  </li>
                  <li>
                    <strong>Faded or Pale Leaves:</strong> Pigments can bleach
                    out under intense light.
                  </li>
                  <li>
                    <strong>Stunted Growth:</strong> While counterintuitive,
                    excessive light can stress the plant and hinder growth.
                  </li>
                </ul>
              </div>

              <div className="bg-[#F8F7F2] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1F682E] mb-4">
                  Symptoms of Too Little Light
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Leggy Growth:</strong> Long, weak stems with sparse
                    leaves as the plant stretches to find more light.
                  </li>
                  <li>
                    <strong>Small Leaves:</strong> New leaves are significantly
                    smaller than older ones.
                  </li>
                  <li>
                    <strong>Loss of Variegation:</strong> Variegated leaves may
                    revert to solid green in low light conditions.
                  </li>
                  <li>
                    <strong>Failure to Flower:</strong> Many flowering plants
                    require sufficient light to bloom.
                  </li>
                  <li>
                    <strong>Pale Green or Yellowing Leaves:</strong> Lack of
                    light can inhibit chlorophyll production.
                  </li>
                </ul>
              </div>
            </div>

            <p>
              By carefully observing your plants and understanding their light
              preferences, you can position them in locations that promote
              healthy growth and vibrant foliage. Don't be afraid to experiment
              with different spots until you find what works best for each
              individual plant.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
