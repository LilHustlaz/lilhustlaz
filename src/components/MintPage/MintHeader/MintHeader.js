// Styled Components
import styled from "styled-components";

const MintHeader = () => {

  return (
    <Wrapper>
      <h1>Mint Now</h1><br /><br />
    </Wrapper>
  );
};

export default MintHeader;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: max-content;
  max-width: 100%;
  padding: 0 25px;
  color: #fff;
  font-weight: 700;
  max-width: 600px;
  margin: 0 auto;

  .header {
    font-size: 1.5rem;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;
