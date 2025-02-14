// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import RightsFooter from "../components/rights";
import KarrierePage from "../components/careerComp";

const career = () => {
  return (
    <div>
      <Navbar />
      <KarrierePage />
      <Footer />
      <RightsFooter />
    </div>
  );
};

export default career;
