import React from "react";
import styled from "styled-components";
import { Stream } from "@cloudflare/stream-react";

const MintVideo = () => {
  const videoId3 = "e75f4bc3cf41c1c55be5acce56b879b8";

  return (
    <Wrapper>
      <Stream
      width={600}  
      height={600}          
      controls={false}
        loop={true}
        muted={true}
        autoplay={true}
        id="preview-video1"
        src={videoId3}
        title="Mint gif"
      />
     
    </Wrapper>
  );
};

export default MintVideo;

const Wrapper = styled.div`
border: 2px solid #fff;
margin: 0 0 0 16px;
border-radius: 10px;
padding: .75rem;
background-color: #000;
width: 575px;
height: 575px;


@media only screen and (max-width: 1024px) {
  display: none;
}
`;
