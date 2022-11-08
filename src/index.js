import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Investment from "./Investment";
import Edition from "./Edition";
import AresNFT from "./AresNFT";
import reportWebVitals from "./reportWebVitals";
import Advantage from "./Advantage";
import Dashboard from "./Dashboard";
import Claim  from "./App";
import Web3Provider from "./providers/web3";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Web3Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
              <Route index element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/edition" element={<Edition />} />
              <Route path="/claim" element={<Claim/>} />
              <Route path="/aresnft" element={<AresNFT />} />
              <Route path="/advantage" element={<Advantage />} />
              <Route path="/investment" element={<Investment />} />      
                
          </Route>
          <Route path="/claimt" element={<Claim/>} />
        </Routes>
      </BrowserRouter>
    </Web3Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
