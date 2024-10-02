"use client";

import { useRef } from "react";
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
import TitleSection3 from "@/components/shared/title-section/title-section3";

type FeatureType = {
  image: string;
  label: string;
};

type Props = {
  cta: {
    data: {
      title: string;
      details: string;
      action_btn: ActionBtnType;
      features?: FeatureType[];
    };
  };
  className?: string;
  btnClassName?: string;
  animatedBtn?: boolean;
};

const MessengerCta = ({
  cta,
  className,
  btnClassName,
  animatedBtn = false,
}: Props) => {
  const { title, details, action_btn, features } = cta.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      className={cn(
        "sec_space_bottom1 pt-[50px] md:pt-[80px] xl:pt-[110px] 2xl:pt-[180px]",
        className
      )}
    >
      <div className="container" ref={containerRef}>
        <TitleSection3
          title={title}
          details={details}
          html
          titleClassName="max-w-[650px] text-4xl"
        />

        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center p-4 border rounded-lg shadow-sm has_fade_anim"
              >
                <img
                  alt={feature.label}
                  loading="lazy"
                  width="26"
                  height="26"
                  decoding="async"
                  src={feature.image}
                  className="w-[32px] h-[32px] object-contain"
                />
                <p className="ml-4 mt-0">{feature.label}</p>
              </div>
            ))}
          </div>
        )}

        {action_btn && action_btn.enable && (
          <div className="mt-[33px] xl:mt-[43px] flex justify-center items-center has_fade_anim">
            <Link
              href={action_btn.link}
              className={cn(
                buttonVariants({ variant: "outline" }),
                btnClassName
              )}
            >
              {animatedBtn ? (
                <span className="btn-span" data-text={action_btn.label}>
                  {action_btn.label}
                </span>
              ) : (
                action_btn.label
              )}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MessengerCta;
