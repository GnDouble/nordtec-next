import React from 'react';

const RightsFooter = () => {
    return (
        <footer className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:gap-5 p-2 bg-primary-color text-center lg:text-left w-full">
            <p className="my-0.5">Impressum</p>
            <p className="my-0.5">Datenschutz</p>
            <p className="my-0.5">&copy; 2025 NORDTEC Alle Rechte vorbehalten.</p>
        </footer>
    );
};

export default RightsFooter;

