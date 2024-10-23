import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import barries from "../../assets/barries.jpg";
import apples from "../../assets/apples.jpg";
import grapes from "../../assets/grapes.jpg";
import green_apple from "../../assets/green_apple.jpg";
import oat_meal from "../../assets/oat_meal.jpg";
import salad from "../../assets/salad.jpg";
import grains from "../../assets/grains.jpg";
import banana from "../../assets/banana.jpg";

const categories = [
  { name: "Berries", image: barries, link: "/category/samosa" },
  { name: "Apples", image: apples, link: "/category/pasta" },
  { name: "Paratha", image: grapes, link: "/category/paratha" },
  { name: "Green Apple", image: green_apple, link: "/category/pure-veg" },
  { name: "Ice-Cream", image: oat_meal, link: "/category/ice-cream" },
  { name: "Salad", image: salad, link: "/category/salad" },
  { name: "Kebabs", image: barries, link: "/category/kebabs" },
  { name: "Pastry", image: grains, link: "/category/pastry" },
  { name: "Shawarma", image: salad, link: "/category/shawarma" },
  { name: "Oat Meal", image: oat_meal, link: "/category/noodles" },
  { name: "Idli", image: banana, link: "/category/idli" },
  { name: "Shake", image: barries, link: "/category/shake" },
];

export default function CategorySlider() {
  const scrollContainerRef = useRef(null);

  // Function to manually scroll left
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft -= 300; // Scroll left by 300px
    }
  };

  // Function to manually scroll right
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft += 300; // Scroll right by 300px
    }
  };

  return (
    <div className="relative container mx-auto py-6">
      {/* Heading */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl mt-2 font-medium tracking-tight">
          Featured Categories
        </h2>
      </div>

      {/* Slider for Desktop */}
      <div className="hidden sm:flex items-center justify-center">
        {/* Left Scroll Button */}
        <button
          onClick={handleScrollLeft}
          className="p-2 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-700 text-white rounded-full"
        >
          <FaChevronLeft className="w-4 h-4" />
        </button>

        {/* Category Items (Slider) */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar px-6 w-full"
        >
          {categories.map((category, index) => (
            <a
              href={category.link}
              key={index}
              className="flex-shrink-0 w-28 md:w-32 lg:w-36 text-center transition-transform duration-150 ease-in-out"
            >
              {/* Image Container */}
              <div
                className="rounded-xl overflow-hidden mb-2"
                style={{ height: "120px" }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
              <p className="text-sm md:text-base font-medium">
                {category.name}
              </p>
            </a>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={handleScrollRight}
          className="p-2 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-700 text-white rounded-full"
        >
          <FaChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Cards for Mobile View */}
      <div className="block sm:hidden">
        <div className="grid grid-cols-3 gap-2">
          {categories.map((category, index) => (
            <a
              href={category.link}
              key={index}
              className="text-center transition-transform duration-150 ease-in-out"
            >
              <div className="p-2 rounded-lg shadow-md border bg-white">
                <p className="text-xs font-medium text-gray-700">
                  {category.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
