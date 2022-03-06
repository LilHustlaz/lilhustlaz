// Styled Components
import styled from "styled-components";
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import SmartContract from "../ABI/contract.json";
// import ProgressBar from "@ramonak/react-progress-bar";
// import ProgressBar from "./progressbar";

const SmartContractAddress = "0xB80a06EA0f4D17DD7D4b584DAA483C760331137B";

const MintHeader = () => {
//   const amount = useSelector((state) => state.mint.amount);

//   const [remaining, setRemaining] = useState("");
//   const [price, setPrice] = useState();

//   const getRemaining = async () => {
//     const provider = new ethers.providers.JsonRpcProvider(
//       "https://mainnet.infura.io/v3/2207143b2f5c4866a25cc7e202920a0f"
//     );

//     const contract = new ethers.Contract(
//       SmartContractAddress,
//       SmartContract,
//       provider
//     );

//     const total = await contract.totalSupply();

//     setRemaining(total.toString());
//   };

//   const getMintCost = async () => {
//     const provider = new ethers.providers.JsonRpcProvider(
//       "https://mainnet.infura.io/v3/2207143b2f5c4866a25cc7e202920a0f"
//     );

//     const contract = new ethers.Contract(
//       SmartContractAddress,
//       SmartContract,
//       provider
//     );

//     const mintCost = await contract.price();

//     const ethValue = ethers.utils.formatEther(mintCost);

//     setPrice(ethValue);
//   };

//   useEffect(() => {
//     getRemaining();

//     getMintCost();
//   }, [remaining]);

//   const testData = [{ bgcolor: "#fdf954", completed: 100 }];

//   const [completed, setCompleted] = useState(0);

//   useEffect(() => {
//     setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
//   }, []);

  return (
    <Wrapper>
      <h1>Mint Now</h1>
    <br/>
    <br/>
//       <div className="progressbar3">
//         {testData.map((item, idx) => (
//           <ProgressBar key={idx} bgcolor={item.bgcolor} completed={remaining/100} />
//         ))}
//       </div>
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
