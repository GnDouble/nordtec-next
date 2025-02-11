"use client";

import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav id="nav" className="p-4 bg-primary-color">
      <div className="container mx-auto flex justify-between items-center">
        <div>IMAGE XXXX</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero">Startseite</a></li>
          <li><a href="#">Leistungen</a></li>
          <li><a href="#about">Über uns</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" /> // Overlay for clicking outside
      )}

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-y-0 left-0 bg-primary-color opacity- p-4 w-3/4 h-full z-50 transition-transform"
        >
          <button 
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          <ul className="flex flex-col space-y-4 text-white mt-10">
            <li onClick={() => setIsOpen(false)}><a href="#hero">Startseite</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#leistungen">Leistungen</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#about">Über uns</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#kontakt">Kontakt</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
