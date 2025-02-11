import React from "react";

const Welcome = () => {
    return (
        <div className="flex flex-col py-4 items-center justify-center text-lg text-center">
            <h1 className="text-4xl text-primary-color mt-6">WILLKOMMEN BEI</h1>
            <h1 className="text-4xl">NORDTEC</h1>
            <p className="pt-4">Ihrem zuverlässigen Partner für hochwertige Elektroinstallationen und innovative Lösungen im Bereich Elektrotechnik.</p>
            <p>Wir bieten maßgeschneiderte Elektrolösungen, die auf modernster Technik basieren und höchsten Sicherheitsstandards entsprechen.</p>
            <p>Dabei legen wir besonderen Wert auf erneuerbare Energien und nachhaltige Technologien, um eine zukunftssichere Stromversorgung zu gewährleisten.</p>
        </div>
    );
}

export default Welcome;