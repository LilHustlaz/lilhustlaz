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
display:flex;
width: 10rem;
margin: 0 auto 3rem auto;
  text-decoration: none;
  font-size:20px;
  font-weight: 700;
  color: #000;
  background-color: #000;
  padding: 8px 20px;;
  border-radius: 3px;
  animation: glowing 2300ms infinite;
  justify-content: center

  }

  @media only screen and (min-width: 872px) and (max-width: 982px) {
    font-size:12px;
    }
`;

const Wrapper = styled.div`

`;
