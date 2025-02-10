import React from "react";

function Hero() {
  return (
    <div
      className="h-screen w-full px-7 lg:px-10 max-w-full mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14"
      style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}
    >
      <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
        <h1 className="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold text-gray-900">
          Energie, die Sie bewegt – zuverlässiger Service für Ihre elektrischen Bedürfnisse.
        </h1>
        <h2 className="md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left text-gray-600">
          Ihre Wünsche, unser Versprechen – maßgeschneiderte Elektro-Lösungen für Sie.
        </h2>
        <div className="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
          <a
            href="#"
            className="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-[#1053F3] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
            style={{ backgroundColor: "var(--highlight-color)" }}
          >
            <span>Leistungen</span>
          </a>
          <a
            href="#"
            className="flex w-full lg:w-fit items-center text-gray-600 justify-center rounded-lg border border-[#6A65FF] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
            style={{ borderColor: "var(--highlight-color)" }}
          >
            <span>Über uns</span>
          </a>
        </div>
      </div>
      <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
        <img
          className="rounded-3xl w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8c2VydmljZXxlbnwwfDB8fHwxNzEyMjIyNjQ3fDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
