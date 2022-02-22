import React from "react";
import styled from "styled-components";
import AboutUs from "./AboutText";
import PreviewImages from "./PreviewImages";



const About = () => {
  return (
    <div >
    <Wrapper id="about" >
      <PreviewImages />
      <AboutUs />
    </Wrapper>
    </div>
  );
};

export default About;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  border-top: solid white 2px;
  padding: 3rem 0.5rem 2rem 0.5rem;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 3rem 0.5rem 0rem 0.5rem;
  }
`;
