import React from "react";
import styled from "styled-components";

const SwagText = () => {
  return (
    <Wrapper>
      <Title>Get this Money!
 </Title>
      <Subtitle>Earnings Program</Subtitle>
      <Text>
        <b>A revolutionary approach</b> to the NFT industry and one of the core aspects of our utility. Our earnings program is your ticket to financial freedom, all available via your phone or computer.
      </Text>
      <Text>
        You can earn up to 75% commission for each Lil Hustlaz NFT you sell!  We are completely changing the game by providing a legitimate earning opportunity to every member, both to new and seasoned hustlers in our community.

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
  margin-top: 0;
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
