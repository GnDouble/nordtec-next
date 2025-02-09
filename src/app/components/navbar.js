// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">My Website</div>
        <ul className="flex space-x-6 text-white">
          <li className="hidden md:block">Startseite</li>
          <li className="hidden md:block">Über uns</li>
          <li className="hidden md:block">Leistungen</li>
          <li className="hidden md:block">Kontakt</li>
          <li className="hidden md:block">Karriere</li>
          

          {/* Mobile Menu */}
          <li className="md:hidden">
            <button className="text-white">☰</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
