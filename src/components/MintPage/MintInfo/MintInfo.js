// React
import React, { useState, useEffect } from "react";

// Styled Components
import styled from "styled-components";

// Ethers
import { ethers } from "ethers";

// Web3Modal
import Web3Modal from "web3modal";

// Contract
import SmartContract from "../ABI/contract.json";

const SmartContractAddress = "0xB80a06EA0f4D17DD7D4b584DAA483C760331137B";

const MintInfo = () => {
  const [remaining, setRemaining] = useState("");

  const [price, setPrice] = useState(0.2);

  const getRemaining = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/2f7e7b42a7a048bfb39748013be17001"
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
      "https://mainnet.infura.io/v3/2f7e7b42a7a048bfb39748013be17001"
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
    getMintCost();
    getRemaining();
  }, []);

  return (
    <Wrapper>
      <div className="content">
      <p className="">PRICE </p>
        <p className="price">
          <span>{price}</span> ETH
        </p>
      </div>
    </Wrapper>
  );
};

export default MintInfo;

const Wrapper = styled.div`
  max-width: 100%;
  height: max-content;
  text-align: center;
  padding: 0 25px;
  color: #B4B4B4;
  font-size: 1rem;

  .content {
    border-bottom: 1px solid #B4B4B4;
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    .heading {
      font-size: 1rem;
    }

    .price {
      font-size: 1rem;
      color: #fff;

      span {
        font-weight: 700;
      }
    }

    .remaining {
      font-size: 1rem;
    }
  }
`;
