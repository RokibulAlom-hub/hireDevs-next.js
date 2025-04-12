import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 md:px-20 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">HireDevs</h2>
          <p className="mt-2 text-sm">
            Empowering businesses to find top tech talent with ease.
          </p>
        </div>

        {/* Column 2 - Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/postjobs" className="hover:text-blue-600">Post Job</Link></li>
            <li><Link href="/alljobs" className="hover:text-blue-600">All Jobs</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: contact@hiredevs.com</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HireDevs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
