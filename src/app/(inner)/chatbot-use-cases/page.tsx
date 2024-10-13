import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import MainBlog from "@/components/elements/blog/main-blog";
import MainUseCase from "@/components/elements/chatbot-use-cases/main-use-case";

export default function Page() {
  const blog = getMainPage("/chatbot-use-cases/main/_index.mdx");
  const blogs = getAllPages("/chatbot-use-cases/main");

  const { meta_title, meta_description } = blog.data.meta || {};

  return (
    <main>
      <SeoData
        title={blog.data.title || "Chat bot use cases page"}
        meta_title={meta_title || "Chat bot use cases page"}
        description={meta_description || "Chat bot use cases page description"}
      />
      <MainUseCase blog={blog} blogs={blogs} />
    </main>
  );
}
