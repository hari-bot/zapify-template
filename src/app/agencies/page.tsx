import { getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import VideoEditorAbout from "@/components/elements/about/video-editor-about";
import VideoEditorBanner from "@/components/elements/banner/video-editor-banner";
import Brand1 from "@/components/elements/brand/brand1";
import CTA5 from "@/components/elements/cta/cta5";
import VideoEditorFeature from "@/components/elements/feature/video-editor-feature";
import VideoEditorFeature2 from "@/components/elements/feature/video-editor-feature2";
import VideoEditorPricing from "@/components/elements/pricing/video-editor-pricing";
import VideoEditorProcess from "@/components/elements/process/video-editor-process";
import VideoEditorProject from "@/components/elements/project/video-editor-project";
import VideoEditorTestimonial from "@/components/elements/testimonial/video-editor-testimonial";
import AgenciesHero from "@/components/elements/hero/agencies-hero";
import MessengerCta from "@/components/elements/cta/messenger-cta";
import MessengerFeature1 from "@/components/elements/feature/messenger-feature1";
import InstagramCta from "@/components/elements/cta/instagram-cta";
import HomeAboutMultiple from "@/components/elements/about/home-about-multiple";
import MeetingTestimonial from "@/components/elements/testimonial/meeting-testimonial";
import MobileAppFAQ from "@/components/elements/faq/mobile-app-faq";

export default function Page() {
  const hero = getMainPage("/heros/agencies-hero.mdx");
  const about = getMainPage("/abouts/agencies-about.mdx");
  const testimonial = getMainPage("/testimonials/agencies-testimonial.mdx");
  const feature1 = getMainPage("/features/messenger-feature1.mdx");
  const cta = getMainPage("/ctas/agencies/cta.mdx");
  const faq = getMainPage("/faqs/agencies-faq.mdx");

  return (
    <main>
      <SeoData />
      <AgenciesHero hero={hero} />
      <MeetingTestimonial testimonial={testimonial} />
      <InstagramCta cta={cta} />
      <HomeAboutMultiple aboutSections={about.data.aboutSections} />
      <MessengerFeature1 feature={feature1} />
      <MobileAppFAQ faq={faq} />
    </main>
  );
}
