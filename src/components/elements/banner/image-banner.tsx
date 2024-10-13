"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";

// types
import { ActionBtnType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";
import TitleSection2 from "@/components/shared/title-section/title-section2";

type Props = {
  hero: {
    data: {
      title: string;
      description: string;
      image: string;
      action_btn?: ActionBtnType;
      shape1_img?: string;
      shape2_img?: string;
      shape3_img?: string;
      shape4_img?: string;
      shape5_img?: string;
      shape6_img?: string;
    };
    content: string;
  };
};

const ImageBanner = ({ hero }: Props) => {
  const {
    title,
    description,
    image,
    action_btn,
    shape1_img,
    shape2_img,
    shape3_img,
    shape4_img,
    shape5_img,
  } = hero.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="pt-[20px] lg:pt-[40px] xl:pt-[60px] 2xl:pt-[90px] pb-0 relative z-[1] overflow-hidden">
      <div className="container" ref={containerRef}>
        <TitleSection2
          title={title}
          details={description}
          titleClassName="max-w-[795px]"
          detailsClassName="max-w-[695px] mb-10"
        />
        <div className="relative z-[1] mt-[50px] 2xl:mt-[70px]">
          <div className="absolute -start-[7%] -top-[6%] -z-[1] w-[88px] lg:w-[138px] hidden md:block rtl_y">
            {shape1_img && (
              <Image
                width={138}
                height={82}
                style={{ height: "auto" }}
                src={shape1_img}
                alt="shape image"
              />
            )}
          </div>
          <div className="absolute -start-[11%] top-[31%] -z-[1] w-[200px] lg:w-[300px] hidden md:block">
            {shape2_img && (
              <Image
                width={300}
                height={315}
                style={{ height: "auto" }}
                src={shape2_img}
                alt="shape image"
              />
            )}
          </div>
          <div className="absolute -end-[24%] -top-[30%] -z-[1] w-[549px] lg:w-[1049px] hidden md:block rtl_y">
            {shape3_img && (
              <Image
                width={1049}
                height={784}
                style={{ height: "auto" }}
                src={shape3_img}
                alt="shape image"
              />
            )}
          </div>
          <div className="absolute start-[102%] top-[35%] -z-[1] w-[31px] lg:w-[61px] hidden md:block rtl_y">
            {shape4_img && (
              <Image
                width={61}
                height={96}
                style={{ height: "auto" }}
                src={shape4_img}
                alt="shape image"
              />
            )}
          </div>
          <div className="absolute start-[100%] -top-[9%] -z-[1] w-[10px] lg:w-[20px] hidden md:block wc-y-anim">
            {shape5_img && (
              <Image
                width={20}
                height={20}
                style={{ height: "auto" }}
                src={shape5_img}
                alt="shape image"
              />
            )}
          </div>
          <div className="flex justify-center has_fade_anim" data-delay="0.60">
            <div className="w-full max-w-[1090px]">
              <Image
                width={1090}
                height={725}
                style={{ height: "auto" }}
                src={image}
                alt="dashboard image"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center my-[30px] xl:mt-[50px] 2xl:mt-[70px] has_fade_anim">
          {action_btn && action_btn.enable && (
            <Link
              href={action_btn.link}
              className={cn(buttonVariants({ variant: "primary" }))}
            >
              <span className="btn-span" data-text={action_btn.label}>
                {action_btn.label}
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
