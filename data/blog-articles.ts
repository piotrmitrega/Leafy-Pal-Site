export interface BlogArticle {
  slug: string;
  title: string; // Original English title (for fallback)
  description: string; // Original English description (for fallback)
  image: string;
  category: string;
  date: string;
  tags?: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "plant-health-diagnostics",
    title: "Plant Health Diagnostics: Complete Guide to Reading Plant Signals",
    description:
      "Learn to interpret your plants' visual cues to diagnose problems and provide timely, effective care.",
    image: "./plant-diagnosis.png", // Updated to existing image
    category: "Plant Health",
    date: "May 15, 2024",
    tags: ["Plant Health", "Diagnostics", "Troubleshooting", "Plant Care"],
  },
  {
    slug: "temperature-humidity-houseplants",
    title:
      "The Right Climate: Understanding Temperature & Humidity for Houseplants",
    description:
      "Create the ideal indoor climate for your plants by mastering temperature and humidity requirements.",
    image: "./humidity-tray.png", // Updated to existing image
    category: "Plant Care",
    date: "May 14, 2024",
    tags: ["Temperature", "Humidity", "Climate", "Indoor Plants"],
  },
  {
    slug: "pruning-maintenance",
    title: "Shaping Beauty and Health: The Art of Pruning and Maintenance",
    description:
      "Master the techniques of pruning and regular maintenance to keep your plants healthy and beautiful.",
    image: "./pruning-maintenance-hero.png", // Updated to existing image
    category: "Plant Care",
    date: "May 13, 2024",
    tags: ["Pruning", "Maintenance", "Plant Care", "Growth"],
  },
  {
    slug: "principles-fertilization",
    title: "Nourishing Growth: The Principles of Fertilization",
    description:
      "Understand the science of plant nutrition and learn how to properly fertilize different types of houseplants.",
    image: "./fertilization-principles-hero.png", // Updated to existing image
    category: "Plant Care",
    date: "May 11, 2024",
    tags: ["Fertilization", "Plant Nutrition", "Growth", "Houseplants"],
  },
  {
    slug: "watering-indoor-plants",
    title: "The Essential Guide to Watering Your Indoor Plants",
    description:
      "Learn the art of proper watering techniques for different plant types to keep your indoor garden thriving.",
    image: "./watering-houseplants-technique.png", // Updated to existing image
    category: "Plant Care",
    date: "May 10, 2024",
    tags: ["Watering", "Indoor Plants", "Plant Care", "Techniques"],
  },
  {
    slug: "plant-light-requirements",
    title: "Illuminating Growth: Understanding Plant Light Requirements",
    description:
      "Discover how to provide the optimal light conditions for your houseplants based on their specific needs.",
    image: "./plant-sunlight.png", // Updated to existing image
    category: "Plant Care",
    date: "May 10, 2024",
    tags: ["Light", "Plant Growth", "Indoor Plants", "Care Tips"],
  },
  {
    slug: "soil-and-repotting",
    title: "Grounded in Growth: Understanding Soil and Repotting",
    description:
      "Master the essentials of soil selection and repotting techniques to give your plants a strong foundation.",
    image: "./repotting-process.png", // Updated to existing image
    category: "Plant Care",
    date: "May 10, 2024",
    tags: ["Soil", "Repotting", "Plant Growth", "Potting Mix"],
  },
  {
    slug: "plant-air-purification",
    title: "The Science Behind Plant Air Purification",
    description:
      "Explore how plants improve indoor air quality by removing toxins and releasing oxygen.",
    image: "./plant-air-purification-hero.png", // Updated to existing image
    category: "Plant Science",
    date: "May 8, 2024",
    tags: ["Air Purification", "Indoor Air Quality", "Plant Science", "Health"],
  },
  {
    slug: "designing-home-with-plants",
    title: "Designing Your Home with Plants: Aesthetic and Functional Tips",
    description:
      "Discover how to enhance your home's aesthetics and functionality with strategic plant placement.",
    image: "./designing-home-plants-hero.png", // Updated to existing image
    category: "Home Design",
    date: "May 8, 2024",
    tags: ["Home Design", "Interior Decor", "Plant Placement", "Aesthetics"],
  },
  {
    slug: "plant-toxicity-safety",
    title: "Understanding Plant Toxicity: Keeping Pets and Children Safe",
    description:
      "Learn which plants are toxic and how to create a safe environment for your family and pets.",
    image: "./plant-toxicity-hero.png", // Updated to existing image
    category: "Plant Safety",
    date: "May 8, 2024",
    tags: ["Plant Toxicity", "Pet Safety", "Child Safety", "Indoor Plants"],
  },
  {
    slug: "plant-care-routine-busy-individuals",
    title: "Creating a Plant Care Routine for Busy Individuals",
    description:
      "Learn how to maintain healthy plants even with a hectic schedule through structured routines and smart tools.",
    image: "./plant-care-busy.png", // Updated to existing image
    category: "Plant Care",
    date: "May 5, 2024",
    tags: ["Plant Care", "Routines", "Time Management", "Busy Lifestyle"],
  },
  {
    slug: "allergy-friendly-houseplants",
    title: "Top 10 Allergy-Friendly Houseplants",
    description:
      "Discover plants that purify the air without triggering allergies for a healthier home environment.",
    image: "./allergy-friendly-plants-hero.png", // Updated to existing image
    category: "Plant Health",
    date: "May 3, 2024",
    tags: ["Allergy-Friendly", "Houseplants", "Air Quality", "Health"],
  },
  {
    slug: "common-houseplant-diseases",
    title:
      "What's Wrong With My Plant? 5 Common Houseplant Diseases and How to Treat Them",
    description:
      "Learn to identify and treat the most common plant diseases to keep your indoor jungle healthy.",
    image: "./thrips-damage-leaf.png", // Updated to existing image
    category: "Plant Health",
    date: "April 25, 2024",
    tags: ["Plant Diseases", "Troubleshooting", "Plant Health", "Treatment"],
  },
  {
    slug: "pet-safe-houseplants",
    title: "The Ultimate Guide to Choosing Pet-Safe Houseplants",
    description:
      "Learn which plants are safe for your furry friends and how to create a pet-friendly indoor garden.",
    image: "./pet-safe-houseplants.png", // Updated to existing image
    category: "Plant Safety",
    date: "April 19, 2024",
    tags: ["Pet-Safe Plants", "Pet Owners", "Indoor Garden", "Safety"],
  },
  {
    slug: "understanding-plant-lighting",
    title: "Understanding Plant Lighting: A Complete Guide",
    description:
      "Learn how to assess your home's light conditions and choose plants that will thrive in them.",
    image: "./window-light-directions.png", // Updated to existing image
    category: "Plant Care",
    date: "April 16, 2024",
    tags: [
      "Plant Lighting",
      "Light Conditions",
      "Plant Selection",
      "Indoor Plants",
    ],
  },
  {
    slug: "common-houseplant-pests",
    title: "How to Spot and Treat the Most Common Houseplant Pests",
    description:
      "Learn to identify and effectively treat common pests that can damage your indoor plants.",
    image: "./mealybugs-on-stem.png", // Updated to existing image
    category: "Plant Health",
    date: "April 13, 2024",
    tags: ["Pests", "Plant Health", "Treatment", "Identification"],
  },
  {
    slug: "low-light-plants",
    title: "10 Low-Light Plants That Will Thrive in Your Apartment",
    description:
      "Discover plants that don't need much sunlight but still look amazing.",
    image: "./low-light-houseplants.png", // Updated to existing image
    category: "Plant Types",
    date: "April 4, 2024",
    tags: ["Low Light", "Apartment Plants", "Indoor Plants", "Plant Types"],
  },
];

