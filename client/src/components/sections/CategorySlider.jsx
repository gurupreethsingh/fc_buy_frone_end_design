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
  const [isPaused, setIsPaused] = useState(false);

  // Clone the categories array for infinite scrolling effect
  const categoriesWithClones = [...categories, ...categories];

  const scrollDistance = 200;

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      setIsPaused(true);
      scrollContainerRef.current.scrollBy({
        left: -scrollDistance,
        behavior: "smooth",
      });
      setTimeout(() => setIsPaused(false), 2000);
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      setIsPaused(true);
      scrollContainerRef.current.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      });
      setTimeout(() => setIsPaused(false), 2000);
    }
  };

  const startAutoScroll = () => {
    return setInterval(() => {
      if (!isPaused && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth / 2; // Scroll back to the middle after reaching this point

        if (container.scrollLeft >= maxScrollLeft) {
          // Reset scroll to start without visual jump
          container.scrollTo({ left: 0, behavior: "auto" });
        }

        container.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 20);
  };

  useEffect(() => {
    const autoScrollInterval = startAutoScroll();

    return () => clearInterval(autoScrollInterval);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="relative flex items-center justify-center py-6 container mx-auto">
      {/* Left Scroll Button */}
      <button
        onClick={handleScrollLeft}
        className="absolute left-0 z-10 p-2 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-700 text-white rounded-full"
      >
        <FaChevronLeft className="w-4 h-4" />
      </button>

      {/* Category Items */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-hidden scroll-smooth no-scrollbar px-6 w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {categoriesWithClones.map((category, index) => (
          <a
            href={category.link}
            key={index}
            className="flex-shrink-0 w-28 md:w-32 lg:w-36 text-center transition-transform duration-150 ease-in-out"
          >
            {/* Image Container */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ height: "120px" }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-150"
              />
            </div>
            <p className="mt-2 text-sm md:text-base font-medium">
              {category.name}
            </p>
          </a>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={handleScrollRight}
        className="absolute right-0 z-10 p-2 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-700 text-white rounded-full"
      >
        <FaChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
