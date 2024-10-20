import React, { useState } from "react";

const employees = [
  {
    name: "Jane Cooper",
    role: "Regional Paradigm Technician",
    image: "https://via.placeholder.com/100",
    email: "Email",
    call: "Call",
    link: "/profile/jane",
  },
  {
    name: "Cody Fisher",
    role: "Product Directives Officer",
    image: "https://via.placeholder.com/100",
    email: "Email",
    call: "Call",
    link: "/profile/cody",
  },
  {
    name: "Esther Howard",
    role: "Forward Response Developer",
    image: "https://via.placeholder.com/100",
    email: "Email",
    call: "Call",
    link: "/profile/esther",
  },
  {
    name: "Jenny Wilson",
    role: "Central Security Manager",
    image: "https://via.placeholder.com/100",
    email: "Email",
    call: "Call",
    link: "/profile/jenny",
  },
  {
    name: "Kristin Watson",
    role: "Lead Implementation Liaison",
    image: "https://via.placeholder.com/100",
    email: "Email",
    call: "Call",
    link: "/profile/kristin",
  },
  {
    name: "Cameron Williamson",
    role: "Internal Applications Engineer",
    image: "https://via.placeholder.com/100",
    email: "Email",
    call: "Call",
    link: "/profile/cameron",
  },
  {
    name: "Devon Lane",
    role: "Lead Marketing Manager",
    image: "https://via.placeholder.com/100",
    email: "Email",
    call: "Call",
    link: "/profile/devon",
  },
  {
    name: "Courtney Henry",
    role: "Principal Design Engineer",
    image: "https://via.placeholder.com/100",
    email: "Email",
    call: "Call",
    link: "/profile/courtney",
  },
  {
    name: "Cameron Williamson",
    role: "Internal Applications Engineer",
    image: "https://via.placeholder.com/100",
    email: "Email",
    call: "Call",
    link: "/profile/cameron",
  },
  {
    name: "Devon Lane",
    role: "Lead Marketing Manager",
    image: "https://via.placeholder.com/100",
    email: "Email",
    call: "Call",
    link: "/profile/devon",
  },
  {
    name: "Courtney Henry",
    role: "Principal Design Engineer",
    image: "https://via.placeholder.com/100",
    email: "Email",
    call: "Call",
    link: "/profile/courtney",
  },
];

export default function BestSellers() {
  const [showMore, setShowMore] = useState(false);

  const visibleEmployees = showMore ? employees : employees.slice(0, 8);

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl mt-4 font-medium tracking-tight">
        Top Stores in Bangalore
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleEmployees.map((employee, index) => (
          <a
            key={index}
            href={employee.link}
            className="block p-2 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
          >
            <div className="flex items-center space-x-2">
              <img
                src={employee.image}
                alt={employee.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="text-sm">
                <h2 className="font-semibold">{employee.name}</h2>
                <p className="text-gray-500">{employee.role}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Show More/Show Less Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-4 py-2 bg-gradient-to-r from-cyan-400 via-teal-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:from-cyan-500 hover:via-teal-600 hover:to-indigo-600 transition-all duration-300 ease-in-out"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
