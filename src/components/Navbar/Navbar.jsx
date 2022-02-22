import React from "react";
import styled from "styled-components";
import WhiteLogo from "../Logo/logo";
import MintLink from "./MintButton.jsx";
import SocialLinks from "../Socials/SocialLinks";
import NavLinks from "./NavbarLinks";

const NavBar = () => {
  return (
    <Nav className="navbar-container">
      <Wrapper className="link-position">
        <WhiteLogo />
        <NavLinks />
      </Wrapper>
      <Blank>
        <p>BlankSpa</p>{" "}
      </Blank>
      <Wrapper>
        <MintLink classname="mobile-no-display" />
        <SocialLinks className="flex" />
      </Wrapper>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom:2rem;
  z-index:9999;
 
  @media only screen and (min-width: 320px) and (max-width: 860px) {
  flex-direction: row;
  height: 4rem;
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
  color: transparent;
`;
