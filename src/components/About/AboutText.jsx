import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Wrapper>
      <About>ABOUT </About>
      <Title>WE ARE HUSTLAZ </Title>
      <Subtitle>No ordinary PFP </Subtitle>
      <Text>
        <strong>Lil Hustlaz</strong> is an NFT (Non-Fungible Token) project that
        brings ownership into the 21st century. The project connects the digital
        and physical worlds using NFTs as the medium.
      </Text>
      <Text>
        With an art style inspired by the hip-hop industry. Owning one of these
        hustlaz gets you access to exclusive utility and benefits.
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 0 0 1rem;
  max-width: 40rem;
`;

const About = styled.p`
  color: #b4b4b4;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 0;
`;

const Subtitle = styled.h2`
  margin-top: 0.25rem;
  color: #fdf954;
`;

const Text = styled.p`
  color: #b4b4b4;
  line-height: 1.87;
  font-size: 1.2rem;
`;

export default AboutUs;
