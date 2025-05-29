"use client"
import { BlogPostLayout } from "@/components/blog-post-layout"
import { blogArticles } from "@/data/blog-articles"
import { T } from "@/components/translate"

const article = blogArticles.find((article) => article.slug === "temperature-humidity-houseplants")

export default function TemperatureHumidityHouseplantsClientPage() {
  if (!article) {
    return null
  }

  return (
    <BlogPostLayout
      slug={article.slug}
      title={article.title}
      description={article.description}
      image={article.image}
      category={article.category}
      date={article.date}
      tags={article.tags}
      heroAlt="blog.articles.temperature-humidity-houseplants.heroAlt"
    >
      <h2>
        <T text="blog.articles.temperature-humidity-houseplants.heading1" />
      </h2>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.paragraph1" />
      </p>

      <h2>
        <T text="blog.articles.temperature-humidity-houseplants.heading2" />
      </h2>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.paragraph2" />
      </p>

      <h3>
        <T text="blog.articles.temperature-humidity-houseplants.subheading1" />
      </h3>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.tropicalPlants" />
      </p>
      <ul>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.tropicalTemp1" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.tropicalTemp2" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.tropicalTemp3" />
        </li>
      </ul>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.tropicalWarning" />
      </p>

      <h3>
        <T text="blog.articles.temperature-humidity-houseplants.subheading2" />
      </h3>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.succulentsPlants" />
      </p>
      <ul>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.succulentsTemp1" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.succulentsTemp2" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.succulentsTemp3" />
        </li>
      </ul>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.succulentsNote" />
      </p>

      <h3>
        <T text="blog.articles.temperature-humidity-houseplants.subheading3" />
      </h3>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.temperatePlants" />
      </p>
      <ul>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.temperateTemp1" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.temperateTemp2" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.temperateTemp3" />
        </li>
      </ul>

      <figure>
        <img src="/humidity-tray.png" alt="Humidity tray with pebbles and water" className="rounded-lg" />
        <figcaption>
          <T text="blog.articles.temperature-humidity-houseplants.humidityTrayCaption" />
        </figcaption>
      </figure>

      {/* Continue with the rest of the article content using T components */}
      <h2>
        <T text="blog.articles.temperature-humidity-houseplants.heading3" />
      </h2>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.paragraph3" />
      </p>

      <h3>
        <T text="blog.articles.temperature-humidity-houseplants.subheading4" />
      </h3>
      <ul>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.temperatureManagement1" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.temperatureManagement2" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.temperatureManagement3" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.temperatureManagement4" />
        </li>
      </ul>

      <h3>
        <T text="blog.articles.temperature-humidity-houseplants.subheading5" />
      </h3>
      <ul>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.humidityManagement1" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.humidityManagement2" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.humidityManagement3" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.humidityManagement4" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.humidityManagement5" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.humidityManagement6" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.humidityManagement7" />
        </li>
      </ul>

      <h2>
        <T text="blog.articles.temperature-humidity-houseplants.heading4" />
      </h2>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.paragraph4" />
      </p>

      <h3>
        <T text="blog.articles.temperature-humidity-houseplants.subheading6" />
      </h3>
      <ul>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.winterChallenges1" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.winterChallenges2" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.winterChallenges3" />
        </li>
      </ul>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.winterSolutions" />
      </p>

      <h3>
        <T text="blog.articles.temperature-humidity-houseplants.subheading7" />
      </h3>
      <ul>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.summerChallenges1" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.summerChallenges2" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.summerChallenges3" />
        </li>
      </ul>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.summerSolutions" />
      </p>

      <h2>
        <T text="blog.articles.temperature-humidity-houseplants.heading5" />
      </h2>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.paragraph5" />
      </p>
      <ul>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.monitoringTools1" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.monitoringTools2" />
        </li>
        <li>
          <T text="blog.articles.temperature-humidity-houseplants.monitoringTools3" />
        </li>
      </ul>

      <h2>
        <T text="blog.articles.temperature-humidity-houseplants.heading6" />
      </h2>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.paragraph6" />
      </p>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.paragraph7" />
      </p>
      <p>
        <T text="blog.articles.temperature-humidity-houseplants.paragraph8" />
      </p>
    </BlogPostLayout>
  )
}
