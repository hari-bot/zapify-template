"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// icons
import { FaPlay } from "react-icons/fa6";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";
import { markdownify } from "@/lib/helper/convert";

// types
import { MeetingHeroType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

// components
import VideoModal from "@/components/tools/video-modal";

type Props = {
  hero: {
    data: MeetingHeroType;
  };
};

const InstagramHero = ({ hero }: Props) => {
  const {
    title,
    details,
    action_btn1,
    action_btn2,
    people,
    video,
    video_label,
    shape1_img,
    shape2_img,
    shape3_img,
    progress,
    brand_img,
    image1, // new single image
  } = hero.data;

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="sec_space_bottom1 pt-[50px] md:pt-[70px] xl:pt-[90] 2xl:pt-[120]">
      <div className="container" ref={containerRef}>
        <div className="relative flex justify-between items-center lg:items-start flex-col lg:flex-row gap-x-[80px] gap-y-[40px]">
          <Image
            width={955}
            height={671}
            src="/assets/imgs/shape/shape-s-11.png"
            className="h-auto absolute -top-[220px] end-[50%] -z-[1] rtl_y"
            alt="shape image"
          />
          <div className="max-w-full md:max-w-[560px] lg:max-w-[650px]">
            <h1 className="text-[35px] md:text-[70px] lg:text-[40px] xl:text-[60px] 2xl:text-[90px] has_fade_anim">
              {title}
            </h1>
            <p className="mt-[24px] has_fade_anim" data-delay="0.30">
              {details}
            </p>
            <div
              className="mt-[23px] xl:mt-[43px] flex flex-nowrap md:flex-wrap gap-[15px] md:gap-[20px] has_fade_anim"
              data-delay="0.45"
            >
              {action_btn1 && action_btn1.enable && (
                <a
                  href={action_btn1.link}
                  className={cn(
                    buttonVariants({ variant: "primary2" }),
                    "bg-btn-bg-hover hover:bg-btn-bg-main text-btn-text-hover hover:text-btn-text-main"
                  )}
                  download={action_btn1.downloadable}
                >
                  <span className="btn-span" data-text={action_btn1.label}>
                    {action_btn1.label}
                  </span>
                </a>
              )}
              {action_btn2 && action_btn2.enable && (
                <a
                  href={action_btn2.link}
                  className={cn(buttonVariants({ variant: "primary2" }))}
                  download={action_btn2.downloadable}
                >
                  <span className="btn-span" data-text={action_btn2.label}>
                    {action_btn2.label}
                  </span>
                </a>
              )}
            </div>
            <div
              className="mt-[30px] xl:mt-[50px] flex gap-[53px] border-t border-border has_fade_anim"
              data-delay="0.60"
            >
              <div className="pt-[23px] xl:pt-[33px]">
                {people && people.members && people.members.length && (
                  <div className="flex pt-[15px]">
                    {people.members.map((item, i) => (
                      <Image
                        key={`people_member-${i}`}
                        width={55}
                        height={55}
                        src={item}
                        className={cn(
                          "rounded-full w-[50px] lg:w-[55px] border-[3px] border-white",
                          i !== 0 && "-ms-[20px]"
                        )}
                        alt="People"
                      />
                    ))}

                    <div className="bg-theme rounded-full w-[50px] lg:w-[55px] border-[3px] border-white -ms-[20px] flex justify-center items-center text-white text-[20px] cursor-default">
                      +
                    </div>
                  </div>
                )}
                <div className="mt-[15px] flex items-center">
                  <h2 className="text-[50px] font-medium leading-none min-w-[105px]">
                    <span>{people.number}</span>
                    {people.unit}
                  </h2>
                  <p className="text-[18px] font-normal leading-[1.11] text-primary max-w-[166px]">
                    {people.label}
                  </p>
                </div>
              </div>
              <div className="ps-[30px] xl:ps-[50px] border-s border-border">
                <div className="mt-[24px] xl:mt-[34px] inline-block">
                  <div
                    className="w-[50px] md:w-[56px] h-[50px] md:h-[56px] flex justify-center items-center border md:border-[1.5px] border-primary hover:border-theme rounded-full transition-all duration-500 text-primary hover:text-theme"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <FaPlay />
                  </div>
                </div>
                <p className="mt-[19px] text-[18px] leading-[1.1] text-primary">
                  {video_label}
                </p>
              </div>
            </div>
          </div>
          {/* New Single Image Section */}
          <div className="w-full md:w-[560px] 2xl:w-[650px] relative aspect-[100/110] overflow-hidden xl:overflow-visible">
            {/* Shape images */}
            <div className="absolute -rotate-[15deg] rtl:rotate-[15deg] start-[93%] top-[76%] w-[21%]">
              {shape1_img && (
                <Image
                  width={137}
                  height={82}
                  src={shape1_img}
                  className="rtl_y"
                  alt="shape image"
                />
              )}
            </div>
            <div className="absolute -rotate-[20deg] rtl:rotate-[20deg] start-[8%] top-[21%] w-[60px] xl:w-[94px]">
              {shape2_img && (
                <Image
                  width={94}
                  height={89}
                  src={shape2_img}
                  className="rtl_y"
                  alt="shape image"
                />
              )}
            </div>
            <div
              className="absolute bottom-0 start-[56%] has_fade_anim"
              data-fade-offset="0"
              data-delay="0.75"
              data-on-scroll="0"
            >
              {shape3_img && (
                <Image
                  width={181}
                  height={100}
                  src={shape3_img}
                  alt="shape image"
                />
              )}
            </div>
            {/* Single main image */}
            <div className="w-full h-full has_fade_anim">
              {image1 && (
                <Image
                  width={650}
                  height={650}
                  src={image1}
                  className="rounded-theme"
                  alt="Main content image"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <VideoModal link={video} isOpen={isOpen} close={closeDialog} />
    </section>
  );
};

export default InstagramHero;
