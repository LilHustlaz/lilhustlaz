import React from "react";
import NavBar from "../Navbar/Navbar";
import LandingScreen from "../Welcome/WelcomeComponent";
import AboutComponent from "../About/AboutComponent";
import Swag from "../Swag/AboutSwag";
import Breeding from "../Breeding/AboutBreeding";
import UltraRares from "../UltraRares/UltraRares";
import Roadmap from "../Roadmap/Roadmap";
import TheTeam from "../TheTeam/TheTeam";
import NFTLinks from "../NFTLinks/NFTLinks";
import FAQ from "../FAQ/FAQ";
import FooterBar from "../Footer/FooterComponent";
import DiscordLink from "../Socials/Discord";

const MainPage = () => {
  
  return (
    <>
    <DiscordLink />
      <NavBar />
      <LandingScreen />
      <div className="Components">
        <AboutComponent id="about"/>
        <Swag />
      <Breeding />
      <UltraRares />
      </div>
    
      <div className="Components">
        <Roadmap id="roadmap" />
        <TheTeam />
        <NFTLinks />
        <FAQ id="faq" />
      </div>
      <FooterBar />
    </>
  );
};

export default MainPage;
