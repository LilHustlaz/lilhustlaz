import React from "react";
import styled from "styled-components";
import SwagText from "./SwagText";
import SwagImage from "./SwagImages";

const Swag = () => {
  return (
    <div className="swag-container">
      <Wrapper>
        <SwagText />
        <SwagImage />
      </Wrapper>
    </div>
  );
};

export default Swag;

const Wrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  border-top: solid white 2px;
  padding: 3rem 0.5rem;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-top: 1rem;
    padding: 1.5mmrem 0.5rem 2rem 0.5rem;
  }
`;
