import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Name */}
          <div className="text-2xl font-bold">BookPredict</div>

          {/* Navigation Links */}
          <div>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="hover:underline hover:text-gray-200 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:underline hover:text-gray-200 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-gray-200 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
