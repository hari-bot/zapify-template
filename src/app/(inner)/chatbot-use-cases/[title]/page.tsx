import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { notFound } from "next/navigation";

// Components
import BlogDetails from "@/components/elements/blog/blog-details";
import MDXContent from "@/components/tools/mdx-content";
import SeoData from "@/components/tools/seo-data";
import UseCaseDetails from "@/components/elements/chatbot-use-cases/use-case-details";
import VideoBanner from "@/components/elements/banner/video-banner";
import ImageBanner from "@/components/elements/banner/image-banner";
import RelatedUseCases from "@/components/elements/chatbot-use-cases/related-use-cases";

type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const blogs = getAllPages("/blogs/main");
  const paths = blogs.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

export default function Page({ params }: Props) {
  const blogs = getAllPages("/chatbot-use-cases/main");
  const banner1 = getMainPage("/banners/use-case-page-banner.mdx");
  const banner2 = getMainPage("/banners/use-case-template-banner.mdx");
  const useCase = getMainPage("/chatbot-use-cases/main/_index.mdx");

  if (!(blogs && blogs.length)) {
    notFound();
  }
  const blog = blogs.find((item) => item.slug === params.title);

  if (!(blog && blog.data)) {
    notFound();
  }

  const { meta_title, meta_description } = blog.data.meta || {};
  return (
    <main>
      <SeoData
        title={blog.data.title || "Chatbot use case page"}
        meta_title={meta_title || "Chatbot use case page"}
        description={meta_description || "Chatbot use case page"}
      />
      <UseCaseDetails blog={blog} />
      <VideoBanner banner={banner1} />
      <ImageBanner hero={banner2} />
      <RelatedUseCases blog={useCase} blogs={blogs.slice(0, 3)} />
    </main>
  );
}
