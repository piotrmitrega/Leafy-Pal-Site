import { BlogPostLayout } from "@/components/blog-post-layout";
import Image from "next/image";

export default function CommonHouseplantDiseasesPage() {
  return (
    <BlogPostLayout
      slug="common-houseplant-diseases"
      title="Common Houseplant Diseases and How to Treat Them"
      description="Learn to identify and treat the most common diseases that affect indoor plants, from fungal infections to bacterial problems."
      image="./thrips-damage-leaf.png"
      category="Plant Health"
      date="April 15, 2024"
      tags={["Plant Diseases", "Plant Health", "Treatment", "Prevention"]}
      heroAlt="Close-up of a diseased plant leaf showing symptoms"
    >
      <p className="text-lg mb-6">
        Even with the best care, houseplants can sometimes fall victim to
        diseases. Early identification and proper treatment are key to saving
        your plants and preventing the spread to your entire collection.
        Understanding the different types of plant diseases and their symptoms
        will help you become a more successful plant parent.
      </p>

      <div className="bg-green-50 border-l-4 border-[#1F682E] p-4 mb-8">
        <h3 className="font-bold text-[#1F682E] mb-2">🚨 Emergency Signs</h3>
        <p className="text-sm">
          If you notice sudden wilting, black stems, foul odors, or rapid
          yellowing affecting multiple plants, act immediately to prevent spread
          to your entire collection.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Common Fungal Diseases
      </h2>
      <p className="mb-6">
        Fungal diseases are among the most common issues affecting houseplants,
        often caused by overwatering, poor air circulation, high humidity, or
        contaminated soil. These diseases thrive in moist conditions and can
        spread quickly between plants.
      </p>

      <div className="relative w-full h-[300px] my-8 rounded-xl overflow-hidden">
        <Image
          src="./fungal-disease.png"
          alt="Busy person with plants"
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">Root Rot</h3>
      <p className="mb-3">
        Root rot is caused by overwatering and poor drainage, leading to
        oxygen-starved roots that become susceptible to fungal pathogens like{" "}
        <em>Pythium</em> and <em>Phytophthora</em>.
      </p>
      <p className="mb-3">
        <strong>Symptoms:</strong> Yellowing leaves (starting from bottom),
        wilting despite moist soil, mushy black or brown roots, foul smell from
        soil, stunted growth, and leaves dropping suddenly.
      </p>
      <p className="mb-4">
        <strong>Treatment:</strong> Remove plant from pot immediately. Trim away
        all black, mushy roots with sterilized scissors. Wash remaining healthy
        roots with diluted hydrogen peroxide (1:3 ratio). Repot in fresh,
        well-draining soil in a clean pot. Reduce watering frequency and ensure
        proper drainage.
      </p>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
        Powdery Mildew
      </h3>
      <p className="mb-3">
        A fungal infection that appears as white, powdery coating on leaves and
        stems. Common in humid conditions with poor air circulation, especially
        affecting plants like begonias, African violets, and succulents.
      </p>
      <p className="mb-3">
        <strong>Symptoms:</strong> White or gray powdery spots on leaf surfaces,
        yellowing leaves, stunted growth, and eventual leaf drop if untreated.
      </p>
      <p className="mb-4">
        <strong>Treatment:</strong> Improve air circulation immediately. Remove
        affected leaves. Apply neem oil or baking soda solution (1 tsp per quart
        of water). Reduce humidity and avoid overhead watering. Consider using a
        fungicidal spray for severe cases.
      </p>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
        Leaf Spot Diseases
      </h3>

      <div className="relative w-full h-[300px] my-8 rounded-xl overflow-hidden">
        <Image
          src="./diseased-plant-leaf.png"
          alt="Busy person with plants"
          fill
          className="object-cover"
        />
      </div>

      <p className="mb-3">
        Various fungi cause circular or irregular spots on leaves, often with
        distinct borders and varying colors.
      </p>
      <p className="mb-3">
        <strong>Symptoms:</strong> Brown, black, or yellow spots on leaves,
        often with yellow halos. Spots may have concentric rings or fuzzy fungal
        growth.
      </p>
      <p className="mb-4">
        <strong>Treatment:</strong> Remove affected leaves immediately. Improve
        air circulation and avoid getting water on leaves. Apply copper-based
        fungicide if necessary. Ensure proper spacing between plants.
      </p>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">Sooty Mold</h3>
      <p className="mb-3">
        A secondary fungal infection that grows on honeydew secreted by insects
        like aphids or scale insects.
      </p>
      <p className="mb-3">
        <strong>Symptoms:</strong> Black, sooty coating on leaves and stems that
        can be wiped off. Reduced photosynthesis and yellowing leaves.
      </p>
      <p className="mb-4">
        <strong>Treatment:</strong> Address the underlying pest problem first.
        Clean leaves with mild soapy water. Improve air circulation and reduce
        humidity.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Bacterial Diseases
      </h2>

      <div className="relative w-full h-[300px] my-8 rounded-xl overflow-hidden">
        <Image
          src="./bacterial-disease.png"
          alt="Busy person with plants"
          fill
          className="object-cover"
        />
      </div>

      <p className="mb-6">
        Bacterial infections often enter through wounds in the plant and can
        spread quickly if not treated promptly. They're particularly problematic
        in warm, humid conditions and can be more challenging to treat than
        fungal diseases.
      </p>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
        Bacterial Leaf Spot
      </h3>
      <p className="mb-3">
        Caused by various bacteria including <em>Xanthomonas</em> and{" "}
        <em>Pseudomonas</em> species.
      </p>
      <p className="mb-3">
        <strong>Symptoms:</strong> Water-soaked spots that turn brown or black,
        yellow halos around spots, rapid spread in humid conditions, and
        eventual leaf drop.
      </p>
      <p className="mb-4">
        <strong>Treatment:</strong> Remove infected leaves immediately. Improve
        air circulation and reduce humidity. Avoid overhead watering. Apply
        copper-based bactericide. Quarantine affected plants.
      </p>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
        Bacterial Wilt
      </h3>
      <p className="mb-3">
        A serious condition where bacteria block the plant's vascular system,
        preventing water transport.
      </p>
      <p className="mb-3">
        <strong>Symptoms:</strong> Sudden wilting despite adequate moisture,
        yellowing leaves, brown streaks in stems when cut, and rapid plant
        decline.
      </p>
      <p className="mb-4">
        <strong>Treatment:</strong> Unfortunately, bacterial wilt is often
        fatal. Remove affected plants immediately to prevent spread. Disinfect
        tools and pots thoroughly.
      </p>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">Soft Rot</h3>
      <p className="mb-3">
        Particularly common in succulent plants and those with fleshy stems or
        leaves.
      </p>
      <p className="mb-3">
        <strong>Symptoms:</strong> Soft, mushy, water-soaked areas that smell
        foul, rapid breakdown of plant tissue, and blackening of affected areas.
      </p>
      <p className="mb-4">
        <strong>Treatment:</strong> Remove affected portions immediately with
        sterilized tools. Allow cut areas to dry and callus. Reduce watering and
        improve air circulation. May require complete plant replacement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Viral Diseases
      </h2>
      <p className="mb-6">
        Viral infections are less common but can be devastating. They're usually
        spread by insects or contaminated tools and cannot be cured, only
        managed.
      </p>

      <div className="relative w-full h-[300px] my-8 rounded-xl overflow-hidden">
        <Image
          src="./mosaic-virus.png"
          alt="Busy person with plants"
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
        Mosaic Virus
      </h3>
      <p className="mb-3">
        <strong>Symptoms:</strong> Mottled yellow and green patterns on leaves,
        distorted growth, stunted plants, and reduced flowering.
      </p>
      <p className="mb-4">
        <strong>Management:</strong> Remove infected plants to prevent spread.
        Control insect vectors like aphids. Disinfect tools between plants. No
        cure available.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        When to Give Up on a Plant
      </h2>
      <p className="mb-4">
        Sometimes it's better to remove a severely infected plant to protect
        your collection:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          When more than 50% of the plant is affected by disease
        </li>
        <li className="mb-2">
          If you detect bacterial wilt or severe viral infections
        </li>
        <li className="mb-2">
          When root rot has destroyed most of the root system
        </li>
        <li className="mb-2">
          If treatment attempts have failed after 2-3 weeks
        </li>
        <li className="mb-2">
          When the disease is spreading rapidly to other plants
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Prevention Strategies
      </h2>
      <p className="mb-4">
        Prevention is always better than treatment. Follow these comprehensive
        strategies:
      </p>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
        Environmental Controls
      </h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          Ensure proper drainage in all pots with drainage holes
        </li>
        <li className="mb-2">
          Maintain appropriate humidity levels (40-60% for most houseplants)
        </li>
        <li className="mb-2">
          Provide adequate air circulation with fans if necessary
        </li>
        <li className="mb-2">Avoid overcrowding plants</li>
        <li className="mb-2">Place plants in appropriate light conditions</li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
        Watering Best Practices
      </h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Water at soil level to keep leaves dry</li>
        <li className="mb-2">
          Water in the morning so excess moisture evaporates
        </li>
        <li className="mb-2">Use room temperature water</li>
        <li className="mb-2">
          Allow soil to dry appropriately between waterings
        </li>
        <li className="mb-2">Use well-draining potting mixes</li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F682E] mt-6 mb-3">
        Hygiene and Maintenance
      </h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          Quarantine new plants for 2-3 weeks before adding to your collection
        </li>
        <li className="mb-2">
          Clean and disinfect tools between plants (70% isopropyl alcohol)
        </li>
        <li className="mb-2">Remove dead or dying plant material promptly</li>
        <li className="mb-2">
          Inspect plants regularly for early signs of disease
        </li>
        <li className="mb-2">Wash hands between handling different plants</li>
        <li className="mb-2">Use sterile potting soil and clean pots</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
        <h3 className="font-bold text-blue-700 mb-2">💡 Pro Tip</h3>
        <p className="text-sm text-blue-800">
          Keep a plant health journal to track watering, fertilizing, and any
          issues. This helps you identify patterns and catch problems early.
          Take photos of your plants regularly to monitor their health over
          time.
        </p>
      </div>
    </BlogPostLayout>
  );
}
