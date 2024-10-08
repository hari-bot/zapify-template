import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import BookingHomeAbout from "@/components/elements/about/booking-home-about";
import BookingBanner from "@/components/elements/banner/booking-banner";
import BookingCounter from "@/components/elements/counter/booking-counter";
import CTA1 from "@/components/elements/cta/cta1";
import BookingHero from "@/components/elements/hero/booking-hero";
import BookingIntegration from "@/components/elements/integration/booking-integration";
import BookingPricing from "@/components/elements/pricing/booking-pricing";
import BookingService from "@/components/elements/service/booking-service";
import BookingTestimonial from "@/components/elements/testimonial/booking-testimonial";
import CRMHomeAbout from "@/components/elements/about/crm-home-about";
import Counter1 from "@/components/elements/counter/counter1";
import SEOCounter from "@/components/elements/counter/seo-counter";
import HomeCounter from "@/components/elements/counter/home-counter";
import HomeAbout from "@/components/elements/about/home-about";
import HomeAboutMultiple from "@/components/elements/about/home-about-multiple";
import VideoEditorProcess from "@/components/elements/process/video-editor-process";
import HomeProcess from "@/components/elements/process/home-process";
import ImageGeneratorBlog from "@/components/elements/blog/image-generator-blog";

export default function Page() {
  const hero = getMainPage("/heros/home-hero.mdx");
  const service = getMainPage("/services/home/_index.mdx");
  const services = getAllPages("/services/home");
  const counter = getMainPage("/counters/home-counter.mdx");
  const banner = getMainPage("/banners/booking-banner.mdx");
  const testimonial = getMainPage("/testimonials/home-testimonial.mdx");
  const about = getMainPage("/abouts/home-about.mdx");
  const integration = getMainPage("/integrations/booking-integration.mdx");
  const pricing = getMainPage("/pricings/home-pricing.mdx");
  const cta = getMainPage("/ctas/cta1.mdx");
  const process = getMainPage("/processes/home-process.mdx");
  const blog = getMainPage("/blogs/main/_index.mdx");
  const blogs = getAllPages("/blogs/main");

  return (
    <main>
      <SeoData />
      <BookingHero hero={hero} />
      <BookingService service={service} services={services} />
      <HomeAboutMultiple aboutSections={about.data.aboutSections} />
      <HomeCounter counter={counter} />
      <BookingTestimonial testimonial={testimonial} />
      <BookingPricing pricing={pricing} />
      <HomeProcess process={process} />
      <ImageGeneratorBlog blog={blog} blogs={blogs.slice(0, 3)} />
    </main>
  );
}
