// // import React, { useState, useMemo } from "react";
// // import barries from "../../assets/barries.jpg";
// // import apples from "../../assets/apples.jpg";
// // import grapes from "../../assets/grapes.jpg";
// // import green_apple from "../../assets/green_apple.jpg";
// // import oat_meal from "../../assets/oat_meal.jpg";
// // import salad from "../../assets/salad.jpg";
// // import grains from "../../assets/grains.jpg";
// // import banana from "../../assets/banana.jpg";

// // const topRestaurants = [
// //   { name: "McDonald's", image: barries, discount: "₹179", time: "40-45 mins" },
// //   { name: "Burger King", image: apples, discount: "60% OFF", time: "40-45 mins" },
// //   {
// //     name: "La Pino'z Pizza",
// //     image: grapes,
// //     discount: "₹120",
// //     time: "30-35 mins",
// //   },
// //   { name: "Polar Bear", image: green_apple, discount: "20% OFF", time: "30-35 mins" },
// //   { name: "Ibaco", image: banana, discount: "₹50", time: "30-35 mins" },
// //   {
// //     name: "Daily Kitchen",
// //     image: oat_meal,
// //     discount: "₹129",
// //     time: "20-30 mins",
// //   },
// //   { name: "Ibaco", image: grains, discount: "₹50", time: "30-35 mins" },
// //   { name: "Daily Kitchen", image: salad, discount: "₹129", time: "20-30 mins" },
// //   { name: "Burger King", image: apples, discount: "60% OFF", time: "40-45 mins" },
// //   {
// //     name: "La Pino'z Pizza",
// //     image: grapes,
// //     discount: "₹120",
// //     time: "30-35 mins",
// //   },
// //   { name: "Polar Bear", image: grains, discount: "20% OFF", time: "30-35 mins" },
// //   { name: "Ibaco", image: grapes, discount: "₹50", time: "30-35 mins" },
// //   {
// //     name: "Daily Kitchen",
// //     image: oat_meal,
// //     discount: "₹129",
// //     time: "20-30 mins",
// //   },
// // ];

// // const itemsPerRow = 4;
// // const itemsToShowInitially = itemsPerRow * 3; // Show 3 rows initially

// // // Memoize the individual restaurant component to avoid unnecessary re-renders
// // const RestaurantCard = React.memo(({ restaurant }) => {
// //   return (
// //     <div className="border rounded-lg shadow-lg">
// //       {/* Image Container with hover and transition effects */}
// //       <div className="h-44 w-full overflow-hidden rounded-t-lg">
// //         <img
// //           src={restaurant.image}
// //           alt={restaurant.name}
// //           className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
// //         />
// //       </div>
// //       {/* Restaurant Info */}
// //       <div className="mt-2 px-2">
// //         <h3 className="text-lg font-semibold">{restaurant.name}</h3>
// //         <p className="text-sm text-gray-500">Delivery: {restaurant.time}</p>
// //         <p className="mt-1 font-bold text-orange-500">{restaurant.discount}</p>
// //       </div>
// //     </div>
// //   );
// // });

// // export default function OnlineShops() {
// //   const [showMore, setShowMore] = useState(false);

// //   const handleShowMore = () => {
// //     setShowMore((prev) => !prev); // Toggle the Show More/Show Less functionality
// //   };

// //   // Memoized result for visible restaurants
// //   const visibleRestaurants = useMemo(() => {
// //     return showMore
// //       ? topRestaurants
// //       : topRestaurants.slice(0, itemsToShowInitially);
// //   }, [showMore]);

// //   return (
// //     <div className="mt-6 relative container">
// //       <h2 className="text-2xl font-medium tracking-tight mt-4 mb-8 sm:text-center lg:text-left">
// //         Our Products
// //       </h2>

// //       {/* Restaurant Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //         {visibleRestaurants.map((restaurant, index) => (
// //           <RestaurantCard key={index} restaurant={restaurant} />
// //         ))}
// //       </div>

// //       {/* Show More Button */}
// //       <div className="flex justify-center mt-6">
// //         <button
// //           onClick={handleShowMore}
// //           className="px-3 py-1 text-white text-sm rounded-md shadow-md bg-gradient-to-r from-cyan-400 via-teal-500 to-indigo-500 hover:from-cyan-500 hover:via-teal-600 hover:to-blue-800 transition-all duration-200"
// //         >
// //           {showMore ? "Show Less" : "Show More"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// //

// import React, { useState, useMemo } from "react";
// import barries from "../../assets/barries.jpg";
// import apples from "../../assets/apples.jpg";
// import grapes from "../../assets/grapes.jpg";
// import green_apple from "../../assets/green_apple.jpg";
// import oat_meal from "../../assets/oat_meal.jpg";
// import salad from "../../assets/salad.jpg";
// import grains from "../../assets/grains.jpg";
// import banana from "../../assets/banana.jpg";

