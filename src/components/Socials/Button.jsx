import React from "react";
import styled from "styled-components";

const DiscordLink = () => {
  return (
    <Wrapper>
      <Discord className="fl-fl float-dc" href="#Mint">
        MINT NOW
      </Discord>
    </Wrapper>
  );
};

export default DiscordLink;

const Discord = styled.a`
  text-decoration: none;
  font-size:20px;
  font-weight: 700;
  color: #000;
  background-color: #000;
  padding: 8px 20px;;
  // border-style: solid;
  border-radius: 3px;
  font-family: "Montserrat", Sans-serif;
  animation: glowing 2300ms infinite;

 
  &:hover {
    color: #000;
    border-color: white;
    background-color: #FFF;
    transition: all .3s;
   }
  }

  @media only screen and (min-width: 872px) and (max-width: 982px) {
    font-size:12px;
    // margin-right: 1rem;
    margin-left: 0rem;
    }

  @media only screen and (min-width: 320px) and (max-width: 872px) {
    margin-left: 1rem;
    }
`;

const Wrapper = styled.div`

`;
