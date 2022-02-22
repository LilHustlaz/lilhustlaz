// Styled Components
import styled from "styled-components";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";

// Components
import MintHeader from "./MintHeader/MintHeader";
import MintInfo from "./MintInfo/MintInfo";
import MintAmount from "./MintAmount/MintAmount";
import MintTotal from "./MintTotal/MintTotal";
import MintButton from "./MintButton/MintButton";
import MintVideo from "./MintVideo";

const Mint = () => {
  return (
    <Provider store={store}>
      <Container classname="container">
        <Wrapper id="Mint">
          <MintHeader />
          <MintInfo />
          <MintAmount />
          <MintTotal />
          <MintButton />
        </Wrapper>
      </Container>
    </Provider>
  );
};

export default Mint;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap:1rem;
`;

const Wrapper = styled.div`
  padding: 40px 0;
  height: min-content;
  z-index: 1;
  margin-left: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 10px;
  color: #000;
  border: 2px solid #fff;
  background-color: #000;
  width: 600px;
  width: 100%;
  margin-bottom:3rem;

  @media only screen and (max-width: 575px) {
    
    padding: 40px 0;
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin: 40px auto 0 auto;
    padding: 40px 0;
  }

  @media only screen and (max-width: 600px) {
    margin: -16px 0;
    padding: 40px 0;
    margin-bottom:1rem;
  }
`;