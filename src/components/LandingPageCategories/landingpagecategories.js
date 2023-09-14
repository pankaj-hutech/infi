import React from "react";
import { BagCheckFill } from "react-bootstrap-icons";
import categorySvg from '../../../src/assets/SVG/clarity_building-line.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

function LandingPageCategories() {
  const data = [
    { title: "Facility Management", icon: categorySvg },
    { title: "Construction", icon: categorySvg },
    { title: "Fashion accessories", icon: categorySvg },
    { title: "Food", icon: categorySvg },
    { title: "Health", icon: categorySvg },
    { title: "Education", icon: categorySvg },
    { title: "Construction", icon: categorySvg },
    { title: "Health", icon: categorySvg },
    { title: "Facility", icon: categorySvg },
    { title: "Food", icon: categorySvg },
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
    <div className="row mt-4">
      <div className="d-flex flex-row justify-content-between  align-items-center mt-4 mb-4">
        <div className="fw-bold">Explore Popular Categories</div>
        {/* <div className="">View All</div> */}
        <button type="button" class="btn btn-link text-decoration-none">View All</button>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loopFillGroupWithBlank={false}
        className="mySwiper"
        breakpoints={responsiveSlide}
      >
        {data?.map(({ icon, title }, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="col-lg-1  border p-4 d-flex justify-content-start flex-column  align-items-center"
                style={{borderRadius : '10px' , p : 2 , background : '#F5F5F5' , width: "90px" , height:"103px" 

              }}
              >
                <img height={39} width={39} src={categorySvg}  alt="t"/>
                <div className="text-center fw-bold" style={{fontSize:"10px"}}>{title}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default LandingPageCategories;
