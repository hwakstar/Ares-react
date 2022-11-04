import React from "react";
import logo from "../images/content/logo.svg";
import nft from "../images/content/mint-your-ares-nft-title.svg";
import aresnft from "../images/content/mint-your-ares-nft-1.png";
import nftshape from "../images/content/mint-your-ares-nft-shape.png";

export default function Mint() {
  return (
    <>
       <div className="modal" id="mint-your-ares-modal">
            <div className="modal-close">
                <a href="#" className="close-modal" data-modal="#mint-your-ares-modal"><i className="fa-light fa-times"></i></a>
            </div>
            <div className="modal-content">
                <div className="modal-content-grid">
                    <div className="modal-content-grid-left">
                        <img src={logo} className="img-fluid" alt="ARES" /> <img src={nft} className="title img-fluid" alt="" />
                        <div className="counter">
                            <div className="counter-item">
                                <div className="counter-item-days">
                                    <h2>04</h2>
                                    <p>days</p>
                                </div>
                            </div>
                            <div className="counter-item">
                                <div className="counter-item-hours">
                                    <h2>1</h2>
                                    <p>hours</p>
                                </div>
                            </div>
                            <div className="counter-item">
                                <div className="counter-item-mins">
                                    <h2>1</h2>
                                    <p>mins</p>
                                </div>
                            </div>
                            <div className="counter-item">
                                <div className="counter-item-secs">
                                    <h2>1</h2>
                                    <p>secs</p>
                                </div>
                            </div>
                        </div>
                        <p>Ares-NFT phase 1 will consist of rare, super rare and legendary NFTs, which is all determined by the kinds of traits and backgrounds that your Ares NFT will have. All buyers will become members. Mint yours now!</p>
                        <div className="nft-form">
                            <div className="nft-form-top">
                                <div className="nft-form-m">
                                    <a href="#"><i className="fa-light fa-minus"></i></a>
                                </div>
                                <div className="nft-form-value">
                                    {/* <input id="nft-form-val" name="nft-form-val" value="1" min="1" max="3" /> */}
                                     NFT</div>
                                <div className="nft-form-p">
                                    <a href="#"><i className="fa-light fa-plus"></i></a>
                                </div>
                            </div>
                            <div className="nft-form-bottom"><a href="#" className="btn btn-primary">Connect your wallet</a></div>
                        </div>
                    </div>
                    <div className="modal-content-grid-right"><img src={aresnft} className="img-fluid" alt="" /> <img src={nftshape} className="img-fluid shape" alt="" /></div>
                </div>
            </div>
        </div>
    </>
  );
}
