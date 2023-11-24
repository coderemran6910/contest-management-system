import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import '../../HomePage/SliderBestCreator/slider.css'

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function SliderBestCreator({ bestCreator }) {
  // console.log(bestCreator);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper max-w-7xl"
      >
        {bestCreator.map((creator) => {
          const { contestDescription, name, image, contest_id, contestName } = creator;

          return (
            <SwiperSlide key={contest_id} className="w-3/12 bg-[#FFA439] rounded-xl">
             <div className="flex justify-center items-center ">
             <img
                className="w-6/12 h-96 object-cover flex-1 rounded-l-xl"
                src={image}
              />

            <div className="flex-1 px-20">
              <h2 className="text-3xl md:text-4xl text-black font-bold uppercase mb-10">{name}</h2>
              <p className="text-lg  text-slate-800">{contestDescription}</p>
              <p>contest name: {contestName}</p>
            </div>
             </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
