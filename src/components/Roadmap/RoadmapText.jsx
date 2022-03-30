import React from "react";
import styled from "styled-components";

const RoadmapText = () => {
  return (
    <Wrapper>
      <WelcomeTitle className="welcome-title">EARNING PROGRAMS</WelcomeTitle>
    </Wrapper>
  );
};

export default RoadmapText;

const Wrapper = styled.div`
  margin-top: 3rem;
  color: #fff;
`;

const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0rem 0 2rem 0;
`;
