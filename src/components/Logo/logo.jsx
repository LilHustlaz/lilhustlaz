import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.webp";

const WhiteLogo = () => {
  return (
    <Wrapper>
      <a href="/Home">
        <LogoImage src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/a3a68505-0c43-4f15-cc77-f42557ce5f00/logo" alt="LilHustla Logo" width={100} height={100} />
      </a>
    </Wrapper>
  );
};

export default WhiteLogo;

const Wrapper = styled.div`
  padding-left: 1rem;
  &:hover {
    opacity: 0.5;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding-left: 0rem;
  }
`;

const LogoImage = styled.img`
  max-width: 100%;
  &:hover {
    opacity: 0.5;
  }
`;
