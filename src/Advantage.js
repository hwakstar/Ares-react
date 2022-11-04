import React from 'react';
import Bgsvg from "./images/content/adventages-bg.svg";
import Member from "./images/content/ares-memberships.svg";
import Title from "./images/content/member-title.svg";
import Vip from "./images/content/vip-member-title.svg";
import Footer from "./components/Footer";
export default function Advantage() {
    return (
        <>
    
        <div className="scroll-viewport">
           <div className="scroll-wrapper">
           <div className="page-backgorund ll"></div>
           <section className="section-top section-top-sm pb-0 section-top-nobg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <img src={Member} className="img-fluid" alt="Ares Memberships" />
                            </div>
                        </div>
                        <div className="row mt-4 justify-content-center">
                            <div className="col-md-7">
                                <div className="adventages">
                                    <div className="adventages-bg">
                                        <img src={Bgsvg} className="img-fluid" alt="Adventages" />
                                    </div>
                                    <div className="adventages-items">
                                        <div className="adventage-item">
                                            <a href="#" className="adventage-item-member"> Member </a>
                                        </div>
                                        <div className="adventage-item">
                                            <a href="#" className="adventage-item-vip-member"> VIP Member </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="adventages-descriptions">
                                    <div className="adventages-description" id="member">
                                        <div className="adventages-description-title">
                                            <a href="#" className="adventages-back"><i className="fa-solid fa-arrow-left"></i>Go back</a>
                                            <img src={Title} className="img-fluid" alt="Member" />
                                        </div>
                                        <div className="adventages-description-content">
                                            <div className="adventages-description-content-left">
                                                <h4>Whitelisted Member</h4>
                                                <p>Whitelisted Ares members receive exclusive, complimentary merch upon being selected. Not only do you experience the ultimate perk of being the first in line to acquire our Ares NFTs but also the opportunity to claim free merch from our highly-selective, unreleased Ares apparel line.</p>
                                                <h4>Communication</h4>
                                                <p>You will enjoy your own private discord server containing never-before-seen announcements on groundbreaking Ares news long before the general public.</p>
                                                <p>This server offers users private, members-only channels. To join our elite group, you must have a membership, an internet connection, and a device. Members will be verified via wallet authentification which will then allow access into this exclusive server.</p>
                                                <h4>Ares Members Only Store</h4>
                                                <p>The online Ares members store will be updated every week, with items kept low in stock to maintain rarity, value, and exclusivity.</p>
                                                <p>Our members-only apparel store will be just that: for members only.</p>
                                            </div>
                                            <div className="adventages-description-content-right">
                                                <h4>Gain An Upgrade to VIP with our Ultimate Ares NFT</h4>
                                                <p>The first launch will contain 2,300 rare, super rare and legendary NFTs, whoever purchases one will become an Ares member.</p>
                                                <p>
                                                    Among this selection, only 5 members will have the opportunity to be gifted an Ultimate Ares NFT and upgrade their status to VIP. If fate deems you lucky enough to be gifted such a treasured NFT, your status will be upgraded to an Ares VIP membership and you will enjoy all of the many benefits that being a VIP member has to offer.
                                                </p>
                                                <h4>A Serum So Powerful You Will Feel Legendary</h4>
                                                <p>Previous buyers will have the exclusive opportunity to be airdropped our limited "Alamdar serum" which will see your rare or super rare Ares transform into a legendary Ares. This epic elevation will only be available to valued members.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="adventages-description" id="vip-member">
                                        <div className="adventages-description-title">
                                            <a href="#" className="adventages-back"><i className="fa-solid fa-arrow-left"></i>Go back</a>
                                            <img src={Vip} className="img-fluid" alt="VIP Member" />
                                        </div>
                                        <div className="adventages-description-content">
                                            <div className="adventages-description-content-left">
                                                <h4>Communication</h4>
                                                <p>We are excited to take this one step further by creating a VIP Discord server for the Ultimate NFT buyer who also wants to stay ahead of the curve on all things Ares. From new product releases, this is the go-to spot for all things related to the Ares experience:</p>
                                                <ul className="adventage-item-list">
                                                    <li>Crypto information</li>
                                                    <li>Ares collaboration projects,</li>
                                                    <li>News and release dates for upcoming projects,</li>
                                                    <li>Whitelists for groundbreaking new projects, and</li>
                                                    <li>Critical minting dates</li>
                                                    <li>Investment oppurtunities</li>
                                                    <li>VIP members-only parties</li>
                                                </ul>
                                                <p>
                                                    You will instantly see your status changed to “investor,” opening the door to the VIP member’s telegram designed solely for future collaboration, innovative projects, or being a part of the Ares Team. You can stay connected no matter where you are and every door will be open; every upcoming
                                                    project will be shared to invest.
                                                </p>
                                                <h4>Claim Your Ares merch</h4>
                                                <p>VIP members, who are the first to purchase an Ultimate Ares NFT from Ares Corporation will be able to claim free pieces of merchandise from our enticing apparel store. Our embroidered merchandise consists of high-quality apparel that’s exclusive to Ares.</p>
                                            </div>
                                            <div className="adventages-description-content-right">
                                                <h4>Ares VIP Online Store</h4>
                                                <p>VIP Members will benefit from their own VIP store, having rare and collectible Ares items designed in partnership with elite luxury brands.</p>
                                                <p>
                                                    All items are premium quality and one-of-a-kind. You will also be able to purchase your luxury Ares certificate of authenticity reserved only for Ultimate NFT holders.<br />All items will be changed every 3 days. Once a rare, collectible item is gone, it may be gone forever! These items will be in
                                                    extremely low supply, and only the most elite Ares VIP members can claim ownership. Our VIP members-only apparel store will be just that: for VIP members only.
                                                </p>
                                                <h4>The Ares App</h4>
                                                <p>VIP members will have select access to our Ares Mobile Application through a QR code that you will receive with your merchandise.</p>
                                                <p>
                                                    Available for IOS or Android, this application offers select discounts in our online store. The app also includes a progress-tracking function for projects, a top-tier function only offered by Ares Corporation. Not only this but the app will have exclusive features including the Ares investment
                                                    section that will allow you to keep up with all the new investment opportunities that Ares has to offer. Moreover, you can switch to Ares Edition mode to enjoy the pleasure of all things Ares cars. You will also be able to feel the presence of the true Warrior Ares through our app’s Ares Filter
                                                    and numerous other benefits that will make you feel invincible with our VIP membership.
                                                </p>
                                                <h4>Metaverse and Gaming</h4>
                                                <p>Your Ultimate Ares NFT will be playable in the metaverse and in-game via the industry-leading collaboration with our Brand. Exclusive information regarding this subject will be shared on telegram.</p>
                                                <p>Elevate your status with an Ares VIP Membership today.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           </div>
           </div>
           <Footer/>
       </>
    )
}
