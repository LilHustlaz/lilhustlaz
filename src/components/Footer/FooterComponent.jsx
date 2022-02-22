import React from "react";
import styled from "styled-components";
import SocialLinksFooter from "./SocialLinksFooter";
import FooterImage from "./FooterImage";
import FooterImage2 from "./FooterImage2";
import FooterText from "./FooterText";
// import WhiteLogo from "../Logo/logo";

const FooterBar = () => {
  return (
    <Wrapper className="footer-container">
      <FooterImage />
      <InnerWrapper>
        <Discord href="#Mint">MINT NOW</Discord>
        <SocialLinksFooter />
        <FooterText />
      </InnerWrapper>
      <FooterImage2 />
    </Wrapper>
  );
};

export default FooterBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0 -1.2rem 0;
  justify-content: space-between;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    background-color: transparent;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Discord = styled.a`
text-decoration: none;
font-size:20px;
font-weight: 700;
color: #000;
background-color: #000;
padding: 8px 20px;;
// border-style: solid;
border-radius: 3px;
font-family: "Montserrat", Sans-serif;
animation: glowing 2300ms infinite;
  margin: 0 1rem 1rem 0;
 
  &:hover {
    color: #000;
    border-color: white;
    background-color: #FFF;
    transition: all .3s;
   }
  }

  @media only screen and (min-width: 872px) and (max-width: 982px) {
    font-size:12px;
    }
`;
