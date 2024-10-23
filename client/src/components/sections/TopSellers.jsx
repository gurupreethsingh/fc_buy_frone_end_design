import React from 'react';
import barries from "../../assets/barries.jpg";
import apples from "../../assets/apples.jpg";
import grapes from "../../assets/grapes.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TopSellers = () => {
  return (
    <div className="hidden md:block"> {/* Hidden on mobile, visible on desktop without margin */}
      <div id="carouselExampleFade" className="carousel slide carousel-fade relative" data-bs-ride="carousel">
        
        {/* Carousel Inner */}
        <div className="carousel-inner relative w-full overflow-hidden shadow-lg">
          <div className="carousel-item active">
            <img 
              src={barries} 
              className="d-block w-100 h-56 sm:h-64 md:h-80 lg:h-[500px] object-cover rounded-none" 
              alt="Berries"
            />
          </div>
          <div className="carousel-item">
            <img 
              src={apples} 
              className="d-block w-100 h-56 sm:h-64 md:h-80 lg:h-[500px] object-cover rounded-none" 
              alt="Apples"
            />
          </div>
          <div className="carousel-item">
            <img 
              src={grapes} 
              className="d-block w-100 h-56 sm:h-64 md:h-80 lg:h-[500px] object-cover rounded-none" 
              alt="Grapes"
            />
          </div>
        </div>

        {/* Prev/Next Buttons with Chevron Icons */}
        <button 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg focus:outline-none z-10" 
          type="button" 
          data-bs-target="#carouselExampleFade" 
          data-bs-slide="prev"
        >
          <FaChevronLeft className="w-4 h-4" />
        </button>

        <button 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 via-teal-500 to-cyan-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg focus:outline-none z-10" 
          type="button" 
          data-bs-target="#carouselExampleFade" 
          data-bs-slide="next"
        >
          <FaChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TopSellers;
