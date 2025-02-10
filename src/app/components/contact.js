import React from "react";

const email_url = "/mail.svg"; 
const phone_url = "/phone.svg"; 

function Contact() {
  return (
    <div className="text-left space-y-4">
      <h1 className="font-bold text-2xl">Kontakt</h1>
  

      <div className="flex items-center space-x-2">
        <h2 className="font-bold text-lg">E-Mail</h2>
        <img src={email_url} alt="E-Mail" className="w-6 h-6 opacity-80" />
      </div>
      <a href="mailto:info@nordtec-elektro.de?subject=Kontantanfrage">info@nordtec-elektro.de</a><p className="text-lg"></p>

      <div className="flex items-center space-x-2">
        <h2 className="font-bold text-lg">Telefon</h2>
        <img src={phone_url} alt="Telefon" className="w-6 h-6 opacity-80" />
      </div>
      <a href="tel:+4917673582752">0176/73582752</a>
    </div>
  );
}

export default Contact;
