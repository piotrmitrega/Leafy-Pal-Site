export interface BlogArticle {
  slug: string
  title: string // Original English title (for fallback)
  description: string // Original English description (for fallback)
  image: string
  category: string
  date: string
  tags?: string[]
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "plant-health-diagnostics",
    title: "Decoding Distress Signals: Plant Health Diagnostics",
    description: "Learn to interpret your plants' visual cues to diagnose problems and provide timely, effective care.",
    image: "/plant-diagnosis.png", // Updated to existing image
    category: "Plant Health",
    date: "May 15, 2024",
    tags: ["Plant Health", "Diagnostics", "Troubleshooting", "Plant Care"],
  },
  {
    slug: "temperature-humidity-houseplants",
    title: "The Right Climate: Understanding Temperature & Humidity for Houseplants",
    description: "Create the ideal indoor climate for your plants by mastering temperature and humidity requirements.",
    image: "/humidity-tray.png", // Updated to existing image
    category: "Plant Care",
    date: "May 14, 2024",
    tags: ["Temperature", "Humidity", "Climate", "Indoor Plants"],
  },
  {
    slug: "pruning-maintenance",
    title: "Shaping Beauty and Health: The Art of Pruning and Maintenance",
    description: "Master the techniques of pruning and regular maintenance to keep your plants healthy and beautiful.",
    image: "/pruning-tools-layout.png", // Updated to existing image
    category: "Plant Care",
    date: "May 13, 2024",
    tags: ["Pruning", "Maintenance", "Plant Care", "Growth"],
  },
  {
    slug: "pest-control-houseplants",
    title: "Guardians Against Green Grief: Mastering Pest Control for Houseplants",
    description:
      "Identify common pests and learn effective natural and chemical solutions to protect your indoor garden.",
    image: "/mealybugs-on-stem.png", // Updated to existing image
    category: "Plant Health",
    date: "May 12, 2024",
    tags: ["Pest Control", "Plant Health", "Natural Solutions", "Indoor Garden"],
  },
  {
    slug: "principles-fertilization",
    title: "Nourishing Growth: The Principles of Fertilization",
    description:
      "Understand the science of plant nutrition and learn how to properly fertilize different types of houseplants.",
    image: "/plant-glamour.png", // Updated to existing image
    category: "Plant Care",
    date: "May 11, 2024",
    tags: ["Fertilization", "Plant Nutrition", "Growth", "Houseplants"],
  },
  {
    slug: "watering-indoor-plants",
    title: "The Essential Guide to Watering Your Indoor Plants",
    description:
      "Learn the art of proper watering techniques for different plant types to keep your indoor garden thriving.",
    image: "/watering-plants.png", // Updated to existing image
    category: "Plant Care",
    date: "May 10, 2024",
    tags: ["Watering", "Indoor Plants", "Plant Care", "Techniques"],
  },
  {
    slug: "plant-light-requirements",
    title: "Illuminating Growth: Understanding Plant Light Requirements",
    description:
      "Discover how to provide the optimal light conditions for your houseplants based on their specific needs.",
    image: "/plant-sunlight.png", // Updated to existing image
    category: "Plant Care",
    date: "May 10, 2024",
    tags: ["Light", "Plant Growth", "Indoor Plants", "Care Tips"],
  },
  {
    slug: "soil-and-repotting",
    title: "Grounded in Growth: Understanding Soil and Repotting",
    description:
      "Master the essentials of soil selection and repotting techniques to give your plants a strong foundation.",
    image: "/repotting-process.png", // Updated to existing image
    category: "Plant Care",
    date: "May 10, 2024",
    tags: ["Soil", "Repotting", "Plant Growth", "Potting Mix"],
  },
  {
    slug: "plant-air-purification",
    title: "The Science Behind Plant Air Purification",
    description: "Explore how plants improve indoor air quality by removing toxins and releasing oxygen.",
    image: "/plant-phytoremediation.png", // Updated to existing image
    category: "Plant Science",
    date: "May 8, 2024",
    tags: ["Air Purification", "Indoor Air Quality", "Plant Science", "Health"],
  },
  {
    slug: "designing-home-with-plants",
    title: "Designing Your Home with Plants: Aesthetic and Functional Tips",
    description: "Discover how to enhance your home's aesthetics and functionality with strategic plant placement.",
    image: "/room-theme-plants.png", // Updated to existing image
    category: "Home Design",
    date: "May 8, 2024",
    tags: ["Home Design", "Interior Decor", "Plant Placement", "Aesthetics"],
  },
  {
    slug: "plant-toxicity-safety",
    title: "Understanding Plant Toxicity: Keeping Pets and Children Safe",
    description: "Learn which plants are toxic and how to create a safe environment for your family and pets.",
    image: "/pet-child-plant-safety.png", // Updated to existing image
    category: "Plant Safety",
    date: "May 8, 2024",
    tags: ["Plant Toxicity", "Pet Safety", "Child Safety", "Indoor Plants"],
  },
  {
    slug: "plant-care-routine-busy-individuals",
    title: "Creating a Plant Care Routine for Busy Individuals",
    description:
      "Learn how to maintain healthy plants even with a hectic schedule through structured routines and smart tools.",
    image: "/houseplant-pruning-calendar.png", // Updated to existing image
    category: "Plant Care",
    date: "May 5, 2024",
    tags: ["Plant Care", "Routines", "Time Management", "Busy Lifestyle"],
  },
  {
    slug: "allergy-friendly-houseplants",
    title: "Top 10 Allergy-Friendly Houseplants",
    description: "Discover plants that purify the air without triggering allergies for a healthier home environment.",
    image: "/peace-lily.png", // Updated to existing image
    category: "Plant Health",
    date: "May 3, 2024",
    tags: ["Allergy-Friendly", "Houseplants", "Air Quality", "Health"],
  },
  {
    slug: "ultimate-guide-indoor-plants",
    title: "The Ultimate Guide to Caring for Indoor Plants",
    description:
      "Learn everything you need to know about light, water, soil, and more to keep your indoor plants thriving.",
    image: "/indoor-plants-care-guide.png", // Already using existing image
    category: "Plant Care",
    date: "May 1, 2024",
    tags: ["Indoor Plants", "Plant Care", "Beginner Guide", "Comprehensive"],
  },
  {
    slug: "houseplants-that-thrive-on-neglect",
    title: "7 Houseplants That Thrive on Neglect (And How to Keep Them Thriving Anyway)",
    description: "Discover resilient plants perfect for busy people or beginners who might forget to water.",
    image: "/snake-plant.png", // Updated to existing image
    category: "Plant Types",
    date: "April 28, 2024",
    tags: ["Low Maintenance", "Resilient Plants", "Beginners", "Busy People"],
  },
  {
    slug: "common-houseplant-diseases",
    title: "What's Wrong With My Plant? 5 Common Houseplant Diseases and How to Treat Them",
    description: "Learn to identify and treat the most common plant diseases to keep your indoor jungle healthy.",
    image: "/thrips-damage-leaf.png", // Updated to existing image
    category: "Plant Health",
    date: "April 25, 2024",
    tags: ["Plant Diseases", "Troubleshooting", "Plant Health", "Treatment"],
  },
  {
    slug: "thriving-indoor-jungle",
    title: "The Secret to a Thriving Indoor Jungle: Routine, Not Luck",
    description:
      "Discover how establishing a consistent plant care routine is the real secret to maintaining a lush indoor garden.",
    image: "/man-with-plants.png", // Updated to existing image
    category: "Plant Care",
    date: "April 22, 2024",
    tags: ["Indoor Jungle", "Plant Care", "Routines", "Consistency"],
  },
  {
    slug: "pet-safe-houseplants",
    title: "The Ultimate Guide to Choosing Pet-Safe Houseplants",
    description: "Learn which plants are safe for your furry friends and how to create a pet-friendly indoor garden.",
    image: "/spider-plant-safe.png", // Updated to existing image
    category: "Plant Safety",
    date: "April 19, 2024",
    tags: ["Pet-Safe Plants", "Pet Owners", "Indoor Garden", "Safety"],
  },
  {
    slug: "understanding-plant-lighting",
    title: "Understanding Plant Lighting: How to Match Plants with Your Home's Light Conditions",
    description: "Learn how to assess your home's light conditions and choose plants that will thrive in them.",
    image: "/window-light-directions.png", // Updated to existing image
    category: "Plant Care",
    date: "April 16, 2024",
    tags: ["Plant Lighting", "Light Conditions", "Plant Selection", "Indoor Plants"],
  },
  {
    slug: "common-houseplant-pests",
    title: "How to Spot and Treat the Most Common Houseplant Pests",
    description: "Learn to identify and effectively treat common pests that can damage your indoor plants.",
    image: "/washing-plant-leaves.png", // Updated to existing image
    category: "Plant Health",
    date: "April 13, 2024",
    tags: ["Pests", "Plant Health", "Treatment", "Identification"],
  },
  {
    slug: "reviving-dying-plants",
    title: "How to Revive a Dying Plant: Rescue Techniques That Actually Work",
    description: "Step-by-step guide to bringing your struggling plants back to life with proven rescue methods.",
    image: "/drought-stressed-plant.png", // Updated to existing image
    category: "Plant Care",
    date: "April 10, 2024",
    tags: ["Plant Rescue", "Reviving Plants", "Troubleshooting", "Plant Care"],
  },
  {
    slug: "plants-for-clean-air",
    title: "Top 10 Plants for Cleaner Indoor Air",
    description:
      "Discover which houseplants are most effective at purifying your home's air and improving your well-being.",
    image: "/rubber-plant-air.png", // Updated to existing image
    category: "Plant Science",
    date: "April 7, 2024",
    tags: ["Air Purification", "Indoor Air", "Plant Science", "Health Benefits"],
  },
  {
    slug: "low-light-plants",
    title: "10 Low-Light Plants That Will Thrive in Your Apartment",
    description: "Discover plants that don't need much sunlight but still look amazing.",
    image: "/low-light-plants.png", // Updated to existing image
    category: "Plant Types",
    date: "April 4, 2024",
    tags: ["Low Light", "Apartment Plants", "Indoor Plants", "Plant Types"],
  },
  {
    slug: "plant-diseases",
    title: "How to Diagnose and Treat Common Plant Diseases",
    description: "Learn to identify and fix the most common issues affecting houseplants.",
    image: "/diseased-plant-leaf.png", // Already using existing image
    category: "Plant Health",
    date: "April 1, 2024",
    tags: ["Plant Diseases", "Diagnosis", "Treatment", "Plant Health"],
  },
  {
    slug: "watering-guide",
    title: "The Ultimate Guide to Watering Your Plants",
    description: "Everything you need to know about when and how to water different types of plants.",
    image: "/watering-techniques.png", // Updated to existing image
    category: "Plant Care",
    date: "March 29, 2024",
    tags: ["Watering", "Plant Care", "Techniques", "Plant Types"],
  },
]

