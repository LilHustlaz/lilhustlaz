import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import SmartContract from "../ABI/contract.json";

const SmartContractAddress = "0x6aD4Ff63fD7CF6672eE33Cdad8e3EE14Bad52B4E";

const ProgressBar = (props) => {
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

    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 40,
      width: '380px',
      backgroundColor: "#e0e0de",
      margin: 0
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
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