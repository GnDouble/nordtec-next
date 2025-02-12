import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row items-center gap-8 p-6 lg:p-12 bg-gray-100 rounded-3xl shadow-lg mx-6">
      {/* Bild */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/ceo.webp"
          alt="Nordtec Team bei der Arbeit"
          width={600}
          height={400}
          className="rounded-2xl w-full h-auto object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl font-bold text-primary-color mb-4">Wer sind wir?</h2>
        <p className="text-gray-700 text-lg mb-4">
          Wir sind <strong>NORDTEC</strong>, Ihr zuverlässiger Partner für
          hochwertige Elektroinstallationen und innovative Lösungen in der
          Elektrotechnik. Mit jahrelanger Erfahrung und technischem Know-how
          bieten wir maßgeschneiderte Lösungen für Privatkunden, Unternehmen und
          die Industrie.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Unser Team setzt auf modernste Technologien und nachhaltige Konzepte –
          insbesondere in den Bereichen erneuerbare Energien, Smart Home und
          Gebäudeautomation.
        </p>

        <ul className="text-gray-700 text-lg list-none pl-0 space-y-2">
          {[
            "Sichere und effiziente Elektroinstallationen und Kabelverlegung",
            "Nachhaltige Lösungen mit erneuerbaren Energien",
            "Maßgeschneiderte Beratung und Planung",
            "Höchste Qualität und Kundenzufriedenheit",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="green"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M20.285 5.705a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 14.586l9.285-9.285a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
