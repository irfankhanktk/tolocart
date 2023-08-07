import React from "react";
import {
  applestore,
  fb_footer,
  footer_insta,
  footer_log,
  footer_twitter,
  playstore,
  visa,
} from "../../assets/svgs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div
        className=" p-3 d-md-flex flex-row justify-content-between"
        style={{ background: "#FF5A0024" }}
      >
        <div>
          <p
            style={{
              fontFamily: "Gilroy",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "32px",
            }}
          >
            Download App
          </p>
          <div className="d-flex align-items-center">
            <Link to="https://example.com">
              <img src={applestore} />
            </Link>
            <Link to="https://play.google.com/store/games">
              <img src={playstore} className="mx-2" />
            </Link>
          </div>
        </div>
        <div>
          <p
            style={{
              fontFamily: "Gilroy",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "32px",
            }}
          >
            Payment Method
          </p>
          <div>
            <Link to="https://example.com">
              <img src={visa} alt={"image here"} />
            </Link>
            <Link className="mx-2" to="https://example.com">
              <img src={visa} alt={"image here"} />
            </Link>
            <Link to="https://example.com">
              <img src={visa} alt={"image here"} />
            </Link>
          </div>
        </div>
      </div>
      <div style={{ background: "#FF5A00" }}>
        <div className="row m-0 p-3">
          <div className="col-lg-6 col-md-9 col-sm-9">
            <div className="row justify-content-between">
              <div className="col-lg-2 col-md-3 col-sm-3 mb-3 text-center">
                <Link to="#">
                  <img alt="image here" src={footer_log} />
                </Link>
              </div>
              <div className=" csm-service-links-wrap col-lg-8 col-md-9 col-sm-9">
                {["Services", "Safety", "About", "Careers"]?.map(
                  (item, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="csm-service-links"
                      style={{ color: "#fff" }}
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-3 col-sm-3 d-flex justify-content-end align-items-center">
            <Link to="https://example.com">
              <img
                src={fb_footer}
                alt={"image here"}
                style={{ height: "30px", width: "30px" }}
              />
            </Link>
            <Link className="mx-2" to="https://example.com">
              <img
                src={footer_insta}
                alt={"image here"}
                style={{ height: "30px", width: "30px" }}
              />
            </Link>
            <Link to="https://example.com">
              <img
                src={footer_twitter}
                alt={"image here"}
                style={{ height: "30px", width: "30px" }}
              />
            </Link>
          </div>
        </div>
        <div className="border border-white" />
        <div className="" style={{ background: "#FF5A00" }}>
          <div className="row m-0 p-2">
            <div className="col-md-6">
              <p className="text-white mt-2 mb-2 all-right-text">
                All Rights reserved. Tolocart Company © 2023
              </p>
            </div>
            <div className="col-md-6 ">
              <div className="justify-content-end d-flex align-items-center gap-4 mt-2 mb-2">
                <Link
                  to="#"
                  className="text-white all-right-text"
                  style={{ textDecoration: "none" }}
                >
                  Terms of Service
                </Link>
                <Link
                  to="#"
                  className="text-white all-right-text"
                  style={{ textDecoration: "none" }}
                >
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
