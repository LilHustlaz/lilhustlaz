import React from "react";
import styled from "styled-components";
import Pdf from "./Whitepaper.pdf"

const NavLinks = () => {
  return (
    <Wrapper>
      <NavList className="nav-list">
        <NavItem href="#about">About</NavItem>
        <NavItem href="#roadmap">Roadmap</NavItem>
        <NavItem target="_Blank" href = {Pdf}>Whitepaper</NavItem>
        <NavItem href="#faq">FAQ</NavItem>
      </NavList>
    </Wrapper>
  );
};

export default NavLinks;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding-left: 1rem;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    display:none;
    }
`;

const NavItem = styled.a`
  color: #fff;
  padding-right: 1rem;
  text-decoration: none;

  &:hover {
    color: yellow;
  }
`;

const Wrapper = styled.div`
  color: #fff;
`;