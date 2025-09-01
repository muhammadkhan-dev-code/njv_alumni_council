import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="text-purple-500 text-4xl font-bold">NJV</div>
            <span className="text-4xl font-semibold ">Alumni Council</span>
          </div>
          <nav className="flex flex-col items-center gap-6 text-sm mt-4">
            <h3 className="text-xl font-bold ">Quick Links </h3>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-white  underline font-bold text-lg" : "hover:text-white" 
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white  underline font-bold text-lg" : "hover:text-white"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "text-white  underline font-bold text-lg " : "hover:text-white"
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/alumni-directory"
              className={({ isActive }) =>
                isActive ? "text-white  underline font-bold text-lg " : "hover:text-white"
              }
            >
              Alumni Directory
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "text-white  underline font-bold text-lg " : "hover:text-white"
              }
            >
              Contact Us
            </NavLink>
          </nav>
          <div className="flex items-center gap-6 ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black hover:bg-amber-400"
            >
              <FaFacebook size={40} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black hover:bg-amber-400"
            >
              <FaTwitter size={40} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black hover:bg-amber-400"
            >
              <FaInstagram size={40}/>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black hover:bg-amber-400"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black hover:bg-amber-400"
            >
              <FaYoutube size={40} />
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />
        <div className="mx-auto text-center text-md text-gray-400 ">
          © njvalumni 2025, All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
