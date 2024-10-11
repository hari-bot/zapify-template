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

// components
import Title1 from "@/components/shared/title/title1";
import TitleSection2 from "@/components/shared/title-section/title-section2";

type AboutSection = {
  title: string;
  details: string;
  video: string;
  action_btn: ActionBtnType;
};

type Props = {
  aboutSections: AboutSection[];
  heading?: string;
};

const HomeAboutMultiple = ({ aboutSections, heading }: Props) => {
  return (
    <section className="mb-10">
      {heading && (
        <TitleSection2
          title={heading!}
          details={""}
          titleClassName="max-w-[795px] mt-20"
          detailsClassName="max-w-[695px]"
        />
      )}
      {aboutSections.map((about, index) => (
        <HomeAbout key={index} about={about} index={index} />
      ))}
    </section>
  );
};

export default HomeAboutMultiple;

// HomeAbout component (with alternating layout)
const HomeAbout = ({
  about,
  index,
}: {
  about: AboutSection;
  index: number;
}) => {
  const { title, details, video, action_btn } = about;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  // For odd index, we want text first (order-1 for text), for even index, video first
  const isEven = index % 2 === 0;

  return (
    <div className="pt-[60px] md:pt-[100px] lg:pt-[150px] xl:pt-[100px]">
      <div className="container" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-6 items-center">
          <div className={isEven ? "lg:order-1" : "lg:order-2"}>
            {video && (
              <video
                width={616}
                height={616}
                className="rounded-[40px] has_fade_anim"
                loop
                autoPlay
                playsInline
                muted
              >
                <source src={video} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className={isEven ? "lg:order-2" : "lg:order-1"}>
            <Title1
              text={title}
              className="has_fade_anim pb-[15px] md:pb-[24px]"
            />
            <p className="has_fade_anim">{details}</p>
            {action_btn && action_btn.enable && (
              <div className="py-[25px] lg:py-[45px] has_fade_anim">
                <Link
                  href={action_btn.link}
                  className={cn(buttonVariants({ variant: "primary2" }))}
                >
                  {action_btn.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
