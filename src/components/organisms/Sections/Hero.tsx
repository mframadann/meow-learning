"use client";
import "swiper/css";
import "swiper/css/pagination";

import LearningPaths from "@mwl/constants/learning-path.json";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { LearningPathBadge } from "@mwl/components/atoms/Badges";
import { IconTypeEnums } from "@mwl/components/atoms/Badges/LearningPathBadge";

const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-[925px] bg-ornament-box bg-cover bg-center"
    >
      <div className="flex flex-col text-center items-center px-4">
        <span className="w-full max-w-fit py-2 px-3 bg-white/10 rounded-full uppercase text-white text-xs tracking-wide mt-10">
          Meow Learning
        </span>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-10 items-center">
            <div className="flex gap-3.5 flex-col">
              <h1 className="text-5xl text-white font-bold leading-tight">
                <span className="text-transparent bg-primary-500 bg-clip-text">
                  Learn About Webdev Easily
                </span>
                <span> With Meow Learning</span>
              </h1>
              <p className="text-gray-200 text-sm font-medium">
                Learn about basic web development easily in meow learning with
                expertise instructor in related field.
              </p>
            </div>
            <button className="w-full max-w-fit py-4 px-6 bg-primary-500 rounded-full text-white flex items-center space-x-2 font-medium">
              <span>Get Started</span>

              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 9.00021H12.67L7.79 13.8802C7.4 14.2702 7.4 14.9102 7.79 15.3002C8.18 15.6902 8.81 15.6902 9.2 15.3002L15.79 8.71021C16.18 8.32021 16.18 7.69022 15.79 7.30022L9.21 0.700215C8.82 0.310215 8.19 0.310215 7.8 0.700215C7.41 1.09021 7.41 1.72022 7.8 2.11022L12.67 7.00022H1.5C0.95 7.00022 0.5 7.45021 0.5 8.00022C0.5 8.55021 0.95 9.00021 1.5 9.00021Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="min-h-[342px] px-10 py-4 bg-card-banner bg-no-repeat bg-center bg-contain">
            <div className="mx-auto text-lg font-bold text-white max-w-52">
              <span>What we will learn in meow learning?</span>
            </div>
            <div className="w-fit mx-auto h-full min-h-[250px] flex justify-center items-center">
              <Swiper
                className="max-w-[265px] mt-10"
                spaceBetween={0}
                slidesPerView={1}
                modules={[Pagination]}
                loop={true}
                pagination={{
                  clickable: true,
                  bulletActiveClass: "bullet-white",
                }}
              >
                {LearningPaths.map((lp) => (
                  <SwiperSlide key={lp.type} className="mb-14">
                    <LearningPathBadge
                      type={lp.type as unknown as IconTypeEnums}
                      title={lp.text}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
