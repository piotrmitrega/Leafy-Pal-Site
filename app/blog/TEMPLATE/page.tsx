import Image from "next/image";
import BlogPostLayout from "@/components/blog-post-layout";

export const metadata = {
  title: "Article Title | Leafy Pal Blog",
  description: "Article description goes here.",
};

export default function BlogPost() {
  return (
    <BlogPostLayout
      title="Article Title"
      date="Month DD, YYYY"
      category="Category Name"
      slug="article-slug"
      heroImage="/path-to-hero-image.png"
      heroAlt="Description of hero image"
      tags={["Tag1", "Tag2", "Tag3"]}
    >
      {/* Article content goes here */}
      <p>Article introduction paragraph...</p>

      <h2>First Section Heading</h2>
      <p>Section content...</p>

      {/* Example of an image within the article */}
      <div className="my-8 relative w-full h-[300px] rounded-lg overflow-hidden">
        <Image
          src="/path-to-image.png"
          alt="Image description"
          fill
          className="object-cover"
        />
      </div>

      <h2>Second Section Heading</h2>
      <p>More content...</p>

      {/* Continue with the rest of the article content */}
    </BlogPostLayout>
  );
}
