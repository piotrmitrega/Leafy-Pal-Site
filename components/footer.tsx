"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 relative">
                <Image
                  src="./leafy-pal-mascot.png"
                  alt="Leafy Pal Mascot"
                  width={500}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
            <p className="text-[#454238] mb-4 max-w-sm">
              Your plant care companion. Track, identify, diagnose, and organize
              your plants with ease.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[#1F682E] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-[#454238] hover:text-[#1F682E] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#454238] hover:text-[#1F682E] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#1F682E] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-[#454238] hover:text-[#1F682E] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-[#454238] hover:text-[#1F682E] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#1F682E] mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[#454238] hover:text-[#1F682E] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-[#454238] hover:text-[#1F682E] transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-[#454238]">
            © {new Date().getFullYear()} Leafy Pal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
