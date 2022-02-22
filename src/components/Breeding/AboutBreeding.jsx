import React from "react";
import styled from "styled-components";
import BreedingImages from "./BreedingImages";
import BreedingText from "./BreedingText";

const Breeding = () => {
  return (
    <div >
      <Wrapper>
        <BreedingImages />
        <BreedingText />
      </Wrapper>
    </div>
  );
};

export default Breeding;

const Wrapper = styled.div`
margin-top: 1rem;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 1rem;
border-top: solid white 2px;
padding: 3rem 0.5rem 2rem 0.5rem;
align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 515px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-top: 1rem;   
    padding: 0rem 0.5rem 1.5rem 0.5rem;
  }

  @media only screen and (min-width: 515px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-top: 1rem;
  }
`;
