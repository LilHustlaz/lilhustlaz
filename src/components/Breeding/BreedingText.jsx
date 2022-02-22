import React from "react";
import styled from "styled-components";

const BreedingText = () => {
  return (
    <Wrapper>
      <Title>BREEDING </Title>
      <Subtitle>Lil Baddiez & Lil Babiez</Subtitle>
      <Text>
        Shortly after our public launch, <b>Lil Baddiez</b> will make their way into
        the hustleverse. Designed by our female artist, our sister collection is
        made to positively represent the emerging female demographic in the NFT
        space.
      </Text>
      <Text>
        Lil Baddiez come with the exclusive <b>ability to breed</b> and create a Lil
        Babiez NFT which will come with extreme benefits.
      </Text>
    </Wrapper>
  );
};

export default BreedingText;

const Wrapper = styled.div`
  padding: 1rem 0 0 1rem;

  b{
    color:#B4B4B4;
  }

`;

const Title = styled.h1`
margin-bottom:0;
color:white;

`;

const Subtitle = styled.h2`
margin-top:0.25rem;
color:#FDF954;

`;

const Text = styled.p`
color:#B4B4B4;
font-size:1.2rem;
line-height:1.87;

`;