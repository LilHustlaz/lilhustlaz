import React from "react";
import styled from "styled-components";

const WelcomeImage = () => {
  return (
    <Wrapper id="module">
      <img
        className="bannerimage"
        src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/6e48da32-3d06-466d-9232-b161c6854e00/backgrounddesktop"
        width={1500}
        height={750}
        alt="hustlas"
      ></img>
    </Wrapper>
  );
};

export default WelcomeImage;

const Wrapper = styled.div``;
