// Styled Components
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import SmartContract from "../ABI/contract.json";

const SmartContractAddress = "0x6aD4Ff63fD7CF6672eE33Cdad8e3EE14Bad52B4E";

const MintHeader = () => {
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

  // function updateProgressBar(progressBar, value) {
  //   value = Math.round(value);
  //   progressBar.querySelector(".progress__fill").style.width = `${value}`;
  //   progressBar.querySelector(".progress__text").textContent = `${value}/10000`;
  // }

  // const myProgressBar = document.querySelector(".progress");

  // /* Example */
  // updateProgressBar(myProgressBar, value);

  return (
    //     <Wrapper>
    //  <p className="header">MINT HERE</p>
    //       <progress
    //         id="mints"
    //         max="10000"
    //         low="33"
    //         high="66"
    //         optimum="80"
    //         value={remaining}
    //         aria-label="Mint progress..."
    //       ></progress>
    //       <p className="mintedqty">{remaining}/10000 Minted</p>
    //     </Wrapper>
    <Wrapper >
      <div className="container">
      <div className="header">Mint Now</div>
      <div className="progress-bar">
        <div className="progress fill-1">
          <div className="glow"></div>
        </div>
      </div>
      </div>
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
  max-width:600px;
  margin:0 auto;

  .header {
    font-size: 1.5rem;
    text-align: center;
  }

  #mints {
    display: flex;
    width: 20rem;
    height: 40px;
  }

  .mintedqty {
    position: relative;
    top: -45px;
    color: #000;
  }
`;
