import React from "react";

export default function KarrierePage() {
    return (
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Karriere bei NORDTEC</h1>
        <p className="mb-4">
          Wir sind immer auf der Suche nach talentierten und motivierten Menschen, die unser Team verstärken möchten.
        </p>
        
        <h2 className="text-2xl font-semibold mb-2">Offene Stellen</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Elektriker (m/w/d)</strong> – Vollzeit</li>
          <li><strong>Smart Home Spezialist (m/w/d)</strong> – Teilzeit</li>
          <li><strong>Projektmanager (m/w/d)</strong> – Vollzeit</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-2">Warum bei uns arbeiten?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Innovative Projekte im Bereich Elektrotechnik</li>
          <li>Ein dynamisches und motiviertes Team</li>
          <li>Attraktive Vergütung und Weiterbildungsmöglichkeiten</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-2">Bewerbung</h2>
        <p>
          Sende uns deine Bewerbung per E-Mail an <strong>karriere@nordtec.de</strong>. Wir freuen uns auf dich!
        </p>
      </main>
    );
  }
  