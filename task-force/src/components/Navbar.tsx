"use client";
// File: src/app/components/Navbar.tsx
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);
  const toolsMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Ref for the hamburger button

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the mobile menu and hamburger button
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }

      // Close tools menu if click is outside
      if (
        toolsMenuRef.current &&
        !toolsMenuRef.current.contains(event.target as Node)
      ) {
        setIsToolsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex bg-gray-900 justify-between items-center fixed w-full h-16 px-8 z-50">
      {/* Logo */}
      <Link href="/" passHref>
        <h1 className="text-2xl text-white font-bold p-2 cursor-pointer">
          Task Force
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-white">
        <Link href="/" className="hover:text-yellow-500">
          Home
        </Link>
        <Link href="/about" className="hover:text-yellow-500">
          About
        </Link>
        <Link href="/contact" className="hover:text-yellow-500">
          Contact
        </Link>

        {/* Tools Menu */}
        <div
          className="relative cursor-pointer"
          onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
        >
          <button className="hover:text-yellow-500">Tools</button>
          {isToolsMenuOpen && (
            <div
              ref={toolsMenuRef}
              className="absolute top-full right-0 bg-gray-800 p-4 flex flex-col space-y-2 mt-2 min-w-[200px] max-w-[250px] transform transition-opacity duration-300 opacity-100"
            >
              <Link
                href="/task-management"
                className="hover:text-yellow-500"
                onClick={closeMobileMenu}
              >
                Task Management
              </Link>
              <Link
                href="/weather-app"
                className="hover:text-yellow-500"
                onClick={closeMobileMenu}
              >
                Weather App
              </Link>
              <Link
                href="/quiz-app"
                className="hover:text-yellow-500"
                onClick={closeMobileMenu}
              >
                Quiz App
              </Link>
              <Link
                href="/learning-platform"
                className="hover:text-yellow-500"
                onClick={closeMobileMenu}
              >
                Learning Platform
              </Link>
              <Link
                href="/dashboard"
                className="hover:text-yellow-500"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Menu */}
      <button
        ref={buttonRef} // Attach ref to the button
        className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8 relative z-50 focus:outline-none"
        onClick={(event) => {
          event.stopPropagation(); // Prevent event propagation
          setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle menu
        }}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <div
          className={`w-6 h-1 bg-white transition-transform duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-white transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-white transition-transform duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`absolute top-16 left-0 w-full bg-gray-800 p-5 flex flex-col space-y-4 text-white transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="hover:text-yellow-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="hover:text-yellow-500"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="hover:text-yellow-500"
          >
            Contact
          </Link>

          {/* Tools dropdown for mobile */}
          <div
            className="relative text-white"
            onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)}
          >
            <button className="hover:text-yellow-500">Tools</button>
            {isToolsMenuOpen && (
              <div
                ref={toolsMenuRef}
                className="absolute top-full left-0 bg-gray-800 p-4 w-full flex flex-col space-y-2 mt-2 transform transition-all duration-300"
              >
                <Link href="/task-management" onClick={closeMobileMenu}>
                  Task Management
                </Link>
                <Link href="/weather-app" onClick={closeMobileMenu}>
                  Weather App
                </Link>
                <Link href="/quiz-app" onClick={closeMobileMenu}>
                  Quiz App
                </Link>
                <Link href="/learning-platform" onClick={closeMobileMenu}>
                  Learning Platform
                </Link>
                <Link href="/dashboard" onClick={closeMobileMenu}>
                  Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