// const topRestaurants = [
//   { name: "McDonald's", image: barries, discount: "₹179", time: "40-45 mins" },
//   { name: "Burger King", image: apples, discount: "60% OFF", time: "40-45 mins" },
//   {
//     name: "La Pino'z Pizza",
//     image: grapes,
//     discount: "₹120",
//     time: "30-35 mins",
//   },
//   { name: "Polar Bear", image: green_apple, discount: "20% OFF", time: "30-35 mins" },
//   { name: "Ibaco", image: banana, discount: "₹50", time: "30-35 mins" },
//   {
//     name: "Daily Kitchen",
//     image: oat_meal,
//     discount: "₹129",
//     time: "20-30 mins",
//   },
//   { name: "Ibaco", image: grains, discount: "₹50", time: "30-35 mins" },
//   { name: "Daily Kitchen", image: salad, discount: "₹129", time: "20-30 mins" },
//   { name: "Burger King", image: apples, discount: "60% OFF", time: "40-45 mins" },
//   {
//     name: "La Pino'z Pizza",
//     image: grapes,
//     discount: "₹120",
//     time: "30-35 mins",
//   },
//   { name: "Polar Bear", image: grains, discount: "20% OFF", time: "30-35 mins" },
//   { name: "Ibaco", image: grapes, discount: "₹50", time: "30-35 mins" },
//   {
//     name: "Daily Kitchen",
//     image: oat_meal,
//     discount: "₹129",
//     time: "20-30 mins",
//   },
// ];

// const itemsPerRow = 4;
// const itemsToShowInitially = itemsPerRow; // Show only 1 row initially

// // Memoize the individual restaurant component to avoid unnecessary re-renders
// const RestaurantCard = React.memo(({ restaurant }) => {
//   return (
//     <div className="border rounded-lg shadow-lg">
//       {/* Image Container with hover and transition effects */}
//       <div className="h-44 w-full overflow-hidden rounded-t-lg">
//         <img
//           src={restaurant.image}
//           alt={restaurant.name}
//           className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//       </div>
//       {/* Restaurant Info */}
//       <div className="mt-2 px-2">
//         <h3 className="text-lg font-semibold">{restaurant.name}</h3>
//         <p className="text-sm text-gray-500">Delivery: {restaurant.time}</p>
//         <p className="mt-1 font-bold text-orange-500">{restaurant.discount}</p>
//       </div>
//     </div>
//   );
// });

// export default function OnlineShops() {
//   const [showMore, setShowMore] = useState(false);

//   const handleShowMore = () => {
//     setShowMore((prev) => !prev); // Toggle the Show More/Show Less functionality
//   };

//   // Memoized result for visible restaurants
//   const visibleRestaurants = useMemo(() => {
//     return showMore
//       ? topRestaurants
//       : topRestaurants.slice(0, itemsToShowInitially);
//   }, [showMore]);

//   return (
//     <div className="mt-6 relative container">
//       {/* Heading and View All Button in the Same Line */}
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-2xl font-medium tracking-tight sm:text-center lg:text-left">
//           Our Products
//         </h2>
//         <button
//           onClick={handleShowMore}
//           className="px-3 py-1 text-white text-sm rounded-md shadow-md bg-gradient-to-r from-cyan-400 via-teal-500 to-indigo-500 hover:from-cyan-500 hover:via-teal-600 hover:to-blue-800 transition-all duration-200"
//         >
//           {showMore ? "Show Less" : "View All"}
//         </button>
//       </div>

//       {/* Restaurant Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {visibleRestaurants.map((restaurant, index) => (
//           <RestaurantCard key={index} restaurant={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// }


//

import React, { useState, useMemo } from "react";
import barries from "../../assets/barries.jpg";
import apples from "../../assets/apples.jpg";
import grapes from "../../assets/grapes.jpg";
import green_apple from "../../assets/green_apple.jpg";
import oat_meal from "../../assets/oat_meal.jpg";
import salad from "../../assets/salad.jpg";
import grains from "../../assets/grains.jpg";
import banana from "../../assets/banana.jpg";

const topRestaurants = [
  { name: "McDonald's", image: barries, discount: "₹179", time: "40-45 mins" },
  { name: "Burger King", image: apples, discount: "60% OFF", time: "40-45 mins" },
  {
    name: "La Pino'z Pizza",
    image: grapes,
    discount: "₹120",
    time: "30-35 mins",
  },
  { name: "Polar Bear", image: green_apple, discount: "20% OFF", time: "30-35 mins" },
  { name: "Ibaco", image: banana, discount: "₹50", time: "30-35 mins" },
  {
    name: "Daily Kitchen",
    image: oat_meal,
    discount: "₹129",
    time: "20-30 mins",
  },
  { name: "Ibaco", image: grains, discount: "₹50", time: "30-35 mins" },
  { name: "Daily Kitchen", image: salad, discount: "₹129", time: "20-30 mins" },
  { name: "Burger King", image: apples, discount: "60% OFF", time: "40-45 mins" },
  {
    name: "La Pino'z Pizza",
    image: grapes,
    discount: "₹120",
    time: "30-35 mins",
  },
  { name: "Polar Bear", image: grains, discount: "20% OFF", time: "30-35 mins" },
  { name: "Ibaco", image: grapes, discount: "₹50", time: "30-35 mins" },
  {
    name: "Daily Kitchen",
    image: oat_meal,
    discount: "₹129",
    time: "20-30 mins",
  },
];

const itemsPerRow = 4;
const itemsToShowInitially = itemsPerRow; // Show only 1 row initially

// Memoize the individual restaurant component to avoid unnecessary re-renders
const RestaurantCard = React.memo(({ restaurant }) => {
  return (
    <div className=" rounded-lg shadow-md">
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
      {/* Heading and View All Button in the Same Line */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium tracking-tight sm:text-center lg:text-left">
          Our Products
        </h2>
        <button
          onClick={handleShowMore}
          className="px-3 py-1 text-white text-sm rounded-md shadow-md bg-gradient-to-r from-cyan-400 via-teal-500 to-indigo-500 hover:from-cyan-500 hover:via-teal-600 hover:to-blue-800 transition-all duration-200"
        >
          {showMore ? "Show Less" : "View All"}
        </button>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
