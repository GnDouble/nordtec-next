// src/pages/Home.jsx
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Mainsection from "./components/mainsection";
import RightsFooter from "./components/rights";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mainsection />
      <Footer />
      <RightsFooter />
    </div>
    
    
  );
};

export default Home;
