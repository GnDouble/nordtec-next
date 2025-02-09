// src/pages/Home.jsx
import React from "react";
import Navbar from "./components/navbar";
import Contact from "./components/contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 p-8">
        <h1 className="text-4xl text-center text-gray-800">Welcome to My Website</h1>
        <p className="text-lg text-center mt-4">
          This is a responsive page built with React and Tailwind CSS.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold">Feature 1</h2>
            <p className="text-gray-600">Nordtec auf die 1</p>
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
      </div>
      <Contact />
    </div>
    
    
  );
};

export default Home;