export function getRelatedArticles(
  currentSlug: string,
  articles: BlogArticle[] = blogArticles
) {
  const currentArticle = articles.find(
    (article) => article.slug === currentSlug
  );

  if (!currentArticle) {
    // If no current article is found, return the first 2 articles (excluding the current one)
    return articles
      .filter((article) => article.slug !== currentSlug)
      .slice(0, 2);
  }

  // Extract tags from the current article
  const currentTags = currentArticle.tags || [];
  const currentCategory = currentArticle.category;

  // Filter articles that have at least one tag in common with the current article or same category
  let relatedArticles = articles.filter((article) => {
    if (article.slug === currentSlug) {
      return false; // Exclude the current article
    }

    // Check if the article has any tags in common with the current article
    const commonTags =
      article.tags?.filter((tag) => currentTags.includes(tag)) || [];

    // Check if the article has the same category
    const sameCategory = article.category === currentCategory;

    return commonTags.length > 0 || sameCategory;
  });

  // Sort related articles by the number of common tags
  relatedArticles.sort((a, b) => {
    const aCommonTags =
      a.tags?.filter((tag) => currentTags.includes(tag))?.length || 0;
    const bCommonTags =
      b.tags?.filter((tag) => currentTags.includes(tag))?.length || 0;

    // If same number of common tags, prioritize same category
    if (bCommonTags === aCommonTags) {
      return (
        (b.category === currentCategory ? 1 : 0) -
        (a.category === currentCategory ? 1 : 0)
      );
    }

    return bCommonTags - aCommonTags; // Sort in descending order
  });

  // If we don't have enough related articles by tags/category, add more based on recency
  if (relatedArticles.length < 2) {
    const additionalArticles = articles
      .filter(
        (article) =>
          article.slug !== currentSlug &&
          !relatedArticles.some((related) => related.slug === article.slug)
      )
      .slice(0, 2 - relatedArticles.length);

    relatedArticles = [...relatedArticles, ...additionalArticles];
  }

  return relatedArticles.slice(0, 2); // Always return exactly 2 related articles
}
