import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center container px-1 py-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">HireDevs</Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/postjobs" className="hover:text-blue-600">Post Job</Link>
        <Link href="/alljobs" className="hover:text-blue-600">All Jobs</Link>
      </div>

      {/* Login Button */}
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
