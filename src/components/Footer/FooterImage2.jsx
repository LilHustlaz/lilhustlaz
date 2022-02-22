import React from "react";
import styled from "styled-components";
// import Preview2 from "../../images/6.webp";

const PreviewImages = () => {
  return (
    <Wrapper>
      <StyledImage
        loading="lazy"
        width={500}
        height={500}
        className="preview-image2"
        src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/b3428554-aef7-4f54-4299-21bed204b200/GIF"
        alt="LilHustla Preview 2"
      />
    </Wrapper>
  );
};

export default PreviewImages;

const StyledImage = styled.img`
width: 100%;
height:auto;
`;

const Wrapper = styled.div`
  display: flex;
`;
