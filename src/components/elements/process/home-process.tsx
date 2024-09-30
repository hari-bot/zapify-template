"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { delayTime2 } from "@/lib/helper/delayTime";
import { cn } from "@/lib/utils";

// types
import { ActionBtnType } from "@/types";

// shadch components
import { buttonVariants } from "@/components/ui/button";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";
import TitleSection3 from "@/components/shared/title-section/title-section3";

type Props = {
  process: {
    data: {
      title: string;
      details: string;
      action_btn?: ActionBtnType;
      items: {
        name: string;
        details: string;
        icon: string;
      }[];
    };
  };
};

const HomeProcess = ({ process }: Props) => {
  const { title, details, items, action_btn } = process.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space4">
      <div className="container" ref={containerRef}>
        <TitleSection3
          title={title}
          details={details}
          html
          titleClassName="max-w-[650px] text-xl"
        />
        {items && items.length && (
          <div className="mt-[60px] flex justify-start lg:justify-between flex-wrap gap-[30px] ">
            {items.slice(0, 3).map((item, i) => (
              <div
                key={`process_item-${i}`}
                className="max-w-full md:max-w-[47%] lg:max-w-[280px] text-center relative bg-[#ebedef36] lg:bg-transparent p-[30px] lg:p-0 rounded-theme lg:rounded-0 has_fade_anim"
                data-delay={delayTime2(i + 1)}
              >
                {i === 0 && (
                  <div className="hidden xl:block absolute start-full top-[55%] w-1/2 2xl:w-full -translate-y-1/2">
                    <Image
                      width={183}
                      height={128}
                      src="/assets/imgs/shape/shape-r-13.png"
                      alt="shape"
                    />
                  </div>
                )}
                {i === 1 && (
                  <div className="hidden xl:block absolute start-full top-[23%] w-1/2 2xl:w-full -translate-y-1/2">
                    <Image
                      width={183}
                      height={128}
                      src="/assets/imgs/shape/shape-r-14.png"
                      alt="shape"
                    />
                  </div>
                )}
                <div className="w-[60px] h-[60px] lg:w-[92px] lg:h-[92px] mx-auto flex justify-center items-center border border-[#0720321a] rounded-theme mb-[25px] lg:mb-[45px]">
                  <Image
                    width={28}
                    height={34}
                    src={item.icon}
                    className="max-w-[20px] lg:max-w-[28px]"
                    alt="icon"
                  />
                </div>
                <div className="mb-[15px] md:mb-[25px] max-w-full lg:max-w-[60%] mx-auto">
                  <h2 className="text-[25px]">{item.name}</h2>
                </div>
                <p className="text">{item.details}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center mt-[30px] xl:mt-[50px] 2xl:mt-[70px] has_fade_anim">
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
    </section>
  );
};

export default HomeProcess;
