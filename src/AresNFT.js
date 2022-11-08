import React, { useState, useEffect, useCallback } from "react";
import gold from "./images/content/aresnft-coming-soon-gold.svg";
import nft from "./images/content/the-rise-of-ares-nft.svg";
import slider4 from "./images/content/ares-nft-slider-4.png";
import page1 from "./images/content/ares-nft-page-1.png";
import page2 from "./images/content/ares-nft-page-2.png";
import page3 from "./images/content/ares-nft-page-3.png";
import sm from "./images/content/mint-your-ares-nft-title-sm.svg";
import behind from "./images/content/the-story-behind-ares-nft.svg";
import your from "./images/content/your-ares-nft.svg";
import rare from "./images/content/rare-ares.png";
import superrare from "./images/content/super-rare-ares.png";
import legendary from "./images/content/legendary-ares.png";
import ultimate from "./images/content/ultimate-ares.png";
import White from "./images/content/T-Shit-Baseball-Cap-White.png";
import Grey from "./images/content/T-Shit-Baseball-Cap-Grey.png";
import Black from "./images/content/T-Shit-Baseball-Cap-Black.png";
import Red from "./images/content/T-Shit-Baseball-Cap-Red.png";
import Footer from "./components/Footer";
import logo from "./images/content/logo.svg";
import modaltilte from "./images/content/mint-your-ares-nft-title.svg";
import aresnft from "./images/content/mint-your-ares-nft-1.png";
import nftshape from "./images/content/mint-your-ares-nft-shape.png";
import ConnectWalletModal from "./components/connectWallet/ConnectWalletModal";
import { useWeb3React } from "@web3-react/core";
import { getUserData, mint } from "./utils/web3Utils";
import { CONTRACT_STATE } from "./config/constants";

