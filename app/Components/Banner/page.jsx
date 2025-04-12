import React from "react";
import Image from "next/image";
import banimgae from "../../public/hiredevban.jpg"
import Link from "next/link";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Text Content */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Build Your Dream Team with <span className="text-blue-600">HireDevs</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Connect with top developers across the globe. Post jobs, hire talent, and grow your tech team — all in one place.
        </p>
        <Link href="/findtalents" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
          Find Talents
        </Link>
      </div>

      {/* Optional Image or Illustration */}
      <div className="w-full">
        <Image
          src={banimgae} // Replace with your image in /public folder
          alt="Team working illustration"
          width={500}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
