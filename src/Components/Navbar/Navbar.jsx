import React, { useState } from "react";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [title, setTitle] = useState("Clay Starter Table");

  const onChangeHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  return (
    <>
      <div className="nav-bar border-style">
        <div className="nav">
          <div className="nav-left">
            <img className="portfolio" src={images.bag} alt="Portfolio" />
            <input
              className="nav-header"
              onChange={(e) => onChangeHandler(e)}
              value={title}
            />
            <img className="dot" src={images.threeDot} />
          </div>
          <div className="nav-right app__flex">
            <div className="nav-search app__flex">
              <img src={images.search} alt="Search" />
              <input type="text" placeholder="Search" />
              <p className="search-btn">Search</p>
            </div>
            <div className="enrichment app__flex">
              <img src={images.thunder} alt="icon" />
              Add Enrichment...
            </div>
            <div className="find__box app__flex">
              <img src={images.profile} alt="Profie Icon" />
              Find People
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
