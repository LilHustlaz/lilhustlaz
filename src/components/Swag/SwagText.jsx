import React from "react";
import styled from "styled-components";

const SwagText = () => {
  return (
    <Wrapper>
      <Title>NEXT GEN SWAG </Title>
      <Subtitle>The Hustle House</Subtitle>
      <Text>
        <b>A revolutionary approach</b> to the NFT industry and one of the core
        aspects of our utility. In essence, the Hustle House is a marketpace for
        physically backed NFTs.
      </Text>
      <Text>
        Our goal and mission is to tie illiquid physical luxury goods with
        liquid digital assets. We will accomplish this by backing a physical
        asset with its corresponding NFT.
      </Text>
    </Wrapper>
  );
};

export default SwagText;

const Wrapper = styled.div`
  padding: 1rem 0 0 1rem;
  max-width: 30rem;
  text-align: right;

  b {
    color: #b4b4b4;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    text-align: left;
    max-width: 40rem;
  }
`;

const Title = styled.h1`
margin-top:0;
  margin-bottom: 0;
  color: white;
`;

const Subtitle = styled.h2`
  margin-top: 0.25rem;
  color: yellow;
`;

const Text = styled.p`
  color: #b4b4b4;
  line-height: 1.87;
  font-size: 1.2rem;
`;