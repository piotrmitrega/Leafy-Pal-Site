"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { t } from "@/translations"

interface SiteLayoutProps {
  children: React.ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

export function SiteLayout({ children, showHeader = true, showFooter = true }: SiteLayoutProps) {
  const { language } = useLanguage()
  const pathname = usePathname()

  // Update the HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="flex min-h-screen flex-col">
      {showHeader && (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="h-10 w-10 relative">
                <Image src="/logo.svg" alt={t("common.logoAlt", language)} fill className="object-contain" />
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className={`text-[#454238] hover:text-[#1F682E] transition-colors ${pathname === "/" ? "text-[#1F682E] font-medium" : ""}`}
              >
                {t("common.home", language)}
              </Link>
              <Link href="/#features" className="text-[#454238] hover:text-[#1F682E] transition-colors">
                {t("common.features", language)}
              </Link>
              <Link href="/#testimonials" className="text-[#454238] hover:text-[#1F682E] transition-colors">
                {t("common.testimonials", language)}
              </Link>
              <Link
                href="/blog"
                className={`text-[#454238] hover:text-[#1F682E] transition-colors ${pathname.startsWith("/blog") ? "text-[#1F682E] font-medium" : ""}`}
              >
                {t("common.blog", language)}
              </Link>
              <Link href="/#faq" className="text-[#454238] hover:text-[#1F682E] transition-colors">
                {t("common.faq", language)}
              </Link>
              <Link href="/#about" className="text-[#454238] hover:text-[#1F682E] transition-colors">
                {t("common.aboutUs", language)}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => (window.location.href = "/#download")}
                className="hidden md:flex bg-[#1F682E] hover:bg-[#1F682E]/90"
              >
                {t("common.tryForFree", language)}
              </Button>
              <MobileMenu />
            </div>
          </div>
        </header>
      )}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  )
}
