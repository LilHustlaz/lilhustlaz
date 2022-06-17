import React from "react";
import NavBar from "../Navbar/Navbar";
import LandingScreen from "../Welcome/WelcomeComponent";
import AboutComponent from "../About/AboutComponent";
import Swag from "../Swag/AboutSwag";
import Breeding from "../Breeding/AboutBreeding";
import UltraRares from "../UltraRares/UltraRares";
import Roadmap from "../Roadmap/Roadmap";
import NFTLinks from "../NFTLinks/NFTLinks";
import FAQ from "../FAQ/FAQ";
import FooterBar from "../Footer/FooterComponent";

const MainPage = () => {
  return (
    <>
      <div className="Components">
        <NavBar />
        <LandingScreen />
        <AboutComponent id="about" />
        <Swag />
        <Breeding />
        <UltraRares />
        <Roadmap id="roadmap" />
        <TheTeam />
        <NFTLinks />
        <FAQ id="faq" />
        <FooterBar />
      </div>
    </>
  );
};

export default MainPage;
