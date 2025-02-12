import React from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Terminplanung",
    description: "Professionelle Planung & Koordination.",
    image: "/ceo.webp",
  },
  {
    id: 2,
    title: "Elektroinstallation",
    description: "Moderne Lösungen für Ihr Zuhause.",
    image: "/ceo.webp",
  },
  {
    id: 3,
    title: "Gerätewartung",
    description: "Regelmäßige Wartung für lange Lebensdauer.",
    image: "/ceo.webp",
  },
  {
    id: 4,
    title: "Sicherheitsprüfung",
    description: "Schutz & Sicherheit für Ihr Gebäude.",
    image: "/ceo.webp",
  },
  {
    id: 5,
    title: "Smart Home",
    description: "Intelligente Technologien für mehr Komfort.",
    image: "/ceo.webp",
  },
  {
    id: 6,
    title: "Stromanschlüsse",
    description: "Professionelle Installation von Anschlüssen.",
    image: "/ceo.webp",
  },
];

function Mainsection() {
  return (
    <div
      id="leistungen"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 ml-6 mr-6"
    >
      {services.map((service) => (
        <div key={service.id} className="p-4 shadow-lg rounded-lg bg-white">
          {/* Bild */}
          <div className="relative w-full h-52 rounded-lg overflow-hidden flex justify-center items-center">
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="w-[300px]rounded-3xl h-auto" 
              priority={true}
            />
          </div>

          {/* Titel & Beschreibung */}
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mainsection;
