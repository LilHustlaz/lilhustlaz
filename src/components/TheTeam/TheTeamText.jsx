import React from "react"
import styled from "styled-components";


const TeamTitle = () => {
    return (
      <Wrapper>
           <Title>Meet The Team</Title>
      </Wrapper>
    );
  };

export default TeamTitle;

const Wrapper = styled.div`
color:yellow;
`;

const Title = styled.h1`
margin:0rem 0 2rem 0;
font-size: 2.5rem;
`;