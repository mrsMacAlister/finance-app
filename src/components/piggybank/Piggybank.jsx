import "./piggybank.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Piggybank = () => {
  return (
    <div className="piggybank">
      <div className="title">SAVINGS</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
      <img
        src="https://www.svgrepo.com/show/253917/piggy-bank-euro.svg"
        alt=""
      />
      <div className="goal">Goal: 5.320 €</div>
    </div>
  );
};

export default Piggybank;
