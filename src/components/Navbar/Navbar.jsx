import React from "react";
import styled from "styled-components";
import WhiteLogo from "../Logo/logo";
import DiscordLink from "../Socials/Discord";
import SocialLinks from "../Socials/SocialLinks";
import NavLinks from "./NavbarLinks";

const NavBar = () => {
  return (
    <Nav>
      <Wrapper className="link-position">
        <WhiteLogo />
        <NavLinks />
      </Wrapper>
      <Blank><p>BlankSpa</p> </Blank>
      <Wrapper>
        <SocialLinks className="flex" />
        {/* <DiscordLink classname="mobile-no-display" /> */}
      </Wrapper>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  display: flex;
  align-items: center;
  // height: 8rem;
  justify-content: space-between;
  position: relative;
  z-index:9999;
 
  @media only screen and (min-width: 320px) and (max-width: 860px) {
  flex-direction: row;
  height: 7rem;
  justify-content: center
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 9rem;
  justify-content: space-between;
  
  @media only screen and (min-width: 320px) and (max-width: 600px) {
  flex-direction: column;
  margin-bottom:0.6rem;
  justify-content: center
`;

const Blank = styled.div`
color:transparent;
  
`;
