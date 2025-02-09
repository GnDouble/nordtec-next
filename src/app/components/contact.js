import React from "react";

const email_url = "/mail.svg"; // Korrekte URL für Dateien im public-Ordner
const phone_url = "/phone.svg"; // Korrekte URL für Dateien im public-Ordner

function Contact() {
  return (
    <div className="text-center">
      <h1 className="font-bold">Kontakt</h1>
      <p>NORDTEC Elektrotechnik</p>
      <p>Adresse XXXX</p>
      <div className="flex items-center space-x-2 justify-center">
        <h2 className="font-bold">E-Mail</h2>
        <img src={email_url} alt="E-Mail" className="w-6 h-6 opacity-80" />
      </div>

      <p>info@nordtec-elektro.de</p>
      <div className="flex items-center space-x-1 justify-center">
        <h2 className="font-bold">Telefon</h2>
        <img src={phone_url} alt="Telefon" className="w-6 h-6 opacity-80" />
      </div>
      <p>0176/73582752</p>
    </div>
  );
}

export default Contact;
