"use client"

import { Facebook, Twitter, Linkedin, Mail, LinkIcon } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/translations"

interface ShareButtonsProps {
  title: string
  url?: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const { language } = useLanguage()

  // Use the provided URL or get the current URL if we're in the browser
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-[#454238]">{t("common.share", language)}:</span>
      <div className="flex gap-2">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter size={16} />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook size={16} />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={16} />
        </a>
        <a
          href={`mailto:?subject=${encodeURIComponent(title)}&body=Check out this article: ${encodeURIComponent(shareUrl)}`}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
          aria-label="Share via Email"
        >
          <Mail size={16} />
        </a>
        <button
          onClick={handleCopyLink}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors relative"
          aria-label="Copy Link"
        >
          <LinkIcon size={16} />
          {copied && (
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
              Copied!
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
