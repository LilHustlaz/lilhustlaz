// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { mintActions } from "../store/mint-slice";

const MintAmount = () => {
  const amount = useSelector((t) => t.mint.amount),
    dispatch = useDispatch(),
    decreaseQuantity = () => {
      amount > 1 &&
        amount <= 10 &&
        dispatch(mintActions.handleAmount(amount - 1));
    },
    increaseQuantity = () => {
      amount >= 1 &&
        amount < 10 &&
        dispatch(mintActions.handleAmount(amount + 1));
    },
    maxQuantity = () => {
      amount >= 1 &&
        amount < 10 &&
        dispatch(mintActions.handleAmount(10 - amount + amount));
    };

  return (
    <Wrapper>
      <div className="content">
        <TitleWrapper>
          <p className="wrapper">AMOUNT</p>
        </TitleWrapper>
        <ButtonGroup size="small" className="wrapper">
          <Button className="decrease" onClick={decreaseQuantity}>
            -
          </Button>
          <Button className="quantity" disabled>
            {amount}
          </Button>
          <Button className="increase" onClick={increaseQuantity}>
            +
          </Button>
        </ButtonGroup>
        <Button className="max" onClick={maxQuantity}>
          MAX
        </Button>
      </div>
    </Wrapper>
  );
};

export default MintAmount;

const Wrapper = styled.div`
  max-width: 100%;
  padding: 0 25px;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #b4b4b4;

    .max {
      font-size: 14px;
      height: 2rem;
      color: #000;
      background-color: #fff;
      border-radius: 3px;
      border: 1px solid #000;
      outline: none;
      margin-left: 0.5rem;
      font-weight: 700;

      &:hover {
        border: none;
        background-color: #fdf954;
        color: #000;
        border: 1px solid #FFF;
      }
    }

    .quantity {
      font-size: 24px;
      height: 2.5rem;
      color: #000;
      background-color: #FFF;
      border-radius: 3px;
      border: 1px solid #000;
      outline: none;
      margin-left: 1rem;
      font-weight: 700;
      margin-right: 0.5rem;
  }

    .increase {
      font-size: 14px;
      height: 2rem;
      color: #000;
      background-color: #fff;
      border-radius: 3px;
      border: 1px solid #000;
      outline: none;
      margin-left: 1rem;
      font-weight: 700;

      &:hover {
        border: none;
        background-color: #fdf954;
        color: #000;
        border: 1px solid #FFF;
      }
    }

    .decrease {
      font-size: 14px;
      height: 2rem;
      color: #000;
      background-color: #fff;
      border-radius: 3px;
      border: 1px solid #000;
      outline: none;
      margin-right: 0.5rem;
      font-weight: 700;

      &:hover {
        border: none;
        background-color: #fdf954;
        color: #000;
        border: 1px solid #FFF;
      }
    }

  .wrapper {
    // font-size: 16px;
    // width: 18rem;
    // background-color: transparent;
    align-items: center;
    // padding: 0;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  // padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 100%;
    background-color: transparent;
    color: #b4b4b4;
    font-size: 1rem;
    font-weight: 400;
  }
`;
