import React from "react";
import CategorySlider from "../../components/sections/CategorySlider";
import RestaurantGrid from "../../components/sections/ResturantGrid";
import OnlineShops from "../../components/sections/OnlineShops";
import Offers from "../../components/sections/Offers";
import OurBrands from "../../components/sections/OurBrands";
import NewsLetter from "../../components/sections/NewsLetter";
import Footer from "../../components/sections/Footer";
import BestItems from "../../components/sections/BestItems";
import BestSellers from "../../components/sections/BestSellers";
import TopSellers from "../../components/sections/TopSellers";
import OurProducts from "../../components/sections/OurProducts";

export default function Homepage() {
  return (
    <div>
      {/* Banner */}

      <TopSellers />

      {/* Category Slider */}
      <CategorySlider />


      <OurProducts />

      <Offers />

      <OurBrands />

      <NewsLetter />

      <Footer />
    </div>
  );
}
