import React from "react";
import styled from "styled-components";
import WelcomeImage from "./WelcomeImage";
// import WelcomeText from "./WelcomeText";
import MintPage from "../MintPage/pages/MintPage";

const LandingScreen = () => {
  return (
    <Wrapper className="welcome-container">
      <WelcomeImage />
      <MintPage />
    </Wrapper>
  );
};

export default LandingScreen;

const Wrapper = styled.div`
  margin-top: -3rem;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin-top: -2rem;
  }
`;
