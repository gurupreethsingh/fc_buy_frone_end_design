// import React from "react";
// import grapes from "../../assets/grapes.jpg"; // Import your image

// export default function Offers() {
//   return (
//     <div className="container mx-auto my-12 px-4 md:px-6">
//       <h2 className="text-center text-orange-500 text-lg sm:text-xl md:text-2xl font-semibold">
//         Shop Offers
//       </h2>
//       <p className="mx-auto mt-4 mb-8 max-w-lg text-center text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-gray-950">
//         Offer Of The Month
//       </p>
      
//       <div className="flex flex-col md:flex-row items-center">
//         {/* Image Section */}
//         <div className="md:w-1/3 w-full mb-6 md:mb-0">
//           <img
//             className="object-cover w-full h-auto rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-sm"
//             src={grapes}
//             alt="Offer of the Month"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="md:w-2/3 w-full flex flex-col justify-center p-4 md:p-12 text-gray-900 ">
//           <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-4 text-gray-900">
//             Gravida quam mi erat tortor neque molestie. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio magnam sit totam corporis. Inventore omnis recusandae, odio, fugiat odit enim unde consequatur veniam numquam in sed assumenda. Ratione, odio ullam.
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias similique fugiat, at esse sint corrupti praesentium ipsa minima eaque dignissimos. Earum non ipsam id nobis vitae eligendi temporibus animi a?
//           </blockquote>

//           <div className="mt-6">
//             <p className="text-base sm:text-lg md:text-xl font-bold">Dewali Special</p>
//             <p className="text-sm text-orange-500">CEO of Workcation</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//

import React from "react";
import grapes from "../../assets/grapes.jpg"; // Import your image

export default function Offers() {
  return (
    <div className="container mx-auto mt-4 mb-4 sm:mt-8 sm:mb-12 px-2 sm:px-4 md:px-6">
      <h2 className="text-center text-orange-500 text-lg sm:text-xl md:text-2xl font-semibold">
        Shop Offers
      </h2>
      <p className="mx-auto mt-2 mb-6 sm:mt-4 sm:mb-8 max-w-lg text-center text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-gray-950">
        Offer Of The Month
      </p>

      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/3 w-full mb-4 sm:mb-6 md:mb-0">
          <img
            className="object-cover w-full h-auto rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-sm"
            src={grapes}
            alt="Offer of the Month"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 w-full flex flex-col justify-center p-2 sm:p-4 md:p-12 text-gray-900 p-5">
          <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-4 text-gray-900">
            Gravida quam mi erat tortor neque molestie. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio magnam sit totam corporis. Inventore omnis recusandae, odio, fugiat odit enim unde consequatur veniam numquam in sed assumenda. Ratione, odio ullam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias similique fugiat, at esse sint corrupti praesentium ipsa minima eaque dignissimos. Earum non ipsam id nobis vitae eligendi temporibus animi a?
          </blockquote>

          <div className="mt-4 sm:mt-6">
            <p className="text-base sm:text-lg md:text-xl font-bold">Dewali Special</p>
            <p className="text-sm text-orange-500">CEO of Workcation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
