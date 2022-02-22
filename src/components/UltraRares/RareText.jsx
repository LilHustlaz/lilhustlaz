import React from "react";
import styled from "styled-components";

const RareText = () => {
  return (
    <Wrapper>
      <Subtitle>Ultra Rares </Subtitle>
      <Text>
        <strong>Ultra Rare Hustlaz</strong> will be randomly hidden throughout our
        original collection. There are only 10, will you be lucky enough to mint
        one?
      </Text>
    </Wrapper>
  );
};

export default RareText;

const Wrapper = styled.div`
// padding:1rem 0 0 1rem;
display:flex;
grid-gap: 1rem;
justify-content: center;
align-items: center;

@media only screen and (min-width: 320px) and (max-width: 600px) {
  flex-direction: column;
  text-align: center;
}
`;

const Subtitle = styled.h1`
  color: #fdf954;
  font-size: 2.5rem;
  margin:0;
`;

const Text = styled.p`
  color: #b4b4b4;
  width: 55.982%;
  line-height: 1.87;
  margin-left:5rem;
  font-size: 1.2rem;

  b {
    font-weight: 400;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
    text-align: left;
    width: 100%;
    margin-left:1rem;
    margin-top:0;
    margin-bottom:0;
    font-size: 1.15rem;
  }
`;
