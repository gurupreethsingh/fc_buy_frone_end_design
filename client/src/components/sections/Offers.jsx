import React from "react";
import oranges from "../../assets/oranges.jpg"; // Import your image

export default function Offers() {
  return (
    <div className="container mx-auto my-12 px-6">
      <h2 className="text-center text-base/2 font-semibold text-indigo-600">
        Shop Offers
      </h2>
      <p className="mx-auto mt-4 mb-8 max-w-lg text-pretty text-center text-3xl font-medium tracking-tight text-gray-950 sm:text-4xl">
        Offer Of The Month
      </p>
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            className="object-cover w-full h-auto rounded-xl shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            src={oranges}
            alt="Person"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 flex flex-col justify-center p-8 text-gray-900">
          <div className="text-5xl leading-tight text-gray-300">“</div>
          <p className="text-2xl font-light leading-relaxed mb-4 text-gray-900">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor
            posuere. Nunc eu scelerisque interdum eget tellus non nibh
            scelerisque bibendum.
          </p>

          <div className="mt-6">
            <p className="text-lg font-bold">Dewali Special</p>
            <p className="text-sm text-orange-500">CEO of Workcation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
