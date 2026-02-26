import React from "react";
import Logo from "../assets/Chuks.png";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-[#F5F5F5] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-7 py-3 flex items-center justify-between">

        {/* Logo */}
        <img src={Logo} alt="Chuks Kitchen Logo" className="w-38 h-8" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 text-sm">
          <a href="/" className="hover:text-orange-500 transition">Home</a>
          <a href="/explore" className="hover:text-orange-500 transition">Explore</a>
          <a href="/cart" className="hover:text-orange-500 transition">My Cart</a>
          <a href="#" className="hover:text-orange-500 transition">Account</a>

          <a href="/login" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-white transition">
            Login
          </a>
        </div>

      </div>
    </nav>
  );
}