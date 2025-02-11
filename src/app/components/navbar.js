"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-primary-color">
      <div className="container mx-auto flex justify-between items-center">
        <div>IMAGE XXXX</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero">Startseite</a></li>
          <li><a href="#">Leistungen</a></li>
          <li><a href="#">Über uns</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
          <li><a href="#">Karriere</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary-color p-4 absolute top-16 left-0 w-full transition-transform">
          <ul className="flex flex-col space-y-4 text-center">
            <li onClick={() => setIsOpen(false)}><a href="#hero">Startseite</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#">Leistungen</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#">Über uns</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#kontakt">Kontakt</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#">Karriere</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
