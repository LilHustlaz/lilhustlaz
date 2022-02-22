import React from "react";
import styled from "styled-components";
import missing from "../../images/404.webp";

const NotFound = () => {
  return (
    <Wrapper>
      <Text>
        <h1 className="404-title">Error 404</h1>
        <h2 className="404-text">
          The page you are looking for can't be found.
        </h2>
        <a href="/Home">
          {" "}
          <p className="404-text">Click here to go back home.</p>
        </a>
      </Text>
      <Wrapper>
        <StyledImage
          className="404-image"
          src={missing}
          alt="Visual 404"
        ></StyledImage>
      </Wrapper>
    </Wrapper>
  );
};

export default NotFound;

const StyledImage = styled.img`
  display: block;
  max-width: 70%;
  height: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: #fff;
  text-align: center;
`;

const Text = styled.div`
  margin: 0;

  p {
    text-decoration: none;
    color: white;
    background-color: #000;
    cursor: pointer;
    padding: 12px 24px;
    border-style: solid;
    border-radius: 3px;
    border-color: white;
  }

  p:hover {
    background-color: red;
    cursor: pointer;
  }
`;
