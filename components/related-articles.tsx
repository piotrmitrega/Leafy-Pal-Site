"use client"

import { useEffect, useState } from "react"
import { getRelatedArticles } from "@/data/blog-articles"

interface RelatedArticlesProps {
  currentSlug: string
}

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const [relatedArticles, setRelatedArticles] = useState(getRelatedArticles(currentSlug))

  useEffect(() => {
    setRelatedArticles(getRelatedArticles(currentSlug))
  }, [currentSlug])

  return null
}
