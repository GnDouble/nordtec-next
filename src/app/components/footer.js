import React from "react";
import Contact from "./contact";
import ContactForm from "./contactForm";

const Footer = () => {
  return (
    <footer className="lg:grid lg:grid-cols-5">
      {/* Kontaktformular im Footer */}
      <div className="lg:col-span-2">
        <h2 className="mb-6 pl-4">Kontaktieren Sie uns</h2>
        <ContactForm />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <Contact />

            <ul className="mt-8 space-y-1">
              <li>Montag bis Freitag: 10:00 - 17:00 Uhr</li>
              <li>Wochenende: 10:00 - 15:00 Uhr</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              <li>
                <a href="#" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                  <span className="sr-only">Instagram</span>
                  <svg className="size-6" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06..."
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p>
              <span>NORDTEC</span>
              <a href="#" className="block hover:opacity-75">
                Beispielstraße 123
              </a>
              <a href="#" className="block hover:opacity-75">
                12345 Lübeck
              </a>
            </p>
          </div>
        </div>
        {/* Rechts-Links */}
        <div className="mt-8">
          <ul className="flex justify-between">
            <li> &copy; 2025 by NORDTEC</li>
            <div className="flex gap-6">
              <li>
                <a href="/impressum" className="hover:opacity-75">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutzerklaerung" className="hover:opacity-75">
                  Datenschutzerklärung
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
