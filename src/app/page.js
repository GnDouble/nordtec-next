// src/pages/Home.jsx
import React from "react";
import Navbar from "./components/navbar";
import AboutUs from "./components/about";
import Termin from "./components/termin";
import Mainsection from "./components/feature";
import Footer from "./components/footer";
import RightsFooter from "./components/rights";


const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <AboutUs />
      <Termin />
      <Mainsection />
      <Footer />
      <RightsFooter />
    </div>
    
    
  );
};

export default Home;
