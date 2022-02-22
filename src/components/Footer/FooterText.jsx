import React from "react";
import styled from "styled-components";

const FooterText = () => {
  return (
    <Wrapper>
      <Text>Terms of Service</Text>
      <Text><strong>© 2021 Lil Hustlaz | All Rights Reserved</strong></Text>
    </Wrapper>
  );
};

export default FooterText;

const Text = styled.p`
display:flex;
justify-content: center;
  padding-right: 1rem;
  width: 20rem;
  margin-top:1rem;
  color:#B4B4B4;

strong {
  font-size:1rem;
  font-weight:400;
  color:red;
}

`;

const Wrapper = styled.div`
  color: #fff;
`;