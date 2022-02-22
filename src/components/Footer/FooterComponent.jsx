import React from "react";
import styled from "styled-components";
import SocialLinksFooter from "./SocialLinksFooter";
import FooterImage from "./FooterImage";
import FooterImage2 from "./FooterImage2";
import FooterText from "./FooterText";
// import WhiteLogo from "../Logo/logo";

const FooterBar = () => {
  return (
    <Wrapper>
      <FooterImage />
      <InnerWrapper>
        {/* <WhiteLogo /> */}
        <Discord
        className="fl-fl float-dc"
        href="#Mint"
      >
        MINT NOW
      </Discord>
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
  margin-top: 1rem;
  margin-bottom: -1.2rem;
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
  color: #fff;
  background-color: #000;
  padding: 8px 20px;;
  border-style: solid;
  border-radius: 3px;
  font-family: "Montserrat", Sans-serif;
  margin-bottom:1rem;
  margin-right:1rem;
 
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