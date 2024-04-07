import React from "react";

import { images } from "../../constants";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <p>CL</p>
        </div>
        <div className="flexbox">
          <div className="flexbox-top">
            <div>
              <img src={images.home} alt="home icon" />
            </div>
            <div>
              <img src={images.ring} alt="bell icon" />
            </div>
            <div>
              <img src={images.setting} alt="setting icon" />
            </div>
            <div>
              <img src={images.download} alt="download icon" />
            </div>
            <div>
              <img src={images.info} alt="info icon" />
            </div>
            <div>
              <img src={images.tables} alt="tables icon" />
            </div>
          </div>
          <div className="flexbox-bottom">
            <div>
              <img src={images.deleteIcon} alt="delete icon" />
            </div>
            <div>
              <img src={images.plan} alt="plan icon" />
            </div>
            <div>
              <img className="avtar" src={images.avtar} alt="Avatar image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
