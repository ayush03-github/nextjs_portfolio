"use client"; // Mark the component as a Client Component

import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open/close
  };

  return (
    <header className="md:my-6 md:mx-10 md:py-2 md:px-8 p-4 bg-white">
      <div className="flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center">
          {/* <Image
            src="/assets/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-lg"
          /> */}
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="25pt"
            height="25pt"
            viewBox="0 0 270.000000 284.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <metadata>
              Created by potrace 1.10, written by Peter Selinger 2001-2011
            </metadata>
            <g
              transform="translate(0.000000,284.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="#ffffff"
              stroke-width="0"
            >
              <path
                d="M565 2486 c-136 -43 -232 -135 -281 -271 l-24 -66 0 -727 c0 -803 -2
                -771 65 -882 44 -72 94 -116 182 -161 l67 -34 739 -3 c658 -2 746 -1 796 14
                141 40 249 146 293 286 17 56 18 17 18 776 0 580 -3 727 -14 769 -36 136
                -149 251 -288 295 -56 17 -106 18 -786 17 -554 0 -736 -3 -767 -13z m460 -96
                c226 -32 285 -179 140 -347 -28 -33 -177 -160 -375 -320 -8 -7 -105 -84 -214
                -173 -122 -98 -203 -157 -208 -152 -6 6 -8 147 -6 343 4 286 7 342 22 389 47
                144 158 237 311 260 74 11 250 11 330 0z m1101 -32 c96 -50 157 -141 180 -267
                17 -95 20 -1208 3 -1311 -21 -134 -99 -249 -204 -301 -43 -21 -64 -24 -150
                -24 -93 0 -105 2 -167 33 -37 18 -97 61 -137 98 -79 73 -136 153 -496 689
                -125 187 -237 351 -247 365 l-20 25 29 25 c76 65 694 560 736 589 56 38 161
                87 215 101 20 5 75 8 122 6 68 -2 95 -8 136 -28z m-1259 -1060 c87 -122 176
                -247 197 -277 22 -31 68 -96 104 -146 120 -167 149 -263 99 -336 -49 -72 -154
                -99 -392 -99 -250 1 -377 50 -450 175 -51 86 -57 124 -62 381 l-5 241 95 77
                c53 42 131 106 174 141 42 36 78 65 79 65 1 0 74 -100 161 -222z"
              />
            </g>
          </svg>
          <div className="py-2 pl-2 text-2xl font-bold">Δyush Kodle</div>
        </div>

        {/* Hamburger Icon for small devices */}
        <div className="lg:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-xl font-semibold">
          <a href="#about" className="text-black hover:text-gray-600">
            About
          </a>
          <a href="#skills" className="text-black hover:text-gray-600">
            Skills
          </a>
          <a href="#projects" className="text-black hover:text-gray-600">
            Projects
          </a>
          <a href="#contact" className="text-black hover:text-gray-600">
            Contact
          </a>
        </nav>

        {/* Resume Button */}
        <div className="hidden lg:block">
          <a
            href="/assets/resume.pdf" // Path to your file in the public folder
            download="My_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            <span>RESUME</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-black hover:text-gray-600">
              About
            </a>
            <a href="#skills" className="text-black hover:text-gray-600">
              Skills
            </a>
            <a href="#projects" className="text-black hover:text-gray-600">
              Projects
            </a>
            <a href="#contact" className="text-black hover:text-gray-600">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
