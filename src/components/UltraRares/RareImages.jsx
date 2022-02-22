import React from "react";
import styled from "styled-components";
import {Carousel} from '3d-react-carousal';

const RareImages = () => {
  let slides = [
    <img src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/26dc50e1-0345-4cad-8be5-b42cdfcce800/GIF" alt="70s" />,
    <img src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/e91351dd-834f-4db9-4caf-7b3f75c52600/GIF" alt="Mutant" />,
    <img src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/f4518d69-b84b-4d90-c594-58b1a48a3500/GIF" alt="8Bit" />,
    <img src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/14b3d83b-571c-4c08-7b01-80f6b9c8aa00/GIF" alt="Backwards" />,
    <img src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/981fae56-52f0-4aaa-6c82-71b6493fdf00/GIF" alt="Lost In Space" />,
    <img src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/05583a74-9bfb-4953-e2e4-1203433b6f00/GIF" alt="Cloud 9" />,
    <img src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/27d99488-adad-451c-89eb-fa698d143900/GIF" alt="80s" />,
    <img src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/79c85f7f-3fb1-4bd0-18ed-de106a518000/GIF" alt="Robo" />,
    <img src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/782e15fc-260f-4176-8a2d-0ab0671cd600/GIF" alt="Frozen" />,
    <img src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/c09bc2c8-d37c-4f43-2cc7-8e95b167ad00/GIF" alt="Zuko" />,
  ];
  return (
    <Wrapper>
      <Carousel slides={slides} autoplay={false} interval={1000}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export default RareImages;

