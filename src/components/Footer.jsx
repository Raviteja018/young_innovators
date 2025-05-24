import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Description */}
        <div className="flex items-center space-x-4">
          <img
            src="https://static.wixstatic.com/media/56f6e3_861cb52c6f1747af817f73916fa75ed4~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/Startup%20TV%20Cube%20Logo%20(1)_edited_edited.png"
            alt="My Startup TV Logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="text-lg font-semibold">My Startup TV</h4>
            <p className="text-sm text-gray-400">Empowering the next generation of innovators</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-pink-400 transition duration-200">About</a>
          <a href="#" className="hover:text-pink-400 transition duration-200">Projects</a>
          <a href="#" className="hover:text-pink-400 transition duration-200">Gallery</a>
          <a href="#" className="hover:text-pink-400 transition duration-200">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} My Startup TV. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
