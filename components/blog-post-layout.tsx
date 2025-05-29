"use client"

import type React from "react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ShareButtons } from "@/components/share-buttons"
import { ScrollRestoration } from "@/components/scroll-restoration"
import { FallbackImage } from "@/components/fallback-image"
import Image from "next/image"

interface BlogPostLayoutProps {
  slug: string
  title: React.ReactNode
  description?: React.ReactNode
  image: string
  category: React.ReactNode
  date: string
  children: React.ReactNode
  tags?: string[]
  heroAlt?: React.ReactNode | string
}

// Export both as default and named export to support both import styles
export default function BlogPostLayout({
  slug,
  title,
  description,
  image,
  category,
  date,
  children,
  tags = [],
  heroAlt,
}: BlogPostLayoutProps) {
  const { language } = useLanguage()

  return (
    <>
      <ScrollRestoration />

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center text-[#1F682E] hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Blog</span>
          </Link>

          <article className="prose prose-base max-w-none blog-article">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1F682E]">{title}</h1>

            {description && <p className="text-lg text-gray-600 mt-2">{description}</p>}

            <div className="flex flex-wrap items-center gap-4 mt-4 mb-8">
              <div className="text-sm text-gray-500">{date}</div>
              <div className="text-sm bg-[#E6F2E9] text-[#1F682E] px-3 py-1 rounded-full">{category}</div>
              <ShareButtons title={typeof title === "string" ? title : "Blog Post"} url={`/blog/${slug}`} />
            </div>

            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
              <FallbackImage
                src={image}
                alt={typeof heroAlt === "string" ? heroAlt : "Blog post image"}
                fill
                className="object-cover"
                priority
                fallbackText="Blog post image"
              />
            </div>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="text-base leading-relaxed text-[#454238] space-y-6">{children}</div>
          </article>
        </div>
      </div>

      {/* Download CTA Section */}
      <section className="w-full py-12 pt-24 pb-0 bg-[#1F682E] overflow-hidden relative">
        <div className="container px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 pb-12 md:pb-24 lg:pb-32">
              <div className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm text-white backdrop-blur-sm">
                App Available Now
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                Start Tracking Your Plants Today
              </h2>
              <p className="text-white/90 text-lg max-w-md">
                Join thousands of plant parents who use Leafy Pal to keep their green friends healthy and thriving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/80 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  Download App Store
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/80 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  Download Google Play
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-HEUcs7l7fCRu0tEeM1qb5ZYLQ6cKGw.png"
                  alt="Leafy Pal App Interface showing plant identification and health monitoring"
                  width={600}
                  height={500}
                  className="object-contain"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Also export as named export
export { BlogPostLayout }
