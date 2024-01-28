"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { CarouselNavigation } from "./carousel-navigation";

export const Carousel = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <div className="flex   flex-col items-center text-center  gap-1 px-6 pb-5 pt-3 bg-[#f6f6f6] rounded-lg">
            <h3 className="text-xl font-medium">Classic</h3>
            <p className="mb-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              ratione,
            </p>
            <div className="h-[300px] w-[300px] bg-[#333] animate-pulse rounded-md"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex   flex-col items-center text-center  gap-1 px-6 pb-5 pt-3 bg-[#f6f6f6] rounded-lg">
            <h3 className="text-xl font-medium">Classic</h3>
            <p className="mb-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              ratione,
            </p>
            <div className="h-[300px] w-[300px] bg-[#333] animate-pulse rounded-md"></div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex   flex-col items-center text-center  gap-1 px-6 pb-5 pt-3 bg-[#f6f6f6] rounded-lg">
            <h3 className="text-xl font-medium">Classic</h3>
            <p className="mb-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              ratione,
            </p>
            <div className="h-[300px] w-[300px] bg-[#333] animate-pulse rounded-md"></div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex   flex-col items-center text-center  gap-1 px-6 pb-5 pt-3 bg-[#f6f6f6] rounded-lg">
            <h3 className="text-xl font-medium">Classic</h3>
            <p className="mb-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              ratione,
            </p>
            <div className="h-[300px] w-[300px] bg-[#333] animate-pulse rounded-md"></div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex   flex-col items-center text-center  gap-1 px-6 pb-5 pt-3 bg-[#f6f6f6] rounded-lg">
            <h3 className="text-xl font-medium">Classic</h3>
            <p className="mb-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              ratione,
            </p>
            <div className="h-[300px] w-[300px] bg-[#333] animate-pulse rounded-md"></div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex   flex-col items-center text-center  gap-1 px-6 pb-5 pt-3 bg-[#f6f6f6] rounded-lg">
            <h3 className="text-xl font-medium">Classic</h3>
            <p className="mb-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              ratione,
            </p>
            <div className="h-[300px] w-[300px] bg-[#333] animate-pulse rounded-md"></div>
          </div>
        </SwiperSlide>
        <CarouselNavigation />
      </Swiper>
    </div>
  );
};
