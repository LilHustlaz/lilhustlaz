import React from "react";
import styled from "styled-components";
import RoadmapText from "./RoadmapText";
import RoadmapImage from "./RoadmapImage";
import DiscordLink from "../Socials/Button";

const Roadmap = () => {
  return (
    <Wrapper id="roadmap">
      <RoadmapText />
      <RoadmapImage />
      <DiscordLink className="MintRoadmap" />
    </Wrapper>
  );
};

export default Roadmap;

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  border-top: solid white 2px;
  padding: 0rem 0.5rem;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 2rem 0.5rem 1rem 0.5rem;
  }
`;
