import React from "react";
import Image from "next/image";

const Termin = () => {
  return (
    <div id="#about"className="p-6 flex items-center gap-6 rounded-xl bg-white">
      {/* Left Side - Image */}
      <Image
        src="/calendar.webp"
        alt="Terminplanung"
        width={150}
        height={150}
        className="rounded-2xl w-1/3 h-auto object-cover"
      />

      {/* Right Side - Content */}
      <div className="flex-1">
        <h1 className="text-4xl font-semibold text-primary-color">Terminplanung</h1>
        <p className="text-gray-600">
          Vereinbaren Sie unkompliziert einen Termin mit unseren Experten.
        </p>
        <p className="text-gray-600">
          Egal ob eine Erstberatung, eine detaillierte Planung oder die
          Umsetzung eines Projekts – wir sind flexibel und richten uns nach
          Ihren Wünschen. Unser Team sorgt dafür, dass Ihre Anliegen schnell,
          effizient und nach höchsten Qualitätsstandards bearbeitet werden.
        </p>
        <a
          href="#kontakt"
          className="flex w-full lg:w-fit bg-primary-color items-center text-white justify-center rounded-lg px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
        >
          <span>Jetzt Termin vereinbaren</span>
        </a>
      </div>
    </div>
  );
};

export default Termin;
