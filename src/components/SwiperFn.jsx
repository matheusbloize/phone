// CSS
import "swiper/css";
import "swiper/css/pagination";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import PhoneApps from "./Phone/PhoneApps/PhoneApps";

function SwiperFn() {
  return (
    <>
      <Swiper allowTouchMove={true} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <PhoneApps />
        </SwiperSlide>
        <SwiperSlide>
          <div className="phone-inside-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="phone-inside-center">
            <a className="easter-egg" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"></a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperFn