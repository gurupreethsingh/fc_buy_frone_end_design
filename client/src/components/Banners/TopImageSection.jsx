import React, { useState } from "react";
import apples from "../../assets/apples.jpg";
import barries from "../../assets/barries.jpg";
import salad from "../../assets/salad.jpg"; // Import additional images

const offers = [
  {
    title: "Diwali Special",
    description:
      "Enjoy up to 50% off on your favorite products this festive season. Gravida quam mi erat tortor neque molestie.",
    image: apples,
    tagline: "Festival Offers",
  },
  {
    title: "Winter Clearance",
    description:
      "Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Get warm with our winter collection.",
    image: barries,
    tagline: "Limited Time Deals",
  },
  {
    title: "Summer Splash Sale",
    description:
      "Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.",
    image: salad,
    tagline: "Hot Deals",
  },
];

export default function TopImageSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === offers.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? offers.length - 1 : prevSlide - 1
    );
  };

  const currentOffer = offers[currentSlide];

  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-500 rounded-xl shadow-lg overflow-hidden">
        {/* Text Section */}
        <div className="md:w-2/3 flex flex-col justify-center p-8 text-white">
          <p className="text-2xl font-light leading-relaxed mb-6">
            {currentOffer.description}
          </p>
          <div>
            <p className="text-lg font-bold">{currentOffer.title}</p>
            <p className="text-sm text-orange-300">{currentOffer.tagline}</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            className="object-cover w-full h-full rounded-tl-xl shadow-lg transition-transform duration-300 hover:scale-105"
            src={currentOffer.image}
            alt={currentOffer.title}
          />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handlePrevSlide}
          className="px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
        >
          Prev
        </button>
        <button
          onClick={handleNextSlide}
          className="px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
