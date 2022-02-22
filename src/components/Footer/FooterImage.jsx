import React from "react";
import styled from "styled-components";
// import Preview1 from "../../images/5.webp";

const PreviewImages = () => {
  return (
    <Wrapper>
      <StyledImage
        loading="lazy"
        width={500}
        height={500}
        className="preview-image1"
        src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/a795bbb3-5ea1-4b4e-99fa-d2f279dfec00/GIF"
        alt="LilHustla Preview 1"
      />
    </Wrapper>
  );
};

export default PreviewImages;

const StyledImage = styled.img`
  max-width: 100%;
  height:auto;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
   margin-bottom:7rem;
    }
`;

const Wrapper = styled.div`
  display: flex;
`;
