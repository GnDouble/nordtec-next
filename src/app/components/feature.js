import React from "react";
import Image from "next/image";

import services from "../data/service";

function Mainsection() {
  return (
    <section id="leistungen" className="p-4 lg:p-8 bg-gray-100 text-gray-800">
      <div className="container mx-auto space-y-12">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col overflow-hidden rounded-lg shadow-lg lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full lg:w-1/2 h-auto flex justify-center items-center bg-gray-300">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full max-h-56 sm:max-h-64 md:max-h-72 lg:max-h-none object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center flex-1 p-4 sm:p-6 bg-white overflow-hidden">
              <h3 className="text-xl sm:text-3xl font-bold break-words whitespace-normal">
                {service.title}
              </h3>
              <p className="my-4 sm:my-6 text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mainsection;
