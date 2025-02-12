// src/pages/Home.jsx
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Mainsection from "./components/feature";
import RightsFooter from "./components/rights";
import Termin from "./components/termin";
import AboutUs from "./components/about";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Termin />
      <Mainsection />
      <Footer />
      <RightsFooter />
    </div>
    
    
  );
};

export default Home;
