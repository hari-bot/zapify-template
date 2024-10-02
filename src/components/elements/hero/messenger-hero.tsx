"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap"; // Import gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { markdownify } from "@/lib/helper/convert";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ActionBtnType } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

type Props = {
  hero: {
    data: {
      title: string;
      sub_title: string;
      details: string;
      action_btn: ActionBtnType;
      requirement: string[];
      feature: {
        enable: boolean;
        tab_lists: {
          name: string;
          image: string;
          key: string;
        }[];
        tab_content: {
          title: string;
          content: string;
          video: string;
          key: string;
        }[];
      };
      social: string[];
    };
  };
};

const MessengerHero = ({ hero }: Props) => {
  const { title, sub_title, details, social, feature, action_btn } = hero.data;
  const { enable, tab_lists, tab_content } = feature;

  const containerRef = useRef<HTMLDivElement>(null!);
  const tabContentRef = useRef<HTMLDivElement[]>([]);

  // Initialize GSAP animations on component mount and when active tab changes
  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const animateTabContent = (index: number) => {
    const element = tabContentRef.current[index];
    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.8, rotate: 10 }, // Starting state with slight scale and rotation
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.75)",
        } // End state with elasticity
      );
    }
  };

  useEffect(() => {
    // Initial animation
    animateTabContent(0);
  }, []);

  return (
    <section ref={containerRef}>
      <div className="bg-theme relative overflow-hidden z-[2] mb-[15px] pt-[110px] md:pt-[130px] lg:pt-[125px] xl:pt-[130px] 2xl:pt-[235px] pb-[260px] md:pb-[350px] lg:pb-[464px]">
        {/* Background Shapes */}
        <Image
          width={578}
          height={678}
          src="/assets/imgs/hero/marketing/bg-shape.png"
          className="hidden lg:block absolute top-0 start-0 rotate-180 -z-[2] rtl_y"
          alt="background shape"
        />
        <Image
          width={578}
          height={678}
          src="/assets/imgs/hero/marketing/bg-shape.png"
          className="hidden lg:block absolute end-0 top-[300px] -z-[2] rtl_y"
          alt="background shape"
        />
        {social[0] && (
          <div className="shape-design absolute !hidden lg:!flex start-[262px] lg:start-[50px] xl:start-[120px] 2xl:start-[284px] top-[360px] md:top-[150px] xl:top-[190px] 2xl:top-[236px]">
            <Image width={34} height={34} src={social[0]} alt="shape" />
          </div>
        )}

        {social[1] && (
          <div className="shape-design absolute !hidden lg:!flex start-[155px] lg:start-[310px] xl:start-[184px] 2xl:start-[362px] top-[115px] md:top-[490px] xl:top-[324px] 2xl:top-[444px] wc-y-anim">
            <Image width={34} height={34} src={social[1]} alt="shape" />
          </div>
        )}

        {social[2] && (
          <div className="shape-design absolute !hidden lg:!flex end-[8px] lg:end-[40px] xl:end-[120px] top-[309px] 2xl:top-[409px]">
            <Image width={34} height={34} src={social[3]} alt="shape" />
          </div>
        )}

        {social[3] && (
          <div className="shape-design absolute !hidden lg:!flex end-[209px] top-[633px] wc-y-anim">
            <Image width={34} height={34} src={social[3]} alt="shape" />
          </div>
        )}
        <div className="container text-center">
          <div className="pb-[15px] 2xl:pb-[33px]">
            <span className="text-[17px] md:text-[20px] font-medium text-white has_fade_anim">
              {sub_title}
            </span>
          </div>
          <h1
            className="text-[40px] md:text-[55px] lg:text-[65px] xl:text-[90px] pb-[20px] xl:pb-[46px] !text-white has_fade_anim"
            data-delay="0.25"
            dangerouslySetInnerHTML={markdownify(title)}
          />

          <p
            className="text-[22px] text-white mb-[47px] has_fade_anim"
            data-delay="0.35"
          >
            {details}
          </p>
          <div
            className="mt-[23px] xl:mt-[43px] flex justify-center flex-nowrap md:flex-wrap gap-[15px] md:gap-[20px] has_fade_anim"
            data-delay="0.45"
          >
            {action_btn && action_btn.enable && (
              <div className="flex flex-col items-center">
                <a
                  href={action_btn.link}
                  className={cn(buttonVariants({ variant: "primary3" }))}
                >
                  <span className="btn-span" data-text={action_btn.label}>
                    {action_btn.label}
                  </span>
                </a>
                <div className="mt-10 animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 13l-7 7-7-7m14-6l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {feature && enable && (
        <div
          className="-mt-[190px] md:-mt-[320px] relative z-[2] has_fade_anim"
          data-delay="0.65"
        >
          <div className="container" ref={containerRef} dir="ltr">
            {tab_lists &&
              tab_lists.length &&
              tab_content &&
              tab_content.length && (
                <Tabs
                  defaultValue={tab_lists[0].key}
                  className="mt-[20px] md:mt-[40px] lg:mt-[60px] bg-[#F5F6FA] p-[15px] md:p-[30px] rounded-theme"
                  onValueChange={(value) => {
                    const index = tab_lists.findIndex(
                      (tab) => tab.key === value
                    );
                    animateTabContent(index); // Trigger animation when tab changes
                  }}
                >
                  <TabsList className="h-full flex w-full overflow-x-auto justify-between gap-[10px] bg-white rounded-theme mb-[50px] p-[15px]">
                    {tab_lists.map((tab, i) => (
                      <TabsTrigger
                        key={`tab_list-${i}`}
                        value={tab.key}
                        className="data-[state=active]:shadow-none data-[state=active]:bg-[#F5F6FA] cursor-pointer"
                        asChild
                      >
                        <div className="flex items-center !justify-start min-w-[200px] lg:min-w-[300px] gap-[20px] ps-4 py-2 pe-6 w-full !rounded-[15px] !whitespace-normal">
                          <div className="rounded-full flex justify-center items-center">
                            <Image
                              width={55}
                              height={55}
                              src={tab.image}
                              alt="icon image"
                            />
                          </div>
                          <p className="text-[14px] md:text-[20px] leading-[1.12] text-primary font-semibold has_fade_anim">
                            {tab.name}
                          </p>
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {tab_content.map((tab, i) => (
                    <TabsContent
                      key={`tab_content-${i}`}
                      value={tab.key}
                      ref={(el) => {
                        tabContentRef.current[i] = el!;
                      }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-[auto_450px] 2xl:grid-cols-[auto_550px] gap-[20px] md:gap-[30px] lg:gap-[80px] p-0 2xl:px-[60px]">
                        <div>
                          <h2 className="text-[22px] xl:text-[40px] leading-tight has_fade_anim">
                            {tab.title}
                          </h2>
                          <p className="mt-[20px] has_fade_anim text-xl">
                            {tab.content}
                          </p>
                          <div className="mt-[32px] has_fade_anim">
                            {action_btn && action_btn.enable && (
                              <a
                                href={action_btn.link}
                                className={cn(
                                  buttonVariants({ variant: "primary3" })
                                )}
                              >
                                <span
                                  className="btn-span"
                                  data-text={action_btn.label}
                                >
                                  {action_btn.label}
                                </span>
                              </a>
                            )}
                          </div>
                        </div>
                        <div>
                          <video
                            width={616}
                            height={616}
                            className="rounded-[40px]"
                            loop
                            autoPlay
                            playsInline
                            muted
                          >
                            <source src={tab.video} type="video/webm" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MessengerHero;
