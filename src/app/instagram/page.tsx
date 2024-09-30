import { getMainPage } from "@/lib/helper/contentConverter";

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

export default function Page() {
  const hero = getMainPage("/heros/instagram-hero.mdx");
  const feature1 = getMainPage("/features/instagram-feature1.mdx");
  const feature2 = getMainPage("/features/instagram-feature2.mdx");
  const about = getMainPage("/abouts/instagram-about.mdx");
  const cta1 = getMainPage("/ctas/instagram/cta1.mdx");
  const cta2 = getMainPage("/ctas/instagram/cta2.mdx");
  const integration = getMainPage("/integrations/meeting-integration.mdx");
  const pricing = getMainPage("/pricings/meeting-pricing.mdx");
  const brand = getMainPage("/brands/brand2.mdx");
  const testimonial = getMainPage("/testimonials/instagram-testimonial.mdx");
  const process = getMainPage("/processes/instagram-process.mdx");
  return (
    <main>
      <SeoData />
      <InstagramHero hero={hero} />
      <InstagramFeature1 feature={feature1} />
      <InstagramCta cta={cta1} />
      <HomeAboutMultiple aboutSections={about.data.aboutSections} />
      <InstagramCta cta={cta2} />
      <InstagramFeature2 feature={feature2} />
      <BookingTestimonial testimonial={testimonial} />
      <HomeProcess process={process} />
    </main>
  );
}
