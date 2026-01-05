import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/pagination'
export default function Header() {
  return (
    <Swiper
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2,
      }}
      autoplay={{
        delay:5000,
      }}
      data-swiper-autoplay="1000"
modules = { [Pagination, Autoplay]}
className = "w-full h-85 flex flex-col"
slidesPerView = { 1}
dir = "ltr"
  >
      <SwiperSlide className=" bg-center bg-[url('banner1.jpeg')] bg-cover">
      </SwiperSlide>
      <SwiperSlide className=" bg-center bg-[url('banner2.jpeg')] bg-cover">
      </SwiperSlide>
      <SwiperSlide className=" bg-center bg-[url('banner3.jpeg')] bg-cover">
      </SwiperSlide>
    </Swiper >
  );
}
