"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

// gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { markdownify } from "@/lib/helper/convert";

// shadcn components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";

type Props = {
  feature: {
    data: {
      title: string;
      details: string;
      items: {
        question: string;
        answer: string;
        image: string;
        icon: string;
      }[];
    };
  };
};

const InstagramFeature2 = ({ feature }: Props) => {
  const { title, details, items } = feature.data;

  const containerRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLDivElement>(null!); // Reference to the image container

  // State to track currently selected image
  const [selectedImage, setSelectedImage] = useState<string>(items[0].image);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  // Function to update the image based on the clicked accordion item
  const handleImageChange = (image: string) => {
    if (image !== selectedImage) {
      // Trigger image change animation (pop from bottom and fade out)
      gsap.to(imageRef.current, {
        y: 20, // Move slightly down for pop effect
        opacity: 0,
        duration: 0.2,
        ease: "power1.out",
        onComplete: () => {
          // Update the image after fading out
          setSelectedImage(image);
          // Reset and animate the new image in (pop from bottom with bounce)
          gsap.fromTo(
            imageRef.current,
            { y: 50, opacity: 0 }, // Start from below and fully transparent
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "bounce.out", // Add bounce effect
            }
          );
        },
      });
    }
  };

  useEffect(() => {
    // Initial animation to slide in the image
    gsap.fromTo(
      imageRef.current,
      { x: 1000, opacity: 0 }, // Slide in from the right
      { x: 0, opacity: 1, duration: 0.5 }
    );
  }, []);

  return (
    <section className="pt-[42px] md:pt-[62px] xl:pt-[82px] 2xl:pt-[112px] bg-primary sec_space_bottom2">
      <div className="container" ref={containerRef}>
        <TitleSection2
          title={title}
          details={details}
          titleClassName="!text-white max-w-[829px]"
          detailsClassName="!text-white-2 max-w-[750px] !mt-[27px]"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1fr] xl:grid-cols-[0.5fr_1fr] mt-[33px] xl:mt-[43px] 2xl:mt-[63px] gap-x-[140px] gap-y-[40px]">
          {items && items.length && (
            <Accordion
              type="single"
              collapsible
              className="w-full has_fade_anim flex flex-col justify-center"
              defaultValue="item-1"
            >
              {items.map((item, i) => (
                <AccordionItem
                  key={`accordion_item-${i}`}
                  value={`item-${i + 1}`}
                  className="border-b-0 mb-[7px] rounded-theme overflow-hidden"
                  onClick={() => handleImageChange(item.image)} // Update the image on click
                >
                  <AccordionTrigger className="bg-primary-100 xl:text-xl 2xl:text-2xl leading-tight text-white shadow-none text-start font-medium pt-[21px] lg:pt-[31px] pb-[15px] lg:pb-[25px] px-[25px] md:px-[40px] hover:no-underline flex items-center">
                    {/* Icon before the question */}
                    <Image
                      src={item.icon}
                      width={24}
                      height={24}
                      alt="icon"
                      className="mr-3"
                    />
                    <span
                      className="[&>br]:hidden xl:[&>br]:inline"
                      dangerouslySetInnerHTML={markdownify(item.question)}
                    />
                  </AccordionTrigger>
                  <AccordionContent className="bg-primary-100 text-lg leading-[1.44] text-white-2 pt-0 pb-[23px] lg:pb-6 px-[25px] md:px-[30px]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}

          <div className="has_fade_anim" ref={imageRef}>
            {selectedImage && (
              <Image
                width={810}
                height={516}
                src={selectedImage}
                className="rounded-theme"
                alt="feature image"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeature2;
