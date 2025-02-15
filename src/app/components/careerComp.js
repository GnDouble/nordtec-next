import React from "react";

export default function KarrierePage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-primary-color">Karriere bei NORDTEC</h1>
      <p className="mb-6 text-gray-700 text-lg">
        Wir bei <strong>NORDTEC</strong> sind immer auf der Suche nach talentierten, engagierten
        und motivierten Menschen, die unser Team mit ihrem Fachwissen und ihrer
        Leidenschaft verstärken möchten. Wenn du nach einer spannenden
        Herausforderung in einem innovativen Unternehmen suchst, bist du bei uns
        genau richtig!
      </p>

      <h2 className="text-2xl font-semibold mb-3">Offene Stellen</h2>
      <ul className="mb-6">
        <li className="flex items-center gap-2 text-lg text-gray-700">
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
          <strong>Elektriker (m/w/d)</strong> – Teilzeit
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Warum bei uns arbeiten?</h2>
      <ul className="mb-6 space-y-2">
        {[
          "Innovative Projekte im Bereich Elektrotechnik",
          "Ein junges, dynamisches und motiviertes Team",
          "Attraktive Vergütung",
          "Weiterbildungsmöglichkeiten und Karriereentwicklung",
          "Modernes Arbeitsumfeld mit neuester Technik",
          "Flexible Arbeitszeiten und eine gute Work-Life-Balance",
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-lg text-gray-700">
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

      <h2 className="text-2xl font-semibold mb-3">Bewerbung</h2>
      <p className="mb-4 text-gray-700 text-lg">
        Haben wir dein Interesse geweckt? Dann zögere nicht und sende uns deine 
        Bewerbungsunterlagen per E-Mail an{" "}
        <strong>
          <a href="mailto:info@nordtec.de" className="text-primary-color hover:underline">
            info@nordtec.de
          </a>
        </strong>
        . Wir freuen uns darauf, dich kennenzulernen!
      </p>
    </main>
  );
}
