// React
import { useState, useEffect } from "react";

// Styled Components
import styled from "styled-components";

// Ethers
import { ethers } from "ethers";

// Web3Modal
import Web3Modal from "web3modal";

// Redux
import { useSelector } from "react-redux";

// Contract
import SmartContract from "../ABI/contract.json";

const SmartContractAddress = "0x6aD4Ff63fD7CF6672eE33Cdad8e3EE14Bad52B4E";

const MintTotal = () => {
  const amount = useSelector((state) => state.mint.amount);

  const [remaining, setRemaining] = useState("");
  const [price, setPrice] = useState();

  const getRemaining = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rinkeby.infura.io/v3/2f7e7b42a7a048bfb39748013be17001"
    );

    const contract = new ethers.Contract(
      SmartContractAddress,
      SmartContract,
      provider
    );

    const total = await contract.totalSupply();

    setRemaining(total.toString());
  };

  const getMintCost = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rinkeby.infura.io/v3/2f7e7b42a7a048bfb39748013be17001"
    );

    const contract = new ethers.Contract(
      SmartContractAddress,
      SmartContract,
      provider
    );

    const mintCost = await contract.price();

    const ethValue = ethers.utils.formatEther(mintCost);

    setPrice(ethValue);
  };

  useEffect(() => {
    getRemaining();

    getMintCost();
  }, [remaining]);

  return (
    <Wrapper>
      <div className="info">
        <p className="header">TOTAL</p>
        <p className="amount">{(price * amount).toFixed(3)} ETH</p>
      </div>
    </Wrapper>
  );
};

export default MintTotal;

const Wrapper = styled.div`
  height: 75px;
  max-width: 100%;
  padding: 0 25px;
  color: #B4B4B4;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    width: 100%;
    height: 100%;


    padding: 12px 0;
    border-bottom: 1px solid #B4B4B4;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .header {
      font-size: 1rem;
      font-weight:400;
    }

    .amount {
      font-size: 1rem;
      color:#fff;
      font-weight:700;
    }
  }
`;
