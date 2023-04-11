// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// import { StateContextProvider } from "./context";
// import App from "./App";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <ThirdwebProvider activeChainId={ChainId.Sepolia}>
//     <Router>
//       <StateContextProvider>
//         <App />
//       </StateContextProvider>
//     </Router>
//   </ThirdwebProvider>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider activeChain={{
    // === Required information for connecting to the network === \\
    chainId: 11155111, // Chain ID of the network
    // Array of RPC URLs to use
    rpc: ["https://sepolia.rpc.thirdweb.com"],

    // === Information for adding the network to your wallet (how it will appear for first time users) === \\
    // Information about the chains native currency (i.e. the currency that is used to pay for gas)
    nativeCurrency: {
      decimals: 18,
      name: "Sepolia ETH",
      symbol: "SepoliaETH",
    },
    shortName: "SEP", // Display value shown in the wallet UI
    slug: "SepoliaETH", // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: "Sepolia", // Name of the network
    name: "Sepolia test network", // Name of the network
  }}> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)
