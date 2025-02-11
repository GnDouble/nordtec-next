// src/pages/Home.jsx
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Mainsection from "./components/mainsection";
import RightsFooter from "./components/rights";
import Welcome from "./components/welcome";
import Termin from "./components/termin";
import AboutUs from "./components/about";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Welcome /> */}
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
