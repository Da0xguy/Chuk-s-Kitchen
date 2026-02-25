import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-[#F5F5F5] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-7 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="font-heading text-xl text-gray-900 font-semibold">
          Chuks Kitchen
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 text-sm">
          <a href="#" className="hover:text-orange-500 transition">Home</a>
          <a href="#" className="hover:text-orange-500 transition">Explore</a>
          <a href="#" className="hover:text-orange-500 transition">My Orders</a>
          <a href="#" className="hover:text-orange-500 transition">Account</a>

          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-white transition">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
}