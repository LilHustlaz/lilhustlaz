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
        src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/6f98b516-b7cb-4cdc-47a1-25861558d900/roadmap"
        alt="LilHustla Earning"
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
