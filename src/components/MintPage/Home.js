// Styled Components
import styled from "styled-components";

// Components
import Mint from "./Mint";
import MintVideo from "./MintVideo";

const Home = () => {
  return (
    <Wrapper className="minting-container">
      <Mint />
      <MintVideo />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
max-width: 75rem;
margin-left:auto;
margin-right:auto;
font-family: "Montserrat", Sans-serif;
display:flex;
justify-content: center;
display: grid;
grid-template-columns: 1fr 1fr;


@media only screen and (max-width:1024px) {
  grid-template-columns: 1fr;
  margin-top: 1rem;
}
`;
