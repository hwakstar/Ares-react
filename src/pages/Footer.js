import React from "react";
import "../style.css";
import footerone from "../images/content/twitter.svg";
import footertwo from "../images/content/instagram.svg";
import footerthree from "../images/content/discord.svg";
import footerfour from "../images/content/youtube.svg";
import footerfive from "../images/content/tiktok.svg";
import footersix from "../images/content/linkedin.svg";
import footerseven from "../images/content/facebook.svg";
import footereight from "../images/content/opensea.svg";
import footer from "../images/content/footer-logo.svg";
import {Link} from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-col-logo">
            <img src={footer} className="img-fluid" alt="ARES" />
          </div>
          <div className="footer-col-nav">
            <ul>
              <li>
              <Link to="/about"> About us</Link>
              </li>
              <li>
              <Link to="/edition"> Ares Edition</Link>
              </li>
              <li>
              <Link to="/aresnft"> Ares NFT </Link>
              </li>
              <li>
                <Link to="/investment"> Ares Investment</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col-socials">
            <ul>
              <li>
                <a href="https://twitter.com/CorpAres" target="_blank">
                  {" "}
                  <img src={footerone} className="img-fluid" /> Twitter{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/arescorporation/"
                  target="_blank"
                >
                  {" "}
                  <img src={footertwo} className="img-fluid" /> Instagram{" "}
                </a>
              </li>
              <li>
                <a href="https://discord.gg/36QvVQAYMA" target="_blank">
                  {" "}
                  <img src={footerthree} className="img-fluid" /> Discord{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCnukiavYKM0JaS6SFycV5wQ"
                  target="_blank"
                >
                  {" "}
                  <img src={footerfour} className="img-fluid" /> Youtube{" "}
                </a>
              </li>
              <li>
                <a href="https://vt.tiktok.com/ZSdu8dn2n/" target="_blank">
                  {" "}
                  <img src={footerfive} className="img-fluid" /> TikTok{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/mwlite/in/ares-corporation-632786233"
                  target="_blank"
                >
                  {" "}
                  <img src={footersix} className="img-fluid" />
                  LinkedIn{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Arescorporationn"
                  target="_blank"
                >
                  {" "}
                  <img src={footerseven} className="img-fluid" />
                  Facebook{" "}
                </a>
              </li>
              <li>
                <a href="https://opensea.io/Ares-NFT" target="_blank">
                  {" "}
                  <img src={footereight} className="img-fluid" />
                  Opensea{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>@2022 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
