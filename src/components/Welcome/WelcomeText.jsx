import React from "react"
import styled from "styled-components";
import DiscordLink from "../Socials/Discord";


const WelcomeText = () => {
    return (
      <Wrapper>
           <WelcomeTitle className="welcome-title">WELCOME TO THE HUSTLEVERSE</WelcomeTitle>
      </Wrapper>
    );
  };

export default WelcomeText;

const Wrapper = styled.div`
color:#fff;
display:grid;
justify-items: center;
text-align: center;

`;

const WelcomeTitle = styled.h1`
font-size:2.25rem;
margin:0 0 2rem 0;

@media only screen and (min-width: 320px) and (max-width: 600px) {
  margin:0 0 -1rem 0;
}
`;