import React from "react";
import Header from "./Header";
import "../style.css";
import Footer from "./Footer";
import merch from "../images/content/ares-claim-merch.svg";
import rond from "../images/content/Ares-logo-rond.png";
import whitet from "../images/content/White-T-shirt.png";
import blackt from "../images/content/Black-T-shirt.png";
import redt from "../images/content/Red-T-shirt.png";
import greyt from "../images/content/Grey-T-shirt.png";
import whitecap from "../images/content/White-Cap.png";
import blackcap from "../images/content/Black-Cap.png";
import redcap from "../images/content/Red-Cap.png";
import greycap from "../images/content/Grey-Cap.png";
import { Input } from "antd";
export default function Claim() {
  return (
    <>
      <Header />
      <div className="scroll-viewport">
        <div className="scroll-wrapper">
          <div className="page-backgorund claim"></div>
          <section className="section section-top">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <img
                    src={merch}
                    className="img-fluid has-animation-fade-in"
                    alt="Ares Claim Merch"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="claim-merch">
                    <div className="claim-merch-left has-animation-fade-in">
                      <div className="claim-merch-shirt-options">
                        <div className="claim-merch-background">
                          <img src={rond} className="img-fluid" alt="Ares" />
                        </div>
                        <div
                          id="option-white-t-shirt"
                          className="claim-merch-shirt-option active"
                        >
                          <img src={whitet} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-black-t-shirt"
                          className="claim-merch-shirt-option"
                        >
                          <img src={blackt} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-red-t-shirt"
                          className="claim-merch-shirt-option"
                        >
                          <img src={redt} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-grey-t-shirt"
                          className="claim-merch-shirt-option"
                        >
                          <img src={greyt} className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="claim-merch-cap-options">
                        <div
                          id="option-white-cap"
                          className="claim-merch-cap-option active"
                        >
                          <img src={whitecap} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-black-cap"
                          className="claim-merch-cap-option"
                        >
                          <img src={blackcap} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-red-cap"
                          className="claim-merch-cap-option"
                        >
                          <img src={redcap} className="img-fluid" alt="" />
                        </div>
                        <div
                          id="option-grey-cap"
                          className="claim-merch-cap-option"
                        >
                          <img src={greycap} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="claim-merch-right has-animation-fade-in">
                      <h3 className="has-animation">
                        Signature polo with embrodery & Ares classNameic
                        baseball cap
                      </h3>
                      <div className="claim-merch-select">
                        <div className="claim-merch-select-item">
                          <a
                            href="#"
                            className="claim-merch-select-item-selected claim-merch-select-t-shirt-link"
                          >
                            Select T-Shirt color
                          </a>
                          <input
                            type="text"
                            id="claim-merch-selected-t-shirt"
                          />
                          <ul className="claim-merch-select-t-shirt">
                            <li>
                              <a
                                href="#"
                                data-input-val="white-tshirt"
                                data-select="#option-white-t-shirt"
                              >
                                <img
                                  src={whitet}
                                  className="img-fluid"
                                  alt=""
                                />
                                White
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="black-tshirt"
                                data-select="#option-black-t-shirt"
                              >
                                <img
                                  src={blackt}
                                  className="img-fluid"
                                  alt=""
                                />
                                Black
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="red-tshirt"
                                data-select="#option-red-t-shirt"
                              >
                                <img src={redt} className="img-fluid" alt="" />
                                Red
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="grey-tshirt"
                                data-select="#option-grey-t-shirt"
                              >
                                <img src={greyt} className="img-fluid" alt="" />
                                Grey
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="claim-merch-select-item">
                          <a
                            href="#"
                            className="claim-merch-select-item-selected claim-merch-select-cap-link"
                          >
                            Select Cap color
                          </a>
                          <input
                            type="text"
                            id="claim-merch-selected-cap"
                            style={{ display: "none" }}
                          />
                          <ul className="claim-merch-select-cap">
                            <li>
                              <a
                                href="#"
                                data-input-val="white-cap"
                                data-select="#option-white-cap"
                              >
                                {" "}
                                <img
                                  src={whitecap}
                                  className="img-fluid"
                                  alt=""
                                />
                                White
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="black-cap"
                                data-select="#option-black-cap"
                              >
                                {" "}
                                <img
                                  src={blackcap}
                                  className="img-fluid"
                                  alt=""
                                />
                                Black
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="red-cap"
                                data-select="#option-red-cap"
                              >
                                {" "}
                                <img
                                  src={redcap}
                                  className="img-fluid"
                                  alt=""
                                />
                                Red
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-input-val="grey-cap"
                                data-select="#option-grey-cap"
                              >
                                {" "}
                                <img
                                  src={greycap}
                                  className="img-fluid"
                                  alt=""
                                />
                                Grey
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="claim-merch-select-item">
                          <a
                            href="#"
                            className="claim-merch-select-item-selected claim-merch-select-size-link"
                          >
                            Select Size
                          </a>
                          <input
                            type="text"
                            id="claim-merch-selected-size"
                            style={{ display: "none" }}
                          />
                          <ul className="claim-merch-select-size">
                            <li>
                              <a href="#">S</a>
                            </li>
                            <li>
                              <a href="#">M</a>
                            </li>
                            <li>
                              <a href="#">L</a>
                            </li>
                            <li>
                              <a href="#">XL</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Each fine-textured, breathable polo shirt is crafted
                        with cotton and comes in various color shades to satisfy
                        every palette. This signature design is unique to our
                        Ares collection. Our retro cotton blend cap is made with
                        premium fabrics and designed to have a comfortable
                        silhouette. This signature Ares cap features a
                        structured crown and an adjustable closure to serve as a
                        staple piece in any wardrobe.
                      </p>

                      <a href="#" className="btn-fi claim-merch-next">
                        Next
                      </a>
                    </div>
                  </div>
                  <div className="claim-form">
                    <div className="claim-form-content">
                      <form method="post" acceptCharset="utf-8">
                        <div className="claim-form-row">
                          <div className="claim-form-col-2">
                            <label>Name
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              
                            />
                            </label>
                          </div>
                          <div className="claim-form-col-2">
                          <label>Surname
                            <input
                              type="text"
                              id="surname"
                              name="surname"
                              className="form-control"
                              
                            /></label>
                          </div>
                        </div>
                        <div className="claim-form-row">
                          <div className="claim-form-col-1">
                           
                          <label>Address <input
                              type="text"
                              id="address"
                              name="address"
                              className="form-control"
                             
                            /></label>
                          </div>
                        </div>
                        <div className="claim-form-row">
                          <div className="claim-form-col-1">
                          <label>E-mail<input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              
                            /></label>
                          </div>
                        </div>
                        <div className="claim-form-row">
                          <div className="claim-form-col-3">
                           <label>zip
                            <input
                              type="text"
                              id="zip"
                              name="zip"
                              className="form-control"                             
                            /></label>
                          </div>
                          <div className="claim-form-col-3">
                           <label>Country:
                            <input
                              type="text"
                              id="country"
                              name="country"
                              className="form-control"                            
                            />
                            </label>
                          </div>
                          <div className="claim-form-col-3">
                            <label>City
                            <input
                              type="text"
                              id="city"
                              name="city"
                              className="form-control"
                               /></label>
                          </div>
                        </div>
                        <div className="claim-form-row claim-form-row-reverse">
                          <div className="claim-form-col-8">
                            <div className="claim-form-actions">
                              <a href="#" className="claim-merch-back">
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>{" "}
                                Back
                              </a>
                              <a
                                href="#"
                                className="btn-fi"
                                id="claim-form-submit"
                              >
                                Submit
                              </a>
                            </div>
                          </div>
                          <div className="claim-form-col-4">
                            <div className="form-checkbox">
                              <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                value="terms"
                              />
                              <label htmlFor="terms">
                                <p>
                                  by continuing you accept the general
                                  conditions and our{" "}
                                  <a href="#" className="open-terms">
                                    <u>privacy policy</u>
                                  </a>
                                </p>
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
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
