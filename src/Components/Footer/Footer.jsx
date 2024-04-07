import React from "react";

import { images } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer border-style">
        <div className="footer-box">
          <div className="left-box">
            <div className="app__flex">
              <img src={images.plusDark} style={{width: "18px", height: "18px"}} alt="Plus icon" />
              New row
            </div>
            <div className="app__flex">
              <img src={images.download} alt="download icon" />
              Import...
            </div>
            <div className="app__flex">
              <img src={images.upload} alt="upload icon" />
              Export
              <img src={images.downArrawDark} style={{marginLeft: "5px"}} alt="down arraw" />
            </div>
            <div className="app__flex">
              <img src={images.shareIcon} alt="share icon" />
              Share...
            </div>
          </div>
          <div className="right-box">
            <div className="right-table app__flex">
              <img src={images.file} alt="file image" />
              View table history
            </div>
            <div className="right-icons app__flex">
              <img src={images.refresh} alt="refresh icon" />
              <img src={images.dedupe} alt="dedupe icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
