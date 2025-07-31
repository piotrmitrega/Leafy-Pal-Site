import Image from "next/image";
import Link from "next/link";
import { ShareButtons } from "@/components/share-buttons";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { RelatedArticles } from "@/components/related-articles";
import { getRelatedArticles } from "@/data/blog-articles";

export default function DesigningHomeWithPlantsPage() {
  const currentSlug = "designing-home-with-plants";
  const relatedArticles = getRelatedArticles(currentSlug);

  return (
    <div className="min-h-screen bg-white">
      <ScrollRestoration />
      <main className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#1F682E] mb-8 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Blog
          </Link>

          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#1F682E] mb-6">
            Designing Your Home with Plants: Aesthetic and Functional Tips
          </h1>

          <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
            <Image
              src="/designing-home-plants-hero.png"
              alt="Beautifully designed living room with plants"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="text-[#454238]">
              <p className="text-sm">Published: May 8, 2024</p>
            </div>
            <ShareButtons />
          </div>

          <div className="prose prose-lg max-w-none text-[#454238]">
            <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
              Introduction
            </h2>
            <p>
              Plants can significantly enhance your home's aesthetics while
              serving functional purposes. Beyond their beauty, strategically
              placed plants can improve air quality, create privacy, reduce
              noise, and even influence your mood. This guide explores how to
              incorporate plants into your home design for both visual appeal
              and practical benefits.
            </p>

            <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
              Design Ideas
            </h2>

            <div className="relative h-[300px] w-full my-8 rounded-xl overflow-hidden">
              <Image
                src="/design-ideas.png"
                alt="Room with plants complementing the color scheme"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
              Vertical Gardens
            </h3>
            <p>
              Vertical gardens are perfect for maximizing space while adding a
              stunning green focal point to any room. These living walls can
              transform blank spaces into lush, vibrant features that draw the
              eye and create a sense of natural abundance even in limited square
              footage.
            </p>
            <p>
              Consider installing a vertical garden in areas like entryways,
              living rooms, or even bathrooms. You can use specialized wall
              planters, pocket systems, or even repurpose items like pallets to
              create your vertical garden structure.
            </p>

            <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
              Hanging Planters
            </h3>
            <p>
              Hanging planters are ideal for trailing plants and can add
              dimension to your space by drawing the eye upward. They're
              particularly effective in corners, near windows, or above
              furniture where they won't obstruct movement.
            </p>
            <p>
              Plants like pothos, spider plants, string of pearls, and various
              ferns thrive in hanging planters and create beautiful cascading
              effects. Consider varying the heights of multiple hanging planters
              for a more dynamic visual impact.
            </p>

            <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
              Room Themes
            </h3>
            <p>
              Using plants to complement room colors and styles can create
              cohesive, themed spaces throughout your home. For example, pair
              sleek, architectural plants like snake plants or ZZ plants with
              modern, minimalist decor, or use lush, tropical plants to create a
              bohemian oasis.
            </p>
            <p>
              Consider the color of both the plants and their containers when
              designing your space. Terracotta pots complement warm color
              schemes and bohemian styles, while sleek white or black containers
              work well with contemporary designs.
            </p>

            <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
              Functional Benefits
            </h2>

            <div className="relative h-[300px] w-full my-8 rounded-xl overflow-hidden">
              <Image
                src="/functional-benefits.png"
                alt="Room with plants complementing the color scheme"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
              Privacy
            </h3>
            <p>
              Tall plants can act as natural dividers, creating privacy and
              defining separate areas within open-concept spaces. Plants like
              bamboo, fiddle leaf figs, or bird of paradise can grow tall enough
              to serve as living privacy screens.
            </p>
            <p>
              Strategic placement of these plants can help delineate spaces like
              home offices, dining areas, or reading nooks without the need for
              permanent walls or bulky furniture dividers.
            </p>

            <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
              Acoustics
            </h3>
            <p>
              Plants can absorb sound, reducing noise levels and echo in your
              home. This acoustic benefit is particularly valuable in spaces
              with hard surfaces like wood floors, concrete walls, or large
              windows that tend to amplify sound.
            </p>
            <p>
              Plants with large, dense foliage like peace lilies, rubber plants,
              and ficus trees are particularly effective at absorbing sound
              waves. Placing several plants around a room can significantly
              improve its acoustic properties.
            </p>

            <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
              Practical Placement Tips
            </h2>

            <div className="relative h-[300px] w-full my-8 rounded-xl overflow-hidden">
              <Image
                src="/plants-benefits.png"
                alt="Plants helping with room acoustics"
                fill
                className="object-cover"
              />
            </div>
            <p>
              When designing with plants, always consider their light
              requirements. Place sun-loving plants near windows with
              appropriate exposure, and reserve low-light tolerant species for
              darker corners.
            </p>
            <p>
              Group plants with similar care needs together to simplify
              maintenance. This approach not only makes caring for your plants
              easier but can also create visually appealing plant collections.
            </p>
            <p>
              Consider the mature size of plants when placing them. A small
              fiddle leaf fig might look perfect in that corner now, but it
              could outgrow the space within a year or two.
            </p>

            <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
              Conclusion
            </h2>
            <p>
              Thoughtful plant placement can transform your living space both
              visually and functionally. By incorporating plants strategically
              throughout your home, you can create a more beautiful,
              comfortable, and healthy environment.
            </p>
            <p>
              Remember that the best plant design evolves over time. Start with
              a few key plants and gradually add more as you become comfortable
              with their care and better understand how they interact with your
              space.
            </p>
          </div>
        </div>
      </main>

      <RelatedArticles articles={relatedArticles} currentSlug={currentSlug} />
    </div>
  );
}
