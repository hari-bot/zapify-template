"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react"; // Ensure this hook is available in your project
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import TitleSection2 from "@/components/shared/title-section/title-section2";

type Props = {
  banner: {
    data: {
      title: string;
      details: string;
      videoUrl: string;
    };
  };
};

const VideoBanner = ({ banner }: Props) => {
  const { title, details, videoUrl } = banner.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="sec_space1 bg-gray-100 mt-20">
      <div className="container mx-auto px-5" ref={containerRef}>
        <TitleSection2
          title={title}
          details={details}
          titleClassName="max-w-[795px]"
          detailsClassName="max-w-[695px] mb-10"
        />
        <div className="relative flex justify-center items-center">
          {/* Video Section */}
          <div className="w-full max-w-5xl">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              src={videoUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
