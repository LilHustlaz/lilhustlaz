import React from "react";
import styled from "styled-components";
// import Baddie from "../../images/baddie.webp"
import DiscordLink from "../Socials/Button";

const BreedingImages = () => {
  return (
    <Wrapper>
      <StyledImage
        loading="lazy"
        width={500}
        height={499}
        className="preview-image1"
        src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/5f57c47a-9454-4f3d-8424-f8eac066cc00/GIF"
        alt="LilHustla Preview 1"
      />
    </Wrapper>
  );
};

export default BreedingImages;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  align-self: flex-start;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 320px) and (max-width: 515px) {
    grid-row: 2;
  }
`;
