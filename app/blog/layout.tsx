import type React from "react"
import { SiteLayout } from "@/components/site-layout"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  // Show header to have consistent navigation across all blog pages
  return <SiteLayout showHeader={true}>{children}</SiteLayout>
}
