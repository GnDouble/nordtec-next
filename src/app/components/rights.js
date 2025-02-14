import React from "react";
import Link from "next/link";

const RightsFooter = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center text-white lg:items-start justify-center lg:gap-5 p-2 bg-primary-color text-center lg:text-left w-full">
      <Link href="/impressum" className="my-0.5">
        Impressum
      </Link>
      <Link href="/datenschutzerklaerung" className="my-0.5">
        Datenschutz
      </Link>
      <Link href="/" scroll={true} className="my-0.5">
        &copy; 2025 NORDTEC Alle Rechte vorbehalten.
      </Link>
    </footer>
  );
};

export default RightsFooter;
