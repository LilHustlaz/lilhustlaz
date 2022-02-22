import React from "react";
import styled from "styled-components";
// import Preview1 from "../../images/3.webp";
// import Preview2 from "../../images/2.webp";
// import Preview3 from "../../images/4.webp";
// import Preview4 from "../../images/1.webp";

const PreviewImages = () => {
  return (
    <Wrapper>
      <StyledImage
        width={300}
        height={300}
        loading="lazy"
        className="preview-image1"
        src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/4c05500a-13e7-42d1-d711-94d40d581700/pfp"
        alt="LilHustla Preview 1"
      />
      <StyledImage
        width={300}
        height={300}
        loading="lazy"
        className="preview-image2"
        src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/9ff03803-95c6-4392-c5b4-1c67c6f65300/pfp"
        alt="LilHustla Preview 2"
      />
      <StyledImage
        width={300}
        height={300}
        loading="lazy"
        className="preview-image3"
        src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/c4e9271f-14d5-44ef-18cc-983c61e2f900/pfp"
        alt="LilHustla Preview 3"
      />
      <StyledImage
        width={300}
        height={300}
        loading="lazy"
        className="preview-image4"
        src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/48403f26-e8fa-4abd-610a-8196e1268a00/pfp"
        alt="LilHustla Preview 4"
      />
    </Wrapper>
  );
};

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;

  &:hover {
    transform: scale(1.5);
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    &:hover {
      transform: none;
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    // grid-template-columns: 1fr;
    // grid-template-rows: 1fr;
  }
`;

export default PreviewImages;
