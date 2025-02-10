// src/pages/Home.jsx
import React from "react";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Mainsection from "./components/mainsection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mainsection />
      <Footer />
    </div>
    
    
  );
};

export default Home;
