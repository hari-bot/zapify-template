"use client";

import { useRef } from "react";
import Image from "next/image";

// react icons
import { FaDribbble, FaInstagram, FaTwitter } from "react-icons/fa6";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// components
import Title1 from "@/components/shared/title/title1";
import BlogComment from "../blog-comment";
import TitleSection1 from "@/components/shared/title-section/title-section1";
import TitleSection2 from "@/components/shared/title-section/title-section2";
import TitleSection3 from "@/components/shared/title-section/title-section3";
import { ActionBtnType } from "@/types";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type Props = {
  blog: {
    data: {
      title: string;
      details: string;
      image: string;
      action_btn: ActionBtnType;
      tags: string[];
    };
  };
  children?: React.ReactNode;
};

const UseCaseDetails = ({ blog, children }: Props) => {
  const { title, details, image, action_btn, tags } = blog.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="pt-[5px] xl:pt-[75px] 2xl:pt-[135px] sec_space_bottom1">
      <div className="container" ref={containerRef}>
        <div className="flex flex-col lg:flex-row items-start gap-[50px]">
          {/* Left Side: Title, Details, Tags */}
          <div className="flex-1 max-w-full md:max-w-[560px] lg:max-w-[50%]">
            <h1 className="text-[35px] md:text-[70px] lg:text-[40px] xl:text-[60px] 2xl:text-[90px] has_fade_anim">
              {title}
            </h1>
            <p className="mt-[24px] has_fade_anim" data-delay="0.30">
              {details}
            </p>
            <div
              className="mt-[23px] xl:mt-[43px] flex flex-wrap gap-[15px] has_fade_anim"
              data-delay="0.45"
            >
              {action_btn && action_btn.enable && (
                <a
                  href={action_btn.link}
                  className={cn(buttonVariants({ variant: "primary2" }))}
                >
                  <span className="btn-span" data-text={action_btn.label}>
                    {action_btn.label}
                  </span>
                </a>
              )}
            </div>
            {/* Flow Tags Section */}
            <div className="mt-[33px] has_fade_anim">
              <h4 className="text-xl font-semibold mb-[20px]">Flow Tags: </h4>
              {tags && tags.length && (
                <div className="flex flex-wrap gap-[10px]">
                  {tags.map((tag, i) => (
                    <a
                      key={`blog_details-tag-${i}`}
                      href="#"
                      className="text-[14px] font-medium text-primary bg-[#F7F8FA] border border-[#E0E0E0] rounded-full px-[12px] py-[6px] shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 max-w-full lg:max-w-[50%]">
            {image && (
              <div
                className="rounded-[30px] overflow-hidden has_fade_anim"
                data-delay="0.45"
              >
                <Image
                  width={1290}
                  height={720}
                  style={{ height: "auto", aspectRatio: "4/3" }}
                  src={image}
                  alt="blog image"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseDetails;
