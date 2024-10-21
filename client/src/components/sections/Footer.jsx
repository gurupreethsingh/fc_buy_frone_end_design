import React from "react";
import logo from "../../assets/fcbuy-logo-removebg.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src={logo} alt="Logo" className="h-10 w-auto mb-2" />
              <p className="text-gray-900 pr-3">
                Leading the way in software excellence and innovation.
                Harnessing the power of AI and blockchain technologies to
                revolutionize the digital landscape and drive transformative
                solutions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase text-center">
                Academics
              </h3>
              <ul className="mt-4 space-y-4 text-center">
                <li>
                  <a
                    href="/contact"
                    className="text-base text-gray-900 hover:text-orange-500"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-base text-gray-900 hover:text-orange-500"
                  >
                    Faculty
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-base text-gray-900 hover:text-orange-500"
                  >
                    Research
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-base text-gray-900 hover:text-orange-500"
                  >
                    Admissions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-center font-semibold text-gray-900 tracking-wider uppercase">
                Community
              </h3>
              <ul className="mt-4 space-y-4 text-center">
                <li>
                  <a
                    href="/contact"
                    className="text-base text-gray-900 hover:text-orange-500"
                  >
                    Student Life
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-base text-gray-900 hover:text-orange-500"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-base text-gray-900 hover:text-orange-500"
                  >
                    Alumni
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-base text-gray-900 hover:text-orange-500"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-center font-semibold text-gray-900 tracking-wider uppercase">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-4 text-center">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-900 hover:text-orange-500"
                  >
                    Address: 193 Hesaraghatta Road, Bagalaguntte, Bangalore
                    560073
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-900 hover:text-orange-500"
                  >
                    Phone: +91 9538596766
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-900 hover:text-orange-500"
                  >
                    Email: igurupreeth@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8  border-t border-b border-gray-300 pt-4 pb-4 text-center text-sm text-gray-700 flex justify-between items-center">
            <p className="text-base">
              &copy; 2024 First Circle Build Mart. All rights reserved.
              Developed by Ecoders.
            </p>
            <div className="flex space-x-6">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-900 hover:text-orange-500">
                <FaFacebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-900 hover:text-orange-500">
                <FaTwitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-900 hover:text-orange-500">
                <FaInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
