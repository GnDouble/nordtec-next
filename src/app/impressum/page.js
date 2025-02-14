import React from "react";
import Navbar from "../components/navbar";
import ImpressumPage from "../components/impressumComp";
import Footer from "../components/footer";
import RightsFooter from "../components/rights";

const Impressum = () => {
    return (
    <div>
      <Navbar />
      <ImpressumPage />
      <Footer />
      <RightsFooter />
    </div>
    );
}

export default Impressum;