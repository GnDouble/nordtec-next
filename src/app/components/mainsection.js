import React from "react";

function Mainsection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Responsive Grid */}
            <div className="bg-white p-6 shadow-lg">
                <h2 className="text-xl font-semibold">Feature 1</h2>
          <p className="text-gray-600">Nordtec auf die 1. Seite von Google bringen.
                </p>
            </div>
            <div className="bg-white p-6 shadow-lg">
                <h2 className="text-xl font-semibold">Feature 2</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 shadow-lg">
                <h2 className="text-xl font-semibold">Feature 3</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>  
    );
}

export default Mainsection;
