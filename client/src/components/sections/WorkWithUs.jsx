import React, { useState, useEffect } from "react";
import axios from "axios";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const links = [
  { name: "Faculty Openings", href: "/contact" },
  { name: "Student Programs", href: "/contact" },
  { name: "Our Values", href: "/contact" },
  { name: "Meet Our Leadership", href: "/contact" },
];

const WorkWithUs = () => {
  const [subscriptionCount, setSubscriptionCount] = useState(0);

  useEffect(() => {
    const fetchSubscriptionCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/subscription-count"
        );
        setSubscriptionCount(response.data.count);
      } catch (error) {
        console.error("Error fetching subscription count:", error);
      }
    };

    fetchSubscriptionCount();
  }, []);

  const stats = [
    { name: "Campuses Worldwide", value: "5" },
    { name: "Full-time Faculty", value: "200" },
    { name: "Courses Offered", value: "150" },
    { name: "Student Enrollment", value: "10,000" },
    { name: "Total Subscriptions", value: subscriptionCount },
  ];

  return (
    <div>
      {/* Section 4: Work With Us */}
      <div className="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Join Our Academic Community
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are always looking for passionate educators and scholars to
              join our faculty and contribute to our vibrant academic
              environment.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    {stat.value}+
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
