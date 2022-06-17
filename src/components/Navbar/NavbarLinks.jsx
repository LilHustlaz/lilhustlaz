import React from "react";
import styled from "styled-components";
import Pdf from "./WP.pdf";

const NavLinks = () => {
  return (
    <Wrapper>
      <NavList className="nav-list">
        <NavItem>
          <a href="#about" alt="about section">
            About
          </a>
        </NavItem>
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
    display: none;
  }
`;

const NavItem = styled.li`
  a {
    color: #fff;
    padding-right: 1rem;
    text-decoration: none;

    &:hover {
      color: yellow;
    }
  }
`;

const Wrapper = styled.div`
  color: #fff;
`;
