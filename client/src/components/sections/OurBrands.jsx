import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import berries from "../../assets/berries.jpg";
import kiwi from "../../assets/kiwi.jpg";
import grapes from "../../assets/grapes.jpg";
import lemon from "../../assets/lemon.jpg";
import more_beries from "../../assets/more_beries.jpg";
import salad from "../../assets/salad.jpg";
import oranges from "../../assets/oranges.jpg";
import strawberries from "../../assets/strawberries.jpg";

const images = [
  { src: more_beries, alt: "More Berries" },
  { src: salad, alt: "Salad" },
  { src: berries, alt: "Berries" },
  { src: kiwi, alt: "Kiwi" },
  { src: grapes, alt: "Grapes" },
  { src: lemon, alt: "Lemon" },
  { src: oranges, alt: "Oranges" },
  { src: strawberries, alt: "Strawberries" },
];

const OurBrands = () => {
  return (
    <div className="container mx-auto mt-4 mb-8 border pt-5 pb-5 shadow-sm rounded-5">
      <p className="mx-auto mt-2 mb-8 max-w-lg text-pretty text-center text-3xl font-medium tracking-tight text-gray-950 sm:text-4xl">
        Our Brands
      </p>
      <div
        id="carouselExampleDark"
        className="relative carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000" // Auto-slide every second
      >
        {/* Indicators */}
        <div className="carousel-indicators flex justify-center mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner mt-10 mb-10">
          {/* Slide 1 */}
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="flex justify-around space-x-4">
              {images.slice(0, 6).map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-24 h-24 object-cover rounded-lg transform transition-transform duration-200 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm text-center">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" data-bs-interval="3000">
            <div className="flex justify-around space-x-4">
              {images.slice(6, 12).map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-24 h-24 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm text-center">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute top-1/2 left-0 z-10 p-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-full"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-0 z-10 p-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-full"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default OurBrands;
