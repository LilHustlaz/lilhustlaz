import React from "react";
import styled from "styled-components";
import TeamTitle from "./TheTeamText";
import TheCards from "./TheTeamCards";

const TheTeam = () => {
  return (
    <Wrapper className="team-container">
      <TeamTitle />
      <TheCards />
    </Wrapper>
  );
};

export default TheTeam;

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 1rem;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  border-top: solid white 2px;
  padding: 3rem 0.5rem;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 2rem 0.5rem 0rem 0.5rem;
  }
`;
