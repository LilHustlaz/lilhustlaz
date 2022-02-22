import React from "react";
import styled from "styled-components";
import WhiteLogo from "../Logo/logo";
import SocialLinksFooter from "./SocialLinksFooter";
import FooterImage from "./FooterImage";
import FooterImage2 from "./FooterImage2";
import FooterText from "./FooterText";

const FooterBar = () => {
  return (
    <Wrapper>
      <FooterImage />
      <InnerWrapper>
        <WhiteLogo />
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