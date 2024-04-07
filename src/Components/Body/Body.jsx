import React from "react";

import { images } from "../../constants";
import "./Body.scss";

const Body = () => {
  return (
    <>
      <div className="body-header app__flex">
        <div style={{width: "50px"}}></div>
        <div className="header-box">
          <div className="header-left app__flex">
            <input type="text" value="Default View" />
            <img className="header-arrow" src={images.downArrawDark} alt="down arrow" />
            <div className="header-item app__flex">
              <img src={images.burgurIcon} alt="icon" />
              10/10 Rows
            </div>
            <div className="header-item app__flex">
              <img src={images.pause} alt="icon" />
              3/5 Columns
            </div>
            <div className="header-item app__flex">
              <img src={images.filter} alt="filter icon" />
              Filter
            </div>
            <div className="header-item app__flex">
              <img src={images.sort} alt="sort icon" />
              Sort
            </div>
          </div>
          <div className="header-right app__flex">
            <p>0/10 Rows Selected</p>
            <div className="hr"></div>
            <div className="header-location app__flex">
              <img src={images.location} alt="location icon" />
              Find Company Lookalikes
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
