"use client"; // This directive marks the component as a client component

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 p-4 shadow-xl z-10 sticky top-0">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* Logo or Brand Name */}
        <div className="text-white text-4xl font-extrabold tracking-wide transform hover:scale-105 transition-transform duration-300">
          <Link href="/" className="flex items-center">
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
              Demo
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="text-white md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-teal-600 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <Link
            href="/login"
            className="block text-white text-lg font-medium hover:text-teal-200 hover:underline transition duration-300 ease-in-out transform hover:scale-110 py-2 md:py-0"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="block text-white text-lg font-medium hover:text-teal-200 hover:underline transition duration-300 ease-in-out transform hover:scale-110 py-2 md:py-0"
          >
            Sign up
          </Link>
          <Link
            href="/about"
            className="block text-white text-lg font-medium hover:text-teal-200 hover:underline transition duration-300 ease-in-out transform hover:scale-110 py-2 md:py-0"
          >
            About
          </Link>
          <Link
            href="#"
            className="block text-white text-lg font-medium hover:text-teal-200 hover:underline transition duration-300 ease-in-out transform hover:scale-110 py-2 md:py-0"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}