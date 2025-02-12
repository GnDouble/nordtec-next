import React from "react";
import Image from "next/image";
import { TextLoopCustomVariantsTransition } from "./text-ani";

function Hero() {
  return (
    <div
      id="hero"
      className="w-full px-6 sm:px-10 max-w-full flex flex-col-reverse lg:flex-row items-center gap-y-10 gap-x-16 xl:gap-x-24 justify-center py-10 lg:py-20 xl:py-24 text-center lg:text-left"
      style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}
    >
      {/* Left Side - Text Content */}
      <div className="lg:w-[750px] xl:w-[900px] flex flex-col gap-y-6 xl:gap-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[56px] leading-[1.2] font-semibold text-gray-900">
          Energie, die Sie bewegt – zuverlässiger Service für Ihre elektrischen
          Bedürfnisse.
        </h1>
        <h2 className="text-gray-600 text-lg md:text-xl xl:text-2xl">
          Ihre Wünsche, unser Versprechen – wir bieten Ihnen maßgeschneiderte Elektro-Lösungen, die exakt auf Ihre Bedürfnisse zugeschnitten sind.
          <TextLoopCustomVariantsTransition />
        </h2>
        

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center sm:justify-center lg:justify-start">
          <a
            href="#kontakt"
            className="w-full sm:w-fit bg-primary-color text-white text-lg md:text-xl font-semibold px-8 py-3.5 rounded-lg hover:shadow-lg transition duration-200 text-center"
          >
            Kontakt
          </a>
          <a
            href="#leistungen"
            className="w-full sm:w-fit border border-primary-color text-gray-600 text-lg md:text-xl font-semibold px-8 py-3.5 rounded-lg hover:shadow-lg transition duration-200 text-center"
          >
            Leistungen
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[550px] xl:w-[650px] max-w-xl xl:max-w-2xl mx-auto">
        <Image
          className="rounded-3xl w-full h-auto"
          src="/multiM.webp"
          width={1000}
          height={750}
          priority={true} // {false} | {true}
          alt="Elektriker-Ingenieur verwendet ein Multimeter, um die elektrische Installation und Stromleitung in einem elektrischen System-Schaltschrank zu testen."
        />
      </div>
    </div>
  );
}

export default Hero;
