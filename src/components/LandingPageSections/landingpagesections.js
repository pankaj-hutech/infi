import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

function LandingPageSections() {
  const data = [
    "Request anything",
    "Create Events",
    "Auction Items",
  ];

  let responsiveSlide = {
    320: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    800: {
      slidesPerView: 7.5,
      spaceBetween: 40,
    },
    850: {
      slidesPerView: 7.5,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 7.5,
      spaceBetween: 20,
    },
    1800: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <div className="row my-4 d-flex justify-content-around align-items-center g-2"
    >
      {data?.map((item, index) => {
        return (
          <div
            style={{ width: "10rem", height: "5rem" , backgroundColor:"#C4C4C4"}}
            key={index}
            className="text-dark d-flex justify-content-center align-items-center"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default LandingPageSections;
