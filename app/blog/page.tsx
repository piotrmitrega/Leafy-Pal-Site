"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogArticles } from "@/data/blog-articles"
import { ScrollRestoration } from "@/components/scroll-restoration"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/translations"
import { DownloadModal } from "@/components/download-modal"
import { T } from "@/components/translate"
import { FallbackImage } from "@/components/fallback-image"

export default function BlogPage() {
  const ARTICLES_PER_PAGE = 18
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredArticles, setFilteredArticles] = useState(blogArticles)
  const { language } = useLanguage()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Filter articles based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredArticles(blogArticles)
      return
    }

    const query = searchQuery.toLowerCase().trim()
    const results = blogArticles.filter((article) => {
      // Use direct title and description from the article object
      const title = article.title
      const description = article.description
      const category = article.category
      const tags = article.tags || []

      return (
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        category.toLowerCase().includes(query) ||
        tags.some((tag) => tag.toLowerCase().includes(query))
      )
    })

    setFilteredArticles(results)
    setCurrentPage(1) // Reset to first page when searching
  }, [searchQuery])

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)

  // Get current articles
  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle)

  // Change page
  const paginate = (pageNumber: number) => {
    window.scrollTo(0, 0)
    setCurrentPage(pageNumber)
  }

  // Previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1)
    }
  }

  // Next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1)
    }
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-white">
      <DownloadModal isOpen={isModalOpen} onClose={closeModal} />
      <ScrollRestoration />

      <main className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1F682E]">
            <T text="blog.title" />
          </h1>
          <p className="max-w-[700px] text-[#454238] md:text-xl/relaxed">
            <T text="blog.subtitle" />
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#1F682E] focus:border-[#1F682E] outline-none"
              placeholder={t("blog.searchPlaceholder", language)}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
              >
                <span className="text-xl font-medium">×</span>
              </button>
            )}
          </div>
        </div>

        {/* Search Results Count - Only show when there are results */}
        {searchQuery && filteredArticles.length > 0 && (
          <div className="text-center mb-8">
            <p className="text-[#454238]">
              {t("blog.foundResults", language)
                .replace("{count}", filteredArticles.length.toString())
                .replace("{plural}", filteredArticles.length === 1 ? "" : "s")}
            </p>
          </div>
        )}

        {/* Articles Grid */}
        {currentArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md block"
              >
                <div className="relative h-48 overflow-hidden">
                  <FallbackImage
                    src={post.image || `/placeholder.svg?height=192&width=400&text=${encodeURIComponent(post.title)}`}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    fallbackText={post.title}
                    showLoader={true}
                    articleSlug={post.slug}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#1F682E] font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F682E] mb-2">{post.title}</h3>
                  <p className="text-[#454238] mb-4">{post.description}</p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="text-[#1F682E] font-medium inline-flex items-center">
                    Read More <span className="ml-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-bold text-[#1F682E] mb-2">
              <T text="common.noArticlesFound" />
            </h3>
            <p className="text-[#454238] mb-4">
              <T text="common.tryAdjustingSearch" />
            </p>
            <Button
              onClick={clearSearch}
              className="inline-flex items-center justify-center rounded-md bg-white text-[#1F682E] border border-[#1F682E] px-8 py-3 text-base font-medium hover:bg-[#E9F2C5]/50 transition-colors"
            >
              <T text="common.viewAllArticles" />
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <Button
              variant="outline"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="flex items-center gap-1 border-[#1F682E] text-[#1F682E]"
              aria-label={t("common.previous", language)}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only md:not-sr-only md:inline-block">
                <T text="common.previous" />
              </span>
            </Button>

            <div className="flex items-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <Button
                  key={number}
                  variant={currentPage === number ? "default" : "ghost"}
                  onClick={() => paginate(number)}
                  className={`w-10 h-10 ${
                    currentPage === number ? "bg-[#1F682E] text-white" : "text-[#1F682E] hover:bg-[#1F682E]/10"
                  }`}
                  aria-label={t("common.page", language).replace("{number}", number.toString())}
                  aria-current={currentPage === number ? "page" : undefined}
                >
                  {number}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 border-[#1F682E] text-[#1F682E]"
              aria-label={t("common.next", language)}
            >
              <span className="sr-only md:not-sr-only md:inline-block">
                <T text="common.next" />
              </span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
