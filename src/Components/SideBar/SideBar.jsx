import React from "react";

import { images } from "../../constants";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <p>Co</p>
          <span className="">CodeLab</span>
        </div>
        <div className="flexbox">
          <div className="flexbox-top">
            <div className="sldfjsl">
              <img src={images.home} alt="home icon" />
              <span>Home</span>
            </div>
            <div className="sldfjsl">
              <img src={images.ring} alt="bell icon" />
              <span>What's New?</span>
            </div>
            <div className="sldfjsl">
              <img src={images.setting} alt="setting icon" />
              <span>Workspace Settings</span>
            </div>
            <div className="sldfjsl">
              <img src={images.downloadLight} alt="download icon" />
              <span>Exports</span>
            </div>
            <div className="sldfjsl">
              <img src={images.info} alt="info icon" />
              <span>Help & Support</span>
            </div>
            <div className="sidebar-sldfjsl">
              <div className="lsidhf">
                <img src={images.tables} alt="tables icon" />
                <span>Tables</span>
              </div>

              <div className="sidebar-search">
                <img src={images.search} alt="" />
                <input type="text" placeholder="Search for any table" />
              </div>
              <div className="starter-table">
                <div>
                  <img src={images.bag} alt="" />
                  <span>Clay Starter Table</span>
                </div>

                <img className="ohsdfj" src={images.threeDot} alt="" />
              </div>
            </div>
          </div>
          <div className="flexbox-bottom">
            <div className="bottom-sdlfj">
              <img src={images.deleteIcon} alt="delete icon" />
              <span>Trash</span>
            </div>
            <div className="bottom-lsdjfl">
              <div className="hr"></div>
              <div className="owiehrs">
                <span>Free Trail</span>
                <span>9 days left</span>
              </div>
              <div className="oierhso"></div>
              <div className="osiernslj">
                <div className="sdjf">998 Clay credits left</div>
                <div className="osldf">Resets to free plan on Apr 19</div>
              </div>
              <div className="bottom-plan">
                <img src={images.planLight} alt="plan icon" />
                Upgrade Plan
              </div>
            </div>
            <div className="bottom-oihwes">
              <img src={images.plan} alt="plan icon" />
            </div>
            <div className="hr"></div>
            <div className="bottom-eorhsdf">
              <img className="avtar" src={images.avtar} alt="Avatar image" />
              <span>admin</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
