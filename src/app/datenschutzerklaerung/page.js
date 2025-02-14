import React from "react";
import DatenschutzPage from "../components/datenschutzComp";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import RightsFooter from "../components/rights";


const Datenschutz = () => {
    return (
        <div>
          <Navbar />
          <DatenschutzPage />
          <Footer />
          <RightsFooter />
        </div>
        );
}

export default Datenschutz;