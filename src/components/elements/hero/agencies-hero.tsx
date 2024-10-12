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

type Props = {
  hero: {
    data: {
      title: string;
      details: string;
      action_btn: ActionBtnType;
      shape: string;
      tag: string;
      image: string;
      video: string;
      offer: {
        enable: boolean;
        text: string;
        action_btn: ActionBtnType;
      };
    };
  };
};

const AgenciesHero = ({ hero }: Props) => {
  const { title, details, action_btn, shape, tag, image, video, offer } =
    hero.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#C1F4E2] to-[#F4E2C1]">
        {/* Full-screen layout - Image and Text */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          {/* Left - Image Section */}
          <div className="relative flex items-center justify-center md:order-2">
            {image && (
              <Image
                width={650}
                height={650}
                src={image}
                className="object-cover" // Circular and slightly rotated
                alt="Main content image"
              />
            )}
          </div>

          {/* Right - Text Section */}
          <div className="flex flex-col justify-center md:order-1 text-center md:text-left">
            <h1 className="text-[40px] md:text-[55px] xl:text-[70px] font-extrabold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-[18px] md:text-[22px] text-primary mb-8 leading-relaxed">
              {details}
            </p>

            {action_btn && action_btn.enable && (
              <div className="mt-4">
                <Link
                  href={action_btn.link}
                  className={cn(
                    buttonVariants({ variant: "primary", size: "xxl" }),
                    "border-2 border-theme inline-block px-8 py-4 shadow-lg hover:scale-105 transition-transform"
                  )}
                >
                  {action_btn.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenciesHero;
