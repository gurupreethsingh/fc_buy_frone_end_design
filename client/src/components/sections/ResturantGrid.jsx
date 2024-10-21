
import { useState, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import berries from "../../assets/barries.jpg";
import kiwi from "../../assets/apples.jpg";
import grapes from "../../assets/grapes.jpg";
import lemon from "../../assets/green_apple.jpg";
import more_beries from "../../assets/oat_meal.jpg";
import salad from "../../assets/salad.jpg";
import oranges from "../../assets/grains.jpg";
import strawberries from "../../assets/banana.jpg";

const topRestaurants = [
  { name: "McDonald's", image: berries, discount: "₹179", time: "40-45 mins" },
  { name: "Burger King", image: kiwi, discount: "60% OFF", time: "40-45 mins" },
  {
    name: "La Pino'z Pizza",
    image: grapes,
    discount: "₹120",
    time: "30-35 mins",
  },
  { name: "Polar Bear", image: lemon, discount: "20% OFF", time: "30-35 mins" },
  { name: "Ibaco", image: oranges, discount: "₹50", time: "30-35 mins" },
  {
    name: "Daily Kitchen",
    image: strawberries,
    discount: "₹129",
    time: "20-30 mins",
  },
  { name: "Ibaco", image: more_beries, discount: "₹50", time: "30-35 mins" },
  { name: "Daily Kitchen", image: salad, discount: "₹129", time: "20-30 mins" },
  { name: "Burger King", image: kiwi, discount: "60% OFF", time: "40-45 mins" },
  {
    name: "La Pino'z Pizza",
    image: grapes,
    discount: "₹120",
    time: "30-35 mins",
  },
  { name: "Polar Bear", image: lemon, discount: "20% OFF", time: "30-35 mins" },
  { name: "Ibaco", image: oranges, discount: "₹50", time: "30-35 mins" },
  {
    name: "Daily Kitchen",
    image: strawberries,
    discount: "₹129",
    time: "20-30 mins",
  },
];

const itemsPerPage = 5; // Display 5 items per page

export default function RestaurantGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showMore, setShowMore] = useState(false);

  const totalPages = useMemo(
    () => Math.ceil(topRestaurants.length / itemsPerPage),
    []
  );

  // Pagination logic
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleShowMore = () => {
    setShowMore((prev) => !prev); // Toggle the Show More/Show Less functionality
  };

  // Memoized result for visible restaurants
  const visibleRestaurants = useMemo(() => {
    if (showMore) {
      return topRestaurants;
    } else {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return topRestaurants.slice(startIndex, startIndex + itemsPerPage);
    }
  }, [showMore, currentPage]);

  return (
    <div className="mt-6 relative container">
      <h2 className="text-2xl mt-4 font-medium tracking-tight">
        Top Stores in Bangalore
      </h2>
      {/* Pagination Info and Navigation (Only shown if "Show More" is not active) */}
      {!showMore && (
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500"></div>
          <div className="flex items-center space-x-2">
            {/* Page Number */}
            <span className="text-xs text-gray-500">
              Page {currentPage} of {totalPages}
            </span>
            {/* Previous Page Button */}
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`w-8 h-8 flex items-center justify-center rounded-full shadow-md text-white bg-gradient-to-r from-cyan-400 via-teal-500 to-indigo-500 hover:from-cyan-500 hover:via-teal-600 hover:to-blue-800 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Next Page Button */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-8 h-8 flex items-center justify-center rounded-full shadow-md text-white bg-gradient-to-r from-cyan-400 via-teal-500 to-indigo-500 hover:from-cyan-500 hover:via-teal-600 hover:to-blue-800 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      )}

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {visibleRestaurants.map((restaurant, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            {/* Image Container with fixed height */}
            <div className="h-44 w-full overflow-hidden rounded-t-lg">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            {/* Restaurant Info */}
            <div className="mt-2 px-2">
              <h3 className="text-lg font-semibold">{restaurant.name}</h3>
              <p className="text-sm text-gray-500">
                Delivery: {restaurant.time}
              </p>
              <p className="mt-1 font-bold text-orange-500">
                {restaurant.discount}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleShowMore}
          className="px-3 py-1 text-white text-sm rounded-md shadow-md bg-gradient-to-r from-cyan-400 via-teal-500 to-indigo-500 hover:from-cyan-500 hover:via-teal-600 hover:to-blue-800"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
