import React from "react";
import styled from "styled-components";

const SocialLinks = () => {
  return (
    <Wrapper>
      <SocialList className="Social-Icons" aria-hidden="false">
        <FaIcons>
          <a
            className="fab fa-discord"
            href="https://discord.gg/sQjgnJbgu3"
            alt="discord link"
            target="_blank"
            rel="noreferrer"
            aria-hidden="false"
          >
            {" "}
          </a>
        </FaIcons>
        <FaIcons>
          <a
            className="fab fa-twitter"
            href="https://twitter.com/LilHustlazNFT"
            alt="twitter link"
            target="_blank"
            rel="noreferrer"
            aria-hidden="false"
          >
            {" "}
          </a>
        </FaIcons>
        <FaIcons>
          <a
            className="fab fa-instagram"
            href="https://instagram.com/LilHustlaz"
            alt="instagram link"
            target="_blank"
            rel="noreferrer"
            aria-hidden="false"
          >
            {" "}
          </a>
        </FaIcons>
      </SocialList>
    </Wrapper>
  );
};

export default SocialLinks;

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 3rem 0 0;
  padding-left: 0rem;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    align-items: center;
    justify-content: center;
    margin: 0 0 0 0;
  }

  @media only screen and (min-width: 320px) and (max-width: 858px) {
    padding-top: 0rem;
    // padding-left: 0rem;
    justify-content: center;
  }
`;

const FaIcons = styled.i`
  .fab {
    background-color: #fff;
    border-radius: 50%;
    color: #000;
    display: inline-block;
    // line-height: 30px;
    font-size: 18px;
    text-align: center;
    padding: 0.75rem;
    margin-right: 1rem;

    &:hover {
      transform: scale(0.8);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;

  a {
    text-decoration: none;
  }
`;