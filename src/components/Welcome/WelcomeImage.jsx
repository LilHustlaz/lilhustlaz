import React from "react";
import styled from "styled-components";

const WelcomeImage = () => {

  // document.addEventListener('mousemove', parallax);
  // function parallax(e){
  //   document.querySelectorAll('.layer').forEach(layer =>{
  //     var speed = layer.getAttribute('data-speed');
  //     var x     = (window.innerWidth - e.pageX * speed)/100;
  //     var y     = (window.innerWidth - e.pageY * speed)/100;
  //     layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  
  //   });
  // } 

  return (

      <Wrapper id='module' >
            <img className="bannerimage" src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/6e48da32-3d06-466d-9232-b161c6854e00/banner" alt="hustlas"></img>
        </Wrapper>
 
  );
};

export default WelcomeImage;

const Wrapper = styled.div`

z-index:9999;

// @media only screen and (min-width: 320px) and (max-width: 920px) {
//  display:none
// }
`;
