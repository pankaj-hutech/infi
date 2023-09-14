import React from "react";
import styles from "./index.module.scss";
import Header from "../../components/Header/header";
import LandingPageSections from "../../components/LandingPageSections/landingpagesections";
import LandingPageCategories from "../../components/LandingPageCategories/landingpagecategories";
import TrendingAuctions from "../../components/TrendingAuctions/trendingauctions";
import DarkVariantExample from "../../components/carousel/Carousel";

const LandingPage = () => {
  return (
    <div className={styles.main_body}>
      <Header />
      <LandingPageSections />
      <DarkVariantExample/>
      <LandingPageCategories />
      <TrendingAuctions titleT="Trending Auctions" />
      <TrendingAuctions titleT="Featured products" />
      <TrendingAuctions titleT="Featured Services" />
      {/* <LandingPageCarousel /> */}
    </div>
  );
};

export default LandingPage;
