import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 text-[#1F682E] hover:text-[#1F682E]/90 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="container px-4 py-6 md:px-6 md:py-12">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1F682E] mb-8">
            Terms of Use
          </h1>

          <div className="prose prose-lg max-w-none text-[#454238]">
            <p className="text-sm text-gray-500">Last updated: May 04, 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the LeafyPal application ("App"), you agree to be bound by these
              Terms of Use. If you do not agree to these terms, please do not use the App.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              LeafyPal is a plant care application that helps users identify, track, and care for their plants. The App
              provides plant identification, care recommendations, watering reminders, and other plant-related features.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              3.1. You may be required to create an account to use certain features of the App. You are responsible for
              maintaining the confidentiality of your account information and for all activities that occur under your
              account.
            </p>
            <p>
              3.2. You agree to provide accurate, current, and complete information during the registration process and
              to update such information to keep it accurate, current, and complete.
            </p>
            <p>
              3.3. We reserve the right to suspend or terminate your account if any information provided proves to be
              inaccurate, not current, or incomplete.
            </p>

            <h2>4. User Content</h2>
            <p>
              4.1. The App may allow you to upload, submit, store, send, or receive content such as photos of your
              plants, comments, and other materials ("User Content").
            </p>
            <p>
              4.2. You retain ownership rights in your User Content. By uploading User Content, you grant LeafyPal a
              worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and
              distribute your User Content for the purpose of providing and improving the App's services.
            </p>
            <p>
              4.3. You are solely responsible for your User Content and the consequences of posting or publishing it. We
              do not endorse any User Content or any opinion, recommendation, or advice expressed therein.
            </p>

            <h2>5. Prohibited Uses</h2>
            <p>You agree not to use the App to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe the intellectual property rights of others</li>
              <li>
                Transmit any material that is harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or
                otherwise objectionable
              </li>
              <li>
                Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a
                person or entity
              </li>
              <li>Interfere with or disrupt the App or servers or networks connected to the App</li>
              <li>Collect or store personal data about other users without their consent</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              6.1. The App and its original content, features, and functionality are owned by LeafyPal and are protected
              by international copyright, trademark, patent, trade secret, and other intellectual property or
              proprietary rights laws.
            </p>
            <p>
              6.2. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
              perform, republish, download, store, or transmit any of the material on our App, except as generally and
              ordinarily permitted through the App according to these Terms of Use.
            </p>

            <h2>7. Subscription and Billing</h2>
            <p>
              7.1. Some features of the App may require a subscription. By subscribing to these features, you agree to
              pay the applicable fees.
            </p>
            <p>
              7.2. Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of
              the current period.
            </p>
            <p>7.3. Payment will be charged to your Apple ID or Google Play account at confirmation of purchase.</p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              8.1. The App is provided on an "AS IS" and "AS AVAILABLE" basis without any representation or warranty,
              whether express, implied, or statutory.
            </p>
            <p>8.2. We do not guarantee that the App will be uninterrupted, timely, secure, or error-free.</p>
            <p>
              8.3. Plant identification and care recommendations are provided for informational purposes only and may
              not be accurate in all cases.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, LeafyPal shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
              or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of
              the App.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. We will provide notice of any material
              changes by posting the new Terms of Use on the App. Your continued use of the App after such modifications
              will constitute your acknowledgment of the modified Terms of Use and agreement to abide and be bound by
              them.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Poland, without regard to
              its conflict of law provisions.
            </p>

            <h2>12. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at piotrmitrega1@gmail.com.</p>
          </div>
        </article>
      </main>

      <footer className="w-full border-t bg-white mt-12">
        <div className="container px-4 py-6 md:px-6">
          <p className="text-center text-sm text-[#454238]">
            © {new Date().getFullYear()} Leafy Pal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
