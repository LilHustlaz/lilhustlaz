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
import { useForm, ValidationError } from '@formspree/react';

const SmartContractAddress = "0x6aD4Ff63fD7CF6672eE33Cdad8e3EE14Bad52B4E";


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
            1: "https://rinkeby.infura.io/v3/2207143b2f5c4866a25cc7e202920a0f",
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
      alert(err);
    }
  };

  const [state, handleSubmit] = useForm("mpzblvwj");

  return (
    <>
     <form onSubmit={handleSubmit}>
        <ReferredBy>
          <>
          <label htmlFor="referral code">Referral Code:
          <input
            id="text"
            className="refer-address"
            type="text"
            name="referral code"
            placeholder="enter referral code"
          />
          </label>
          </>
          <>
          <label id="user-addy" htmlFor="Referral ID">
            User Address:
            <input
              className="user-address"
              name="Mint ID"
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
   color: #b4b4b4;
    font-size: 1rem;
    font-weight: 400;

  input {
    width: 20rem;
  }

  .refer-address {
    margin-left: 1.8rem;
  }

  .user-address {
    margin-left: 2rem;
  }

  #user-addy {
    display: none;
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
