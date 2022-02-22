import React from "react";
import styled from "styled-components";

const TheCards = () => {
  return (
    <Wrapper>
      <TeamCard>
        <StyledImage
          loading="lazy"
          width={300}
          height={300}
          className="team-image1"
          src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/867a47ef-6aea-4681-76c6-0e44e739aa00/pfp"
          alt="LilHustla team member 1"
        />
        <Name>PERRIN MONCUR</Name>
        <Role>CO-FOUNDER | OPERATIONS</Role>
        <div className="social-icon-flex">
          <Socials>
            <a
              className="Twitter"
              href="https://twitter.com/PtothePuff"
              alt="Perrin Twitter Profile"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </Socials>
          <Socials>
            <a
              className="LinkedIn"
              href="https://www.linkedin.com/in/perrin-moncur-b5672b137/"
              alt="Perrin LinkedIn Profile"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </Socials>
        </div>
      </TeamCard>
      <TeamCard>
        <StyledImage
          loading="lazy"
          width={300}
          height={300}
          className="team-image2"
          src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/561c55fe-2312-4cbd-820d-3c20c508c000/pfp"
          alt="LilHustla team member 2"
        />
        <Name>WYATT OATES</Name>
        <Role>CO-FOUNDER | VISION LEAD</Role>
        <div className="social-icon-flex">
          <Socials>
            <a
              className="Twitter"
              href="https://twitter.com/BigPerm222"
              alt="Wyatt Twitter Profile"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </Socials>
          <Socials>
            <a
              className="Jaxsta"
              href="https://jaxsta.com/profile/b88f3b18-de56-433b-8604-07d823b1e77e/catalogue?view=tile"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                src="https://lilhustlaz.com/wp-content/uploads/2022/02/Jaxsta_White.svg"
                alt="Jaxsta Profile"
                width={50}
                height={25}
              ></img>
            </a>
          </Socials>
        </div>
      </TeamCard>
      <TeamCard>
        <StyledImage
          loading="lazy"
          width={300}
          height={300}
          className="team-image3"
          src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/8c18e099-755f-441a-cb95-9ffe2279b900/pfp"
          alt="LilHustla team member 3"
        />
        <Name>LEAH THOMPSON</Name>
        <Role>ARTIST</Role>
        <Socials>
          <a
            className="Twitter"
            href="https://twitter.com/artlylee1"
            alt="Leah Twitter Profile"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </Socials>
      </TeamCard>
      <TeamCard>
        <StyledImage
          loading="lazy"
          width={300}
          height={300}
          className="team-image4"
          src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/155beec5-0a8c-4c0a-c212-264c3e858500/pfp"
          alt="LilHustla team member 4"
        />
        <Name>GOODFOOT</Name>
        <Role>MARKETING SPECIALIST</Role>
        <Socials>
          <a
            className="Twitter"
            href="https://twitter.com/NGoodfoot"
            alt="GoodFoot Twitter Profile"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </Socials>
      </TeamCard>
    </Wrapper>
  );
};

export default TheCards;

const Wrapper = styled.div`
  // padding: 0 1rem 0 1rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  color: #fff;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const TeamCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .social-icon-flex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  .fab {
    font-size: 2rem;
    color: yellow;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin-bottom: 3rem;
  }
`;

const StyledImage = styled.img`
  border-radius: 50%;
  max-width: 75%;
  height: auto;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    max-width: 75%;
  }
`;

const Name = styled.h1`
  font-size: 1.25rem;
  text-align: center;
`;

const Role = styled.p`
  font-size: 0.875rem;
  text-align: center;
  letter-spacing: 0.05em;
`;

const Socials = styled.i`
  a {
    font-size: 2.5rem;
    &:hover {
      opacity: 0.5;
    }
  }
`;
