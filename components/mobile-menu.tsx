"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/translations"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex-1"></div>
            <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="container flex flex-col gap-6 py-8">
            <Link
              href="/"
              className="text-lg font-medium text-[#454238] hover:text-[#1F682E] transition-colors"
              onClick={closeMenu}
            >
              {t("common.home", language)}
            </Link>
            <Link
              href="/#features"
              className="text-lg font-medium text-[#454238] hover:text-[#1F682E] transition-colors"
              onClick={closeMenu}
            >
              {t("common.features", language)}
            </Link>
            <Link
              href="/#testimonials"
              className="text-lg font-medium text-[#454238] hover:text-[#1F682E] transition-colors"
              onClick={closeMenu}
            >
              {t("common.testimonials", language)}
            </Link>
            <Link
              href="/blog"
              className="text-lg font-medium text-[#454238] hover:text-[#1F682E] transition-colors"
              onClick={closeMenu}
            >
              {t("common.blog", language)}
            </Link>
            <Link
              href="/#faq"
              className="text-lg font-medium text-[#454238] hover:text-[#1F682E] transition-colors"
              onClick={closeMenu}
            >
              {t("common.faq", language)}
            </Link>
            <Link
              href="/#about"
              className="text-lg font-medium text-[#454238] hover:text-[#1F682E] transition-colors"
              onClick={closeMenu}
            >
              {t("common.aboutUs", language)}
            </Link>

            <div className="mt-4">
              <Button className="w-full bg-[#1F682E] hover:bg-[#1F682E]/90" onClick={closeMenu}>
                {t("common.tryForFree", language)}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
