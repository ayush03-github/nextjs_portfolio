"use client"; // Mark the component as a Client Component

import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open/close
  };

  return (
    <header className='md:my-6 md:mx-10 md:py-2 md:px-8 p-4'>
      <div className='flex justify-between items-center'>
        {/* Logo and Name */}
        <div className='flex items-center'>
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div className='py-2 pl-3 text-2xl font-bold'>
            Personal
          </div>
        </div>

        {/* Hamburger Icon for small devices */}
        <div className="lg:hidden my-auto">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon (3 lines) */}
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

        {/* Desktop Menu - Hidden on small screens */}
        <nav className="hidden lg:text-xl lg:flex space-x-6">
          <a href="#about" className="text-black font-semibold text-xl">
            About
          </a>
          <a href="#skills" className="text-black font-semibold text-xl">
            Skills
          </a>
          <a href="#projects" className="text-black font-semibold text-xl">
            Projects
          </a>
          <a href="#contact" className="text-black font-semibold text-xl">
            Contact
          </a>
        </nav>

        {/* Resume Button - Visible on screens larger than 720px */}
        <div className="hidden lg:block">
          <button
            href="/path/to/resume.pdf" // Replace with your resume file path
            target="_blank"
            rel="noopener noreferrer"
            className=" flex gap-2 ml-6 px-4 py-2 bg-black text-white rounded"
          >
            RESUME
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

          </button>
        </div>
      </div>

      {/* Mobile Menu - Shown when menuOpen is true */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-black hover:text-gray-900">
              About
            </a>
            <a href="#skills" className="text-black hover:text-gray-900">
              Skills
            </a>
            <a href="#projects" className="text-black hover:text-gray-900">
              Projects
            </a>
            <a href="#contact" className="text-black hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