export function getRelatedArticles(currentSlug: string, articles: BlogArticle[] = blogArticles) {
  const currentArticle = articles.find((article) => article.slug === currentSlug)

  if (!currentArticle) {
    // If no current article is found, return the first 2 articles (excluding the current one)
    return articles.filter((article) => article.slug !== currentSlug).slice(0, 2)
  }

  // Extract tags from the current article
  const currentTags = currentArticle.tags || []
  const currentCategory = currentArticle.category

  // Filter articles that have at least one tag in common with the current article or same category
  let relatedArticles = articles.filter((article) => {
    if (article.slug === currentSlug) {
      return false // Exclude the current article
    }

    // Check if the article has any tags in common with the current article
    const commonTags = article.tags?.filter((tag) => currentTags.includes(tag)) || []

    // Check if the article has the same category
    const sameCategory = article.category === currentCategory

    return commonTags.length > 0 || sameCategory
  })

  // Sort related articles by the number of common tags
  relatedArticles.sort((a, b) => {
    const aCommonTags = a.tags?.filter((tag) => currentTags.includes(tag))?.length || 0
    const bCommonTags = b.tags?.filter((tag) => currentTags.includes(tag))?.length || 0

    // If same number of common tags, prioritize same category
    if (bCommonTags === aCommonTags) {
      return (b.category === currentCategory ? 1 : 0) - (a.category === currentCategory ? 1 : 0)
    }

    return bCommonTags - aCommonTags // Sort in descending order
  })

  // If we don't have enough related articles by tags/category, add more based on recency
  if (relatedArticles.length < 2) {
    const additionalArticles = articles
      .filter(
        (article) => article.slug !== currentSlug && !relatedArticles.some((related) => related.slug === article.slug),
      )
      .slice(0, 2 - relatedArticles.length)

    relatedArticles = [...relatedArticles, ...additionalArticles]
  }

  return relatedArticles.slice(0, 2) // Always return exactly 2 related articles
}
