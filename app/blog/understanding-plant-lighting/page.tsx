import { BlogPostLayout } from "@/components/blog-post-layout";

export default function UnderstandingPlantLightingPage() {
  return (
    <BlogPostLayout
      slug="understanding-plant-lighting"
      title="Understanding Plant Lighting: A Complete Guide"
      description="Master the fundamentals of plant lighting, from natural light assessment to choosing the right grow lights for your indoor garden."
      image="./window-light-directions.png"
      category="Plant Care"
      date="April 10, 2024"
      tags={["Plant Lighting", "Grow Lights", "Indoor Gardening", "Plant Care"]}
      heroAlt="Plants receiving optimal lighting conditions"
    >
      <p className="text-lg mb-6">
        Light is the foundation of photosynthesis and arguably the most critical
        factor for plant health. Understanding light intensity, duration, and
        quality can mean the difference between thriving plants and struggling
        ones. This comprehensive guide will help you master your plants'
        lighting needs and create the perfect environment for indoor gardening
        success.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Understanding Light Intensity
      </h2>
      <p className="mb-4">
        Light intensity is measured in foot-candles (fc) or lux. Most
        smartphones have light meter apps that can give you approximate readings
        to help assess your space.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-[#1F682E] mb-2">
          Quick Reference: Light Levels
        </h4>
        <ul className="text-sm">
          <li>
            <strong>High Light:</strong> 1,000+ fc (direct sun 6+ hours)
          </li>
          <li>
            <strong>Bright Indirect:</strong> 500-1,000 fc
          </li>
          <li>
            <strong>Medium Light:</strong> 250-500 fc
          </li>
          <li>
            <strong>Low Light:</strong> 75-250 fc
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Types of Natural Light
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Direct Light (High Light)
          </h3>
          <p className="mb-4">
            Direct sunlight hits the plant for 6+ hours daily, typically in
            south-facing windows. Perfect for succulents, cacti, citrus trees,
            and many flowering plants like hibiscus and geraniums.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Placement:</strong> Within 2-3 feet of south-facing windows
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Bright Indirect Light
          </h3>
          <p className="mb-4">
            Bright but filtered light, such as near east/west windows or
            slightly away from south windows. Ideal for most tropical
            houseplants like monstera, pothos, fiddle leaf figs, and rubber
            trees.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Placement:</strong> 3-5 feet from south windows, or directly
            in east/west windows
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Medium Light
          </h3>
          <p className="mb-4">
            Moderate light levels, often in north-facing windows or several feet
            from brighter windows. Great for snake plants, ZZ plants, dracaenas,
            and many ferns.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Placement:</strong> North windows or 5-8 feet from bright
            windows
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">Low Light</h3>
          <p className="mb-4">
            Areas that receive minimal natural light but can still support some
            plant growth. Suitable for pothos, peace lilies, Chinese evergreens,
            and cast iron plants.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Placement:</strong> 8+ feet from windows or areas with only
            artificial room lighting
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Assessing Your Home's Light Conditions
      </h2>
      <p className="mb-4">
        Understanding the light conditions in different areas of your home is
        crucial for plant placement success. Here's how to evaluate your space:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          <strong>Window Direction:</strong> South windows receive the most
          light, followed by east/west, then north
        </li>
        <li className="mb-2">
          <strong>Seasonal Changes:</strong> Light intensity varies
          significantly between summer and winter
        </li>
        <li className="mb-2">
          <strong>Obstructions:</strong> Trees, buildings, and overhangs can
          dramatically reduce available light
        </li>
        <li className="mb-2">
          <strong>Time Assessment:</strong> Observe light patterns throughout
          the day to understand duration and intensity
        </li>
      </ul>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-[#1F682E] mb-2">
          Pro Tip: The Shadow Test
        </h4>
        <p className="text-sm">
          Hold your hand 12 inches above a white surface. A sharp, dark shadow
          indicates high light; a soft shadow means medium light; barely visible
          shadow suggests low light.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Signs Your Plant Needs More or Less Light
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div>
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Too Little Light
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Leggy, stretched growth (etiolation)</li>
            <li>Small, pale new leaves</li>
            <li>Slow or no growth</li>
            <li>Leaf drop, especially lower leaves</li>
            <li>Flowering plants won't bloom</li>
            <li>Variegated plants lose their patterns</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-orange-600 mb-3">
            Too Much Light
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Scorched or brown leaf tips/edges</li>
            <li>Faded or washed-out leaf colors</li>
            <li>Leaves curling or wilting despite adequate water</li>
            <li>Rapid soil drying</li>
            <li>Stunted growth in extreme cases</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        When to Use Grow Lights
      </h2>
      <p className="mb-4">
        Grow lights become essential when natural light is insufficient.
        Consider supplemental lighting if:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          Your home lacks adequate natural light (common in apartments or
          north-facing homes)
        </li>
        <li className="mb-2">
          You want to grow plants in windowless rooms or basements
        </li>
        <li className="mb-2">
          Winter months reduce daylight hours significantly
        </li>
        <li className="mb-2">You're growing seedlings or propagating plants</li>
        <li className="mb-2">
          You have high-light plants but only medium-light locations
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Choosing the Right Grow Light
      </h2>
      <p className="mb-4">
        Modern grow lights have revolutionized indoor gardening. Here's what you
        need to know:
      </p>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            LED Grow Lights (Recommended)
          </h3>
          <p className="mb-3">
            Energy-efficient, long-lasting (50,000+ hours), and produce less
            heat. Full-spectrum LEDs provide the complete light spectrum plants
            need.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Pros:</strong> Low energy use, minimal heat, customizable
              spectrums, long lifespan
            </li>
            <li>
              <strong>Cons:</strong> Higher upfront cost
            </li>
            <li>
              <strong>Best for:</strong> All plant types, especially long-term
              setups
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Fluorescent Lights (T5/T8)
          </h3>
          <p className="mb-3">
            Good for seedlings, herbs, and low to medium light plants. More
            affordable upfront but less efficient long-term.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Pros:</strong> Lower initial cost, even light distribution
            </li>
            <li>
              <strong>Cons:</strong> Higher energy use, shorter lifespan, need
              close placement
            </li>
            <li>
              <strong>Best for:</strong> Seedlings, herbs, leafy greens
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-[#1F682E] mb-2">
          Key Specifications to Look For
        </h4>
        <ul className="text-sm">
          <li>
            <strong>PPFD (Photosynthetic Photon Flux Density):</strong> 100-300
            μmol/m²/s for most houseplants
          </li>
          <li>
            <strong>Color Temperature:</strong> 5000K-6500K for vegetative
            growth, 2700K-3000K for flowering
          </li>
          <li>
            <strong>Coverage Area:</strong> Match light footprint to your plant
            area
          </li>
          <li>
            <strong>Timer Function:</strong> Essential for consistent
            photoperiods
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Light Duration and Timing
      </h2>
      <p className="mb-4">
        Most houseplants need 12-16 hours of artificial light daily when grow
        lights are the primary source. Use timers to maintain consistent
        schedules:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          <strong>Foliage plants:</strong> 12-14 hours daily
        </li>
        <li className="mb-2">
          <strong>Flowering plants:</strong> 14-16 hours daily
        </li>
        <li className="mb-2">
          <strong>Seedlings:</strong> 14-16 hours daily
        </li>
        <li className="mb-2">
          <strong>Succulents:</strong> 12-14 hours daily
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Common Lighting Mistakes to Avoid
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          <strong>Placing lights too far away:</strong> Most grow lights should
          be 12-24 inches from plants
        </li>
        <li className="mb-2">
          <strong>Inconsistent lighting schedules:</strong> Plants thrive on
          routine; use timers
        </li>
        <li className="mb-2">
          <strong>Ignoring seasonal changes:</strong> Adjust artificial lighting
          as natural light changes
        </li>
        <li className="mb-2">
          <strong>One-size-fits-all approach:</strong> Different plants have
          different light requirements
        </li>
        <li className="mb-2">
          <strong>Forgetting about heat:</strong> Some lights generate heat that
          can stress plants
        </li>
      </ul>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-[#1F682E] mb-2">Final Thoughts</h4>
        <p className="text-sm">
          Remember that lighting is just one part of plant care. Proper
          watering, humidity, temperature, and nutrition work together with
          adequate lighting to keep your plants thriving. Start with
          understanding your current light conditions, then gradually adjust and
          supplement as needed.
        </p>
      </div>
    </BlogPostLayout>
  );
}
