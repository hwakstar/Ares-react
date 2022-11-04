import React from "react";
import footerone from "../images/content/twitter.svg";
import footertwo from "../images/content/instagram.svg";
import footerthree from "../images/content/discord.svg";
import footerfour from "../images/content/youtube.svg";
import footerfive from "../images/content/tiktok.svg";
import footersix from "../images/content/linkedin.svg";
import footerseven from "../images/content/facebook.svg";
import footereight from "../images/content/opensea.svg";
import footer from "../images/content/footer-logo.svg";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <a href="/">
                        <div className="footer-col-logo">
                            <img
                                src={footer}
                                className="img-fluid"
                                alt="ARES"
                            />
                        </div>
                    </a>
                    <div className="footer-col-nav">
                        <ul>
                            <li>
                                <a href="/about"> About us</a>
                            </li>
                            <li>
                                <a href="/edition"> Ares Edition</a>
                            </li>
                            <li>
                                <a href="/aresnft"> Ares NFT </a>
                            </li>
                            <li>
                                <a href="/investment"> Ares Investment</a>
                            </li>
                            <li>
                                <a href="mailto:support@ares-corporation.com">
                                    {" "}
                                    Contacts
                                </a>
                            </li>
                            <li>
                                <a href="mailto:partnership@ares-corporation.com">
                                    {" "}
                                    Partnership
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col-socials">
                        <ul>
                            <li>
                                <a
                                    href="https://twitter.com/CorpAres"
                                    target="_blank"
                                >
                                    {" "}
                                    <img
                                        src={footerone}
                                        className="img-fluid"
                                    />{" "}
                                    Twitter{" "}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/arescorporation/"
                                    target="_blank"
                                >
                                    {" "}
                                    <img
                                        src={footertwo}
                                        className="img-fluid"
                                    />{" "}
                                    Instagram{" "}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.gg/36QvVQAYMA"
                                    target="_blank"
                                >
                                    {" "}
                                    <img
                                        src={footerthree}
                                        className="img-fluid"
                                    />{" "}
                                    Discord{" "}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/channel/UCnukiavYKM0JaS6SFycV5wQ"
                                    target="_blank"
                                >
                                    {" "}
                                    <img
                                        src={footerfour}
                                        className="img-fluid"
                                    />{" "}
                                    Youtube{" "}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://vt.tiktok.com/ZSdu8dn2n/"
                                    target="_blank"
                                >
                                    {" "}
                                    <img
                                        src={footerfive}
                                        className="img-fluid"
                                    />{" "}
                                    TikTok{" "}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/mwlite/in/ares-corporation-632786233"
                                    target="_blank"
                                >
                                    {" "}
                                    <img
                                        src={footersix}
                                        className="img-fluid"
                                    />
                                    LinkedIn{" "}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/Arescorporationn"
                                    target="_blank"
                                >
                                    {" "}
                                    <img
                                        src={footerseven}
                                        className="img-fluid"
                                    />
                                    Facebook{" "}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://opensea.io/Ares-NFT"
                                    target="_blank"
                                >
                                    {" "}
                                    <img
                                        src={footereight}
                                        className="img-fluid"
                                    />
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
