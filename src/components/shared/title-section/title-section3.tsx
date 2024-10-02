import React from "react";

// lib
import { cn } from "@/lib/utils";

// components
import Title1 from "../title/title1";
import { markdownify } from "@/lib/helper/convert";

type Props = {
  title: string;
  sub_title?: string;
  details: string;
  heading?: boolean;
  html?: boolean;
  className?: string;
  titleClassName?: string;
  detailsClassName?: string;
  subTitleClassName?: string;
};

const TitleSection3 = ({
  title,
  sub_title,
  details,
  className,
  detailsClassName,
  subTitleClassName,
}: Props) => {
  return (
    <div className={cn("text-center", className)}>
      {sub_title && (
        <div>
          <span
            className={cn(
              "text-[12px] font-bold uppercase text-primary bg-[#EAFAF2] px-[16px] py-[8px] inline-block rounded-[10px] mb-[17px] has_fade_anim",
              subTitleClassName
            )}
          >
            {sub_title}
          </span>
        </div>
      )}
      <h1
        className="mt-[27px] text-[40px] text-center md:text-[50px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] font-bold leading-none [&>span]:text-theme [&>span]:relative [&>span]:inline-block [&>span]:leading-none [&>span]:before:absolute [&>span]:before:content-[url(/assets/imgs/shape/shape-s-50.svg)] [&>span]:before:top-[calc(77%+9px)] [&>span]:before:start-0 [&>span]:before:leading-[0] [&>span]:before:w-full [&>span]:before:rtl_y [&>span]:after:absolute [&>span]:after:content-[url(/assets/imgs/shape/shape-s-51.png)] [&>span]:after:top-[8%] [&>span]:after:start-[99%] [&>span]:after:leading-[0] [&>span]:after:w-[34px] [&>span]:after:rtl_y has_fade_anim"
        data-delay="0.30"
        dangerouslySetInnerHTML={markdownify(title)}
      />
      <p
        className={cn(
          "mt-[23px] lg:mt-[33px] max-w-[850px] mx-auto has_fade_anim text-2xl",
          detailsClassName
        )}
      >
        {details}
      </p>
    </div>
  );
};

export default TitleSection3;
