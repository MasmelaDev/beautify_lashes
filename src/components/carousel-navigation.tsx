import { useSwiper } from "swiper/react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

export const CarouselNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-center gap-2 mt-3 w-full  z-50 items-center p-2">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-white shadow p-1 rounded-full flex justify-center items-center relative right-8"
      >
        <IconChevronLeft size={30} color="#731963" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-white p-1 rounded-full flex justify-center items-center  relative left-8"
      >
        <IconChevronRight size={30} color="#731963" />
      </button>
    </div>
  );
};
