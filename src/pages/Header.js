import React from "react";
import { Link } from "react-router-dom";

import ConnectWallet from "../components/connectWallet/ConnectWallet"

import Headerone from "../images/content/twitter.svg";
import Headertwo from "../images/content/instagram.svg";
import Headerthree from "../images/content/discord.svg";
import Headerfour from "../images/content/youtube.svg";
import Headerfive from "../images/content/tiktok.svg";
import Headersix from "../images/content/linkedin.svg";
import Headerseven from "../images/content/facebook.svg";
import Headereight from "../images/content/opensea.svg";
import logo from "../images/content/logo.svg";

import "../style.css";

export default function Header() {
  return (
    <header color-on-scroll="1" className="nav-scroll">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-left">
            <ul className="navbar-menu">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/edition">Edition</Link>
              </li>
              <li className="dropdown">
                <Link toa-dropdown>
                  {" "}
                  NFT{" "}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                  <Link to="/aresnft">AresNFT</Link>
                  </li>
                  <li>
                  <Link to="/advantage">Advantage</Link>
                   
                  </li>
                </ul>
              </li>
              <li>
              <Link to="/investment">Investment</Link>
               </li>
              <li className="wallet-connect-li">
                <ConnectWallet />
              </li>
            </ul>
          </div>
          <div className="navbar-middle">
            <div className="navbar-middle-item">
              <a href="#" className="nav-menu-toggle">
                <span></span>
                <span></span>
              </a>
            </div>
            <div className="navbar-middle-item">
            <a href="/">
                <img src={logo} className="img-fluid" alt="ARES" />
                </a>
            </div>
            <div className="navbar-middle-item">
              <a href="#" className="nav-socials-toggle">
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
            <div className="navbar-middle-item">
              <ul className="navbar-socials-mobile">
                <li>
                  <a href="https://twitter.com/CorpAres" target="_blank">
                    <img src={Headerone} className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/arescorporation/"
                    target="_blank"
                  >
                    <img src={Headertwo} className="img-fluid" alt="ARES" />
                  </a>
                </li>
                <li>
                  <a href="https://t.co/a5v2en4HFq" target="_blank">
                    <img src={Headerthree} className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCnukiavYKM0JaS6SFycV5wQ"
                    target="_blank"
                  >
                    <img src={Headerfour} className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a href="https://vt.tiktok.com/ZSdu8dn2n/" target="_blank">
                    <img src={Headerfive} className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/mwlite/in/ares-corporation-632786233"
                    target="_blank"
                  >
                    <img src={Headersix} className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Arescorporationn"
                    target="_blank"
                  >
                    <img src={Headerseven} className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a href="https://opensea.io/Ares_NFT_" target="_blank">
                    <img src={Headereight} className="img-fluid" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-right">
            <ul className="navbar-socials">
              <li>
                <a href="https://twitter.com/CorpAres" target="_blank">
                  <img src={Headerone} className="img-fluid" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/arescorporation/"
                  target="_blank"
                >
                  <img src={Headertwo} className="img-fluid" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/36QvVQAYMA" target="_blank">
                  <img src={Headerthree} className="img-fluid" />
                  <span>Discord</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCnukiavYKM0JaS6SFycV5wQ"
                  target="_blank"
                >
                  <img src={Headerfour} className="img-fluid" />
                  <span>Youtube</span>
                </a>
              </li>
              <li>
                <a href="https://vt.tiktok.com/ZSdu8dn2n/" target="_blank">
                  <img src={Headerfive} className="img-fluid" />
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/mwlite/in/ares-corporation-632786233"
                  target="_blank"
                >
                  <img src={Headersix} className="img-fluid" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Arescorporationn"
                  target="_blank"
                >
                  <img src={Headerseven} className="img-fluid" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://opensea.io/Ares-NFT" target="_blank">
                  <img src={Headereight} className="img-fluid" />
                  <span>Opensea</span>
                </a>
              </li>
            </ul>
            <ul className="wallet-connect">
              <li>
                <ConnectWallet />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
