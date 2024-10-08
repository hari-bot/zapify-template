import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import MeetingHomeAbout from "@/components/elements/about/meeting-home-about";
import Brand2 from "@/components/elements/brand/brand2";
import MeetingFeature1 from "@/components/elements/feature/meeting-feature1";
import MeetingFeature2 from "@/components/elements/feature/meeting-feature2";
import MeetingFeature3 from "@/components/elements/feature/meeting-feature3";
import MeetingHero from "@/components/elements/hero/meeting-hero";
import MeetingIntegration from "@/components/elements/integration/meeting-integration";
import MeetingPricing from "@/components/elements/pricing/meeting-pricing";
import MeetingTestimonial from "@/components/elements/testimonial/meeting-testimonial";
import InstagramHero from "@/components/elements/hero/instagram-hero";
import HomeAboutMultiple from "@/components/elements/about/home-about-multiple";
import CTA3 from "@/components/elements/cta/cta3";
import InstagramCta from "@/components/elements/cta/instagram-cta";
import BookingTestimonial from "@/components/elements/testimonial/booking-testimonial";
import HomeProcess from "@/components/elements/process/home-process";

import InstagramFeature2 from "@/components/elements/feature/instagram-feature2";
import InstagramFeature1 from "@/components/elements/feature/instagram-feature1";
import CRMTestimonial from "@/components/elements/testimonial/crm-testimonial";
import CreatorsHero from "@/components/elements/hero/creators-hero";
import ImageGeneratorBlog from "@/components/elements/blog/image-generator-blog";
import SEOFAQ from "@/components/elements/faq/seo-faq";

export default function Page() {
  const hero = getMainPage("/heros/creators-hero.mdx");
  const feature2 = getMainPage("/features/instagram-feature2.mdx");
  const about = getMainPage("/abouts/creators-about.mdx");
  const cta1 = getMainPage("/ctas/instagram/cta1.mdx");
  const testimonial = getMainPage("/testimonials/creators-testimonial.mdx");
  const process = getMainPage("/processes/home-process.mdx");
  const blog = getMainPage("/blogs/main/_index.mdx");
  const blogs = getAllPages("/blogs/main");
  const faq = getMainPage("/faqs/creators-faq.mdx");
  return (
    <main>
      <SeoData />
      <CreatorsHero hero={hero} />
      <CRMTestimonial testimonial={testimonial} />
      <HomeAboutMultiple
        aboutSections={about.data.aboutSections}
        heading={about.data.heading}
      />
      <InstagramCta cta={cta1} />
      <InstagramFeature2 feature={feature2} />
      <ImageGeneratorBlog blog={blog} blogs={blogs.slice(0, 3)} />
      <HomeProcess process={process} />
      <SEOFAQ faq={faq} />
    </main>
  );
}
