import React, { useState, useMemo } from "react";
import berries from "../../assets/berries.jpg";
import kiwi from "../../assets/kiwi.jpg";
import grapes from "../../assets/grapes.jpg";
import lemon from "../../assets/lemon.jpg";
import more_beries from "../../assets/more_beries.jpg";
import salad from "../../assets/salad.jpg";
import oranges from "../../assets/oranges.jpg";
import strawberries from "../../assets/strawberries.jpg";

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

const itemsPerRow = 4;
const itemsToShowInitially = itemsPerRow * 3; // Show 3 rows initially

// Memoize the individual restaurant component to avoid unnecessary re-renders
const RestaurantCard = React.memo(({ restaurant }) => {
  return (
    <div className="border rounded-lg shadow-lg">
      {/* Image Container with hover and transition effects */}
      <div className="h-44 w-full overflow-hidden rounded-t-lg">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Restaurant Info */}
      <div className="mt-2 px-2">
        <h3 className="text-lg font-semibold">{restaurant.name}</h3>
        <p className="text-sm text-gray-500">Delivery: {restaurant.time}</p>
        <p className="mt-1 font-bold text-orange-500">{restaurant.discount}</p>
      </div>
    </div>
  );
});

export default function OnlineShops() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore((prev) => !prev); // Toggle the Show More/Show Less functionality
  };

  // Memoized result for visible restaurants
  const visibleRestaurants = useMemo(() => {
    return showMore
      ? topRestaurants
      : topRestaurants.slice(0, itemsToShowInitially);
  }, [showMore]);

  return (
    <div className="mt-6 relative container">
      <h2 className="text-2xl font-medium tracking-tight mt-4 mb-8 sm:text-center lg:text-left">
        Online Connected Store Locations in Bangalore
      </h2>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleShowMore}
          className="px-3 py-1 text-white text-sm rounded-md shadow-md bg-gradient-to-r from-cyan-400 via-teal-500 to-indigo-500 hover:from-cyan-500 hover:via-teal-600 hover:to-blue-800 transition-all duration-200"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
