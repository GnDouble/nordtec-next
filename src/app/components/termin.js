import React from "react";
import Image from "next/image";
import Link from "next/link";


const Termin = () => {
  return (
    <div
      id="termin"
      className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg rounded-2xl p-6 md:p-10 mx-6"
    >
      {/* Left Side - Image */}
      <div className="flex-shrink-0 w-full md:w-1/3">
        <Image
          src="/calendar.webp"
          alt="Terminplanung"
          width={300}
          height={200}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold text-primary-color">Terminplanung</h2>
        <p className="text-gray-600 leading-relaxed">
          Vereinbaren Sie unkompliziert einen Termin mit unseren Experten.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Egal ob eine Erstberatung, eine detaillierte Planung oder die
          Umsetzung eines Projekts – wir sind flexibel und richten uns nach
          Ihren Wünschen. Unser Team sorgt dafür, dass Ihre Anliegen schnell,
          effizient und nach höchsten Qualitätsstandards bearbeitet werden.
        </p>

        <Link
          href="#kontakt"
          scroll = {true}
          className="inline-block bg-primary-color text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition duration-200"
        >
          Jetzt Termin vereinbaren
        </Link>
      </div>
    </div>
  );
};

export default Termin;
