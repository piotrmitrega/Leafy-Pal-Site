import { BlogPostLayout } from "@/components/blog-post-layout";

export default function PlantHealthDiagnosticsPage() {
  return (
    <BlogPostLayout
      slug="plant-health-diagnostics"
      title="Plant Health Diagnostics: Complete Guide to Reading Plant Signals"
      description="Master the art of plant diagnostics with our comprehensive guide to identifying, diagnosing, and treating common plant health issues through visual cues."
      image="./plant-diagnosis.png"
      category="Plant Care"
      date="May 15, 2023"
      tags={["plant health", "diagnostics", "plant care", "troubleshooting"]}
      heroAlt="Plant with visible health issues being examined"
    >
      <p className="text-lg mb-6">
        Plants are constantly communicating their health status through visual
        cues, growth patterns, and subtle changes. Learning to "read" these
        signals is one of the most valuable skills any plant parent can develop.
        This comprehensive guide will teach you to become a plant detective,
        identifying problems early and providing targeted solutions.
      </p>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        The SPADE Diagnostic Method
      </h2>
      <p className="mb-4">
        Use this systematic approach to diagnose plant problems effectively:
      </p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <ul className="text-sm space-y-2">
          <li>
            <strong>S</strong>ymptoms - What exactly do you see?
          </li>
          <li>
            <strong>P</strong>attern - Where and how are symptoms distributed?
          </li>
          <li>
            <strong>A</strong>rea - Which parts of the plant are affected?
          </li>
          <li>
            <strong>D</strong>uration - How long have symptoms been present?
          </li>
          <li>
            <strong>E</strong>nvironment - What are the growing conditions?
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Leaf Diagnostics: Reading the Primary Indicators
      </h2>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Leaf Color Changes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-[#1F682E] mb-2">
                Yellow Leaves (Chlorosis)
              </h4>
              <ul className="text-sm space-y-1">
                <li>
                  <strong>Lower leaves first:</strong> Natural aging or nitrogen
                  deficiency
                </li>
                <li>
                  <strong>Between veins:</strong> Iron deficiency (new growth
                  affected)
                </li>
                <li>
                  <strong>Entire leaf:</strong> Overwatering, root rot, or
                  magnesium deficiency
                </li>
                <li>
                  <strong>With brown edges:</strong> Potassium deficiency or
                  salt buildup
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-[#1F682E] mb-2">
                Brown/Black Discoloration
              </h4>
              <ul className="text-sm space-y-1">
                <li>
                  <strong>Leaf tips/edges:</strong> Low humidity, fluoride
                  toxicity, or over-fertilization
                </li>
                <li>
                  <strong>Circular spots:</strong> Fungal diseases (leaf spot,
                  anthracnose)
                </li>
                <li>
                  <strong>Water-soaked areas:</strong> Bacterial infections
                </li>
                <li>
                  <strong>Entire leaves:</strong> Frost damage or severe
                  dehydration
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-[#1F682E] mb-2">
                Purple/Red Coloring
              </h4>
              <ul className="text-sm space-y-1">
                <li>
                  <strong>Leaf undersides:</strong> Phosphorus deficiency
                </li>
                <li>
                  <strong>Entire leaves:</strong> Cold stress or high light
                  intensity
                </li>
                <li>
                  <strong>New growth:</strong> Normal for some varieties
                </li>
                <li>
                  <strong>With stunted growth:</strong> Root problems limiting
                  nutrient uptake
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-[#1F682E] mb-2">
                Pale/Faded Leaves
              </h4>
              <ul className="text-sm space-y-1">
                <li>
                  <strong>Overall paleness:</strong> Too much light or nitrogen
                  deficiency
                </li>
                <li>
                  <strong>Variegation loss:</strong> Insufficient light
                </li>
                <li>
                  <strong>New growth pale:</strong> Iron or sulfur deficiency
                </li>
                <li>
                  <strong>Sudden fading:</strong> Temperature shock or root
                  damage
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Leaf Shape and Texture Changes
          </h3>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-[#1F682E] mb-2">
                Curling and Wilting Patterns
              </h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Upward curl:</strong> Heat stress, overwatering, or
                  wind damage
                </li>
                <li>
                  <strong>Downward curl:</strong> Underwatering, low humidity,
                  or pest damage
                </li>
                <li>
                  <strong>Inward curl:</strong> Thrips, aphids, or viral
                  infections
                </li>
                <li>
                  <strong>Wilting despite moist soil:</strong> Root rot or
                  fungal wilt diseases
                </li>
                <li>
                  <strong>Crispy, dry curling:</strong> Severe dehydration or
                  chemical burn
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-[#1F682E] mb-2">
                Unusual Growth Patterns
              </h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Small, distorted leaves:</strong> Viral infections or
                  severe nutrient deficiency
                </li>
                <li>
                  <strong>Holes in leaves:</strong> Caterpillars, slugs, or
                  mechanical damage
                </li>
                <li>
                  <strong>Sticky honeydew:</strong> Aphids, scale insects, or
                  mealybugs
                </li>
                <li>
                  <strong>Silvery streaks:</strong> Thrips damage
                </li>
                <li>
                  <strong>Stippling (tiny dots):</strong> Spider mites
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Growth Pattern Analysis
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div>
          <h3 className="text-xl font-bold text-gray-700 mb-3">
            Abnormal Growth Indicators
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Leggy, stretched stems:</strong> Insufficient light
              (etiolation)
            </li>
            <li>
              <strong>Stunted growth:</strong> Root bound, nutrient deficiency,
              or pest damage
            </li>
            <li>
              <strong>Leaf drop:</strong> Stress, overwatering, or environmental
              shock
            </li>
            <li>
              <strong>No new growth:</strong> Dormancy, root problems, or severe
              stress
            </li>
            <li>
              <strong>Weak, floppy stems:</strong> Overwatering or nitrogen
              excess
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Healthy Growth Signs
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>New growth:</strong> Fresh leaves and stems appearing
              regularly
            </li>
            <li>
              <strong>Good color:</strong> Vibrant, species-appropriate leaf
              color
            </li>
            <li>
              <strong>Firm stems:</strong> Strong, upright growth habit
            </li>
            <li>
              <strong>Active roots:</strong> White/cream colored root tips
            </li>
            <li>
              <strong>Flowering/fruiting:</strong> Seasonal reproductive growth
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Common Pest Identification Guide
      </h2>

      <div className="space-y-4 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-bold text-red-600 mb-2">
            Immediate Action Required
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p>
                <strong>Spider Mites:</strong> Fine webbing, stippled leaves,
                tiny moving dots
              </p>
              <p>
                <strong>Scale Insects:</strong> Brown/white bumps on stems,
                sticky honeydew
              </p>
            </div>
            <div>
              <p>
                <strong>Mealybugs:</strong> White, cotton-like clusters in leaf
                joints
              </p>
              <p>
                <strong>Aphids:</strong> Small, soft-bodied insects clustering
                on new growth
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-gray-700 mb-2">Monitor Closely</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p>
                <strong>Thrips:</strong> Silvery streaks on leaves, tiny black
                specks
              </p>
              <p>
                <strong>Whiteflies:</strong> Small white flies on leaf
                undersides
              </p>
            </div>
            <div>
              <p>
                <strong>Fungus Gnats:</strong> Small flies around soil, larvae
                in growing medium
              </p>
              <p>
                <strong>Caterpillars:</strong> Chewed leaves, visible droppings
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Disease Identification and Treatment
      </h2>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Fungal Diseases
          </h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <ul className="space-y-3">
              <li>
                <strong>Powdery Mildew:</strong> White, powdery coating on
                leaves
                <br />
                <span className="text-sm text-gray-600">
                  Treatment: Improve air circulation, reduce humidity, apply
                  fungicide
                </span>
              </li>
              <li>
                <strong>Leaf Spot:</strong> Brown or black spots with yellow
                halos
                <br />
                <span className="text-sm text-gray-600">
                  Treatment: Remove affected leaves, improve air flow,
                  fungicidal spray
                </span>
              </li>
              <li>
                <strong>Root Rot:</strong> Soft, dark roots with foul odor
                <br />
                <span className="text-sm text-gray-600">
                  Treatment: Repot in fresh soil, trim affected roots, reduce
                  watering
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Bacterial Diseases
          </h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <ul className="space-y-3">
              <li>
                <strong>Bacterial Blight:</strong> Water-soaked spots that turn
                brown/black
                <br />
                <span className="text-sm text-gray-600">
                  Treatment: Remove affected parts, improve air circulation,
                  copper-based treatment
                </span>
              </li>
              <li>
                <strong>Soft Rot:</strong> Mushy, foul-smelling tissue breakdown
                <br />
                <span className="text-sm text-gray-600">
                  Treatment: Remove affected areas, improve drainage, reduce
                  humidity
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Environmental Stress Factors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Watering Issues
          </h3>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <p className="font-semibold text-gray-700">Overwatering Signs:</p>
              <ul className="text-sm mt-1">
                <li>• Yellowing leaves (usually lower first)</li>
                <li>• Soft, mushy stems</li>
                <li>• Fungus gnats</li>
                <li>• Moldy soil surface</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <p className="font-semibold text-gray-700">
                Underwatering Signs:
              </p>
              <ul className="text-sm mt-1">
                <li>• Wilting, crispy leaves</li>
                <li>• Dry, cracked soil</li>
                <li>• Leaf drop</li>
                <li>• Stunted growth</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Environmental Stress
          </h3>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <p className="font-semibold text-gray-700">Temperature Stress:</p>
              <ul className="text-sm mt-1">
                <li>• Cold: Purple/black leaves, dropping</li>
                <li>• Heat: Wilting, scorched leaves</li>
                <li>• Sudden changes: Shock, leaf drop</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <p className="font-semibold text-gray-700">Humidity Issues:</p>
              <ul className="text-sm mt-1">
                <li>• Low: Brown leaf tips, curling</li>
                <li>• High: Fungal issues, soft growth</li>
                <li>• Fluctuations: Stress responses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Step-by-Step Diagnostic Process
      </h2>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Initial Assessment:</strong> Photograph the problem, note
            when you first noticed it
          </li>
          <li>
            <strong>Environmental Check:</strong> Review recent changes in
            light, water, temperature, humidity
          </li>
          <li>
            <strong>Physical Examination:</strong> Check leaves (top and
            bottom), stems, soil, and roots if possible
          </li>
          <li>
            <strong>Pattern Analysis:</strong> Determine if the problem is
            spreading, localized, or systematic
          </li>
          <li>
            <strong>Pest Inspection:</strong> Look for insects, eggs, webbing,
            or other pest signs
          </li>
          <li>
            <strong>Soil Assessment:</strong> Check moisture, pH, and overall
            soil condition
          </li>
          <li>
            <strong>Treatment Planning:</strong> Address the most likely cause
            first, monitor response
          </li>
        </ol>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Essential Diagnostic Tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">Basic Tools</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Magnifying glass:</strong> For pest identification
            </li>
            <li>
              <strong>Soil moisture meter:</strong> Accurate watering assessment
            </li>
            <li>
              <strong>pH test kit:</strong> Soil chemistry analysis
            </li>
            <li>
              <strong>Thermometer/hygrometer:</strong> Environmental monitoring
            </li>
            <li>
              <strong>Camera/phone:</strong> Document progression
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Digital Resources
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Plant ID apps:</strong> Species-specific problem databases
            </li>
            <li>
              <strong>Disease diagnostic apps:</strong> Photo-based problem
              identification
            </li>
            <li>
              <strong>Local extension services:</strong> Regional pest/disease
              information
            </li>
            <li>
              <strong>Online forums:</strong> Community problem-solving
            </li>
            <li>
              <strong>Weather apps:</strong> Environmental correlation tracking
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Creating an Effective Plant Health Journal
      </h2>
      <p className="mb-4">
        Documentation is crucial for successful plant diagnostics. Track these
        key elements:
      </p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-[#1F682E] mb-2">
          Journal Entries Should Include:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-1">
            <li>• Date and time of observation</li>
            <li>• Photos of the problem</li>
            <li>• Environmental conditions</li>
            <li>• Recent care changes</li>
          </ul>
          <ul className="space-y-1">
            <li>• Symptoms observed</li>
            <li>• Treatments applied</li>
            <li>• Plant's response to treatment</li>
            <li>• Follow-up observations</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        When to Seek Professional Help
      </h2>
      <p className="mb-4">
        Some situations require expert intervention. Contact a plant specialist,
        extension service, or plant pathologist when you encounter:
      </p>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Rapid plant decline:</strong> Multiple plants affected
            simultaneously
          </li>
          <li>
            <strong>Unknown pests:</strong> Insects or damage you cannot
            identify
          </li>
          <li>
            <strong>Systemic diseases:</strong> Problems that continue spreading
            despite treatment
          </li>
          <li>
            <strong>Valuable plants:</strong> Expensive or sentimental plants at
            risk
          </li>
          <li>
            <strong>Persistent issues:</strong> Problems that don't respond to
            standard treatments
          </li>
          <li>
            <strong>Suspected viral diseases:</strong> Unusual patterns,
            distorted growth
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1F682E] mt-8 mb-4">
        Prevention: The Best Medicine
      </h2>
      <p className="mb-4">
        Preventing problems is always easier than treating them. Implement these
        preventative strategies:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Regular Maintenance
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Weekly plant inspections</li>
            <li>Proper watering schedules</li>
            <li>Regular cleaning and dusting</li>
            <li>Pruning dead or damaged parts</li>
            <li>Monitoring environmental conditions</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1F682E] mb-3">
            Quarantine Protocols
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Isolate new plants for 2-4 weeks</li>
            <li>Inspect regularly during quarantine</li>
            <li>Treat any issues before integration</li>
            <li>Separate sick plants immediately</li>
            <li>Clean tools between plants</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-[#1F682E] mb-2">
          Remember: Plants Are Resilient
        </h4>
        <p className="text-sm">
          Most plant problems are treatable when caught early. Don't panic at
          the first sign of trouble—observe, diagnose systematically, and
          respond appropriately. With practice, you'll develop an intuitive
          understanding of your plants' needs and become an expert at reading
          their subtle communications.
        </p>
      </div>
    </BlogPostLayout>
  );
}
