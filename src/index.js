import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Investment from "./pages/Investment";
import Edition from "./pages/Edition";
import AresNFT from "./pages/AresNFT";
import reportWebVitals from "./reportWebVitals";
import Advantage from "./pages/Advantage";
import Dashboard from "./pages/Dashboard";
import Mint from "./pages/Mint";
import Claim  from "./pages/Claim";
import Next from "./pages/Next";
import Web3Provider from "./providers/web3";

export default function App() {
  return (
    <Web3Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
              <Route index element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/edition" element={<Edition />} />
              <Route path="/mint" element={<Mint />} />
              <Route path="/claim" element={<Claim/>} />
              <Route path="/aresnft" element={<AresNFT />} />
              <Route path="/advantage" element={<Advantage />} />
              <Route path="/investment" element={<Investment />} />
              <Route path="/next" element={<Next />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Web3Provider>
  );
}
const root = ReactDOM.hydrateRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


