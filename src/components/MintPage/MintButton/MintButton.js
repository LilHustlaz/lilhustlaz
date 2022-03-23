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

import { useForm, ValidationError } from "@formspree/react";

const SmartContractAddress = "0xB80a06EA0f4D17DD7D4b584DAA483C760331137B";

const MintButton = () => {
  const amount = useSelector((state) => state.mint.amount);

  const [connected, setConnected] = useState(false);
  const [userAddress, setUserAddress] = useState();
  console.log(userAddress);
  const [provider, setProvider] = useState();

  const handleConnection = async () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          chainId: 1,
          rpc: {
            1: "https://mainnet.infura.io/v3/2207143b2f5c4866a25cc7e202920a0f",
          },
        },
      },

      injected: {
        display: {
          logo: "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/8784f7c8-7cc3-4adf-aa68-2c8f04ebb000/45x90",
          name: "MetaMask & Coinbase Extensions",
          description: "Connect with MetaMask or Coinbase in your browser",
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

      const signer = provider.getSigner();
      const addr = await signer.getAddress();
      setUserAddress(addr.toString());

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
      alert("Insufficient Funds");
    }
  };

  const [state, handleSubmit] = useForm("mpzblvwj");
  // if (state.succeeded) {
  //     return
  //     <p>Thanks for minting!</p>
  // }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <ReferredBy>
          <>
          <label htmlFor="Referral ID">Referral ID:
          <input
            id="text"
            className="refer-address"
            type="text"
            name="Referral ID"
            placeholder="Enter the wallet address of who referred you."
          />
          </label>
          </>
          <>
          <label htmlFor="Referral ID">
            User Address:
            <input
              className="user-address"
              name="User ID"
              placeholder="Your wallet will appear here when you connect."
              defaultValue={userAddress}
            ></input>
          </label>
          </>
        </ReferredBy>
        <Wrapper>
          {connected ? (
            <button
              type="submit"
              disabled={state.submitting}
              variant="contained"
              className="button"
              onClick={mint}
            >
              MINT
            </button>
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
      </form>
    </>
  );
};

export default MintButton;

const ReferredBy = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #B4B4B4;
  font-size: 1rem;

  input {
    width: 20rem;
  }

  .refer-address {
    margin-left: 3.3rem;
  }

  .user-address {
    margin-left: 2rem;
  }

  p {
    color: #b4b4b4;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
  }

  @media only screen and (max-width: 550px) {
    label {
    text-align: center;
    flex-direction: column;
    }

    .refer-address {
      margin-left: 0rem;
    }
  
    .user-address {
      margin-left: 0rem;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 100%;
  padding: 20px 25px 0px 25px;

  .button {
    width: 100%;
    height: 80px;
    font-size: 1.2rem;
    font-weight: 400;
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
