import React from "react";
import styled from "styled-components";

const BreedingText = () => {
  return (
    <Wrapper>
      <Title>The Future</Title>
      <Subtitle>Long-Term Value</Subtitle>
      <Text>
       Our earnings program utility will carry over to all of our team’s future projects, starting with our sister collection <b>Lil Baddiez</b>.
  
      </Text>
      <Text>
        Not only that, but we also have a utility token which can be earned over time with our staking protocol by simply holding Lil Hustlaz. The more you hold, the more you earn!
      </Text>
    </Wrapper>
  );
};

export default BreedingText;

const Wrapper = styled.div`
  padding: 1rem 0 0 1rem;

  b {
    color: #b4b4b4;
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
  color: white;
`;

const Subtitle = styled.h2`
  margin-top: 0.25rem;
  color: #fdf954;
`;

const Text = styled.p`
  color: #b4b4b4;
  font-size: 1.2rem;
  line-height: 1.87;
`;
