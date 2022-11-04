import image1 from "./images/content/aresnft-coming-soon-gold.svg";
import one from "./images/content/one.svg";
import two from "./images/content/two.svg";
import three from "./images/content/three.svg";
import four from "./images/content/four.svg";
import five from "./images/content/five.svg";
import image2 from "./images/content/businessman-hold-cubic-of-business-financial-and-banking-concept-digital-marketing-network-Recovered.1png.png";
import image3 from "./images/content/ares-edition.png";
import image4 from "./images/content/logo-project-item-nft.svg";
import image5 from "./images/content/logo-project-item-invest.svg";
import image6 from "./images/content/logo-project-item-edition.svg";
import image7 from "./images/content/logo-section.svg";
import man1 from "./images/content/ares-nft-slider-2.png";
import man2 from "./images/content/ares-nft-slider-1.png";
import man3 from "./images/content/ares-nft-slider-3.png";
import man4 from "./images/content/ares-nft-slider-4.png";
import svg from "./images/content/ares-nft-title.svg";
import React from "react";
import Footer from "./components/Footer";
import logo from "./images/content/logo.svg";
import modaltilte from "./images/content/mint-your-ares-nft-title.svg";
import videoone from "./images/IntroVideo.mp4";
import videotwo from "./images/content/project-item.mp4";
import nft1 from "./images/content/mint-your-ares-nft-1.png";
import nftshape from "./images/content/mint-your-ares-nft-shape.png";
export default function Dashboard() {
    return (
        <>
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
                            <img
                                src={logo}
                                className="img-fluid"
                                alt="ARES"
                            />
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
                                        <a href="#">
                                            <i className="fa-solid fa-minus"></i>
                                        </a>
                                    </div>
                                    <div className="nft-form-value">
                                        <input
                                            id="nft-form-val"
                                            name="nft-form-val"
                                            value="1"
                                            min="1"
                                            max="3"
                                        />{" "}
                                        NFT
                                    </div>
                                    <div className="nft-form-p">
                                        <a href="#">
                                            <i className="fa-solid fa-plus"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="nft-form-bottom">
                                    <a href="#" className="btn btn-primary">
                                        Connect your wallet
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="modal-content-grid-right">
                            <img
                                src={nft1}
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
                    <section className="section section-full-height p-0">
                        <div className="intro-video intro-s">
                            <video
                                muted
                                loop
                                autoPlay
                                className="intro-Video"
                                id="intro-Video"
                            >
                                <source
                                    src={videoone}
                                    type="video/mp4"
                                />
                                Try to use this snippet to show up your video.
                            </video>
                            <div className="intro-button">
                                <a
                                    href="#about-section"
                                    className="smooth-scroll"
                                >
                                    <i className="fa-solid fa-angle-down"></i>
                                    Scroll To Explore
                                </a>
                            </div>
                        </div>
                    </section>
                    <section
                        id="about-section"
                        className="section about-section section-full-height"
                    >
                        <div className="about-section-background has-animation-about-image about-section-me"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-9 col-alignment">
                                    <h1 className="text-watermark has-animation">
                                        About us
                                    </h1>
                                    <h3 className="has-animation">
                                        <b>Ares Corporation</b> took root in
                                        2019 as the brainchild of a creative
                                        founder who transforms daring visions
                                        into <b>tangible reality</b>
                                    </h3>
                                    <a
                                        to="/about"
                                        className="btn btn-icon has-animation-fade-in"
                                    >
                                        discover our story
                                        <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                    <div className="light-shadow light-shadow-5"></div>
                                    <ul className="info-links-list has-animation-fade-in">
                                        <li>
                                            <a href="mailto:info@ares-corporation.com">
                                                info@ares-corporation.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:partnership@ares-corporation.com">
                                                partnership@ares-corporation.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-spacing-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <img
                                        src={image1}
                                        className="has-animation-fade-in img-fluid mb-1"
                                        alt=""
                                    />
                                    <h6 className="h6 has-animation-fade-in">
                                        Purchase one and become one of us
                                    </h6>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-12 text-center">
                                    <a
                                        href="advantages.html"
                                        className="btn-text has-animation-fade-in"
                                    >
                                        Advantages of being an Ares Member{" "}
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ///////////// */}
                    <section className="section section-full-height">
                        <div className="container-fluid">
                            <div className="aresnft-slider has-animation-fade-in">
                                <div className="aresnft-slider-images">
                                    <div className="aresnft-slider-background">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="504.24"
                                            height="630.132"
                                            viewBox="0 0 504.24 630.132"
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="linear-gradient"
                                                    y1="0.5"
                                                    x2="1"
                                                    y2="0.5"
                                                    gradientUnits="objectBoundingBox"
                                                >
                                                    <stop
                                                        offset="0"
                                                        stopColor="#edd32e"
                                                    />
                                                    <stop
                                                        offset="1"
                                                        stopColor="#e4b300"
                                                    />
                                                </linearGradient>
                                            </defs>

                                            <g
                                                id="slider-shape"
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
                                                    id="slider-shape-stroke-1"
                                                    d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                    transform="translate(-8060.16 7532.5)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="slider-shape-stroke-2"
                                                    d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                    transform="translate(-8060.16 7532.5)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                                <path
                                                    id="slider-shape-stroke-3"
                                                    d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                                    transform="translate(-8060.16 7532.5)"
                                                    fill="none"
                                                    stroke="#dcb533"
                                                    strokeWidth="1"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="aresnft-slider-slides">
                                        <div
                                            id="slide-1"
                                            className="aresnft-slider-slide active"
                                        >
                                            <img
                                                src={man1}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            id="slide-2"
                                            className="aresnft-slider-slide"
                                        >
                                            <img
                                                src={man2}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            id="slide-3"
                                            className="aresnft-slider-slide"
                                        >
                                            <img
                                                src={man3}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            id="slide-4"
                                            className="aresnft-slider-slide"
                                        >
                                            <img
                                                src={man4}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="aresnft-slider-content">
                                    <div className="aresnft-slider-text">
                                        <div className="section-count has-animation-fade-in">
                                            <p>1</p>
                                            <div>
                                                <span></span>
                                            </div>
                                            <p>3</p>
                                        </div>
                                        <h1 className="has-animation">
                                            The Story Behind
                                            <br />
                                            <img
                                                src={svg}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </h1>
                                        <p className="has-animation-text">
                                            Our NFTs pay ode to the powerful and
                                            legendary warrior, Ares.
                                        </p>
                                        <p className="has-animation-text">
                                            His resurrection as well as the
                                            glory of his reign centuries after
                                            his death simply cannot be
                                            overlooked. Those who have heard the
                                            tales of his era know that he was a
                                            commanding force that exuded
                                            captivating power and strength.
                                        </p>
                                        <div className="aresnft-slider-content-actions">
                                            <a
                                                
                                                className="btn-fi has-animation-fade-in open-modal"
                                                data-modal="#mint-your-ares-modal"
                                            >
                                                <span className="btn-fi-line"></span>{" "}
                                                Mint now
                                            </a>
                                            <a
                                                href="/aresnft"
                                                className="btn btn-icon has-animation-fade-in"
                                            >
                                                Find out more
                                                <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                        <div className="light-shadow light-shadow-4"></div>
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
                                    <div className="aresnft-slide-nav-list-wrapper has-animation-fade-in">
                                        <div className="aresnft-slide-nav-list-line">
                                            <div className="aresnft-slide-nav-list-line-active">
                                                <span></span>
                                            </div>
                                        </div>
                                        <ul className="aresnft-slide-nav-list">
                                            <li className="active">
                                                <a
                                                    href="#slide-1"
                                                    className="aresnft-slide-nav active"
                                                    data-slide="#slide-1"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="35.103"
                                                        height="41.633"
                                                        viewBox="0 0 35.103 41.633"
                                                    >
                                                        <path
                                                            className="aresnft-slide-nav-fill"
                                                            d="M262.434,33.2l-3.883-5.516,1.5-11.174.03-.22-.138-.165L246.11,0l12.928,16.585-1.273,9.451L245.211,8.108l-.243-.379-.006-.009L232.891,25.53l-1.5-8.952L244.187.151,230.473,16.128l-.145.168.039.23,1.794,10.69-4.176,5.989-.325.467.5.254,14.87,7.706-13.916-8.3,3.528-5.06,10.926,9.655.044-1.258-3.258-2.891h0l-6.681-5.931,5.035-7.4.335,4.8,0-.063.407-5.835h0l.71-1.046,4-5.874.8,11.493.01-.152.8-11.419,4.537,6.45.4.566.411,5.883,0-.063.33-4.758,5.432,7.722-9.49,8.27c-.011-.952-.024-1.99-.03-2.13q-.038-.722-.089-1.441l-.055-.719-.062-.719-.006-.081-.055-.1-.359-.639c-.118-.214-.243-.424-.364-.635s-.244-.423-.369-.633l-.375-.63-.414-.7-.035-.059-.418.774-.341.632c-.113.21-.223.42-.333.635s-.225.423-.33.637l-.33.64-.046.09-.009.07-.062.716c-.02.239-.036.479-.055.718q-.052.716-.088,1.439c-.009.184-.017,1.12-.024,1.952l.468.416c.055-.925.339-3.238.422-3.71.041-.237.084-.473.122-.71l.1-.61.327-.556c.122-.206.238-.416.357-.624.094-.165.186-.326.275-.49l0-.009q.156.257.316.512c.129.207.256.416.389.621l.351.55.1.6.122.711c.084.473.467,4.073.528,5.04l.381-.252,10.545-9.188,3.364,4.779L247.4,41.632l14.87-7.706.5-.256Z"
                                                            transform="translate(-227.66)"
                                                            fill="#DCB533"
                                                        />
                                                    </svg>
                                                    <span></span>
                                                    Position 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#slide-2"
                                                    className="aresnft-slide-nav"
                                                    data-slide="#slide-2"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="35.103"
                                                        height="41.633"
                                                        viewBox="0 0 35.103 41.633"
                                                    >
                                                        <path
                                                            className="aresnft-slide-nav-fill"
                                                            d="M262.434,33.2l-3.883-5.516,1.5-11.174.03-.22-.138-.165L246.11,0l12.928,16.585-1.273,9.451L245.211,8.108l-.243-.379-.006-.009L232.891,25.53l-1.5-8.952L244.187.151,230.473,16.128l-.145.168.039.23,1.794,10.69-4.176,5.989-.325.467.5.254,14.87,7.706-13.916-8.3,3.528-5.06,10.926,9.655.044-1.258-3.258-2.891h0l-6.681-5.931,5.035-7.4.335,4.8,0-.063.407-5.835h0l.71-1.046,4-5.874.8,11.493.01-.152.8-11.419,4.537,6.45.4.566.411,5.883,0-.063.33-4.758,5.432,7.722-9.49,8.27c-.011-.952-.024-1.99-.03-2.13q-.038-.722-.089-1.441l-.055-.719-.062-.719-.006-.081-.055-.1-.359-.639c-.118-.214-.243-.424-.364-.635s-.244-.423-.369-.633l-.375-.63-.414-.7-.035-.059-.418.774-.341.632c-.113.21-.223.42-.333.635s-.225.423-.33.637l-.33.64-.046.09-.009.07-.062.716c-.02.239-.036.479-.055.718q-.052.716-.088,1.439c-.009.184-.017,1.12-.024,1.952l.468.416c.055-.925.339-3.238.422-3.71.041-.237.084-.473.122-.71l.1-.61.327-.556c.122-.206.238-.416.357-.624.094-.165.186-.326.275-.49l0-.009q.156.257.316.512c.129.207.256.416.389.621l.351.55.1.6.122.711c.084.473.467,4.073.528,5.04l.381-.252,10.545-9.188,3.364,4.779L247.4,41.632l14.87-7.706.5-.256Z"
                                                            transform="translate(-227.66)"
                                                            fill="#DCB533"
                                                        />
                                                    </svg>
                                                    <span></span>
                                                    Position 2
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#slide-3"
                                                    className="aresnft-slide-nav"
                                                    data-slide="#slide-3"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="35.103"
                                                        height="41.633"
                                                        viewBox="0 0 35.103 41.633"
                                                    >
                                                        <path
                                                            className="aresnft-slide-nav-fill"
                                                            d="M262.434,33.2l-3.883-5.516,1.5-11.174.03-.22-.138-.165L246.11,0l12.928,16.585-1.273,9.451L245.211,8.108l-.243-.379-.006-.009L232.891,25.53l-1.5-8.952L244.187.151,230.473,16.128l-.145.168.039.23,1.794,10.69-4.176,5.989-.325.467.5.254,14.87,7.706-13.916-8.3,3.528-5.06,10.926,9.655.044-1.258-3.258-2.891h0l-6.681-5.931,5.035-7.4.335,4.8,0-.063.407-5.835h0l.71-1.046,4-5.874.8,11.493.01-.152.8-11.419,4.537,6.45.4.566.411,5.883,0-.063.33-4.758,5.432,7.722-9.49,8.27c-.011-.952-.024-1.99-.03-2.13q-.038-.722-.089-1.441l-.055-.719-.062-.719-.006-.081-.055-.1-.359-.639c-.118-.214-.243-.424-.364-.635s-.244-.423-.369-.633l-.375-.63-.414-.7-.035-.059-.418.774-.341.632c-.113.21-.223.42-.333.635s-.225.423-.33.637l-.33.64-.046.09-.009.07-.062.716c-.02.239-.036.479-.055.718q-.052.716-.088,1.439c-.009.184-.017,1.12-.024,1.952l.468.416c.055-.925.339-3.238.422-3.71.041-.237.084-.473.122-.71l.1-.61.327-.556c.122-.206.238-.416.357-.624.094-.165.186-.326.275-.49l0-.009q.156.257.316.512c.129.207.256.416.389.621l.351.55.1.6.122.711c.084.473.467,4.073.528,5.04l.381-.252,10.545-9.188,3.364,4.779L247.4,41.632l14.87-7.706.5-.256Z"
                                                            transform="translate(-227.66)"
                                                            fill="#DCB533"
                                                        />
                                                    </svg>
                                                    <span></span>
                                                    Position 3
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#slide-4"
                                                    className="aresnft-slide-nav"
                                                    data-slide="#slide-4"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="35.103"
                                                        height="41.633"
                                                        viewBox="0 0 35.103 41.633"
                                                    >
                                                        <path
                                                            className="aresnft-slide-nav-fill"
                                                            d="M262.434,33.2l-3.883-5.516,1.5-11.174.03-.22-.138-.165L246.11,0l12.928,16.585-1.273,9.451L245.211,8.108l-.243-.379-.006-.009L232.891,25.53l-1.5-8.952L244.187.151,230.473,16.128l-.145.168.039.23,1.794,10.69-4.176,5.989-.325.467.5.254,14.87,7.706-13.916-8.3,3.528-5.06,10.926,9.655.044-1.258-3.258-2.891h0l-6.681-5.931,5.035-7.4.335,4.8,0-.063.407-5.835h0l.71-1.046,4-5.874.8,11.493.01-.152.8-11.419,4.537,6.45.4.566.411,5.883,0-.063.33-4.758,5.432,7.722-9.49,8.27c-.011-.952-.024-1.99-.03-2.13q-.038-.722-.089-1.441l-.055-.719-.062-.719-.006-.081-.055-.1-.359-.639c-.118-.214-.243-.424-.364-.635s-.244-.423-.369-.633l-.375-.63-.414-.7-.035-.059-.418.774-.341.632c-.113.21-.223.42-.333.635s-.225.423-.33.637l-.33.64-.046.09-.009.07-.062.716c-.02.239-.036.479-.055.718q-.052.716-.088,1.439c-.009.184-.017,1.12-.024,1.952l.468.416c.055-.925.339-3.238.422-3.71.041-.237.084-.473.122-.71l.1-.61.327-.556c.122-.206.238-.416.357-.624.094-.165.186-.326.275-.49l0-.009q.156.257.316.512c.129.207.256.416.389.621l.351.55.1.6.122.711c.084.473.467,4.073.528,5.04l.381-.252,10.545-9.188,3.364,4.779L247.4,41.632l14.87-7.706.5-.256Z"
                                                            transform="translate(-227.66)"
                                                            fill="#DCB533"
                                                        />
                                                    </svg>
                                                    <span></span>
                                                    Position 4
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="aresnft-slide-nav-list-bullet">
                                            <div className="aresnft-slide-nav-list-bullet-border">
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* {cczcczcxc} */}

                    <section className="section section-full-height">
                        <div className="container">
                            <div className="row row-height-auto">
                                <h1 className="text-watermark text-watermark-position text-watermark-position-right has-animation">
                                    <img
                                        src={image6}
                                        className="img-fluid"
                                        alt="ARES Investment"
                                    />
                                    investment
                                </h1>
                            </div>
                            <div className="row row-xs-reverse">
                                <div className="col-md-6 col-alignment">
                                    <div className="section-count section-count-half has-animation-fade-in">
                                        <p>2</p>
                                        <div>
                                            <span></span>
                                        </div>
                                        <p>3</p>
                                    </div>
                                    <h1 className="has-animation">
                                        Ares: The Investment Of The Future
                                    </h1>
                                    <p className="has-animation-text">
                                        <i>
                                            {" "}
                                            Invest in the visionary dream of
                                            your project to see the remarkable
                                            results in reality{" "}
                                        </i>
                                    </p>
                                    <p className="has-animation-text">
                                        Oftentimes, people brimming with
                                        confidence don’t have the required funds
                                        to see their dreams take flight. Any
                                        project, be it big or small, demands
                                        considerable financial capital. Without
                                        sufficient funding, project success is
                                        far from guaranteed.
                                    </p>
                                    <a
                                        href="investment.html"
                                        className="btn btn-icon has-animation-fade-in"
                                    >
                                        Find out more
                                        <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                    <div className="light-shadow light-shadow-3"></div>
                                    <ul className="info-links-list has-animation-fade-in">
                                        <li>
                                            <a href="mailto:support@ares-investment.com">
                                                support@ares-investment.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:partnership@ares-investment.com">
                                                partnership@ares-investment.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-alignment">
                                    <div className="img-watermark img-watermark-normal has-animation-fade-in-from-right">
                                        <img
                                            src={image2}
                                            className="img-fluid"
                                            alt="The story behind Ares NFT"
                                        />
                                        <img
                                            src={image2}
                                            className="img-fluid"
                                            alt="The story behind Ares NFT"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section section-full-height">
                        <div className="container">
                            <div className="row row-height-auto">
                                <h1 className="text-watermark text-watermark-position has-animation">
                                    <img
                                        src={image7}
                                        className="img-fluid"
                                        alt="ARES Investment"
                                    />
                                    Edition
                                </h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-alignment">
                                    <div className="img-watermark img-watermark-lighten has-animation-fade-in-from-left img-www">
                                        <img
                                            src={image3}
                                            className="img-fluid img-www1"
                                            alt="The story behind Ares NFT"
                                        />
                                        <img
                                            src={image3}
                                            className="img-fluid"
                                            alt="The story behind Ares NFT"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-alignment">
                                    <div className="section-count section-count-full has-animation-fade-in">
                                        <p>3</p>
                                        <div>
                                            <span></span>
                                        </div>
                                        <p>3</p>
                                    </div>
                                    <h1 className="has-animation">
                                        How <b>Shazane Nazaraly’s</b> Innovative
                                        Idea Gave Rise To A Ground-breaking{" "}
                                        <b>Luxury Car</b>
                                    </h1>
                                    <p className="has-animation-text">
                                        Growing up, Shazane Nazaraly fell in
                                        love with his fair share of sports cars.
                                        However, his idea of luxury was always
                                        unconventional.
                                    </p>
                                    <a
                                        href="/edition"
                                        className="btn btn-icon has-animation-fade-in"
                                    >
                                        Find out more
                                        <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                    <ul className="info-links-list has-animation-fade-in">
                                        <li>
                                            <a href="mailto:support@ares-edition.com">
                                                support@ares-edition.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:partnership@ares-edition.com">
                                                partnership@ares-edition.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="section projects-section">
            <div className="container">
              <div className="row">
                <div className="col-md-4 align-self-center">
                  <div className="project-item project-item-blue">
                    <div className="project-item-bg "></div>
                    <video





                      src={Videotwo}
                      className="project-item-video"
                      autoPlay
                      muted
                      loop
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="project-item-content">
                      <img
                        src="images/content/logo-project-item-edition.svg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-4 align-self-center">
                  <div className="project-item project-item-orange">
                    <div className="project-item-bg pro-a"></div>
                    <video
                      src={Videotwo}
                      className="project-item-video"
                      autoPlay
                      muted
                      loop
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="project-item-content">
                      <img src={image4} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-md-4 align-self-center">
                  <div className="project-item project-item-red">
                    <div className="project-item-bg pro-b"></div>
                    <video
                      src={Videotwo}
                      className="project-item-video"
                      autoPlay
                      muted
                      loop
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="project-item-content">
                      <img src={image5} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
                    {/* <section className="section section-spacing-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center"><img src={image1}
                                className="has-animation-fade-in img-fluid mb-1" alt="" />
                            <h6 className="h6 has-animation-fade-in">Purchase one and become one of us</h6>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-12 text-center"><a href="/advantage"
                                className="btn-text has-animation-fade-in">Advantages of being an Ares Member <i
                                    className="fa-solid fa-arrow-right"></i></a></div>
                    </div>
                </div>
                     </section>
                

                    <section className="section section-full-height">
                        <div className="container-fluid">
                            <div className="aresnft-slider has-animation-fade-in">
                                <div className="aresnft-slider-images">
                                <div className="aresnft-slider-background"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="504.24" height="630.132" viewBox="0 0 504.24 630.132">
                                    <g id="slider-shape" transform="translate(7833.237 -7515.773)">
                                        <path id="slider-shape-fill-bg"
                                            d="M-8680.712,8389.211l203.157-248.8,205.431,245.955-19.54,159.27,9.829,28.219,27.9,33.292,15.22,27.269-238.842,136.128-241.188-136.128,67.1-88.779Z"
                                            transform="translate(896 -624.638)" fill="#141414" />
                                        <path id="slider-shape-fill"
                                            d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                            transform="translate(-8059.768 7532.893)" fill="#1a1a1a" />
                                        <path id="slider-shape-stroke-1"
                                            d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                            transform="translate(-8060.16 7532.5)" fill="none" stroke="#dcb533"
                                            strokeWidth="1" />
                                        <path id="slider-shape-stroke-2"
                                            d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                            transform="translate(-8060.16 7532.5)" fill="none" stroke="#dcb533"
                                            strokeWidth="1" />
                                        <path id="slider-shape-stroke-3"
                                            d="M725.708,475.549l-55.611-79,21.554-160.038.425-3.153L690.1,230.99,491.911,0,677.066,237.534,658.84,372.9l-179.8-256.77-3.485-5.424-.086-.134L302.586,365.643,281.064,237.423,464.366,2.168,267.953,230.99l-2.081,2.412.56,3.3,25.693,153.108L232.319,475.58l-4.659,6.693,7.1,3.642L447.731,596.286,248.425,477.464,298.952,405,455.434,543.285l.631-18.022-46.656-41.4h0l-95.684-84.946,72.112-105.956,4.8,68.816.063-.9,5.834-83.567h-.047l10.162-14.979,57.259-84.134L475.4,342.8l.15-2.176,11.416-163.554,64.977,92.373,5.7,8.1,5.881,84.26.063-.9,4.73-68.146,77.8,110.592L510.2,521.8c-.158-13.639-.339-28.5-.434-30.51q-.544-10.335-1.269-20.639l-.789-10.3-.883-10.3-.086-1.159-.789-1.372-5.148-9.145c-1.695-3.059-3.477-6.07-5.219-9.1s-3.492-6.062-5.282-9.066l-5.369-9.027-5.929-10-.5-.844-5.992,11.092-4.888,9.058c-1.616,3.012-3.193,6.015-4.77,9.09s-3.217,6.055-4.73,9.121l-4.73,9.161-.662,1.285-.126,1.009-.883,10.249c-.284,3.429-.52,6.859-.789,10.288q-.749,10.249-1.261,20.608c-.134,2.633-.244,16.043-.347,27.963l6.709,5.952c.789-13.245,4.848-46.372,6.047-53.136.583-3.4,1.2-6.78,1.75-10.17l1.427-8.743,4.691-7.962c1.75-2.956,3.406-5.96,5.108-8.94,1.34-2.365,2.665-4.667,3.942-7.024l.071-.126q2.231,3.674,4.525,7.332c1.853,2.964,3.666,5.952,5.566,8.893l5.022,7.884,1.4,8.625,1.75,10.186c1.206,6.78,6.685,58.339,7.56,72.19l5.455-3.6L661.386,409.026l48.177,68.454L510.351,596.263,723.327,485.892l7.1-3.666Z"
                                            transform="translate(-8060.16 7532.5)" fill="none" stroke="#dcb533"
                                            strokeWidth="1" />
                                    </g>
                                </svg></div>
                                    <div className="aresnft-slider-slides">
                                <div id="slide-1" className="aresnft-slider-slide active"><img
                                        src="images/content/ares-nft-slider-2.png" className="img-fluid" alt="" /></div>
                                <div id="slide-2" className="aresnft-slider-slide"><img
                                        src="images/content/ares-nft-slider-1.png" className="img-fluid" alt="" /></div>
                                <div id="slide-3" className="aresnft-slider-slide"><img
                                        src="images/content/ares-nft-slider-3.png" className="img-fluid" alt="" /></div>
                                <div id="slide-4" className="aresnft-slider-slide"><img
                                        src="images/content/ares-nft-slider-4.png" className="img-fluid" alt="" /></div>
                            </div>
                                </div>
                                <div className="aresnft-slider-content">
                                    <div className="aresnft-slider-text">
                                        <div className="section-count has-animation-fade-in">
                                            <p>1</p>
                                            <div>
                                                <span></span>
                                            </div>
                                            <p>3</p>
                                        </div>
                                        <h1 className="has-animation">
                                            The Story Behind
                                            <img
                                                src={svg}
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div>
                                                <br />
                                            </div>
                                        </h1>
                                        <p className="has-animation-text">
                                            Our NFTs pay ode to the powerful and
                                            legendary warrior, Ares.
                                        </p>
                                        <p className="has-animation-text">
                                            His resurrection as well as the
                                            glory of his reign centuries after
                                            his death simply cannot be
                                            overlooked. Those who have heard the
                                            tales of his era know that he was a
                                            commanding force that exuded
                                            captivating power and strength.
                                        </p>
                                        <div className="aresnft-slider-content-actions">
                                            <a
                                                href="#"
                                                className="btn-fi has-animation-fade-in"
                                            >
                                                <span className="btn-fi-line"></span>
                                                Mint now
                                            </a>
                                            <a
                                                href="/aresnft"
                                                className="btn btn-icon has-animation-fade-in"
                                            >
                                                Find out more
                                                <i className="fa-solid fa-angle-right"></i>
                                            </a>
                                        </div>
                                        <div className="light-shadow light-shadow-4"></div>
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
                                    <div className="aresnft-slide-nav-list-wrapper has-animation-fade-in">
                                        <div className="aresnft-slide-nav-list-line">
                                            <div className="aresnft-slide-nav-list-line-active">
                                                <span></span>
                                            </div>
                                        </div>
                                        <ul className="aresnft-slide-nav-list">
                                            <li className="active">
                                                <a
                                                    href="#slide-1"
                                                    className="aresnft-slide-nav active"
                                                    data-slide="#slide-1"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="35.103"
                                                        height="41.633"
                                                        viewBox="0 0 35.103 41.633"
                                                    >
                                                        <path
                                                            className="aresnft-slide-nav-fill"
                                                            d="M262.434,33.2l-3.883-5.516,1.5-11.174.03-.22-.138-.165L246.11,0l12.928,16.585-1.273,9.451L245.211,8.108l-.243-.379-.006-.009L232.891,25.53l-1.5-8.952L244.187.151,230.473,16.128l-.145.168.039.23,1.794,10.69-4.176,5.989-.325.467.5.254,14.87,7.706-13.916-8.3,3.528-5.06,10.926,9.655.044-1.258-3.258-2.891h0l-6.681-5.931,5.035-7.4.335,4.8,0-.063.407-5.835h0l.71-1.046,4-5.874.8,11.493.01-.152.8-11.419,4.537,6.45.4.566.411,5.883,0-.063.33-4.758,5.432,7.722-9.49,8.27c-.011-.952-.024-1.99-.03-2.13q-.038-.722-.089-1.441l-.055-.719-.062-.719-.006-.081-.055-.1-.359-.639c-.118-.214-.243-.424-.364-.635s-.244-.423-.369-.633l-.375-.63-.414-.7-.035-.059-.418.774-.341.632c-.113.21-.223.42-.333.635s-.225.423-.33.637l-.33.64-.046.09-.009.07-.062.716c-.02.239-.036.479-.055.718q-.052.716-.088,1.439c-.009.184-.017,1.12-.024,1.952l.468.416c.055-.925.339-3.238.422-3.71.041-.237.084-.473.122-.71l.1-.61.327-.556c.122-.206.238-.416.357-.624.094-.165.186-.326.275-.49l0-.009q.156.257.316.512c.129.207.256.416.389.621l.351.55.1.6.122.711c.084.473.467,4.073.528,5.04l.381-.252,10.545-9.188,3.364,4.779L247.4,41.632l14.87-7.706.5-.256Z"
                                                            transform="translate(-227.66)"
                                                            fill="#DCB533"
                                                        />
                                                    </svg>
                                                    <span></span>
                                                    Position 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#slide-2"
                                                    className="aresnft-slide-nav"
                                                    data-slide="#slide-2"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="35.103"
                                                        height="41.633"
                                                        viewBox="0 0 35.103 41.633"
                                                    >
                                                        <path
                                                            className="aresnft-slide-nav-fill"
                                                            d="M262.434,33.2l-3.883-5.516,1.5-11.174.03-.22-.138-.165L246.11,0l12.928,16.585-1.273,9.451L245.211,8.108l-.243-.379-.006-.009L232.891,25.53l-1.5-8.952L244.187.151,230.473,16.128l-.145.168.039.23,1.794,10.69-4.176,5.989-.325.467.5.254,14.87,7.706-13.916-8.3,3.528-5.06,10.926,9.655.044-1.258-3.258-2.891h0l-6.681-5.931,5.035-7.4.335,4.8,0-.063.407-5.835h0l.71-1.046,4-5.874.8,11.493.01-.152.8-11.419,4.537,6.45.4.566.411,5.883,0-.063.33-4.758,5.432,7.722-9.49,8.27c-.011-.952-.024-1.99-.03-2.13q-.038-.722-.089-1.441l-.055-.719-.062-.719-.006-.081-.055-.1-.359-.639c-.118-.214-.243-.424-.364-.635s-.244-.423-.369-.633l-.375-.63-.414-.7-.035-.059-.418.774-.341.632c-.113.21-.223.42-.333.635s-.225.423-.33.637l-.33.64-.046.09-.009.07-.062.716c-.02.239-.036.479-.055.718q-.052.716-.088,1.439c-.009.184-.017,1.12-.024,1.952l.468.416c.055-.925.339-3.238.422-3.71.041-.237.084-.473.122-.71l.1-.61.327-.556c.122-.206.238-.416.357-.624.094-.165.186-.326.275-.49l0-.009q.156.257.316.512c.129.207.256.416.389.621l.351.55.1.6.122.711c.084.473.467,4.073.528,5.04l.381-.252,10.545-9.188,3.364,4.779L247.4,41.632l14.87-7.706.5-.256Z"
                                                            transform="translate(-227.66)"
                                                            fill="#DCB533"
                                                        />
                                                    </svg>
                                                    <span></span>
                                                    Position 2
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#slide-3"
                                                    className="aresnft-slide-nav"
                                                    data-slide="#slide-3"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="35.103"
                                                        height="41.633"
                                                        viewBox="0 0 35.103 41.633"
                                                    >
                                                        <path
                                                            className="aresnft-slide-nav-fill"
                                                            d="M262.434,33.2l-3.883-5.516,1.5-11.174.03-.22-.138-.165L246.11,0l12.928,16.585-1.273,9.451L245.211,8.108l-.243-.379-.006-.009L232.891,25.53l-1.5-8.952L244.187.151,230.473,16.128l-.145.168.039.23,1.794,10.69-4.176,5.989-.325.467.5.254,14.87,7.706-13.916-8.3,3.528-5.06,10.926,9.655.044-1.258-3.258-2.891h0l-6.681-5.931,5.035-7.4.335,4.8,0-.063.407-5.835h0l.71-1.046,4-5.874.8,11.493.01-.152.8-11.419,4.537,6.45.4.566.411,5.883,0-.063.33-4.758,5.432,7.722-9.49,8.27c-.011-.952-.024-1.99-.03-2.13q-.038-.722-.089-1.441l-.055-.719-.062-.719-.006-.081-.055-.1-.359-.639c-.118-.214-.243-.424-.364-.635s-.244-.423-.369-.633l-.375-.63-.414-.7-.035-.059-.418.774-.341.632c-.113.21-.223.42-.333.635s-.225.423-.33.637l-.33.64-.046.09-.009.07-.062.716c-.02.239-.036.479-.055.718q-.052.716-.088,1.439c-.009.184-.017,1.12-.024,1.952l.468.416c.055-.925.339-3.238.422-3.71.041-.237.084-.473.122-.71l.1-.61.327-.556c.122-.206.238-.416.357-.624.094-.165.186-.326.275-.49l0-.009q.156.257.316.512c.129.207.256.416.389.621l.351.55.1.6.122.711c.084.473.467,4.073.528,5.04l.381-.252,10.545-9.188,3.364,4.779L247.4,41.632l14.87-7.706.5-.256Z"
                                                            transform="translate(-227.66)"
                                                            fill="#DCB533"
                                                        />
                                                    </svg>
                                                    <span></span>
                                                    Position 3
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#slide-4"
                                                    className="aresnft-slide-nav"
                                                    data-slide="#slide-4"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="35.103"
                                                        height="41.633"
                                                        viewBox="0 0 35.103 41.633"
                                                    >
                                                        <path
                                                            className="aresnft-slide-nav-fill"
                                                            d="M262.434,33.2l-3.883-5.516,1.5-11.174.03-.22-.138-.165L246.11,0l12.928,16.585-1.273,9.451L245.211,8.108l-.243-.379-.006-.009L232.891,25.53l-1.5-8.952L244.187.151,230.473,16.128l-.145.168.039.23,1.794,10.69-4.176,5.989-.325.467.5.254,14.87,7.706-13.916-8.3,3.528-5.06,10.926,9.655.044-1.258-3.258-2.891h0l-6.681-5.931,5.035-7.4.335,4.8,0-.063.407-5.835h0l.71-1.046,4-5.874.8,11.493.01-.152.8-11.419,4.537,6.45.4.566.411,5.883,0-.063.33-4.758,5.432,7.722-9.49,8.27c-.011-.952-.024-1.99-.03-2.13q-.038-.722-.089-1.441l-.055-.719-.062-.719-.006-.081-.055-.1-.359-.639c-.118-.214-.243-.424-.364-.635s-.244-.423-.369-.633l-.375-.63-.414-.7-.035-.059-.418.774-.341.632c-.113.21-.223.42-.333.635s-.225.423-.33.637l-.33.64-.046.09-.009.07-.062.716c-.02.239-.036.479-.055.718q-.052.716-.088,1.439c-.009.184-.017,1.12-.024,1.952l.468.416c.055-.925.339-3.238.422-3.71.041-.237.084-.473.122-.71l.1-.61.327-.556c.122-.206.238-.416.357-.624.094-.165.186-.326.275-.49l0-.009q.156.257.316.512c.129.207.256.416.389.621l.351.55.1.6.122.711c.084.473.467,4.073.528,5.04l.381-.252,10.545-9.188,3.364,4.779L247.4,41.632l14.87-7.706.5-.256Z"
                                                            transform="translate(-227.66)"
                                                            fill="#DCB533"
                                                        />
                                                    </svg>
                                                    <span></span>
                                                    Position 4
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="aresnft-slide-nav-list-bullet">
                                            <div className="aresnft-slide-nav-list-bullet-border">
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* <section className="section section-full-height">
                        <div className="container">
                            <div className="row row-height-auto">
                                <h1 className="text-watermark text-watermark-position text-watermark-position-right has-animation">
                                    <img
                                        src={image7}
                                        className="img-fluid"
                                        alt="ARES Investment"
                                    />
                                    Investment
                                </h1>
                            </div>
                            <div className="row row-xs-reverse" style={{justifyContent:"center"}}>
                                <div className="col-md-6 col-alignment">
                                    <div className="section-count section-count-half has-animation-fade-in">
                                        <p>2</p>
                                        <div>
                                            <span></span>
                                        </div>
                                        <p>3</p>
                                    </div>
                                    <h1 className="has-animation">
                                        Ares: The Investment Of The Future
                                    </h1>
                                    <p className="has-animation-text">
                                        <i>
                                            {" "}
                                            Invest in the visionary dream of
                                            your project to see the remarkable
                                            results in reality{" "}
                                        </i>
                                    </p>
                                    <p className="has-animation-text">
                                        Oftentimes, people brimming with
                                        confidence don’t have the required funds
                                        to see their dreams take flight. Any
                                        project, be it big or small, demands
                                        considerable financial capital. Without
                                        sufficient funding, project success is
                                        far from guaranteed.
                                    </p>
                                    <a
                                        to="/investment"
                                        className="btn btn-icon has-animation-fade-in"
                                    >
                                        Find out more
                                        <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                    <div className="light-shadow light-shadow-3"></div>
                                    <ul className="info-links-list has-animation-fade-in">
                                        <li>
                                            <a href="mailto:support@ares-investment.com">
                                                support@ares-investment.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:partnership@ares-investment.com">
                                                partnership@ares-investment.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-alignment">
                                    <div className="img-watermark img-watermark-normal has-animation-fade-in-from-right">
                                        <img
                                            src={image2}
                                            className="img-fluid"
                                            alt="The story behind Ares NFT"
                                        />
                                        <img
                                            src={image2}
                                            className="img-fluid"
                                            alt="The story behind Ares NFT"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section section-full-height">
                        <div className="container">
                            <div className="row row-height-auto">
                                <h1 className="text-watermark text-watermark-position has-animation">
                                    <img
                                        src={image7}
                                        className="img-fluid"
                                        alt="ARES Investment"
                                    />
                                    Edition
                                </h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-alignment" >
                                    <div className="img-watermark img-watermark-lighten has-animation-fade-in-from-left img-www" >
                                        <img
                                            src={image3}
                                            className="img-fluid img-www1"
                                            alt="The story behind Ares NFT"
                                        />
                                        <img
                                            src={image3}
                                            className="img-fluid"
                                            alt="The story behind Ares NFT"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-alignment">
                                    <div className="section-count section-count-full has-animation-fade-in">
                                        <p>3</p>
                                        <div>
                                            <span></span>
                                        </div>
                                        <p>3</p>
                                    </div>
                                    <h1 className="has-animation">
                                        How <b>Shazane Nazaraly’s</b> Innovative
                                        Idea Gave Rise To A Ground-breaking{" "}
                                        <b>Luxury Car</b>
                                    </h1>
                                    <p className="has-animation-text">
                                        Growing up, Shazane Nazaraly fell in
                                        love with his fair share of sports cars.
                                        However, his idea of luxury was always
                                        unconventional.
                                    </p>
                                    <a
                                        to="/edition"
                                        className="btn btn-icon has-animation-fade-in"
                                    >
                                        Find out more
                                        <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                    <ul className="info-links-list has-animation-fade-in">
                                        <li>
                                            <a href="mailto:support@ares-edition.com">
                                                support@ares-edition.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:partnership@ares-edition.com">
                                                partnership@ares-edition.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>*/}
                    <section className="section projects-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 align-self-center">
                                    <div className="project-item project-item-blue">
                                        <div className="project-item-bg pro-miss"></div>
                                        <a href="/edition"></a>
                                        <video
                                            src={videotwo}
                                            className="project-item-video"
                                            autoPlay
                                            muted
                                            loop
                                            type="video/mp4"
                                        >
                                            Your browser does not support the
                                            video tag.
                                        </video>

                                        <div className="project-item-content">
                                            <img
                                                src={image6}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 align-self-center">
                                    <div className="project-item project-item-orange">
                                        <div className="project-item-bg pro-a"></div>
                                        <a href="/aresnft"></a>
                                        <video
                                            src={videotwo}
                                            className="project-item-video"
                                            autoPlay
                                            muted
                                            loop
                                        >
                                            Your browser does not support the
                                            video tag.
                                        </video>
                                        <div className="project-item-content">
                                            <img
                                                src={image4}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 align-self-center">
                                    <div className="project-item project-item-red">
                                        <div className="project-item-bg pro-b"></div>
                                        <a href="/investment"></a>
                                        <video
                                            src={videotwo}
                                            className="project-item-video"
                                            autoPlay
                                            muted
                                            loop
                                        >
                                            Your browser does not support the
                                            video tag.
                                        </video>
                                        <div className="project-item-content">
                                            <img
                                                src={image5}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
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
