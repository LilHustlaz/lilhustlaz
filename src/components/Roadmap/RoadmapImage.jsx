import React from "react";
import styled from "styled-components";
// import Roadmap from "../../images/roadmap.webp"

const RoadmapImage = () => {
  return (
    <Wrapper>
      <StyledImage
        loading="lazy"
        width={1100}
        height={1100}
        className="roadmap-image"
        src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/bc73ca1e-92b9-4d23-496f-78486bd17400/roadmap"
        alt="LilHustla Roadmap"
      />
    </Wrapper>
  );
};

export default RoadmapImage;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Wrapper = styled.div``;
