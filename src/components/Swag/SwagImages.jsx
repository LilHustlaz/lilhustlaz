import React from "react";
import styled from "styled-components";
import { Stream } from "@cloudflare/stream-react";

const SwagImages = () => {
  const videoId1 = "0f696763e5f6eec3d559c76b70255418";
  const videoId2 = "0c1cb41945c72da4bbce35b2504a864f";
  return (
    <Wrapper>
      <Stream
        controls={false}
        loop={true}
        muted={true}
        autoplay={true}
        id="preview-video1"
        src={videoId1}
        title="Necklace video"
      />
      
        <Stream
          controls={false}
          loop={true}
          muted={true}
          autoplay={true}
          className="preview-video2"
          src={videoId2}
          alt="LilHustla Preview 2"
          type="video/mp4"
          title="Shoes Video"
        />
     
    </Wrapper>
  );
};

export default SwagImages;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: 1fr 1fr;


  @media only screen and (max-width: 600px) {
    grid-template-rows: 1fr;

    .preview-video2{
      display: none;
    }
  }
`;
