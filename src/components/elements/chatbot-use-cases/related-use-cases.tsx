"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// types
import { SingleBlogType } from "@/types";

// components

import TitleSection2 from "@/components/shared/title-section/title-section2";
import BlogItems from "../blog/blog-items";
import UseCaseItems from "./use-case-items";

type Props = {
  blog: {
    data: {
      home_title: string;
      details: string;
    };
  };
  blogs: SingleBlogType[];
};

const RelatedUseCases = ({ blog, blogs }: Props) => {
  const { home_title, details } = blog.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="pt-[50px] md:pt-[75px] xl:pt-[100px] 2xl:pt-[124px] pb-[55px] md:pb-[85px] xl:pb-[115px] 2xl:pb-[145px]">
      <div className="container">
        <div ref={containerRef}>
          <TitleSection2 title={"Related Use Cases"} details={""} />
        </div>
        <div className="mt-[28px] xl:mt-[38px] 2xl:mt-[58px]">
          <UseCaseItems blogs={blogs} allowBtn={false} />
        </div>
      </div>
    </section>
  );
};

export default RelatedUseCases;
