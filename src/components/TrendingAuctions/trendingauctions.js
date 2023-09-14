import React from "react";
import { BagCheckFill } from "react-bootstrap-icons";
import Productcard from "../Cards/ProductCard/productcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "./trendingauctions.css"

function TrendingAuctions({ titleT }) {
  const data = [
    { title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!", icon: <BagCheckFill /> },
    { title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!", icon: <BagCheckFill /> },
    { title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!", icon: <BagCheckFill /> },
    { title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!", icon: <BagCheckFill /> },
    { title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!", icon: <BagCheckFill /> },
    { title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!", icon: <BagCheckFill /> },
    { title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!", icon: <BagCheckFill /> },
    { title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!", icon: <BagCheckFill /> },
    { title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!", icon: <BagCheckFill /> },
    { title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!", icon: <BagCheckFill /> },
  ];

  let responsiveSlide = {
    320: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 10,
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
    <div className="trending mt-4 row" style={{ display: "flex" }}>
        <div className="d-flex flex-row justify-content-between  align-items-center mt-1">
        <div className="fw-bold">{titleT}</div>
        {/* <div className="">View All</div> */}
        <button type="button" class="btn btn-link text-decoration-none">View All</button>
      </div>
      <div className="text-secondary">
        See what's popular across thousands of Products
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
        // breakpoints={responsiveSlide}
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="col-lg-3 col-sm-4" style={{width:"143px", height:"291px"}}>
              <Productcard data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TrendingAuctions;
