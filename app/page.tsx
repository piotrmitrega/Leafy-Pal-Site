"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { MobileMenu } from "@/components/mobile-menu";
import { DownloadModal } from "@/components/download-modal";
import { useLanguage } from "@/contexts/language-context";
import { t } from "@/translations";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Default first item open
  const { language } = useLanguage();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: t("home.faq.items.free.question", language),
      answer: t("home.faq.items.free.answer", language),
    },
    {
      question: t("home.faq.items.accuracy.question", language),
      answer: t("home.faq.items.accuracy.answer", language),
    },
    {
      question: t("home.faq.items.offline.question", language),
      answer: t("home.faq.items.offline.answer", language),
    },
    {
      question: t("home.faq.items.reminders.question", language),
      answer: t("home.faq.items.reminders.answer", language),
    },
    {
      question: t("home.faq.items.premium.question", language),
      answer: t("home.faq.items.premium.answer", language),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <DownloadModal isOpen={isModalOpen} onClose={closeModal} />

      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-ZhehBXN3a4F0fbYXfRgUs4Nizib59J.svg"
                alt="Leafy Pal Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-[#454238] hover:text-[#1F682E] transition-colors"
            >
              {t("common.home", language)}
            </Link>
            <Link
              href="#features"
              className="text-[#454238] hover:text-[#1F682E] transition-colors"
            >
              {t("common.features", language)}
            </Link>
            <Link
              href="#testimonials"
              className="text-[#454238] hover:text-[#1F682E] transition-colors"
            >
              {t("common.testimonials", language)}
            </Link>
            <Link
              href="/blog"
              className="text-[#454238] hover:text-[#1F682E] transition-colors"
            >
              {t("common.blog", language)}
            </Link>
            <Link
              href="#faq"
              className="text-[#454238] hover:text-[#1F682E] transition-colors"
            >
              {t("common.faq", language)}
            </Link>
            <Link
              href="#about"
              className="text-[#454238] hover:text-[#1F682E] transition-colors"
            >
              {t("common.aboutUs", language)}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              onClick={openModal}
              className="hidden md:flex bg-[#1F682E] hover:bg-[#1F682E]/90"
            >
              {t("common.tryForFree", language)}
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-[#f8f7f2]">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white relative overflow-hidden">
                    <Image
                      src="/woman-portrait.png"
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white relative overflow-hidden">
                    <Image
                      src="/thoughtful-man-portrait.png"
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white relative overflow-hidden">
                    <Image
                      src="/diverse-woman-smiling.png"
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="text-sm text-[#454238] whitespace-nowrap flex items-center gap-1">
                  {t("home.hero.userCount", language)}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#F0C14B"
                    stroke="#F0C14B"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F682E] max-w-4xl mb-6">
                <span className="relative inline-block">
                  <span className="relative z-10">
                    {t("home.hero.title", language)}
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-[#E9F2C5] -z-10"></span>
                </span>
              </h1>

              <p className="text-lg text-[#454238] max-w-2xl mb-8">
                {t("home.hero.subtitle", language)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center rounded-md bg-[#1F682E] text-white px-8 py-3 text-base font-medium shadow-sm hover:bg-[#1F682E]/90 transition-colors"
                >
                  {t("common.getTheApp", language)}
                </button>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-md bg-white text-[#1F682E] border border-[#1F682E] px-8 py-3 text-base font-medium hover:bg-[#E9F2C5]/50 transition-colors"
                >
                  {t("common.discoverFeatures", language)}
                </Link>
              </div>
            </div>

            <div className="relative mt-12 mx-auto max-w-5xl">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo%20hero-tsWQy2tB6VqLt8DgrSLtuhduqsiUha.png"
                  alt="Woman caring for a monstera plant"
                  width={1000}
                  height={600}
                  className="object-cover w-full"
                  priority
                />

                {/* Floating UI elements */}
                <div className="absolute top-12 left-6 md:left-12 bg-white rounded-lg p-4 shadow-lg max-w-[280px] md:max-w-[320px] w-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#E9F2C5] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#1F682E]"
                      >
                        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#1F682E]">
                      {t("home.wateringReminders.title", language)}
                    </h3>
                  </div>
                  <p className="text-sm text-[#454238] break-words hyphens-auto">
                    {t("home.wateringReminders.description", language)}
                  </p>
                </div>

                <div className="absolute bottom-12 right-6 md:right-12 bg-white rounded-lg p-4 shadow-lg max-w-[220px]">
                  <div className="text-xs text-[#454238] mb-1">
                    {t("home.plantDiagnosis.title", language)}
                  </div>
                  <h3 className="font-bold text-[#1F682E] mb-2">
                    Monstera Deliciosa
                  </h3>
                  <div className="text-sm text-[#454238]">
                    {t("home.plantDiagnosis.healthStatus", language)}
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="w-6 h-6 rounded-md bg-[#E9F2C5]"></div>
                    <div className="w-6 h-6 rounded-md bg-[#1F682E]"></div>
                    <div className="w-6 h-6 rounded-md bg-[#454238]"></div>
                    <span className="text-xs text-[#454238] ml-1">+2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1F682E]">
                    {t("home.features.title", language)}
                  </h2>
                  <p className="text-lg text-[#454238] max-w-[600px]">
                    {t("home.features.subtitle", language)}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#E9F2C5] p-3 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#1F682E]"
                      >
                        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        {t("home.features.feature1.title", language)}
                      </h3>
                      <p className="text-[#454238]">
                        {t("home.features.feature1.description", language)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#E9F2C5] p-3 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#1F682E]"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        {t("home.features.feature2.title", language)}
                      </h3>
                      <p className="text-[#454238]">
                        {t("home.features.feature2.description", language)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#E9F2C5] p-3 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#1F682E]"
                      >
                        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                        <path d="M12 3v6"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        {t("home.features.feature3.title", language)}
                      </h3>
                      <p className="text-[#454238]">
                        {t("home.features.feature3.description", language)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#E9F2C5] p-3 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#1F682E]"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        {t("home.features.feature4.title", language)}
                      </h3>
                      <p className="text-[#454238]">
                        {t("home.features.feature4.description", language)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#1F682E]">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#F0C14B"
                        stroke="#F0C14B"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <span className="font-medium">
                    {t("home.features.userCount", language)}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://apps.apple.com/app/id6744468121"
                    className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 384 512"
                      fill="currentColor"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    {t("common.downloadAppStore", language)}
                  </Link>
                  {/* <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>
                    {t("common.downloadGooglePlay", language)}
                  </Link> */}
                </div>
              </div>

              <div className="relative">
                <div
                  className="relative mx-auto w-full max-w-[400px]"
                  style={{ boxShadow: "none" }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2014-cykXE0XWBwpNl1GhJdFwyNQVkLLCTx.png"
                    alt="Leafy Pal App Interface"
                    width={400}
                    height={800}
                    className="rounded-[32px]"
                    style={{
                      background: "transparent",
                      boxShadow: "none",
                    }}
                  />

                  <div className="absolute -bottom-8 -left-8 w-[180px] h-[180px] bg-white rounded-2xl shadow-lg p-4 rotate-3">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src="/sad-plant.png"
                        alt="Sad plant needing care"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="absolute -top-6 -right-6 w-[160px] h-[160px] bg-white rounded-2xl shadow-lg p-4 -rotate-6">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src="/happy-plant.png"
                        alt="Happy healthy plant"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator Line */}
        <div className="w-full px-0">
          <div className="h-px bg-gray-200"></div>
        </div>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1F682E]">
                {t("home.testimonials.title", language)}
              </h2>
              <p className="max-w-[700px] text-[#454238] md:text-xl/relaxed">
                {t("home.testimonials.subtitle", language)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-[#454238] mb-6">
                  {t("testimonials.sarah.text", language)}
                </p>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#F0C14B"
                      stroke="#F0C14B"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#1F682E]">
                      {t("testimonials.sarah.name", language)}
                    </p>
                    <p className="text-sm text-[#454238]">
                      {t("testimonials.sarah.role", language)}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1F682E] flex items-center justify-center text-white font-bold overflow-hidden">
                    <Image
                      src="/woman-portrait.png"
                      alt="Sarah K."
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-[#454238] mb-6">
                  {t("testimonials.michael.text", language)}
                </p>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#F0C14B"
                      stroke="#F0C14B"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#1F682E]">
                      {t("testimonials.michael.name", language)}
                    </p>
                    <p className="text-sm text-[#454238]">
                      {t("testimonials.michael.role", language)}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1F682E] flex items-center justify-center text-white font-bold overflow-hidden">
                    <Image
                      src="/thoughtful-man-portrait.png"
                      alt="Michael T."
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-[#454238] mb-6">
                  {t("testimonials.jessica.text", language)}
                </p>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#F0C14B"
                      stroke="#F0C14B"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#1F682E]">
                      {t("testimonials.jessica.name", language)}
                    </p>
                    <p className="text-sm text-[#454238]">
                      {t("testimonials.jessica.role", language)}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1F682E] flex items-center justify-center text-white font-bold overflow-hidden">
                    <Image
                      src="/diverse-woman-smiling.png"
                      alt="Jessica L."
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-[#454238] mb-6">
                  {t("testimonials.alex.text", language)}
                </p>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#F0C14B"
                      stroke="#F0C14B"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#1F682E]">
                      {t("testimonials.alex.name", language)}
                    </p>
                    <p className="text-sm text-[#454238]">
                      {t("testimonials.alex.role", language)}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1F682E] flex items-center justify-center text-white font-bold overflow-hidden">
                    <Image
                      src="/thoughtful-artist.png"
                      alt="Alex N."
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-[#454238] mb-6">
                  {t("testimonials.linda.text", language)}
                </p>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#F0C14B"
                      stroke="#F0C14B"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#1F682E]">
                      {t("testimonials.linda.name", language)}
                    </p>
                    <p className="text-sm text-[#454238]">
                      {t("testimonials.linda.role", language)}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1F682E] flex items-center justify-center text-white font-bold overflow-hidden">
                    <Image
                      src="/diverse-woman-smiling.png"
                      alt="Linda P."
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-[#454238] mb-6">
                  {t("testimonials.david.text", language)}
                </p>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#F0C14B"
                      stroke="#F0C14B"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#1F682E]">
                      {t("testimonials.david.name", language)}
                    </p>
                    <p className="text-sm text-[#454238]">
                      {t("testimonials.david.role", language)}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1F682E] flex items-center justify-center text-white font-bold overflow-hidden">
                    <Image
                      src="/man-with-plants.png"
                      alt="David R."
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1F682E]">
                {t("home.blog.title", language)}
              </h2>
              <p className="max-w-[700px] text-[#454238] md:text-xl">
                {t("home.blog.subtitle", language)}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href="/blog/watering-indoor-plants"
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/watering-houseplants-technique.png"
                    alt="The Essential Guide to Watering Your Indoor Plants"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#454238] mb-2">May 10, 2024</p>
                  <h3 className="text-lg font-bold text-[#1F682E] mb-2">
                    The Essential Guide to Watering Your Indoor Plants
                  </h3>
                  <p className="text-[#454238] mb-4 line-clamp-2">
                    Learn the art of proper watering techniques for different
                    plant types to keep your indoor garden thriving.
                  </p>
                  <span className="text-[#1F682E] font-medium inline-flex items-center">
                    {t("blog.readMore", language)}{" "}
                    <span className="ml-1">→</span>
                  </span>
                </div>
              </Link>
              <Link
                href="/blog/plant-light-requirements"
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/plant-sunlight.png"
                    alt="Illuminating Growth: Understanding Plant Light Requirements"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#454238] mb-2">May 10, 2024</p>
                  <h3 className="text-lg font-bold text-[#1F682E] mb-2">
                    Illuminating Growth: Understanding Plant Light Requirements
                  </h3>
                  <p className="text-[#454238] mb-4 line-clamp-2">
                    Discover how to provide the optimal light conditions for
                    your houseplants based on their specific needs.
                  </p>
                  <span className="text-[#1F682E] font-medium inline-flex items-center">
                    {t("blog.readMore", language)}{" "}
                    <span className="ml-1">→</span>
                  </span>
                </div>
              </Link>
              <Link
                href="/blog/soil-and-repotting"
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/soil-and-repotting-hero.png"
                    alt="Grounded in Growth: Understanding Soil and Repotting"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#454238] mb-2">May 10, 2024</p>
                  <h3 className="text-lg font-bold text-[#1F682E] mb-2">
                    Grounded in Growth: Understanding Soil and Repotting
                  </h3>
                  <p className="text-[#454238] mb-4 line-clamp-2">
                    Master the essentials of soil selection and repotting
                    techniques to give your plants a strong foundation.
                  </p>
                  <span className="text-[#1F682E] font-medium inline-flex items-center">
                    {t("blog.readMore", language)}{" "}
                    <span className="ml-1">→</span>
                  </span>
                </div>
              </Link>
              <Link
                href="/blog/plant-air-purification"
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/plant-air-purification-hero.png"
                    alt="The Science Behind Plant Air Purification"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#454238] mb-2">May 8, 2024</p>
                  <h3 className="text-lg font-bold text-[#1F682E] mb-2">
                    The Science Behind Plant Air Purification
                  </h3>
                  <p className="text-[#454238] mb-4 line-clamp-2">
                    Learn how plants can improve indoor air quality by removing
                    toxins and releasing oxygen.
                  </p>
                  <span className="text-[#1F682E] font-medium inline-flex items-center">
                    {t("blog.readMore", language)}{" "}
                    <span className="ml-1">→</span>
                  </span>
                </div>
              </Link>
              <Link
                href="/blog/designing-home-with-plants"
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/designing-home-plants-hero.png"
                    alt="Designing Your Home with Plants"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#454238] mb-2">May 8, 2024</p>
                  <h3 className="text-lg font-bold text-[#1F682E] mb-2">
                    Designing Your Home with Plants: Aesthetic and Functional
                    Tips
                  </h3>
                  <p className="text-[#454238] mb-4 line-clamp-2">
                    Discover how to enhance your home aesthetics with plants
                    while serving functional purposes.
                  </p>
                  <span className="text-[#1F682E] font-medium inline-flex items-center">
                    {t("blog.readMore", language)}{" "}
                    <span className="ml-1">→</span>
                  </span>
                </div>
              </Link>
              <Link
                href="/blog/plant-toxicity-safety"
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/plant-toxicity-hero.png"
                    alt="Understanding Plant Toxicity"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#454238] mb-2">May 8, 2024</p>
                  <h3 className="text-lg font-bold text-[#1F682E] mb-2">
                    Understanding Plant Toxicity: Keeping Pets and Children Safe
                  </h3>
                  <p className="text-[#454238] mb-4 line-clamp-2">
                    Learn about common toxic plants and safe alternatives to
                    keep your household members safe.
                  </p>
                  <span className="text-[#1F682E] font-medium inline-flex items-center">
                    {t("blog.readMore", language)}{" "}
                    <span className="ml-1">→</span>
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex justify-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-md border border-[#1F682E] bg-white px-4 py-2 text-sm font-medium text-[#1F682E] hover:bg-[#f8f9fa] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F682E] focus-visible:ring-offset-2"
              >
                {t("common.viewAllArticles", language)}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#E9F2C5] relative"
        >
          <div className="absolute inset-0 w-full h-full opacity-5 z-0">
            <Image
              src="/minimalist-leaf-pattern.jpg"
              alt=""
              fill
              className="object-cover"
              priority={false}
              aria-hidden="true"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1F682E]">
                {t("home.faq.title", language)}
              </h2>
              <p className="max-w-[700px] text-[#454238] md:text-xl/relaxed">
                {t("home.faq.subtitle", language)}
              </p>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white overflow-hidden"
                >
                  <button
                    className="flex w-full items-center justify-between p-4 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <h3 className="text-lg font-medium text-[#1F682E]">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-[#1F682E] transition-transform duration-200 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-content-${index}`}
                    className={`px-4 overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-96 pb-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-[#454238]">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1F682E]">
                  {t("home.about.title", language)}
                </h2>
                <p className="text-[#454238] md:text-xl/relaxed">
                  {t("home.about.description1", language)}
                </p>
                <p className="text-[#454238]">
                  {t("home.about.description2", language)}
                </p>
                <p className="text-[#454238]">
                  {t("home.about.description3", language)}
                </p>
              </div>
              <div className="relative mx-auto lg:ml-auto">
                <Image
                  src="/leafy-pal-mascot.png"
                  alt="Leafy Pal Mascot"
                  width={500}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="w-full py-12 pt-24 pb-0 bg-[#1F682E] overflow-hidden relative">
          <div className="container px-4 md:px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 pb-12 md:pb-24 lg:pb-32">
                <div className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm text-white backdrop-blur-sm">
                  {t("common.appReleaseNow", language)}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                  {t("home.cta.title", language)}
                </h2>
                <p className="text-white/90 text-lg max-w-md">
                  {t("home.cta.subtitle", language)}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="https://apps.apple.com/app/id6744468121"
                    className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/80 transition-colors"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 384 512"
                      fill="currentColor"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    {t("common.downloadAppStore", language)}
                  </Link>
                  {/* <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/80 transition-colors"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>
                    {t("common.downloadGooglePlay", language)}
                  </Link> */}
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
      </main>

      <footer className="w-full border-t bg-white">
        <div className="container px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 relative">
                  <Image
                    src="/leafy-pal-mascot.png"
                    alt="Leafy Pal Mascot"
                    width={500}
                    height={400}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
              <p className="text-[#454238] mb-4 max-w-sm">
                {t("footer.description", language)}
              </p>
              {/* App store buttons have been removed from here */}
            </div>

            <div>
              <h3 className="font-medium text-[#1F682E] mb-4">
                {t("footer.company", language)}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#about"
                    className="text-[#454238] hover:text-[#1F682E] transition-colors"
                  >
                    {t("common.aboutUs", language)}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#454238] hover:text-[#1F682E] transition-colors"
                  >
                    {t("footer.contact", language)}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-[#1F682E] mb-4">
                {t("footer.resources", language)}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-[#454238] hover:text-[#1F682E] transition-colors"
                  >
                    {t("common.blog", language)}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="text-[#454238] hover:text-[#1F682E] transition-colors"
                  >
                    {t("common.faq", language)}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-[#1F682E] mb-4">
                {t("footer.legal", language)}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-[#454238] hover:text-[#1F682E] transition-colors"
                  >
                    {t("footer.privacyPolicy", language)}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-use"
                    className="text-[#454238] hover:text-[#1F682E] transition-colors"
                  >
                    {t("footer.termsOfUse", language)}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <p className="text-center text-sm text-[#454238]">
              {t("common.copyright", language).replace(
                "{year}",
                new Date().getFullYear().toString()
              )}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
