import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import MarketingAbout from "@/components/elements/about/marketing-about";
import MarketingCounter from "@/components/elements/counter/marketing-counter";
import MarketingFAQ from "@/components/elements/faq/marketing-faq";
import MarketingFeature from "@/components/elements/feature/marketing-feature";
import MarketingFeature2 from "@/components/elements/feature/marketing-feature2";
import MarketingHero from "@/components/elements/hero/marketing-hero";
import MarketingIntegration from "@/components/elements/integration/marketing-integration";
import MarketingPricing from "@/components/elements/pricing/marketing-pricing";
import MarketingTestimonial from "@/components/elements/testimonial/marketing-testimonial";
import EcommerceHero from "@/components/elements/hero/ecommerce-hero";
import HomeAboutMultiple from "@/components/elements/about/home-about-multiple";
import MobileAppFAQ from "@/components/elements/faq/mobile-app-faq";
import ImageGeneratorBlog from "@/components/elements/blog/image-generator-blog";

export default function page() {
  const hero = getMainPage("/heros/ecommerce-hero.mdx");
  const about = getMainPage("/abouts/ecommerce-about1.mdx");
  const aboutSections = getMainPage("/abouts/messenger-about.mdx");
  const counter = getMainPage("/counters/ecommerce-counter.mdx");
  const testimonial = getMainPage("/testimonials/ecommerce-testimonial.mdx");
  const faq = getMainPage("/faqs/ecommerce-faq.mdx");
  const blog = getMainPage("/blogs/main/_index.mdx");
  const blogs = getAllPages("/blogs/main");

  return (
    <main>
      <SeoData />
      <EcommerceHero hero={hero} />
      <MarketingAbout about={about} />
      <HomeAboutMultiple
        aboutSections={aboutSections.data.aboutSections}
        heading={aboutSections.data.heading}
      />
      <MarketingCounter counter={counter} />
      <MarketingTestimonial testimonial={testimonial} />
      <ImageGeneratorBlog blog={blog} blogs={blogs.slice(0, 3)} />
      <MobileAppFAQ faq={faq} />
    </main>
  );
}
