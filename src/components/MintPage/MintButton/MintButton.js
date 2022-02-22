// React
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

// Ethers
import { ethers } from "ethers";

// Web3Modal
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Contract
import SmartContract from "../ABI/contract.json";

const SmartContractAddress = "0xB80a06EA0f4D17DD7D4b584DAA483C760331137B";

const MintButton = () => {
  const amount = useSelector((state) => state.mint.amount);

  const [connected, setConnected] = useState(false);

  const [provider, setProvider] = useState();

  const handleConnection = async () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          chainId: 1,
          rpc: {
            1: "https://mainnet.infura.io/v3/2f7e7b42a7a048bfb39748013be17001",
          },
        },
      },

      injected: {
        display: {
          logo: "https://github.com/MetaMask/brand-resources/raw/master/SVG/metamask-fox.svg",
          name: "MetaMask",
          description: "Connect with MetaMask in your browser",
        },
        package: null,
      },
    };

    const web3Modal = new Web3Modal({
      cacheProvider: false, // optional
      providerOptions, // required
    });

    if (connected) {
      web3Modal.clearCachedProvider();
      window.location.reload();
    } else {
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      setProvider(provider);

      provider.on("disconnect", (error) => {
        web3Modal.clearCachedProvider();
        window.location.reload();

        setConnected(false);
      });

      setConnected(true);
    }
  };

  const getMintCost = async () => {
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      SmartContractAddress,
      SmartContract,
      signer
    );

    const mintCost = await contract.price();

    return mintCost.toString();
  };

  const mint = async () => {
    try {
      const signer = provider.getSigner();

      const addy = await signer.getAddress();

      console.log(addy);

      // sigs.forEach(async (sig) => {
      //   if (sig.address.toLowerCase() === addy.toLowerCase()) {
      //     const contract = new ethers.Contract(
      //       SmartContractAddress,
      //       SmartContract,
      //       signer
      //     );

      //     const mintCost = await getMintCost();

      //     await contract.presaleMint(sig.signature, amount, {
      //       value: (mintCost * amount).toString(),
      //     });
      //   }
      // });

      // Change after to this after presale

      const contract = new ethers.Contract(
        SmartContractAddress,
        SmartContract,
        signer
      );

      const mintCost = await getMintCost();

      await contract.mintLilHustlaz(amount, {
        value: (mintCost * amount).toString(),
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Wrapper>
      {connected ? (
        <Button variant="contained" className="button" onClick={mint}>
          MINT
        </Button>
      ) : (
        <Button
          variant="contained"
          id="glow"
          className="button"
          onClick={handleConnection}
        >
          CONNECT
        </Button>
      )}
    </Wrapper>
  );
};

export default MintButton;

const Wrapper = styled.div`
  max-width: 100%;
  padding: 20px 25px 0px 25px;
  
  .button {
    width: 100%;
    height: 80px;
    font-size: 1.2rem;
    font-weight:400;
    // background-color: grey;
    border-radius: 3px;
    height: 40px;
    color: #000;
    // box-shadow: 3px 0px 10px 10px #fdf954;
    // border: 5px solid #fdf954;
    // background-color: #fffd9c;
    animation: glowing 2300ms infinite;

    &:hover {
      color: #000;
      background-color: transparent;
    }
  }
`;
