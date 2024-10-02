import { getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import MarketingAbout from "@/components/elements/about/marketing-about";
import MarketingCounter from "@/components/elements/counter/marketing-counter";
import MarketingFAQ from "@/components/elements/faq/marketing-faq";
import MarketingFeature from "@/components/elements/feature/marketing-feature";
import MarketingFeature2 from "@/components/elements/feature/marketing-feature2";

import MarketingIntegration from "@/components/elements/integration/marketing-integration";
import MarketingPricing from "@/components/elements/pricing/marketing-pricing";
import MarketingTestimonial from "@/components/elements/testimonial/marketing-testimonial";
import MessengerHero from "@/components/elements/hero/messenger-hero";
import StartupFeature4 from "@/components/elements/feature/startup-feature4";
import InstagramCta from "@/components/elements/cta/instagram-cta";
import MessengerCta from "@/components/elements/cta/messenger-cta";
import StartupFeature2 from "@/components/elements/feature/startup-feature2";
import MessengerFeature1 from "@/components/elements/feature/messenger-feature1";
import HomeAboutMultiple from "@/components/elements/about/home-about-multiple";
import VideoBanner from "@/components/elements/banner/video-banner";
import MobileAppFAQ from "@/components/elements/faq/mobile-app-faq";

export default function page() {
  const hero = getMainPage("/heros/messenger-hero.mdx");
  const about = getMainPage("/abouts/messenger-about.mdx");
  const counter = getMainPage("/counters/marketing-counter.mdx");
  const feature = getMainPage("/features/marketing-feature.mdx");
  const testimonial = getMainPage("/testimonials/marketing-testimonial.mdx");
  const integration = getMainPage("/integrations/marketing-integration.mdx");
  const pricing = getMainPage("/pricings/marketing-pricing.mdx");
  const cta = getMainPage("/ctas/messenger/cta.mdx");
  const feature1 = getMainPage("/features/messenger-feature1.mdx");
  const banner = getMainPage("/banners/messenger-banner.mdx");
  const faq = getMainPage("/faqs/messenger-faq.mdx");

  return (
    <main>
      <SeoData />
      <MessengerHero hero={hero} />
      <MessengerCta cta={cta} />
      <MessengerFeature1 feature={feature1} />
      <HomeAboutMultiple
        aboutSections={about.data.aboutSections}
        heading={about.data.heading}
      />
      <VideoBanner banner={banner} />
      <MobileAppFAQ faq={faq} />
    </main>
  );
}
