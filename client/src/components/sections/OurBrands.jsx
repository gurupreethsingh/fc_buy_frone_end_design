
// import React from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import berries from "../../assets/barries.jpg";
// import kiwi from "../../assets/apples.jpg";
// import grapes from "../../assets/grapes.jpg";
// import lemon from "../../assets/green_apple.jpg";
// import more_beries from "../../assets/oat_meal.jpg";
// import salad from "../../assets/salad.jpg";
// import oranges from "../../assets/grains.jpg";
// import strawberries from "../../assets/banana.jpg";

// const images = [
//   { src: more_beries, alt: "More Berries" },
//   { src: salad, alt: "Salad" },
//   { src: berries, alt: "Berries" },
//   { src: kiwi, alt: "Kiwi" },
//   { src: grapes, alt: "Grapes" },
//   { src: lemon, alt: "Lemon" },
//   { src: oranges, alt: "Oranges" },
//   { src: strawberries, alt: "Strawberries" },
// ];

// const OurBrands = () => {
//   return (
//     <div className="container mx-auto mt-4 mb-8 border-0 pt-5 pb-5 rounded relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:shadow-[0px_10px_15px_rgba(0,0,0,0.3)]">
//       <p className="mx-auto mt-2 mb-8 max-w-lg text-pretty text-center text-2xl sm:text-3xl font-medium tracking-tight text-gray-950">
//         Our Brands
//       </p>

//       <div
//         id="carouselExampleDark"
//         className="relative carousel slide"
//         data-bs-ride="carousel"
//         data-bs-interval="3000"
//       >
//         {/* Indicators */}
//         <div className="carousel-indicators flex justify-center mb-4">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//         </div>

//         <div className="carousel-inner mt-6 mb-6">
//           {/* Slide 1 */}
//           <div className="carousel-item active" data-bs-interval="3000">
//             <div className="flex justify-around space-x-2 sm:space-x-4">
//               {images.slice(0, 4).map((image, index) => (
//                 <div key={index} className="relative group w-1/4 sm:w-1/5 lg:w-1/6">
//                   <img
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full h-24 sm:h-32 object-cover rounded-lg transform transition-transform duration-200 hover:scale-105"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <p className="text-white text-xs sm:text-sm text-center">
//                       {image.alt}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Slide 2 */}
//           <div className="carousel-item" data-bs-interval="3000">
//             <div className="flex justify-around space-x-2 sm:space-x-4">
//               {images.slice(4, 8).map((image, index) => (
//                 <div key={index} className="relative group w-1/4 sm:w-1/5 lg:w-1/6">
//                   <img
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full h-24 sm:h-32 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <p className="text-white text-xs sm:text-sm text-center">
//                       {image.alt}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Navigation buttons */}
//         <button
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-full"
//           type="button"
//           data-bs-target="#carouselExampleDark"
//           data-bs-slide="prev"
//         >
//           <FaChevronLeft className="w-4 h-4" />
//         </button>
//         <button
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-full"
//           type="button"
//           data-bs-target="#carouselExampleDark"
//           data-bs-slide="next"
//         >
//           <FaChevronRight className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OurBrands;

//

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import berries from "../../assets/barries.jpg";
import kiwi from "../../assets/apples.jpg";
import grapes from "../../assets/grapes.jpg";
import lemon from "../../assets/green_apple.jpg";
import more_beries from "../../assets/oat_meal.jpg";
import salad from "../../assets/salad.jpg";
import oranges from "../../assets/grains.jpg";
import strawberries from "../../assets/banana.jpg";

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
    <div className="container mx-auto mt-2 mb-2 sm:mt-4 sm:mb-4 md:mt-6 md:mb-8 border-0 pt-3 pb-3 md:pt-5 md:pb-5 rounded relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:shadow-[0px_10px_15px_rgba(0,0,0,0.3)]">
      <p className="mx-auto  mb-8 sm:mb-6 max-w-lg text-pretty text-center text-2xl sm:text-3xl font-medium tracking-tight text-gray-950">
        Our Brands
      </p>

      <div
        id="carouselExampleDark"
        className="relative carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
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

        <div className="carousel-inner mt-4 mb-4 sm:mt-6 sm:mb-6">
          {/* Slide 1 */}
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="flex justify-around space-x-2 sm:space-x-4">
              {images.slice(0, 4).map((image, index) => (
                <div key={index} className="relative group w-1/4 sm:w-1/5 lg:w-1/6">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-24 sm:h-32 object-cover rounded-lg transform transition-transform duration-200 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs sm:text-sm text-center">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" data-bs-interval="3000">
            <div className="flex justify-around space-x-2 sm:space-x-4">
              {images.slice(4, 8).map((image, index) => (
                <div key={index} className="relative group w-1/4 sm:w-1/5 lg:w-1/6">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-24 sm:h-32 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs sm:text-sm text-center">
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
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-full"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <FaChevronLeft className="w-4 h-4" />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-full"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <FaChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default OurBrands;
