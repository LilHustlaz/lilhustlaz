import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import SmartContract from "../ABI/contract.json";

const SmartContractAddress = "0xB80a06EA0f4D17DD7D4b584DAA483C760331137B";

const ProgressBar = (props) => {
  const amount = useSelector((state) => state.mint.amount);

  const [remaining, setRemaining] = useState("");
  const [price, setPrice] = useState();

  const getRemaining = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/2207143b2f5c4866a25cc7e202920a0f"
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
      "https://mainnet.infura.io/v3/2207143b2f5c4866a25cc7e202920a0f"
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

    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 40,
      width: '300px',
      backgroundColor: "#e0e0de",
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'center',
      boxShadow: '3px 0px 10px 4px #fdf954'
    }
  
    const labelStyles = {
      padding: 10,
      color: 'black',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${remaining}/10000`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;