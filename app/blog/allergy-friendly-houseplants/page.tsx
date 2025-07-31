import Image from "next/image";
import Link from "next/link";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { ShareButtons } from "@/components/share-buttons";
import { ArrowLeft } from "lucide-react";
import { RelatedArticles } from "@/components/related-articles";
import { getRelatedArticles } from "@/data/blog-articles";

export default function AllergFriendlyHouseplantsPage() {
  const currentSlug = "allergy-friendly-houseplants";
  const relatedArticles = getRelatedArticles(currentSlug);

  return (
    <div className="min-h-screen bg-white">
      <ScrollRestoration />

      <main className="container px-4 py-12 md:px-6 md:py-24">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#1F682E] hover:underline mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1F682E] mb-4">
              Top 10 Allergy-Friendly Houseplants
            </h1>
            <p className="text-[#454238] md:text-xl/relaxed mb-4">
              Breathe easier with these beautiful, low-allergen indoor plants
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4 mb-8">
              <div className="text-sm text-gray-500">
                Published: May 8, 2024
              </div>
              <div className="text-sm bg-[#E6F2E9] text-[#1F682E] px-3 py-1 rounded-full">
                Plant Care
              </div>
              <ShareButtons
                title="Top 10 Allergy-Friendly Houseplants"
                url="/blog/allergy-friendly-houseplants"
              />
            </div>
          </div>

          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
            <Image
              src="/allergy-friendly-plants-hero.png"
              alt="Collection of allergy-friendly houseplants"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
              Introduction
            </h2>
            <p>
              For allergy sufferers, choosing the right houseplants can make a
              significant difference. Some plants can purify the air without
              triggering allergies, creating a healthier indoor environment
              while still enjoying the benefits of indoor gardening.
            </p>

            <h2 className="text-2xl font-bold text-[#1F682E] mt-10 mb-6">
              Top Picks
            </h2>

            <div className="mb-10">
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                    1. Peace Lily
                  </h3>
                  <p>
                    Known for its air-purifying qualities and low pollen
                    production, the Peace Lily is an excellent choice for
                    allergy sufferers. This elegant plant with its distinctive
                    white flowers not only looks beautiful but also helps remove
                    common indoor pollutants like benzene, formaldehyde, and
                    trichloroethylene from the air.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                    2. Snake Plant
                  </h3>
                  <p>
                    The Snake Plant, also known as Mother-in-Law's Tongue,
                    releases oxygen at night and removes toxins like
                    formaldehyde and nitrogen oxide from the air. Its vertical,
                    structured growth makes it perfect for small spaces, and it
                    requires minimal care, making it ideal for busy allergy
                    sufferers.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                    3. Areca Palm
                  </h3>
                  <p>
                    The Areca Palm acts as a natural humidifier and effectively
                    purifies the air. It's particularly effective at removing
                    formaldehyde, xylene, and toluene from indoor environments.
                    With its feathery, arching fronds, it adds a tropical touch
                    to any room while being gentle on allergy-prone individuals.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                    4. Dracaena
                  </h3>
                  <p>
                    Dracaena plants filter airborne toxins effectively,
                    particularly benzene, formaldehyde, and trichloroethylene.
                    With over 40 different varieties, there's a Dracaena to suit
                    any home décor. These plants are particularly effective at
                    cleaning the air and don't produce significant allergens.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                    5. Spider Plant
                  </h3>
                  <p>
                    Spider Plants are easy to care for and excellent at removing
                    pollutants like formaldehyde and xylene. They produce oxygen
                    while purifying the air and are safe for pets. Their
                    cascading foliage with baby plantlets makes them visually
                    appealing while being non-allergenic.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                    6. Boston Fern
                  </h3>
                  <p>
                    Boston Ferns act as natural air humidifiers and remove
                    formaldehyde from the air. They thrive in humid
                    environments, making them perfect for bathrooms. Unlike some
                    other ferns, Boston Ferns don't produce spores that can
                    trigger allergies.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                    7. Bamboo Palm
                  </h3>
                  <p>
                    The Bamboo Palm is excellent at filtering benzene,
                    formaldehyde, and trichloroethylene. It thrives in shady
                    indoor spaces and adds a touch of tropical elegance. This
                    palm variety is particularly good for allergy sufferers as
                    it doesn't produce pollen or other common allergens.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                    8. Rubber Plant
                  </h3>
                  <p>
                    Rubber Plants are effective at removing formaldehyde from
                    the air and have low allergen properties. Their glossy
                    leaves are easy to clean, preventing dust buildup that can
                    trigger allergies. These hardy plants are also relatively
                    easy to care for.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                    9. Chinese Evergreen
                  </h3>
                  <p>
                    Chinese Evergreens are excellent air purifiers that remove
                    benzene and formaldehyde. They're incredibly adaptable to
                    different light conditions and are perfect for beginners.
                    Their low pollen production makes them suitable for allergy
                    sufferers.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full">
                  <h3 className="text-xl font-bold text-[#1F682E] mb-2">
                    10. Gerbera Daisy
                  </h3>
                  <p>
                    While many flowering plants can trigger allergies, Gerbera
                    Daisies are an exception. They're effective at removing
                    benzene and trichloroethylene from the air. Their bright,
                    cheerful blooms add color to your space without causing
                    allergic reactions for most people.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1F682E] mt-10 mb-4">
              Care Tips
            </h2>

            <div className="my-8 relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/indoor-plants-care-guide.png"
                alt="Person examining plant leaves for disease"
                fill
                className="object-cover"
              />
            </div>

            <p>
              To maximize the benefits of these allergy-friendly plants while
              minimizing any potential issues, follow these care guidelines:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Ensure proper ventilation in rooms with plants to prevent excess
                humidity that could lead to mold growth.
              </li>
              <li>
                Avoid overwatering, as standing water can become a breeding
                ground for mold and bacteria that might trigger allergies.
              </li>
              <li>
                Regularly dust plant leaves with a damp cloth to prevent dust
                accumulation, which can harbor allergens.
              </li>
              <li>
                Keep plants away from air vents and high-traffic areas to
                minimize dust distribution.
              </li>
              <li>
                Consider using a layer of decorative pebbles or aquarium gravel
                on top of the soil to reduce mold spores from the soil.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1F682E] mt-10 mb-4">
              Conclusion
            </h2>
            <p>
              Incorporating these allergy-friendly plants into your home can
              significantly enhance indoor air quality without exacerbating
              allergies. They offer the perfect solution for allergy sufferers
              who want to enjoy the benefits of houseplants without the
              sneezing, itching, and other uncomfortable symptoms that some
              plants can trigger.
            </p>
            <p>
              Remember that individual sensitivities vary, so introduce new
              plants one at a time and monitor for any reactions. With the right
              selection and proper care, you can create a beautiful,
              plant-filled home that supports your respiratory health rather
              than compromising it.
            </p>
          </div>

          <RelatedArticles
            articles={relatedArticles}
            currentSlug={currentSlug}
          />
        </article>
      </main>
    </div>
  );
}
