import Image from "next/image";
import Link from "next/link";

// lib
import { cn } from "@/lib/utils";

// types
import { SingleBlogType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

type Props = {
  blog: SingleBlogType;
  allowBtn?: boolean;
};

const UseCaseCard = ({ blog, allowBtn = true }: Props) => {
  const { title, image } = blog.data;
  return (
    <article>
      <div className="rounded-theme overflow-hidden">
        <Link href={`/chatbot-use-cases/${blog.slug}`}>
          <Image
            width={400}
            height={300}
            style={{ height: "auto", aspectRatio: "4/3" }}
            className="object-cover"
            src={image}
            alt="blog image"
          />
        </Link>
      </div>
      <div className="mt-[28px] xl:mt-[38px]">
        <h3 className="text-[22px] xl:text-[26px] 2xl:text-[30px] !leading-[1.33] mt-[15px]">
          <Link href={`/chatbot-use-cases/${blog.slug}`}>{title}</Link>
        </h3>
        {allowBtn && (
          <div className="mt-[25px] xl:mt-[40px]">
            <Link
              href={`/chatbot-use-cases/${blog.slug}`}
              className={cn(
                buttonVariants({ variant: "normal" }),
                "underline text-primary underline-offset-4 !p-0 !h-auto"
              )}
            >
              Learn more
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default UseCaseCard;
