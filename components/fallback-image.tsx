"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { blogArticles } from "@/data/blog-articles"

interface FallbackImageProps extends Omit<ImageProps, "onError" | "onLoad"> {
  fallbackSrc?: string
  fallbackText?: string
  showLoader?: boolean
  articleSlug?: string
}

export function FallbackImage({
  src,
  alt,
  fallbackSrc,
  fallbackText,
  showLoader = true,
  className,
  articleSlug,
  ...props
}: FallbackImageProps) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  // Generate a fallback URL based on the specific article
  const getArticleFallbackImage = () => {
    // If articleSlug is provided, use the image from blog-articles.ts
    if (articleSlug) {
      const article = blogArticles.find((article) => article.slug === articleSlug)
      if (article) {
        return article.image
      }
    }

    // Extract article identifier from alt text or fallbackText
    const text = fallbackText || alt || ""
    const lowerText = text.toLowerCase()

    // Map specific articles to unique fallback images
    if (lowerText.includes("plant health") || lowerText.includes("diagnostics")) {
      return "/plant-diagnosis.png"
    } else if (lowerText.includes("temperature") || lowerText.includes("humidity")) {
      return "/humidity-tray.png"
    } else if (lowerText.includes("pruning") || lowerText.includes("maintenance")) {
      return "/pruning-pothos.png"
    } else if (lowerText.includes("pest control")) {
      return "/mealybugs-on-stem.png"
    } else if (lowerText.includes("fertilization") || lowerText.includes("principles")) {
      return "/general-purpose-potting-mix.png"
    } else if (lowerText.includes("watering indoor")) {
      return "/watering-plants.png"
    } else if (lowerText.includes("plant light") || lowerText.includes("illuminating")) {
      return "/direct-light-plants.png"
    } else if (lowerText.includes("soil") || lowerText.includes("repotting")) {
      return "/root-bound-plant.png"
    } else if (lowerText.includes("air purification")) {
      return "/plant-phytoremediation.png"
    } else if (lowerText.includes("designing home")) {
      return "/vertical-garden-design.png"
    } else if (lowerText.includes("toxicity") || lowerText.includes("safety")) {
      return "/philodendron-toxic.png"
    } else if (lowerText.includes("care routine") || lowerText.includes("busy")) {
      return "/houseplant-pruning-calendar.png"
    } else if (lowerText.includes("allergy-friendly")) {
      return "/peace-lily.png"
    } else if (lowerText.includes("ultimate guide")) {
      return "/indoor-plants-care-guide.png"
    } else if (lowerText.includes("thrive on neglect")) {
      return "/snake-plant.png"
    } else if (lowerText.includes("common houseplant diseases")) {
      return "/thrips-damage-leaf.png"
    } else if (lowerText.includes("thriving indoor jungle")) {
      return "/man-with-plants.png"
    } else if (lowerText.includes("pet-safe")) {
      return "/spider-plant-safe.png"
    } else if (lowerText.includes("understanding plant lighting")) {
      return "/window-light-directions.png"
    } else if (lowerText.includes("common houseplant pests")) {
      return "/washing-plant-leaves.png"
    } else if (lowerText.includes("reviving dying")) {
      return "/drought-stressed-plant.png"
    } else if (lowerText.includes("plants for clean air")) {
      return "/rubber-plant-air.png"
    } else if (lowerText.includes("low-light plants")) {
      return "/low-light-plants.png"
    } else if (lowerText.includes("plant diseases")) {
      return "/diseased-plant-leaf.png"
    } else if (lowerText.includes("watering guide")) {
      return "/watering-techniques.png"
    }

    // Default fallback
    return "/plant-glamour.png"
  }

  // Use the article-specific fallback or the provided fallbackSrc
  const generatedFallbackSrc = fallbackSrc || getArticleFallbackImage()

  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton */}
      {loading && showLoader && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 border-2 border-gray-400 border-t-green-600 rounded-full animate-spin"></div>
            <span className="text-xs text-gray-400">Loading image...</span>
          </div>
        </div>
      )}

      {/* Actual image */}
      <Image
        src={error ? generatedFallbackSrc : src}
        alt={alt}
        className={`transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"} ${className || ""}`}
        onError={() => {
          console.log(`Image failed to load: ${src}, using fallback: ${generatedFallbackSrc}`)
          setError(true)
        }}
        onLoad={() => setLoading(false)}
        fill={props.fill}
        sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        {...props}
      />
    </div>
  )
}
