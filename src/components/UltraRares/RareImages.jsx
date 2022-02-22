import React from "react";
import styled from "styled-components";

const RareImages = () => {

  return (
    <Wrapper>
      <div class="scene">
        <div class="carousel">
          <div class="carousel__cell"></div>
          <div class="carousel__cell"></div>
          <div class="carousel__cell"></div>
          <div class="carousel__cell"></div>
          <div class="carousel__cell"></div>
          <div class="carousel__cell"></div>
          <div class="carousel__cell"></div>
          <div class="carousel__cell"></div>
          <div class="carousel__cell"></div>
        </div>
      </div>
      <div>
        <button class="previous-button">Previous</button>
        <button class="next-button">Next</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export default RareImages;
