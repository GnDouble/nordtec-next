"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">My Website</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>Startseite</li>
          <li>Über uns</li>
          <li>Leistungen</li>
          <li>Kontakt</li>
          <li>Karriere</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4 absolute top-16 left-0 w-full transition-transform">
          <ul className="flex flex-col space-y-4 text-white text-center">
            <li onClick={() => setIsOpen(false)}>Startseite</li>
            <li onClick={() => setIsOpen(false)}>Über uns</li>
            <li onClick={() => setIsOpen(false)}>Leistungen</li>
            <li onClick={() => setIsOpen(false)}>Kontakt</li>
            <li onClick={() => setIsOpen(false)}>Karriere</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
