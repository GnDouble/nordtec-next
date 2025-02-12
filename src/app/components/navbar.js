"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

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
    <nav className="p-4 bg-[#111ac9] text-white">

      <div className="container mx-auto flex justify-between items-center">
        <div>IMAGE XXXX</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="#hero" scroll={true}>Startseite</Link></li>
          <li><Link href="#leistungen" scroll={true}>Leistungen</Link></li>
          <li><Link href="#about" scroll={true}>Über uns</Link></li>
          <li><Link href="#kontakt" scroll={true}>Kontakt</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />} 

      {isOpen && (
        <div ref={menuRef} className="fixed inset-y-0 left-0 bg-primary-color p-4 w-3/4 h-full z-50 transition-transform">
          <button 
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          <ul className="flex flex-col space-y-4 text-white mt-10">
            <li onClick={() => setIsOpen(false)}><Link href="#hero" scroll={true}>Startseite</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="#leistungen" scroll={true}>Leistungen</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="#about" scroll={true}>Über uns</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="#kontakt" scroll={true}>Kontakt</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
