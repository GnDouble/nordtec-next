import React from "react";

const RightsFooter = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:gap-5 p-2 bg-primary-color text-center lg:text-left w-full">
      <a href="#">
        <p className="my-0.5">Impressum</p>
      </a>
      <a href="#">
        <p className="my-0.5">Datenschutz</p>
          </a>
        <a href="#hero">
              <p className="my-0.5">&copy; 2025 NORDTEC Alle Rechte vorbehalten.</p>
            </a>
    </footer>
  );
};

export default RightsFooter;