export default function AresNFT() {
    const [modalState, setModalState] = useState(false);
    const [mintAmount, setMintAmount] = useState(1)
    const [userData, setUserData] = useState(undefined)
    const [contractState, setContractState] = useState(0)
    const { account, library } = useWeb3React();
    const handleUserData = useCallback(
        async () => {
            const { status, _whiteListed, _constractState, _userBalance, _maxMintable } = await getUserData(account, library?.provider)
            if (status) {
                setUserData({
                    whiteListed: _whiteListed,
                    balance: Number(_userBalance),
                    maxMintable: _maxMintable
                })
                setContractState(_constractState)
            }
        },
        [account, library],
    )
    useEffect(() => {
        if (!account || !library) return
        handleUserData(account, library)
        const timer = setInterval(() => {
            handleUserData(account, library)
        }, 15000)
        return () => { clearInterval(timer) }
    }, [account, library, handleUserData])
    const connectWallet = () => {
        setModalState(true)
    }
    let mintable = false
    if (userData && userData.whiteListed && userData.maxMintable - userData.balance && contractState > CONTRACT_STATE.OFF) mintable = true
    if (userData && !userData.whiteListed && userData.maxMintable - userData.balance && contractState > CONTRACT_STATE.WHITELIST) mintable = true
    const handleMint = async () => {
        let result
        if (userData && userData.whiteListed && userData.maxMintable - userData.balance > 0 && contractState === CONTRACT_STATE.WHITELIST) {
            result = await mint(mintAmount, account, library.provider, CONTRACT_STATE.WHITELIST)
        }
        if (userData && userData.maxMintable - userData.balance > 0 && contractState === CONTRACT_STATE.PRESALE) {
            result = await mint(mintAmount, account, library.provider, CONTRACT_STATE.PRESALE)
        }
        if (userData && userData.maxMintable - userData.balance > 0 && contractState === CONTRACT_STATE.PUBLIC) {
            result = await mint(mintAmount, account, library.provider, CONTRACT_STATE.PUBLIC)
        }
        console.log(result)
    }
    const addAmount = () => {
        if (mintAmount >= userData.maxMintable - userData.balance) return
        setMintAmount(mintAmount + 1)
    }
    const reduceAmount = () => {
        if (mintAmount === 1) return
        setMintAmount(mintAmount - 1)
    }
    return (
        <>
        {modalState && (
            <ConnectWalletModal
                changeWalletListModalState={setModalState}
            />
        )}
            <div className="modal" id="mint-your-ares-modal">
                <div className="modal-close">
                    <a
                        href="#"
                        className="close-modal"
                        data-modal="#mint-your-ares-modal"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </a>
                </div>
                <div className="modal-content">
                    <div className="modal-content-grid">
                        <div className="modal-content-grid-left">
                            <img src={logo} className="img-fluid" alt="ARES" />
                            <img
                                src={modaltilte}
                                className="title img-fluid"
                                alt=""
                            />
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
                            <p>
                                Ares-NFT phase 1 will consist of rare, super
                                rare and legendary NFTs, which is all determined
                                by the kinds of traits and backgrounds that your
                                Ares NFT will have. All buyers will become
                                members. Mint yours now!
                            </p>
                            <div className="nft-form">
                                <div className="nft-form-top">
                                    <div className="nft-form-m">
                                        <button onClick={reduceAmount} disabled={!mintable}>
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                    </div>
                                    <div className="nft-form-value">
                                        <input
                                            id="nft-form-val"
                                            name="nft-form-val"
                                            value={mintAmount}
                                        />{" "}
                                        NFT
                                    </div>
                                    <div className="nft-form-p">
                                        <button onClick={addAmount} disabled={!mintable}>
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="nft-form-bottom">
                                    {
                                        account ? (
                                            <button onClick={handleMint} className="btn btn-primary" disabled={!mintable}>
                                                Mint
                                            </button>
                                        ) : (
                                            <button onClick={connectWallet} className="btn btn-primary">
                                                Connect your wallet
                                            </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="modal-content-grid-right">
                            <img
                                src={aresnft}
                                className="img-fluid"
                                alt=""
                            />{" "}
                            <img
                                src={nftshape}
                                className="img-fluid shape"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-viewport">
                <div className="scroll-wrapper">
                    <div className="page-backgorund ii"></div>
                    <section className="section-top section-top-sm pb-0 section-top-nobg">
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col-md-12 text-center">
                                    <img
                                        src={gold}
                                        className="has-animation-fade-in img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12 text-center">
                                    <a
                                        className="btn-fi has-animation-fade-in open-modal"
                                        data-modal="#mint-your-ares-modal"
                                    >
                                        <span className="btn-fi-line"></span>{" "}
                                        Mint now
                                    </a>
                                </div>
                            </div>
                            <div className="row mt-4 justify-content-center">
                                <div className="col-lg-5 align-self-center">
                                    <img
                                        src={nft}
                                        className="has-animation-fade-in img-fluid mb-3"
                                        alt=""
                                    />
                                    <p className="has-animation-text">
                                        Ares NFT is a non-fungible token
                                        enriched with wholly unique properties
                                        that deliver one-of-a-kind results.
                                    </p>
                                    <p className="has-animation-text">
                                        Successfully operating under Ares
                                        Corporation, our NFTs are expected to
                                        form the foundation for projects
                                        including Ares Investment and Ares
                                        Edition, as well as others in the
                                        promising future pipeline.
                                    </p>
                                </div>
                                <div className="col-lg-5 align-self-center text-center">
                                    <div className="img-item img-item-normal has-animation-fade-in-from-left img-item-margin img-item-full">
                                        <img
                                            src={slider4}
                                            className="img-position-4 img-fluid"
                                            alt=""
                                        />
                                        <div className="img-item-background">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="504.24"
                                                height="630.132"
                                                viewBox="0 0 504.24 630.132"
                                            >
                                                <g
                                                    id="img-item-shape"
                                                    transform="translate(7833.237 -7515.773)"
                                                >
                                                    <path
                                                        id="slider-shape-fill-bg"
                                                        d="M-8680.712,8389.211l203.157-248.8,205.431,245.955-19.54,159.27,9.829,28.219,27.9,33.292,15.22,27.269-238.842,136.128-241.188-136.128,67.1-88.779Z"
                                                        transform="translate(896 -624.638)"
                                                        fill="#141414"
                                                    />
                                                    <path
                                                        id="slider-shape-fill"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8059.768 7532.893)"
                                                        fill="#1a1a1a"
                                                    />
                                                    <path
                                                        id="img-item-shape-1"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                    <path
                                                        id="img-item-shape-2"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                    <path
                                                        id="img-item-shape-3"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="story" className="section">
                        <div className="container">
                            <div className="row row-xs-reverse justify-content-around">
                                <div className="col-lg-5 align-self-center">
                                    <div className="img-item img-item-normal has-animation-fade-in-from-left img-item-margin">
                                        <img
                                            src={page1}
                                            className="img-position-1 img-fluid"
                                            alt=""
                                        />
                                        <div className="img-item-background">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="504.24"
                                                height="630.132"
                                                viewBox="0 0 504.24 630.132"
                                            >
                                                <g
                                                    id="img-item-shape"
                                                    transform="translate(7833.237 -7515.773)"
                                                >
                                                    <path
                                                        id="slider-shape-fill-bg"
                                                        d="M-8680.712,8389.211l203.157-248.8,205.431,245.955-19.54,159.27,9.829,28.219,27.9,33.292,15.22,27.269-238.842,136.128-241.188-136.128,67.1-88.779Z"
                                                        transform="translate(896 -624.638)"
                                                        fill="#141414"
                                                    />
                                                    <path
                                                        id="slider-shape-fill"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8059.768 7532.893)"
                                                        fill="#1a1a1a"
                                                    />
                                                    <path
                                                        id="img-item-shape-1"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                    <path
                                                        id="img-item-shape-2"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                    <path
                                                        id="img-item-shape-3"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 align-self-center">
                                    <img
                                        src={behind}
                                        className="has-animation-fade-in img-fluid"
                                        alt=""
                                    />
                                    <p className="has-animation-text">
                                        Our NFTs pay ode to the powerful and
                                        legendary warrior, Ares.
                                    </p>
                                    <p className="has-animation-text">
                                        His resurrection as well as the glory of
                                        his reign centuries after his death
                                        simply cannot be overlooked. Those who
                                        have heard the tales of his era know
                                        that he was a commanding force that
                                        exuded captivating power and strength.
                                    </p>
                                    <p className="has-animation-text">
                                        A true warrior who bent his knee to no
                                        one, Ares ruled with resilience and gave
                                        new meaning to the popular myth. Our
                                        NFTs will perfectly represent the fear
                                        inspired by Ares.
                                    </p>
                                    <p className="has-animation-text">
                                        <b>
                                            <i>
                                                {" "}
                                                A total of 7,313 unique, rare,
                                                and collectible NFTs tied to the
                                                Ethereum blockchain will be
                                                introduced to the market.{" "}
                                            </i>
                                        </b>
                                    </p>
                                    <ul className="info-links-list has-animation-fade-in">
                                        <li>
                                            <a href="mailto:support@ares-nft.com">
                                                support@ares-nft.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:partnership@ares-nft.com">
                                                partnership@ares-nft.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-lg-5 align-self-center">
                                    <h3 className="has-animation">
                                        The First Of <b>Their Kind</b>
                                    </h3>
                                    <p className="has-animation-text">
                                        Interested individuals will be able to
                                        buy, bid on, or offer each NFT within
                                        this fast-growing market.
                                    </p>
                                    <p className="has-animation-text">
                                        Across the visual front, our NFTs will
                                        feature an enticing variety of
                                        captivating features including
                                        backgrounds, effects, helmets, armor,
                                        and so much more.
                                    </p>
                                    <p className="has-animation-text">
                                        NFT enthusiasts will have the exclusive
                                        opportunity to view each Ares NFT from
                                        four different positions and all within
                                        different levels of unique rarity.
                                    </p>
                                    <p className="has-animation-text">
                                        These levels are{" "}
                                        <i>rare, super rare, legendary,</i> and{" "}
                                        <i>ultimate</i>. These levels are
                                        determined through the unique style of
                                        traits and background of the Ares NFT.
                                    </p>
                                </div>
                                <div className="col-lg-5 align-self-center">
                                    <div className="img-item img-item-normal has-animation-fade-in-from-right img-item-margin">
                                        <img
                                            src={page2}
                                            className="img-fluid img-position-2"
                                            alt=""
                                        />
                                        <div className="img-item-background">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="504.24"
                                                height="630.132"
                                                viewBox="0 0 504.24 630.132"
                                            >
                                                <g
                                                    id="img-item-shape"
                                                    transform="translate(7833.237 -7515.773)"
                                                >
                                                    <path
                                                        id="slider-shape-fill-bg"
                                                        d="M-8680.712,8389.211l203.157-248.8,205.431,245.955-19.54,159.27,9.829,28.219,27.9,33.292,15.22,27.269-238.842,136.128-241.188-136.128,67.1-88.779Z"
                                                        transform="translate(896 -624.638)"
                                                        fill="#141414"
                                                    />
                                                    <path
                                                        id="slider-shape-fill"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8059.768 7532.893)"
                                                        fill="#1a1a1a"
                                                    />
                                                    <path
                                                        id="img-item-shape-1"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                    <path
                                                        id="img-item-shape-2"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                    <path
                                                        id="img-item-shape-3"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-spacing-bottom">
                        <div className="container">
                            <div className="row row-xs-reverse justify-content-around">
                                <div className="col-lg-5 align-self-center">
                                    <div className="img-item img-item-normal has-animation-fade-in-from-left img-item-margin">
                                        <img
                                            src={page3}
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="img-item-background">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="504.24"
                                                height="630.132"
                                                viewBox="0 0 504.24 630.132"
                                            >
                                                <g
                                                    id="img-item-shape"
                                                    transform="translate(7833.237 -7515.773)"
                                                >
                                                    <path
                                                        id="slider-shape-fill-bg"
                                                        d="M-8680.712,8389.211l203.157-248.8,205.431,245.955-19.54,159.27,9.829,28.219,27.9,33.292,15.22,27.269-238.842,136.128-241.188-136.128,67.1-88.779Z"
                                                        transform="translate(896 -624.638)"
                                                        fill="#141414"
                                                    />
                                                    <path
                                                        id="slider-shape-fill"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8059.768 7532.893)"
                                                        fill="#1a1a1a"
                                                    />
                                                    <path
                                                        id="img-item-shape-1"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                    <path
                                                        id="img-item-shape-2"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                    <path
                                                        id="img-item-shape-3"
                                                        d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                        transform="translate(-8060.16 7532.5)"
                                                        fill="none"
                                                        stroke="#dcb533"
                                                        strokeWidth="1"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 align-self-center">
                                    <img
                                        src={sm}
                                        className="has-animation-fade-in img-fluid"
                                        alt=""
                                    />
                                    <h3 className="has-animation">
                                        48 hours only
                                    </h3>
                                    <p className="has-animation-text">
                                        Ares NFTs stay true to the legacy of
                                        their inspiration and continue to see
                                        exponential growth, as well as abide by
                                        the ERC721A protocol in alignment with
                                        the Ethereum blockchain.
                                    </p>
                                    <p className="has-animation-text">
                                        The upcoming minting date for the first
                                        wave of our first position of rare,
                                        super rare and legendary Ares NFTs is
                                        set to be December 2022. Exact date TBA.
                                        Our valued community will be made aware
                                        of all minting-related information,
                                        including the exact date of launch
                                        closer to the day. This knowledge will
                                        be spread through our discord channels,
                                        social media, and website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10 text-center">
                                    <img
                                        src={your}
                                        className="has-animation-fade-in img-fluid mb-3"
                                        alt=""
                                    />
                                    <p className="lead has-animation-fade-in">
                                        Your Ares NFT rarity level will be
                                        dependent on the kind of traits and
                                        background that it has.
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4 justify-content-center">
                                <div className="col-md-3 has-animation-fade-in">
                                    <div className="nft-item">
                                        <div className="nft-item-shadow"></div>
                                        <div className="nft-item-bg">
                                            <img
                                                src={rare}
                                                className="img-fluid"
                                                alt="Rare Ares"
                                            />
                                        </div>
                                        <div className="nft-item-content">
                                            <h2>Rare Ares</h2>
                                        </div>
                                        <div className="nft-item-hidden-content">
                                            <p>
                                                Rare Ares features a black and
                                                gold style background as shown,
                                                with normal steel armor and
                                                weapons
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 has-animation-fade-in">
                                    <div className="nft-item">
                                        <div className="nft-item-shadow"></div>
                                        <div className="nft-item-bg">
                                            <img
                                                src={superrare}
                                                className="img-fluid"
                                                alt="Rare Ares"
                                            />
                                        </div>
                                        <div className="nft-item-content">
                                            <h2>Super Rare Ares</h2>
                                        </div>
                                        <div className="nft-item-hidden-content">
                                            <p>
                                                Super Rare Ares features a
                                                minimal black and gold
                                                background as shown, with full
                                                gold armor and weapons
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 has-animation-fade-in">
                                    <div className="nft-item">
                                        <div className="nft-item-shadow"></div>
                                        <div className="nft-item-bg">
                                            <img
                                                src={legendary}
                                                className="img-fluid"
                                                alt="Rare Ares"
                                            />
                                        </div>
                                        <div className="nft-item-content">
                                            <h2>Legendary Ares</h2>
                                        </div>
                                        <div className="nft-item-hidden-content">
                                            <p>
                                                Legendary Ares features a
                                                luxurious gold, diamond and blue
                                                effect background as shown, with
                                                half diamond half gold armor and
                                                weapons
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 has-animation-fade-in">
                                    <div className="nft-item">
                                        <div className="nft-item-shadow"></div>
                                        <div className="nft-item-bg">
                                            <img
                                                src={ultimate}
                                                className="img-fluid"
                                                alt="Rare Ares"
                                            />
                                        </div>
                                        <div className="nft-item-content">
                                            <h2>Ultimate Ares</h2>
                                        </div>
                                        <div className="nft-item-hidden-content">
                                            <p>
                                                Ultimate Ares will feature a
                                                full diamond armor and weapons
                                            </p>
                                            <span>not released yet</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-spacing-bottom section-spacing-top jj">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 text-center">
                                    <h3 className="has-animation">
                                        Roadmap <strong>Activation</strong>
                                    </h3>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12 text-center">
                                    <svg
                                        id="RoadmapFixedWidth"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1108.806"
                                        height="658.269"
                                        viewBox="0 0 1108.806 658.269"
                                    >
                                        <g
                                            id="Roadmap"
                                            transform="translate(-345.225 -1444.424)"
                                        >
                                            <g
                                                id="first-dots"
                                                transform="translate(816.357 1444.424)"
                                            >
                                                <path
                                                    id="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(144.484 20.641) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-2"
                                                    data-name="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(112.177 0) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-3"
                                                    data-name="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(78.075 63.717) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-4"
                                                    data-name="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(46.666 42.179) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-5"
                                                    data-name="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(13.461 20.641) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-6"
                                                    data-name="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(176.791 42.179) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                            </g>
                                            <g
                                                id="second-dots"
                                                transform="translate(819.049 1548.403)"
                                            >
                                                <path
                                                    id="dot-7"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(8.974) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-8"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(40.833 19.743) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-9"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(72.691 154.421) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-10"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(107.241 112.747) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-11"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(139.1 88.517) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-12"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(171.856 69.222) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                            </g>
                                            <g
                                                id="third-dots"
                                                transform="translate(401.941 1744.489)"
                                            >
                                                <path
                                                    id="dot-13"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(208.361 8.266) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-14"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(8.974 98.905) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-15"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(422.717 27.82) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-16"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(607.361 0) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-17"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(791.556 18.138) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-18"
                                                    data-name="dot"
                                                    d="M4.487,0A4.487,4.487,0,1,1,0,4.487,4.487,4.487,0,0,1,4.487,0Z"
                                                    transform="translate(996.841 74.675) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                            </g>
                                            <g
                                                id="fourth-dots"
                                                transform="translate(399.697 1801.688)"
                                            >
                                                <path
                                                    id="dot-19"
                                                    data-name="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(1002.225 64.996) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-20"
                                                    data-name="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(797.873 14.784) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-21"
                                                    data-name="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(612.824 144.428) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-22"
                                                    data-name="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(427.204 47.023) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-23"
                                                    data-name="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(212.848) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                                <path
                                                    id="dot-24"
                                                    data-name="dot"
                                                    d="M6.731,0A6.731,6.731,0,1,1,0,6.731,6.731,6.731,0,0,1,6.731,0Z"
                                                    transform="translate(13.461 89.159) rotate(90)"
                                                    fill="#dcb533"
                                                />
                                            </g>
                                            <g
                                                id="first-lines"
                                                transform="translate(823.536 1453.398)"
                                            >
                                                <path
                                                    id="line"
                                                    d="M0,0H122.946"
                                                    transform="translate(162.881 45.32) rotate(90)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-2"
                                                    data-name="line"
                                                    d="M0,0H186.542"
                                                    transform="translate(64.614 66.409) rotate(90)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-3"
                                                    data-name="line"
                                                    d="M0,0H165.574"
                                                    transform="translate(130.574 22.435) rotate(90)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-4"
                                                    data-name="line"
                                                    d="M0,0H75.711"
                                                    transform="translate(32.307 43.525) rotate(90)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-5"
                                                    data-name="line"
                                                    d="M0,0H212.239"
                                                    transform="translate(98.267 0) rotate(90)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-6"
                                                    data-name="line"
                                                    d="M0,0H78.4"
                                                    transform="translate(0 21.089) rotate(90)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                            </g>
                                            <g
                                                id="third-lines"
                                                transform="translate(406.428 1748.649)"
                                            >
                                                <path
                                                    id="line-7"
                                                    data-name="line"
                                                    d="M0,0H49"
                                                    transform="translate(988.764 73.723) rotate(90)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-8"
                                                    data-name="line"
                                                    d="M0,0V52.948"
                                                    transform="translate(783.928 17.119)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-9"
                                                    data-name="line"
                                                    d="M0,0V202.661"
                                                    transform="translate(599.284)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-10"
                                                    data-name="line"
                                                    d="M0,0V50.412"
                                                    transform="translate(199.341 7.137)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-11"
                                                    data-name="line"
                                                    d="M0,0H76.3"
                                                    transform="translate(413.743 25.007) rotate(90)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-12"
                                                    data-name="line"
                                                    d="M0,0H49"
                                                    transform="translate(0 97.887) rotate(90)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                            </g>
                                            <g
                                                id="second-lines"
                                                transform="translate(405.599 1552.891)"
                                            >
                                                <path
                                                    id="line-13"
                                                    data-name="line"
                                                    d="M0,0,409.033,201.09"
                                                    transform="translate(580.819 69.222)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-14"
                                                    data-name="line"
                                                    d="M417.937,0,0,293.645"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-15"
                                                    data-name="line"
                                                    d="M0,0,236.729,124.473"
                                                    transform="translate(548.512 88.404)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-16"
                                                    data-name="line"
                                                    d="M0,84.357,84.357,0"
                                                    transform="translate(600.113 111.401) rotate(90)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-17"
                                                    data-name="line"
                                                    d="M249.672,0,0,183.263"
                                                    transform="translate(200.124 19.743)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="line-18"
                                                    data-name="line"
                                                    d="M68.139,68.2,0,0"
                                                    transform="translate(413.899 222.559) rotate(-90)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                            </g>
                                            <g
                                                id="box-1"
                                                className="box-wrapper"
                                                data-num="1"
                                                transform="translate(345.225 1929.212)"
                                            >
                                                <g
                                                    id="box"
                                                    data-name="box"
                                                    transform="translate(60.374) rotate(45)"
                                                    fill="#141414"
                                                >
                                                    <path
                                                        id="box-rotate"
                                                        d="M 66.53624725341797 84.38201904296875 L 18.84578514099121 84.38201904296875 C 14.07900905609131 84.38201904296875 9.597538948059082 82.52574157714844 6.22691535949707 79.15511322021484 C 2.856280088424683 75.78449249267578 0.9999977350234985 71.30302429199219 0.9999977350234985 66.53624725341797 L 0.9999977350234985 18.84578514099121 C 0.9999977350234985 14.07900905609131 2.856280088424683 9.597538948059082 6.22691535949707 6.22691535949707 C 9.597538948059082 2.856280088424683 14.07900905609131 0.9999977350234985 18.84578514099121 0.9999977350234985 L 66.53624725341797 0.9999977350234985 C 71.30302429199219 0.9999977350234985 75.78449249267578 2.856280088424683 79.15511322021484 6.22691535949707 C 82.52574157714844 9.597538948059082 84.38201904296875 14.07900905609131 84.38201904296875 18.84578514099121 L 84.38201904296875 66.53624725341797 C 84.38201904296875 71.30302429199219 82.52574157714844 75.78449249267578 79.15511322021484 79.15511322021484 C 75.78449249267578 82.52574157714844 71.30302429199219 84.38201904296875 66.53624725341797 84.38201904296875 Z"
                                                        stroke="none"
                                                    />
                                                    <path
                                                        d="M 18.84578704833984 2 C 14.34610748291016 2 10.11576080322266 3.75225830078125 6.934005737304688 6.934005737304688 C 3.75225830078125 10.11576080322266 2 14.34610748291016 2 18.84578704833984 L 2 66.53623199462891 C 2 71.03591156005859 3.75225830078125 75.26625823974609 6.934005737304688 78.44801330566406 C 10.11576080322266 81.6297607421875 14.34610748291016 83.38201904296875 18.84578704833984 83.38201904296875 L 66.53623199462891 83.38201904296875 C 71.03591156005859 83.38201904296875 75.26625823974609 81.6297607421875 78.44801330566406 78.44801330566406 C 81.6297607421875 75.26625823974609 83.38201904296875 71.03591156005859 83.38201904296875 66.53623199462891 L 83.38201904296875 18.84578704833984 C 83.38201904296875 14.34610748291016 81.6297607421875 10.11576080322266 78.44801330566406 6.934005737304688 C 75.26625823974609 3.75225830078125 71.03591156005859 2 66.53623199462891 2 L 18.84578704833984 2 M 18.84578704833984 0 L 66.53623199462891 0 C 76.94448852539062 0 85.38201904296875 8.437545776367188 85.38201904296875 18.84578704833984 L 85.38201904296875 66.53623199462891 C 85.38201904296875 76.94448852539062 76.94448852539062 85.38201904296875 66.53623199462891 85.38201904296875 L 18.84578704833984 85.38201904296875 C 8.437545776367188 85.38201904296875 0 76.94448852539062 0 66.53623199462891 L 0 18.84578704833984 C 0 8.437545776367188 8.437545776367188 0 18.84578704833984 0 Z"
                                                        stroke="none"
                                                        fill="#dcb533"
                                                    />
                                                </g>
                                                <path
                                                    id="box"
                                                    data-name="box"
                                                    d="M-20.553-13.06v-1.377a.606.606,0,0,1,.327-.56l2.427-1.47a1.577,1.577,0,0,1,.747-.257h1.4a.351.351,0,0,1,.4.4v14.21q0,.4-.373.4h-1.517a.351.351,0,0,1-.4-.4V-14.3l-2.543,1.47Q-20.553-12.617-20.553-13.06ZM-7.65-3.7h1.657A1.506,1.506,0,0,0-4.313-5.43v-7.583a1.506,1.506,0,0,0-1.68-1.727H-7.65a1.506,1.506,0,0,0-1.68,1.727V-5.43A1.506,1.506,0,0,0-7.65-3.7ZM-5.667-1.72H-8a3.628,3.628,0,0,1-2.683-.957,3.6,3.6,0,0,1-.957-2.66v-7.77a3.587,3.587,0,0,1,.957-2.672A3.654,3.654,0,0,1-8-16.723h2.333a3.621,3.621,0,0,1,2.66.945,3.587,3.587,0,0,1,.957,2.672v7.77a3.6,3.6,0,0,1-.957,2.66A3.6,3.6,0,0,1-5.667-1.72ZM12.976-7.414H12.51a1.316,1.316,0,0,0-.98.28,1.5,1.5,0,0,0-.257,1v1.75a1.548,1.548,0,0,0,.257,1.015,1.281,1.281,0,0,0,.98.292h.467a1.286,1.286,0,0,0,.968-.292,1.5,1.5,0,0,0,.268-1.015V-6.13a1.449,1.449,0,0,0-.268-1A1.321,1.321,0,0,0,12.976-7.414Zm-.793-1.353h1.073A2.258,2.258,0,0,1,15.8-6.2v1.913A2.258,2.258,0,0,1,13.256-1.72H12.183A2.258,2.258,0,0,1,9.64-4.287V-6.2A2.258,2.258,0,0,1,12.183-8.767Zm-7.77-6.65h-.49a1.321,1.321,0,0,0-.968.28,1.449,1.449,0,0,0-.268,1v1.773a1.449,1.449,0,0,0,.268,1,1.321,1.321,0,0,0,.968.28h.49a1.244,1.244,0,0,0,.957-.292,1.5,1.5,0,0,0,.257-.992v-1.773a1.5,1.5,0,0,0-.257-.992A1.244,1.244,0,0,0,4.413-15.417ZM3.62-16.77H4.693A2.258,2.258,0,0,1,7.236-14.2v1.913A2.258,2.258,0,0,1,4.693-9.723H3.62A2.258,2.258,0,0,1,1.077-12.29V-14.2A2.258,2.258,0,0,1,3.62-16.77ZM5.86-1.72H4.95q-.42,0-.28-.42.537-1.4,2.917-7.14T10.48-16.3q.187-.42.513-.42h.933q.443,0,.28.443L6.4-2.14A.535.535,0,0,1,5.86-1.72Z"
                                                    transform="translate(62.483 68.825)"
                                                    fill="#fff"
                                                />
                                            </g>
                                            <g
                                                id="box-2"
                                                className="box-wrapper"
                                                data-num="2"
                                                data-name="box"
                                                transform="translate(543.6 1832.649)"
                                            >
                                                <g
                                                    id="box"
                                                    data-name="box"
                                                    transform="translate(60.374) rotate(45)"
                                                    fill="#141414"
                                                >
                                                    <path
                                                        id="box-rotate"
                                                        d="M 66.53624725341797 84.38201904296875 L 18.84578514099121 84.38201904296875 C 14.07900905609131 84.38201904296875 9.597538948059082 82.52574157714844 6.22691535949707 79.15511322021484 C 2.856280088424683 75.78449249267578 0.9999977350234985 71.30302429199219 0.9999977350234985 66.53624725341797 L 0.9999977350234985 18.84578514099121 C 0.9999977350234985 14.07900905609131 2.856280088424683 9.597538948059082 6.22691535949707 6.22691535949707 C 9.597538948059082 2.856280088424683 14.07900905609131 0.9999977350234985 18.84578514099121 0.9999977350234985 L 66.53624725341797 0.9999977350234985 C 71.30302429199219 0.9999977350234985 75.78449249267578 2.856280088424683 79.15511322021484 6.22691535949707 C 82.52574157714844 9.597538948059082 84.38201904296875 14.07900905609131 84.38201904296875 18.84578514099121 L 84.38201904296875 66.53624725341797 C 84.38201904296875 71.30302429199219 82.52574157714844 75.78449249267578 79.15511322021484 79.15511322021484 C 75.78449249267578 82.52574157714844 71.30302429199219 84.38201904296875 66.53624725341797 84.38201904296875 Z"
                                                        stroke="none"
                                                    />
                                                    <path
                                                        d="M 18.84578704833984 2 C 14.34610748291016 2 10.11576080322266 3.75225830078125 6.934005737304688 6.934005737304688 C 3.75225830078125 10.11576080322266 2 14.34610748291016 2 18.84578704833984 L 2 66.53623199462891 C 2 71.03591156005859 3.75225830078125 75.26625823974609 6.934005737304688 78.44801330566406 C 10.11576080322266 81.6297607421875 14.34610748291016 83.38201904296875 18.84578704833984 83.38201904296875 L 66.53623199462891 83.38201904296875 C 71.03591156005859 83.38201904296875 75.26625823974609 81.6297607421875 78.44801330566406 78.44801330566406 C 81.6297607421875 75.26625823974609 83.38201904296875 71.03591156005859 83.38201904296875 66.53623199462891 L 83.38201904296875 18.84578704833984 C 83.38201904296875 14.34610748291016 81.6297607421875 10.11576080322266 78.44801330566406 6.934005737304688 C 75.26625823974609 3.75225830078125 71.03591156005859 2 66.53623199462891 2 L 18.84578704833984 2 M 18.84578704833984 0 L 66.53623199462891 0 C 76.94448852539062 0 85.38201904296875 8.437545776367188 85.38201904296875 18.84578704833984 L 85.38201904296875 66.53623199462891 C 85.38201904296875 76.94448852539062 76.94448852539062 85.38201904296875 66.53623199462891 85.38201904296875 L 18.84578704833984 85.38201904296875 C 8.437545776367188 85.38201904296875 0 76.94448852539062 0 66.53623199462891 L 0 18.84578704833984 C 0 8.437545776367188 8.437545776367188 0 18.84578704833984 0 Z"
                                                        stroke="none"
                                                        fill="#dcb533"
                                                    />
                                                </g>
                                                <path
                                                    id="box"
                                                    data-name="box"
                                                    d="M-22.02-2.117V-4.264A2.986,2.986,0,0,1-20.783-6.69l4.41-3.593a2.579,2.579,0,0,0,1.12-2.053v-.77q0-1.68-1.75-1.68h-1.143a1.761,1.761,0,0,0-1.283.4,1.761,1.761,0,0,0-.4,1.283v.863q0,.42-.4.42h-1.493q-.4,0-.4-.42v-.91a3.515,3.515,0,0,1,.957-2.637,3.681,3.681,0,0,1,2.683-.933h1.82a3.648,3.648,0,0,1,2.66.933,3.515,3.515,0,0,1,.957,2.637v.957A3.691,3.691,0,0,1-14.46-9.21l-4.48,3.663a1.326,1.326,0,0,0-.537,1.05v.747h6.067q.42,0,.42.4v1.237q0,.4-.42.4H-21.6Q-22.02-1.72-22.02-2.117ZM-5.943-3.7h1.657A1.506,1.506,0,0,0-2.607-5.43v-7.583a1.506,1.506,0,0,0-1.68-1.727H-5.943a1.506,1.506,0,0,0-1.68,1.727V-5.43A1.506,1.506,0,0,0-5.943-3.7ZM-3.96-1.72H-6.293a3.628,3.628,0,0,1-2.683-.957,3.6,3.6,0,0,1-.957-2.66v-7.77a3.587,3.587,0,0,1,.957-2.672,3.654,3.654,0,0,1,2.683-.945H-3.96a3.621,3.621,0,0,1,2.66.945,3.587,3.587,0,0,1,.957,2.672v7.77A3.6,3.6,0,0,1-1.3-2.677,3.6,3.6,0,0,1-3.96-1.72ZM14.683-7.414h-.467a1.316,1.316,0,0,0-.98.28,1.5,1.5,0,0,0-.257,1v1.75a1.548,1.548,0,0,0,.257,1.015,1.281,1.281,0,0,0,.98.292h.467a1.286,1.286,0,0,0,.968-.292A1.5,1.5,0,0,0,15.92-4.38V-6.13a1.449,1.449,0,0,0-.268-1A1.321,1.321,0,0,0,14.683-7.414ZM13.89-8.767h1.073A2.258,2.258,0,0,1,17.506-6.2v1.913A2.258,2.258,0,0,1,14.963-1.72H13.89a2.258,2.258,0,0,1-2.543-2.567V-6.2A2.258,2.258,0,0,1,13.89-8.767Zm-7.77-6.65H5.63a1.321,1.321,0,0,0-.968.28,1.449,1.449,0,0,0-.268,1v1.773a1.449,1.449,0,0,0,.268,1,1.321,1.321,0,0,0,.968.28h.49a1.244,1.244,0,0,0,.957-.292,1.5,1.5,0,0,0,.257-.992v-1.773a1.5,1.5,0,0,0-.257-.992A1.244,1.244,0,0,0,6.12-15.417ZM5.326-16.77H6.4A2.258,2.258,0,0,1,8.943-14.2v1.913A2.258,2.258,0,0,1,6.4-9.723H5.326A2.258,2.258,0,0,1,2.783-12.29V-14.2A2.258,2.258,0,0,1,5.326-16.77ZM7.566-1.72h-.91q-.42,0-.28-.42.537-1.4,2.917-7.14T12.186-16.3q.187-.42.513-.42h.933q.443,0,.28.443L8.1-2.14A.535.535,0,0,1,7.566-1.72Z"
                                                    transform="translate(62.643 69.274)"
                                                    fill="#fff"
                                                />
                                            </g>
                                            <g
                                                id="box-3"
                                                className="box-wrapper"
                                                data-num="3"
                                                data-name="box"
                                                transform="translate(758.854 1879.067)"
                                            >
                                                <g
                                                    id="box"
                                                    data-name="box"
                                                    transform="translate(60.374 0) rotate(45)"
                                                    fill="#141414"
                                                >
                                                    <path
                                                        id="box-rotate"
                                                        d="M 66.53624725341797 84.38201904296875 L 18.84578514099121 84.38201904296875 C 14.07900905609131 84.38201904296875 9.597538948059082 82.52574157714844 6.22691535949707 79.15511322021484 C 2.856280088424683 75.78449249267578 0.9999977350234985 71.30302429199219 0.9999977350234985 66.53624725341797 L 0.9999977350234985 18.84578514099121 C 0.9999977350234985 14.07900905609131 2.856280088424683 9.597538948059082 6.22691535949707 6.22691535949707 C 9.597538948059082 2.856280088424683 14.07900905609131 0.9999977350234985 18.84578514099121 0.9999977350234985 L 66.53624725341797 0.9999977350234985 C 71.30302429199219 0.9999977350234985 75.78449249267578 2.856280088424683 79.15511322021484 6.22691535949707 C 82.52574157714844 9.597538948059082 84.38201904296875 14.07900905609131 84.38201904296875 18.84578514099121 L 84.38201904296875 66.53624725341797 C 84.38201904296875 71.30302429199219 82.52574157714844 75.78449249267578 79.15511322021484 79.15511322021484 C 75.78449249267578 82.52574157714844 71.30302429199219 84.38201904296875 66.53624725341797 84.38201904296875 Z"
                                                        stroke="none"
                                                    />
                                                    <path
                                                        d="M 18.84578704833984 2 C 14.34610748291016 2 10.11576080322266 3.75225830078125 6.934005737304688 6.934005737304688 C 3.75225830078125 10.11576080322266 2 14.34610748291016 2 18.84578704833984 L 2 66.53623199462891 C 2 71.03591156005859 3.75225830078125 75.26625823974609 6.934005737304688 78.44801330566406 C 10.11576080322266 81.6297607421875 14.34610748291016 83.38201904296875 18.84578704833984 83.38201904296875 L 66.53623199462891 83.38201904296875 C 71.03591156005859 83.38201904296875 75.26625823974609 81.6297607421875 78.44801330566406 78.44801330566406 C 81.6297607421875 75.26625823974609 83.38201904296875 71.03591156005859 83.38201904296875 66.53623199462891 L 83.38201904296875 18.84578704833984 C 83.38201904296875 14.34610748291016 81.6297607421875 10.11576080322266 78.44801330566406 6.934005737304688 C 75.26625823974609 3.75225830078125 71.03591156005859 2 66.53623199462891 2 L 18.84578704833984 2 M 18.84578704833984 0 L 66.53623199462891 0 C 76.94448852539062 0 85.38201904296875 8.437545776367188 85.38201904296875 18.84578704833984 L 85.38201904296875 66.53623199462891 C 85.38201904296875 76.94448852539062 76.94448852539062 85.38201904296875 66.53623199462891 85.38201904296875 L 18.84578704833984 85.38201904296875 C 8.437545776367188 85.38201904296875 0 76.94448852539062 0 66.53623199462891 L 0 18.84578704833984 C 0 8.437545776367188 8.437545776367188 0 18.84578704833984 0 Z"
                                                        stroke="none"
                                                        fill="#dcb533"
                                                    />
                                                </g>
                                                <path
                                                    id="box"
                                                    data-name="box"
                                                    d="M-16.91-9.653h-1.447a1.49,1.49,0,0,0-.735.163.9.9,0,0,0-.385.35q-.257.537-.63.537h-1.47a.351.351,0,0,1-.4-.4v-7.327a.351.351,0,0,1,.4-.4h7.91q.42,0,.42.4V-15q0,.4-.42.4h-6.02v4.247a1.819,1.819,0,0,1,1.96-1.143h1.377a3.5,3.5,0,0,1,2.567.875A3.468,3.468,0,0,1-12.9-8.044v2.707a3.6,3.6,0,0,1-.957,2.66,3.6,3.6,0,0,1-2.66.957H-18.5a3.587,3.587,0,0,1-2.672-.957,3.621,3.621,0,0,1-.945-2.66v-.607q0-.42.4-.42h1.47q.4,0,.4.42v.583a1.5,1.5,0,0,0,1.68,1.7h1.33a1.516,1.516,0,0,0,1.727-1.7V-7.717a2.185,2.185,0,0,0-.408-1.493A1.823,1.823,0,0,0-16.91-9.653ZM-5.827-3.7H-4.17A1.506,1.506,0,0,0-2.49-5.43v-7.583A1.506,1.506,0,0,0-4.17-14.74H-5.827a1.506,1.506,0,0,0-1.68,1.727V-5.43A1.506,1.506,0,0,0-5.827-3.7ZM-3.843-1.72H-6.177A3.628,3.628,0,0,1-8.86-2.677a3.6,3.6,0,0,1-.957-2.66v-7.77a3.587,3.587,0,0,1,.957-2.672,3.654,3.654,0,0,1,2.683-.945h2.333a3.621,3.621,0,0,1,2.66.945,3.587,3.587,0,0,1,.957,2.672v7.77a3.6,3.6,0,0,1-.957,2.66A3.6,3.6,0,0,1-3.843-1.72ZM14.8-7.414h-.467a1.316,1.316,0,0,0-.98.28,1.5,1.5,0,0,0-.257,1v1.75a1.548,1.548,0,0,0,.257,1.015,1.281,1.281,0,0,0,.98.292H14.8a1.286,1.286,0,0,0,.968-.292,1.5,1.5,0,0,0,.268-1.015V-6.13a1.449,1.449,0,0,0-.268-1A1.321,1.321,0,0,0,14.8-7.414Zm-.793-1.353H15.08A2.258,2.258,0,0,1,17.623-6.2v1.913A2.258,2.258,0,0,1,15.08-1.72H14.006a2.258,2.258,0,0,1-2.543-2.567V-6.2A2.258,2.258,0,0,1,14.006-8.767Zm-7.77-6.65h-.49a1.321,1.321,0,0,0-.968.28,1.449,1.449,0,0,0-.268,1v1.773a1.449,1.449,0,0,0,.268,1,1.321,1.321,0,0,0,.968.28h.49a1.244,1.244,0,0,0,.957-.292,1.5,1.5,0,0,0,.257-.992v-1.773a1.5,1.5,0,0,0-.257-.992A1.244,1.244,0,0,0,6.236-15.417ZM5.443-16.77H6.516A2.258,2.258,0,0,1,9.06-14.2v1.913A2.258,2.258,0,0,1,6.516-9.723H5.443A2.258,2.258,0,0,1,2.9-12.29V-14.2A2.258,2.258,0,0,1,5.443-16.77ZM7.683-1.72h-.91q-.42,0-.28-.42Q7.03-3.54,9.41-9.28T12.3-16.3q.187-.42.513-.42h.933q.443,0,.28.443L8.22-2.14A.535.535,0,0,1,7.683-1.72Z"
                                                    transform="translate(62.643 69.274)"
                                                    fill="#fff"
                                                />
                                            </g>
                                            <g
                                                id="box-4"
                                                className="box-wrapper"
                                                data-num="4"
                                                data-name="box"
                                                transform="translate(945.338 1981.944)"
                                            >
                                                <g
                                                    id="box"
                                                    data-name="box"
                                                    transform="translate(60.374 0) rotate(45)"
                                                    fill="#141414"
                                                >
                                                    <path
                                                        id="box-rotate"
                                                        d="M 66.53624725341797 84.38201904296875 L 18.84578514099121 84.38201904296875 C 14.07900905609131 84.38201904296875 9.597538948059082 82.52574157714844 6.22691535949707 79.15511322021484 C 2.856280088424683 75.78449249267578 0.9999977350234985 71.30302429199219 0.9999977350234985 66.53624725341797 L 0.9999977350234985 18.84578514099121 C 0.9999977350234985 14.07900905609131 2.856280088424683 9.597538948059082 6.22691535949707 6.22691535949707 C 9.597538948059082 2.856280088424683 14.07900905609131 0.9999977350234985 18.84578514099121 0.9999977350234985 L 66.53624725341797 0.9999977350234985 C 71.30302429199219 0.9999977350234985 75.78449249267578 2.856280088424683 79.15511322021484 6.22691535949707 C 82.52574157714844 9.597538948059082 84.38201904296875 14.07900905609131 84.38201904296875 18.84578514099121 L 84.38201904296875 66.53624725341797 C 84.38201904296875 71.30302429199219 82.52574157714844 75.78449249267578 79.15511322021484 79.15511322021484 C 75.78449249267578 82.52574157714844 71.30302429199219 84.38201904296875 66.53624725341797 84.38201904296875 Z"
                                                        stroke="none"
                                                    />
                                                    <path
                                                        d="M 18.84578704833984 2 C 14.34610748291016 2 10.11576080322266 3.75225830078125 6.934005737304688 6.934005737304688 C 3.75225830078125 10.11576080322266 2 14.34610748291016 2 18.84578704833984 L 2 66.53623199462891 C 2 71.03591156005859 3.75225830078125 75.26625823974609 6.934005737304688 78.44801330566406 C 10.11576080322266 81.6297607421875 14.34610748291016 83.38201904296875 18.84578704833984 83.38201904296875 L 66.53623199462891 83.38201904296875 C 71.03591156005859 83.38201904296875 75.26625823974609 81.6297607421875 78.44801330566406 78.44801330566406 C 81.6297607421875 75.26625823974609 83.38201904296875 71.03591156005859 83.38201904296875 66.53623199462891 L 83.38201904296875 18.84578704833984 C 83.38201904296875 14.34610748291016 81.6297607421875 10.11576080322266 78.44801330566406 6.934005737304688 C 75.26625823974609 3.75225830078125 71.03591156005859 2 66.53623199462891 2 L 18.84578704833984 2 M 18.84578704833984 0 L 66.53623199462891 0 C 76.94448852539062 0 85.38201904296875 8.437545776367188 85.38201904296875 18.84578704833984 L 85.38201904296875 66.53623199462891 C 85.38201904296875 76.94448852539062 76.94448852539062 85.38201904296875 66.53623199462891 85.38201904296875 L 18.84578704833984 85.38201904296875 C 8.437545776367188 85.38201904296875 0 76.94448852539062 0 66.53623199462891 L 0 18.84578704833984 C 0 8.437545776367188 8.437545776367188 0 18.84578704833984 0 Z"
                                                        stroke="none"
                                                        fill="#dcb533"
                                                    />
                                                </g>
                                                <path
                                                    id="box"
                                                    data-name="box"
                                                    d="M-18.815-1.72h-1.61q-.443,0-.21-.443l4.993-12.46h-5.88q-.4,0-.4-.42v-1.283a.351.351,0,0,1,.4-.4h7.91q.42,0,.42.4v1.447a2.681,2.681,0,0,1-.257.98L-18.161-2.094A.616.616,0,0,1-18.815-1.72ZM-6.8-3.7h1.657A1.506,1.506,0,0,0-3.462-5.43v-7.583a1.506,1.506,0,0,0-1.68-1.727H-6.8a1.506,1.506,0,0,0-1.68,1.727V-5.43A1.506,1.506,0,0,0-6.8-3.7ZM-4.815-1.72H-7.148a3.628,3.628,0,0,1-2.683-.957,3.6,3.6,0,0,1-.957-2.66v-7.77a3.587,3.587,0,0,1,.957-2.672,3.654,3.654,0,0,1,2.683-.945h2.333a3.621,3.621,0,0,1,2.66.945A3.587,3.587,0,0,1-1.2-13.107v7.77a3.6,3.6,0,0,1-.957,2.66A3.6,3.6,0,0,1-4.815-1.72ZM13.828-7.414h-.467a1.316,1.316,0,0,0-.98.28,1.5,1.5,0,0,0-.257,1v1.75a1.548,1.548,0,0,0,.257,1.015,1.281,1.281,0,0,0,.98.292h.467a1.286,1.286,0,0,0,.968-.292,1.5,1.5,0,0,0,.268-1.015V-6.13a1.449,1.449,0,0,0-.268-1A1.321,1.321,0,0,0,13.828-7.414Zm-.793-1.353h1.073A2.258,2.258,0,0,1,16.651-6.2v1.913A2.258,2.258,0,0,1,14.108-1.72H13.035a2.258,2.258,0,0,1-2.543-2.567V-6.2A2.258,2.258,0,0,1,13.035-8.767Zm-7.77-6.65h-.49a1.321,1.321,0,0,0-.968.28,1.449,1.449,0,0,0-.268,1v1.773a1.449,1.449,0,0,0,.268,1,1.321,1.321,0,0,0,.968.28h.49a1.244,1.244,0,0,0,.957-.292,1.5,1.5,0,0,0,.257-.992v-1.773a1.5,1.5,0,0,0-.257-.992A1.244,1.244,0,0,0,5.265-15.417ZM4.471-16.77H5.545A2.258,2.258,0,0,1,8.088-14.2v1.913A2.258,2.258,0,0,1,5.545-9.723H4.471A2.258,2.258,0,0,1,1.928-12.29V-14.2A2.258,2.258,0,0,1,4.471-16.77ZM6.711-1.72H5.8q-.42,0-.28-.42.537-1.4,2.917-7.14T11.331-16.3q.187-.42.513-.42h.933q.443,0,.28.443L7.248-2.14A.535.535,0,0,1,6.711-1.72Z"
                                                    transform="translate(62.623 68.825)"
                                                    fill="#fff"
                                                />
                                            </g>
                                            <g
                                                id="box-5"
                                                className="box-wrapper"
                                                data-num="5"
                                                data-name="box"
                                                transform="translate(1129.556 1846.155)"
                                            >
                                                <g
                                                    id="box"
                                                    data-name="box"
                                                    transform="translate(60.374 0) rotate(45)"
                                                    fill="#141414"
                                                >
                                                    <path
                                                        id="box-rotate"
                                                        d="M 66.53624725341797 84.38201904296875 L 18.84578514099121 84.38201904296875 C 14.07900905609131 84.38201904296875 9.597538948059082 82.52574157714844 6.22691535949707 79.15511322021484 C 2.856280088424683 75.78449249267578 0.9999977350234985 71.30302429199219 0.9999977350234985 66.53624725341797 L 0.9999977350234985 18.84578514099121 C 0.9999977350234985 14.07900905609131 2.856280088424683 9.597538948059082 6.22691535949707 6.22691535949707 C 9.597538948059082 2.856280088424683 14.07900905609131 0.9999977350234985 18.84578514099121 0.9999977350234985 L 66.53624725341797 0.9999977350234985 C 71.30302429199219 0.9999977350234985 75.78449249267578 2.856280088424683 79.15511322021484 6.22691535949707 C 82.52574157714844 9.597538948059082 84.38201904296875 14.07900905609131 84.38201904296875 18.84578514099121 L 84.38201904296875 66.53624725341797 C 84.38201904296875 71.30302429199219 82.52574157714844 75.78449249267578 79.15511322021484 79.15511322021484 C 75.78449249267578 82.52574157714844 71.30302429199219 84.38201904296875 66.53624725341797 84.38201904296875 Z"
                                                        stroke="none"
                                                    />
                                                    <path
                                                        d="M 18.84578704833984 2 C 14.34610748291016 2 10.11576080322266 3.75225830078125 6.934005737304688 6.934005737304688 C 3.75225830078125 10.11576080322266 2 14.34610748291016 2 18.84578704833984 L 2 66.53623199462891 C 2 71.03591156005859 3.75225830078125 75.26625823974609 6.934005737304688 78.44801330566406 C 10.11576080322266 81.6297607421875 14.34610748291016 83.38201904296875 18.84578704833984 83.38201904296875 L 66.53623199462891 83.38201904296875 C 71.03591156005859 83.38201904296875 75.26625823974609 81.6297607421875 78.44801330566406 78.44801330566406 C 81.6297607421875 75.26625823974609 83.38201904296875 71.03591156005859 83.38201904296875 66.53623199462891 L 83.38201904296875 18.84578704833984 C 83.38201904296875 14.34610748291016 81.6297607421875 10.11576080322266 78.44801330566406 6.934005737304688 C 75.26625823974609 3.75225830078125 71.03591156005859 2 66.53623199462891 2 L 18.84578704833984 2 M 18.84578704833984 0 L 66.53623199462891 0 C 76.94448852539062 0 85.38201904296875 8.437545776367188 85.38201904296875 18.84578704833984 L 85.38201904296875 66.53623199462891 C 85.38201904296875 76.94448852539062 76.94448852539062 85.38201904296875 66.53623199462891 85.38201904296875 L 18.84578704833984 85.38201904296875 C 8.437545776367188 85.38201904296875 0 76.94448852539062 0 66.53623199462891 L 0 18.84578704833984 C 0 8.437545776367188 8.437545776367188 0 18.84578704833984 0 Z"
                                                        stroke="none"
                                                        fill="#dcb533"
                                                    />
                                                </g>
                                                <path
                                                    id="box"
                                                    data-name="box"
                                                    d="M-18.508-3.7h1.843a1.767,1.767,0,0,0,1.272-.4,1.692,1.692,0,0,0,.408-1.26V-6.62q0-1.75-1.68-1.75h-1.843q-1.68,0-1.68,1.75v1.26a1.692,1.692,0,0,0,.408,1.26A1.767,1.767,0,0,0-18.508-3.7Zm0-6.487h1.843q1.68,0,1.68-1.75v-1.143a1.692,1.692,0,0,0-.408-1.26,1.767,1.767,0,0,0-1.272-.4h-1.843a1.767,1.767,0,0,0-1.272.4,1.692,1.692,0,0,0-.408,1.26v1.143Q-20.188-10.19-18.508-10.19Zm2.17,8.47h-2.473a3.8,3.8,0,0,1-2.683-.887,3.358,3.358,0,0,1-.957-2.59v-1.26a2.693,2.693,0,0,1,1.61-2.8,2.713,2.713,0,0,1-1.61-2.823v-1.19a3.327,3.327,0,0,1,.957-2.567,3.8,3.8,0,0,1,2.683-.887h2.473a3.755,3.755,0,0,1,2.672.887,3.35,3.35,0,0,1,.945,2.567v1.19a3.581,3.581,0,0,1-.432,1.82,2.153,2.153,0,0,1-1.155,1,2.693,2.693,0,0,1,1.587,2.823V-5.2a3.381,3.381,0,0,1-.945,2.59A3.755,3.755,0,0,1-16.338-1.72ZM-5.441-3.7h1.657A1.506,1.506,0,0,0-2.1-5.43v-7.583a1.506,1.506,0,0,0-1.68-1.727H-5.441a1.506,1.506,0,0,0-1.68,1.727V-5.43A1.506,1.506,0,0,0-5.441-3.7ZM-3.458-1.72H-5.791a3.628,3.628,0,0,1-2.683-.957,3.6,3.6,0,0,1-.957-2.66v-7.77a3.587,3.587,0,0,1,.957-2.672,3.654,3.654,0,0,1,2.683-.945h2.333a3.621,3.621,0,0,1,2.66.945,3.587,3.587,0,0,1,.957,2.672v7.77A3.6,3.6,0,0,1-.8-2.677,3.6,3.6,0,0,1-3.458-1.72ZM15.185-7.414h-.467a1.316,1.316,0,0,0-.98.28,1.5,1.5,0,0,0-.257,1v1.75a1.548,1.548,0,0,0,.257,1.015,1.281,1.281,0,0,0,.98.292h.467a1.286,1.286,0,0,0,.968-.292,1.5,1.5,0,0,0,.268-1.015V-6.13a1.449,1.449,0,0,0-.268-1A1.321,1.321,0,0,0,15.185-7.414Zm-.793-1.353h1.073A2.258,2.258,0,0,1,18.008-6.2v1.913A2.258,2.258,0,0,1,15.465-1.72H14.392a2.258,2.258,0,0,1-2.543-2.567V-6.2A2.258,2.258,0,0,1,14.392-8.767Zm-7.77-6.65h-.49a1.321,1.321,0,0,0-.968.28,1.449,1.449,0,0,0-.268,1v1.773a1.449,1.449,0,0,0,.268,1,1.321,1.321,0,0,0,.968.28h.49a1.244,1.244,0,0,0,.957-.292,1.5,1.5,0,0,0,.257-.992v-1.773a1.5,1.5,0,0,0-.257-.992A1.244,1.244,0,0,0,6.622-15.417ZM5.828-16.77H6.9A2.258,2.258,0,0,1,9.445-14.2v1.913A2.258,2.258,0,0,1,6.9-9.723H5.828A2.258,2.258,0,0,1,3.285-12.29V-14.2A2.258,2.258,0,0,1,5.828-16.77ZM8.068-1.72h-.91q-.42,0-.28-.42Q7.415-3.54,9.8-9.28T12.688-16.3q.187-.42.513-.42h.933q.443,0,.28.443L8.605-2.14A.535.535,0,0,1,8.068-1.72Z"
                                                    transform="translate(62.677 68.825)"
                                                    fill="#fff"
                                                />
                                            </g>
                                            <g
                                                id="box-6"
                                                className="box-wrapper"
                                                data-num="6"
                                                data-name="box"
                                                transform="translate(1333.282 1899.417)"
                                            >
                                                <g
                                                    id="box"
                                                    data-name="box"
                                                    transform="translate(60.374 0) rotate(45)"
                                                    fill="#141414"
                                                >
                                                    <path
                                                        id="box-rotate"
                                                        d="M 66.53624725341797 84.38201904296875 L 18.84578514099121 84.38201904296875 C 14.07900905609131 84.38201904296875 9.597538948059082 82.52574157714844 6.22691535949707 79.15511322021484 C 2.856280088424683 75.78449249267578 0.9999977350234985 71.30302429199219 0.9999977350234985 66.53624725341797 L 0.9999977350234985 18.84578514099121 C 0.9999977350234985 14.07900905609131 2.856280088424683 9.597538948059082 6.22691535949707 6.22691535949707 C 9.597538948059082 2.856280088424683 14.07900905609131 0.9999977350234985 18.84578514099121 0.9999977350234985 L 66.53624725341797 0.9999977350234985 C 71.30302429199219 0.9999977350234985 75.78449249267578 2.856280088424683 79.15511322021484 6.22691535949707 C 82.52574157714844 9.597538948059082 84.38201904296875 14.07900905609131 84.38201904296875 18.84578514099121 L 84.38201904296875 66.53624725341797 C 84.38201904296875 71.30302429199219 82.52574157714844 75.78449249267578 79.15511322021484 79.15511322021484 C 75.78449249267578 82.52574157714844 71.30302429199219 84.38201904296875 66.53624725341797 84.38201904296875 Z"
                                                        stroke="none"
                                                    />
                                                    <path
                                                        d="M 18.84578704833984 2 C 14.34610748291016 2 10.11576080322266 3.75225830078125 6.934005737304688 6.934005737304688 C 3.75225830078125 10.11576080322266 2 14.34610748291016 2 18.84578704833984 L 2 66.53623199462891 C 2 71.03591156005859 3.75225830078125 75.26625823974609 6.934005737304688 78.44801330566406 C 10.11576080322266 81.6297607421875 14.34610748291016 83.38201904296875 18.84578704833984 83.38201904296875 L 66.53623199462891 83.38201904296875 C 71.03591156005859 83.38201904296875 75.26625823974609 81.6297607421875 78.44801330566406 78.44801330566406 C 81.6297607421875 75.26625823974609 83.38201904296875 71.03591156005859 83.38201904296875 66.53623199462891 L 83.38201904296875 18.84578704833984 C 83.38201904296875 14.34610748291016 81.6297607421875 10.11576080322266 78.44801330566406 6.934005737304688 C 75.26625823974609 3.75225830078125 71.03591156005859 2 66.53623199462891 2 L 18.84578704833984 2 M 18.84578704833984 0 L 66.53623199462891 0 C 76.94448852539062 0 85.38201904296875 8.437545776367188 85.38201904296875 18.84578704833984 L 85.38201904296875 66.53623199462891 C 85.38201904296875 76.94448852539062 76.94448852539062 85.38201904296875 66.53623199462891 85.38201904296875 L 18.84578704833984 85.38201904296875 C 8.437545776367188 85.38201904296875 0 76.94448852539062 0 66.53623199462891 L 0 18.84578704833984 C 0 8.437545776367188 8.437545776367188 0 18.84578704833984 0 Z"
                                                        stroke="none"
                                                        fill="#dcb533"
                                                    />
                                                </g>
                                                <path
                                                    id="box"
                                                    data-name="box"
                                                    d="M-27.742-13.06v-1.377a.606.606,0,0,1,.327-.56l2.427-1.47a1.577,1.577,0,0,1,.747-.257h1.4a.351.351,0,0,1,.4.4v14.21q0,.4-.373.4h-1.517a.351.351,0,0,1-.4-.4V-14.3l-2.543,1.47Q-27.742-12.617-27.742-13.06Zm12.9,9.356h1.657A1.506,1.506,0,0,0-11.5-5.43v-7.583a1.506,1.506,0,0,0-1.68-1.727h-1.657a1.506,1.506,0,0,0-1.68,1.727V-5.43A1.506,1.506,0,0,0-14.839-3.7Zm1.983,1.983h-2.333a3.628,3.628,0,0,1-2.683-.957,3.6,3.6,0,0,1-.957-2.66v-7.77a3.587,3.587,0,0,1,.957-2.672,3.654,3.654,0,0,1,2.683-.945h2.333a3.621,3.621,0,0,1,2.66.945,3.587,3.587,0,0,1,.957,2.672v7.77a3.6,3.6,0,0,1-.957,2.66A3.6,3.6,0,0,1-12.856-1.72ZM-1.936-3.7H-.279A1.506,1.506,0,0,0,1.4-5.43v-7.583A1.506,1.506,0,0,0-.279-14.74H-1.936a1.506,1.506,0,0,0-1.68,1.727V-5.43A1.506,1.506,0,0,0-1.936-3.7ZM.047-1.72H-2.286a3.628,3.628,0,0,1-2.683-.957,3.6,3.6,0,0,1-.957-2.66v-7.77a3.587,3.587,0,0,1,.957-2.672,3.654,3.654,0,0,1,2.683-.945H.047a3.621,3.621,0,0,1,2.66.945,3.587,3.587,0,0,1,.957,2.672v7.77a3.6,3.6,0,0,1-.957,2.66A3.6,3.6,0,0,1,.047-1.72ZM18.69-7.414h-.467a1.316,1.316,0,0,0-.98.28,1.5,1.5,0,0,0-.257,1v1.75a1.548,1.548,0,0,0,.257,1.015,1.281,1.281,0,0,0,.98.292h.467a1.286,1.286,0,0,0,.968-.292,1.5,1.5,0,0,0,.268-1.015V-6.13a1.449,1.449,0,0,0-.268-1A1.321,1.321,0,0,0,18.69-7.414ZM17.9-8.767H18.97A2.258,2.258,0,0,1,21.514-6.2v1.913A2.258,2.258,0,0,1,18.97-1.72H17.9a2.258,2.258,0,0,1-2.543-2.567V-6.2A2.258,2.258,0,0,1,17.9-8.767Zm-7.77-6.65h-.49a1.321,1.321,0,0,0-.968.28,1.449,1.449,0,0,0-.268,1v1.773a1.449,1.449,0,0,0,.268,1,1.321,1.321,0,0,0,.968.28h.49a1.244,1.244,0,0,0,.957-.292,1.5,1.5,0,0,0,.257-.992v-1.773a1.5,1.5,0,0,0-.257-.992A1.244,1.244,0,0,0,10.127-15.417ZM9.334-16.77h1.073A2.258,2.258,0,0,1,12.951-14.2v1.913a2.258,2.258,0,0,1-2.543,2.567H9.334A2.258,2.258,0,0,1,6.791-12.29V-14.2A2.258,2.258,0,0,1,9.334-16.77Zm2.24,15.05h-.91q-.42,0-.28-.42.537-1.4,2.917-7.14T16.194-16.3q.187-.42.513-.42h.933q.443,0,.28.443L12.111-2.14A.535.535,0,0,1,11.574-1.72Z"
                                                    transform="translate(63.22 68.825)"
                                                    fill="#fff"
                                                />
                                            </g>
                                        </g>
                                    </svg>

                                    <div className="roadmap-content">
                                        <div className="roadmap-content-m roadmap-content-1">
                                            <div className="roadmap-content-modal roadmap-content-1-modal">
                                                <div className="roadmap-content-modal-t">
                                                    <div className="roadmap-content-modal-percentage">
                                                        10%
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="roadmap-content-modal-close close-modal"
                                                        data-num="1"
                                                    >
                                                        <span></span>
                                                        <span></span>
                                                    </a>
                                                    <p>
                                                        Within this first stage
                                                        we will be focusing on
                                                        building the other
                                                        sectors of the Ares
                                                        Legacy; Ares Investment
                                                        and Ares Edition. We
                                                        will upload exclusive
                                                        introductory content to
                                                        our YouTube channel for
                                                        our community explaining
                                                        what we will do and how
                                                        we will progress forward
                                                        to meet our goals.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="roadmap-content-m roadmap-content-2">
                                            <div className="roadmap-content-modal roadmap-content-2-modal">
                                                <div className="roadmap-content-modal-t">
                                                    <div className="roadmap-content-modal-percentage">
                                                        20%
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="roadmap-content-modal-close close-modal"
                                                        data-num="2"
                                                    >
                                                        <span></span>
                                                        <span></span>
                                                    </a>
                                                    <p>
                                                        In the next phase we
                                                        will randomly airdrop 5
                                                        unreleased ultimate Ares
                                                        NFTs to 5 previous
                                                        buyers. Our ultimate
                                                        Ares NFTs are truly
                                                        treasured collectibles,
                                                        with their low supply
                                                        and high rarity the
                                                        ultimate Ares will be
                                                        the scarcest artworks in
                                                        our collection. Lucky
                                                        members who receive one
                                                        will also be granted an
                                                        upgrade to VIP
                                                        membership and will
                                                        receive exclusive
                                                        benefits.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="roadmap-content-m roadmap-content-3">
                                            <div className="roadmap-content-modal roadmap-content-3-modal">
                                                <div className="roadmap-content-modal-t">
                                                    <div className="roadmap-content-modal-percentage">
                                                        50%
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="roadmap-content-modal-close close-modal"
                                                        data-num="3"
                                                    >
                                                        <span></span>
                                                        <span></span>
                                                    </a>
                                                    <p>
                                                        At this halfway stage
                                                        the long awaited second
                                                        wave of our second
                                                        position of rare, super
                                                        rare and legendary Ares
                                                        NFTs will be available
                                                        to mint, February 2023.
                                                        Exact date TBA.
                                                    </p>
                                                    <p>
                                                        Our Ares member website
                                                        will also be live and
                                                        exclusive members only
                                                        merchandise will be
                                                        available for purchase.
                                                        Our merchandise store
                                                        will feature high
                                                        quality Ares themed
                                                        apparel, and our members
                                                        will be able to purchase
                                                        these exclusive pieces
                                                        including; caps,
                                                        t-shirts, polo shirts,
                                                        watches, suits, shoes
                                                        and much more.
                                                        Merchandise will only be
                                                        available for a
                                                        restricted time and will
                                                        regularly change on a
                                                        weekly basis to ensure
                                                        rarity of the items.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="roadmap-content-m roadmap-content-4">
                                            <div className="roadmap-content-modal roadmap-content-4-modal">
                                                <div className="roadmap-content-modal-t">
                                                    <div className="roadmap-content-modal-percentage">
                                                        70%
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="roadmap-content-modal-close close-modal"
                                                        data-num="4"
                                                    >
                                                        <span></span>
                                                        <span></span>
                                                    </a>
                                                    <p>
                                                        Once we have reached
                                                        this stage of roadmap
                                                        completion our third
                                                        position of rare, super
                                                        rare and legendary Ares
                                                        NFTs will be available
                                                        to mint in April 2023.
                                                        Exact date TBA.
                                                    </p>
                                                    <p>
                                                        As well as this, the
                                                        Ares smartphone
                                                        application will be put
                                                        into development and
                                                        will only be available
                                                        to VIP members through a
                                                        QR code. The Ares VIP
                                                        app will allow VIP
                                                        members to have access
                                                        to exclusive updates
                                                        including release dates,
                                                        new merchandise date
                                                        drops and behind the
                                                        scenes previews of the
                                                        Ares project.
                                                    </p>
                                                    <p>
                                                        Previous buyers will
                                                        also have the chance of
                                                        being airdropped our
                                                        "Alamdar serum", when
                                                        combined with your rare
                                                        or super rare Ares NFT
                                                        will create a legendary
                                                        Ares NFT.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="roadmap-content-m roadmap-content-5">
                                            <div className="roadmap-content-modal roadmap-content-5-modal">
                                                <div className="roadmap-content-modal-t">
                                                    <div className="roadmap-content-modal-percentage">
                                                        80%
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="roadmap-content-modal-close close-modal"
                                                        data-num="5"
                                                    >
                                                        <span></span>
                                                        <span></span>
                                                    </a>
                                                    <p></p>
                                                    <p>
                                                        In this next stage our
                                                        fourth and final
                                                        position of rare, super
                                                        rare and legendary will
                                                        be available to mint in
                                                        June 2023. Exact date
                                                        TBA.
                                                    </p>
                                                    <p>
                                                        As well as this, our
                                                        highly anticipated
                                                        Ultimate Ares NFTs will
                                                        be released in July 2023
                                                        and will feature all
                                                        four positions with
                                                        unique and one-of-a-kind
                                                        attributes.
                                                    </p>
                                                    <p>
                                                        Also in this stage, the
                                                        VIP member website will
                                                        be live and will include
                                                        an exclusive luxury
                                                        online merchandise
                                                        store. These luxury
                                                        items will change every
                                                        3 days to ensure rarity
                                                        of the items.
                                                    </p>
                                                    <p>
                                                        Finally in this stage we
                                                        will launch our NFT
                                                        series which will be
                                                        based on the journey of
                                                        our main character Ares,
                                                        a legendary warrior. The
                                                        Ares NFT series will be
                                                        available for viewing on
                                                        our YouTube channel.
                                                        Once the series is
                                                        released, we will begin
                                                        to develop the Ares
                                                        movie. Exclusive
                                                        previews and teasers of
                                                        the movie will be shared
                                                        with our community via
                                                        our social media
                                                        channels.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="roadmap-content-m roadmap-content-6">
                                            <div className="roadmap-content-modal roadmap-content-6-modal">
                                                <div className="roadmap-content-modal-t">
                                                    <div className="roadmap-content-modal-percentage">
                                                        100%
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="roadmap-content-modal-close close-modal"
                                                        data-num="6"
                                                    >
                                                        <span></span>
                                                        <span></span>
                                                    </a>
                                                    <p></p>
                                                    <p>
                                                        In the finalizing stages
                                                        of our roadmap, we will
                                                        begin our new NFT
                                                        project which will
                                                        feature collaborations
                                                        with other budding NFT
                                                        creators that are in
                                                        need of investment. Our
                                                        community will be made
                                                        aware of any updates or
                                                        exclusive news through
                                                        our discord and social
                                                        media channels.
                                                    </p>
                                                    <p>
                                                        As well as this, Ares
                                                        Corporation will give
                                                        VIP members the chance
                                                        of becoming a partner on
                                                        the various projects
                                                        that we have lined up.
                                                        Exact details will be
                                                        announced closer to the
                                                        date.
                                                    </p>
                                                    <p>
                                                        Also, in this final
                                                        stage the highly
                                                        anticipated Ares movie
                                                        will be released and
                                                        shared with the world.
                                                        Release date TBA.
                                                    </p>
                                                    <p>
                                                        Finally, Ares
                                                        Corporation will
                                                        establish the other
                                                        sectors of our legacy;
                                                        Ares Investment and Ares
                                                        Edition. Ares Investment
                                                        will allow everyone's
                                                        ideas to be developed
                                                        through infrastructures
                                                        all over the world and
                                                        we promise a fresh new
                                                        take on investment. Ares
                                                        Edition will be open for
                                                        business and available
                                                        for purchase across the
                                                        world. Members who
                                                        purchase an Ares Edition
                                                        car will also be able to
                                                        incorporate their NFTs
                                                        within the car itself.
                                                        Due to the high-tech
                                                        nature of our supercars,
                                                        Ares Edition owners will
                                                        be able to benefit from
                                                        exclusive access to all
                                                        new products which will
                                                        be able to be integrated
                                                        into the cars at reduced
                                                        prices.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="lead has-animation-text mt-1 hidden-xs">
                                        <i>
                                            Click on percentages for more
                                            information
                                        </i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-spacing-bottom">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 text-center">
                                    <h3 className="has-animation">
                                        Gain The Advantage And Claim Your Spot
                                        As An <b>Ares Member</b>
                                    </h3>
                                    <p className="lead has-animation-text">
                                        At Ares Corporation, we sincerely value
                                        the constant support from both our
                                        members and VIP members. To become a
                                        member, you will first need to purchase
                                        a rare, super rare or legendary Ares
                                        NFT. To upgrade to VIP status, you must
                                        invest in an ultimate Ares NFT.
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12 text-center">
                                    <div id="img-slider-perspective">
                                        <div id="drag-container">
                                            <div id="spin-container">
                                                <img src={White} alt="" />
                                                <img src={Grey} alt="" />
                                                <img src={Black} alt="" />
                                                <img src={Red} alt="" />
                                            </div>
                                            <div id="ground"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-4">
                                <div className="col-md-10 text-center">
                                    <h3>
                                        ONLY FOR WHITELISTED AND{" "}
                                        <b>ULTIMATE ARES NFT</b> HOLDER
                                    </h3>
                                    <p className="lead">
                                        Whitelisted members can claim their free
                                        merchandise after purchasing their Ares
                                        NFT. VIP members who are the first
                                        owners of one of the 313 Ultimate Ares
                                        NFT will also be able to claim their
                                        free merchandise.
                                    </p>
                                    <a href="/claim" className="btn-fi">
                                        {" "}
                                        <span className="btn-fi-line"></span>
                                        Claim
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
