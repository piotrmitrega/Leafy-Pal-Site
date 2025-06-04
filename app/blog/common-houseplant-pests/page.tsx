import { BlogPostLayout } from "@/components/blog-post-layout";

export default function BlogPost() {
  return (
    <BlogPostLayout
      title="How to Spot and Treat the Most Common Houseplant Pests"
      date="May 7, 2025"
      category="Plant Care"
      slug="common-houseplant-pests"
      image="./mealybugs-on-stem.png"
      heroAlt="Houseplant pests"
    >
      <p className="text-lg mb-6">
        Nothing disrupts your houseplant harmony like a pest infestation.
        Whether it's mealybugs, spider mites, or fungus gnats, pests can weaken
        and even kill your green friends if left unchecked. Fortunately, early
        detection and proactive treatment can stop them in their tracks.
      </p>

      <p className="mb-6">
        In this guide, we'll help you identify the most common houseplant pests,
        understand their life cycles, and learn effective treatment methods that
        won't harm your plants or your home environment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Why Pests Love Your Houseplants
      </h2>
      <p className="mb-6">
        Indoor plants can be particularly vulnerable to pests for several
        reasons. The controlled environment that makes your home comfortable for
        you—stable temperatures, no natural predators, and protection from harsh
        weather—creates an ideal habitat for many pests to thrive. Additionally,
        stressed plants (from improper watering, lighting, or nutrition) are
        more susceptible to infestations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Most Common Indoor Plant Pests
      </h2>

      <div className="grid grid-cols-1 gap-8 my-8">
        <div className="border rounded-lg p-4 bg-[#E9F2C5]/30">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">
            Spider Mites
          </h3>
          <p className="font-medium mb-2">Signs of Infestation:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Tiny webs on the undersides of leaves</li>
            <li>Speckled, discolored foliage</li>
            <li>Fine webbing between stems</li>
            <li>Leaves turning yellow or brown</li>
          </ul>
          <p className="italic mb-0">
            <strong>Fact:</strong> Spider mites are so small (0.4 mm) that they
            often go unnoticed until the infestation is severe. They thrive in
            dry, warm conditions.
          </p>
        </div>

        <div className="border rounded-lg p-4 bg-[#E9F2C5]/30">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">Mealybugs</h3>
          <p className="font-medium mb-2">Signs of Infestation:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Cotton-like white clumps, especially near leaf joints</li>
            <li>Sticky residue (honeydew) on leaves or nearby surfaces</li>
            <li>Yellowing or wilting leaves</li>
            <li>White, waxy material along stems and leaf veins</li>
          </ul>
          <p className="italic mb-0">
            <strong>Fact:</strong> Female mealybugs can lay up to 600 eggs in
            their lifetime, which explains how infestations can spread so
            quickly.
          </p>
        </div>

        <div className="border rounded-lg p-4 bg-[#E9F2C5]/30">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">
            Fungus Gnats
          </h3>
          <p className="font-medium mb-2">Signs of Infestation:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Small flying insects hovering near moist soil</li>
            <li>Tiny larvae in the top layer of soil</li>
            <li>Weak plant growth</li>
            <li>Yellowing leaves</li>
          </ul>
          <p className="italic mb-0">
            <strong>Fact:</strong> While adult gnats are mostly a nuisance,
            their larvae feed on plant roots and can cause significant damage to
            young plants.
          </p>
        </div>

        <div className="border rounded-lg p-4 bg-[#E9F2C5]/30">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">
            Scale Insects
          </h3>
          <p className="font-medium mb-2">Signs of Infestation:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Brown, immobile bumps on stems and leaves</li>
            <li>Sticky residue on leaves or nearby surfaces</li>
            <li>Yellowing leaves</li>
            <li>Stunted growth</li>
          </ul>
          <p className="italic mb-0">
            <strong>Fact:</strong> Scale insects have a protective shell that
            makes them resistant to many insecticides, making early detection
            crucial.
          </p>
        </div>

        <div className="border rounded-lg p-4 bg-[#E9F2C5]/30">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">Aphids</h3>
          <p className="font-medium mb-2">Signs of Infestation:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Clusters of small insects on new growth and flower buds</li>
            <li>Sticky residue on leaves</li>
            <li>Curling, yellowing, or distorted leaves</li>
            <li>Stunted growth</li>
          </ul>
          <p className="italic mb-0">
            <strong>Fact:</strong> Aphids reproduce rapidly—a single aphid can
            produce 80 offspring in a week, which is why infestations can appear
            seemingly overnight.
          </p>
        </div>

        <div className="border rounded-lg p-4 bg-[#E9F2C5]/30">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">Thrips</h3>
          <p className="font-medium mb-2">Signs of Infestation:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Silvery, speckled leaves</li>
            <li>Black dots (frass) on leaves</li>
            <li>Distorted growth</li>
            <li>Tiny, slender insects that move quickly when disturbed</li>
          </ul>
          <p className="italic mb-0">
            <strong>Fact:</strong> Thrips are excellent hitchhikers and can
            enter your home on clothing, fresh cut flowers, or new plants.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Early Detection Is Key
      </h2>
      <p className="mb-4">
        The most effective pest management strategy is early detection. By the
        time you notice significant damage, the infestation may already be
        severe.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          <strong>Regular inspections:</strong> Make it a habit to inspect your
          plants weekly, especially under leaves and around stems.
        </li>
        <li className="mb-2">
          <strong>Use a magnifying glass:</strong> Some pests like spider mites
          are nearly invisible to the naked eye.
        </li>
        <li className="mb-2">
          <strong>Document changes:</strong> The Leafy Pal app allows you to log
          visual changes and detect unusual signs early through your photo
          updates.
        </li>
        <li className="mb-2">
          <strong>Check new growth:</strong> Many pests are attracted to tender
          new growth, so pay special attention to these areas.
        </li>
      </ul>

      <div className="bg-[#E9F2C5] p-6 rounded-lg my-8">
        <h3 className="text-xl font-bold text-[#1F682E] mb-3">
          Using Leafy Pal for Pest Detection
        </h3>
        <p className="mb-4">
          The Leafy Pal app includes features specifically designed to help with
          early pest detection:
        </p>
        <ul className="list-disc pl-6 mb-0">
          <li className="mb-2">
            <strong>Photo documentation:</strong> Take regular photos of your
            plants to track subtle changes over time.
          </li>
          <li className="mb-2">
            <strong>AI-powered identification:</strong> Upload close-up photos
            of suspicious spots or insects for instant identification.
          </li>
          <li className="mb-2">
            <strong>Pest alert system:</strong> Receive notifications about
            common pests based on your plant species and local conditions.
          </li>
          <li className="mb-0">
            <strong>Treatment guidance:</strong> Get specific, plant-safe
            treatment recommendations for identified pests.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Treatment Strategies
      </h2>
      <p className="mb-4">
        When you discover pests, it's important to act quickly but thoughtfully.
        Here are effective treatment methods for common houseplant pests:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">
            Manual Removal
          </h3>
          <p className="mb-4">
            For visible pests like mealybugs and scale, manual removal can be
            very effective:
          </p>
          <ul className="list-disc pl-6 mb-0">
            <li>
              Use cotton swabs dipped in 70% isopropyl alcohol for mealybugs
            </li>
            <li>
              Gently scrape off scale insects with a soft toothbrush or
              fingernail
            </li>
            <li>
              Rinse plants with a strong stream of water to dislodge spider
              mites and aphids
            </li>
          </ul>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">
            Neem Oil Spray
          </h3>
          <p className="mb-4">
            A safe and effective natural remedy that disrupts the life cycle of
            many pests:
          </p>
          <ul className="list-disc pl-6 mb-0">
            <li>
              Mix 2 teaspoons of neem oil with 1 teaspoon of mild liquid soap in
              1 quart of water
            </li>
            <li>
              Spray all plant surfaces, including the undersides of leaves
            </li>
            <li>
              Apply weekly until the infestation is gone, then monthly as
              prevention
            </li>
            <li>Apply in the evening to prevent leaf burn</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">
            Insecticidal Soap
          </h3>
          <p className="mb-4">
            Effective against soft-bodied insects like aphids, mealybugs, and
            spider mites:
          </p>
          <ul className="list-disc pl-6 mb-0">
            <li>
              Purchase ready-made insecticidal soap or make your own with
              castile soap
            </li>
            <li>Apply directly to pests, as it works on contact</li>
            <li>Reapply every 5-7 days until pests are gone</li>
            <li>Test on a small leaf area first to ensure no plant damage</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">
            Sticky Traps
          </h3>
          <p className="mb-4">
            Ideal for flying insects like fungus gnats and whiteflies:
          </p>
          <ul className="list-disc pl-6 mb-0">
            <li>
              Place yellow sticky cards horizontally just above the soil surface
            </li>
            <li>Replace cards when they become covered with insects</li>
            <li>Use in combination with other treatments for best results</li>
            <li>
              Monitor the number of trapped insects to gauge treatment
              effectiveness
            </li>
          </ul>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">
            Soil Management
          </h3>
          <p className="mb-4">
            Particularly effective for fungus gnats and other soil-dwelling
            pests:
          </p>
          <ul className="list-disc pl-6 mb-0">
            <li>Let the soil dry out completely between waterings</li>
            <li>Apply a layer of diatomaceous earth on the soil surface</li>
            <li>Consider repotting with fresh, sterile potting mix</li>
            <li>
              Use bottom watering techniques to keep the top soil layer dry
            </li>
          </ul>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-bold text-[#1F682E] mb-2">
            Beneficial Insects
          </h3>
          <p className="mb-4">
            A natural, chemical-free approach for persistent problems:
          </p>
          <ul className="list-disc pl-6 mb-0">
            <li>Ladybugs for aphid control</li>
            <li>Predatory mites for spider mite infestations</li>
            <li>Nematodes for soil-dwelling pests</li>
            <li>
              Most effective in greenhouse settings or for large indoor plant
              collections
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Prevention Tips
      </h2>
      <p className="mb-4">
        Preventing pest infestations is always easier than treating them. Here
        are some effective preventive measures:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          <strong>Quarantine new plants:</strong> Keep new additions isolated
          from your existing collection for at least two weeks to ensure they're
          pest-free.
        </li>
        <li className="mb-2">
          <strong>Avoid overwatering:</strong> Soggy soil creates ideal
          conditions for fungus gnats and root rot.
        </li>
        <li className="mb-2">
          <strong>Clean leaves regularly:</strong> Wipe down leaves with a damp
          cloth to remove dust and potential pests.
        </li>
        <li className="mb-2">
          <strong>Maintain plant health:</strong> Healthy plants are more
          resistant to pest infestations. Ensure proper light, water, and
          nutrients.
        </li>
        <li className="mb-2">
          <strong>Inspect regularly:</strong> Make weekly inspections part of
          your plant care routine.
        </li>
        <li className="mb-2">
          <strong>Proper spacing:</strong> Avoid crowding plants, which can
          facilitate pest spread and create humid microclimates.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        When to Discard a Plant
      </h2>
      <p className="mb-6">
        Sometimes, despite your best efforts, an infestation becomes too severe
        to manage effectively. Consider discarding a plant if:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          The infestation has spread to more than 50% of the plant
        </li>
        <li className="mb-2">Multiple treatment attempts have failed</li>
        <li className="mb-2">
          The plant is showing severe damage and minimal new growth
        </li>
        <li className="mb-2">
          The infestation is spreading to nearby plants despite isolation
        </li>
      </ul>
      <p className="mb-6">
        Remember, sometimes discarding one severely infested plant can save the
        rest of your collection.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Final Thoughts
      </h2>
      <p className="mb-6">
        Dealing with houseplant pests can be frustrating, but with vigilance and
        the right approach, you can keep your indoor garden healthy and
        thriving. Regular monitoring, early intervention, and consistent care
        are your best defenses against unwanted visitors.
      </p>
      <p className="mb-6">
        With regular care and Leafy Pal's pest detection tracking, you can act
        fast and protect your indoor garden. Remember that even experienced
        plant parents encounter pests occasionally—it's part of the journey of
        living with plants.
      </p>
    </BlogPostLayout>
  );
}
