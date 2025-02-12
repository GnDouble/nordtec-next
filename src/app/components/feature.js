import React from "react";
import Image from "next/image";

import services  from "../data/service";

function Mainsection() {
  return (
    <section className="p-4 lg:p-8 bg-gray-100 text-gray-800">
      <div className="container mx-auto space-y-12">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col overflow-hidden rounded-lg shadow-lg lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full lg:w-1/2 h-64 lg:h-auto flex justify-center items-center bg-gray-300">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center flex-1 p-6 bg-white">
              <span className="text-xs uppercase text-gray-600">
                Unsere Leistungen
              </span>
              <h3 className="text-3xl font-bold">{service.title}</h3>
              <p className="my-6 text-gray-600">{service.description}</p>
              <button className="self-start px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition">
                Mehr erfahren
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mainsection;
