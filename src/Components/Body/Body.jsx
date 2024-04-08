import React, { useState } from "react";

import { images } from "../../constants";
import "./Body.scss";

const obj = [
  {
    id: 1,
    column1: "servicebell.com",
    column2: "ServiceBell",
    column3: "https://www.linkedin.com/company/servicebell",
  },
  {
    id: 2,
    column1: "superhuman.com",
    column2: "Superhuman",
    column3: "https://www.linkedin.com/company/superhuman-co",
  },
  {
    id: 3,
    column1: "donut.com",
    column2: "Donut",
    column3: "https://www.linkedin.com/company/donut",
  },
  {
    id: 4,
    column1: "startengine.com",
    column2: "StartEngine",
    column3: "https://www.linkedin.com/company/startengined",
  },
  {
    id: 5,
    column1: "kandji.io",
    column2: "Kandji",
    column3: "https://www.linkedin.com/company/kandji",
  },
  {
    id: 6,
    column1: "mutinyhq.com",
    column2: "Mutiny",
    column3: "https://www.linkedin.com/company/mutinyhq",
  },
  {
    id: 7,
    column1: "joinpogo.com",
    column2: "Pogo",
    column3: "https://www.linkedin.com/company/joinpogo",
  },
  {
    id: 8,
    column1: "kalshi.com",
    column2: "Kalshi",
    column3: "https://www.linkedin.com/company/kalshi",
  },
  {
    id: 9,
    column1: "aha.io",
    column2: "Aha!",
    column3: "https://www.linkedin.com/company/aha-labs-inc-",
  },
  {
    id: 10,
    column1: "vitally.io",
    column2: "Vitally.io",
    column3: "https://www.linkedin.com/company/vitally.io",
  },
];

const checkBox = () => {
  return (
    <>
      <span
        className="lsdkfj"
        onClick={(e) => {
          e.preventDefault();
          e.currentTarget.classList.toggle("sldfl");
          e.target.classList.toggle("sldfsdf");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="sldfsdf"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--colors--darkPrimaryText, white)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-slot="icon"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
    </>
  );
};

const Body = () => {
  const [data, setData] = useState(obj);
  const [hover, setHover] = useState(false);
  const [columns, setColumns] = useState(["Domain", "Enrich Company", "Url"]);

  return (
    <>
      <div className="body-header app__flex">
        <div style={{ width: "50px" }}></div>
        <div className="header-box">
          <div className="header-left app__flex">
            <input type="text" value="Default View" />
            <img
              className="header-arrow"
              src={images.downArrawDark}
              alt="down arrow"
            />
            <div className="header-item app__flex">
              <img src={images.burgurIcon} alt="icon" />
              {data.length}/{data.length} Rows
            </div>
            <div className="header-item app__flex">
              <img src={images.pause} alt="icon" />
              {`${columns.length}/${columns.length + 2}`} Columns
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
      <div className="table-grid">
        <table>
          <tr className="head-row">
            <td className="column-sr">
              <input type="checkbox" />
              {checkBox()}
            </td>
            <td className="head-column">
              <div>
                <div>
                  <img src={images.text_T} alt="T icon" />
                  Domain
                </div>
              </div>
            </td>
            <td className="head-column">
              <div>
                <div className="table-text">
                  <img src={images.linkedin} alt="" /> Enrich Company
                </div>
                <img
                  src={images.play}
                  style={{
                    width: "13px",
                    padding: "3px 5px",
                    backgroundColor: "var(--silver-color)",
                    marginRight: "10px",
                    borderRadius: "5px",
                  }}
                  alt=""
                />
              </div>
            </td>
            <td className="head-column">
              <div>
                <div className="table-text">
                  <img src={images.sideIcon} alt="" />
                  <img src={images.link} alt="" />
                  Url
                </div>
              </div>
            </td>
            <td className="add-column">
              <div className="table-text app__flex">
                <img src={images.plusLight} alt="icon" />
                Add Column
                <img src={images.downArrawLight} alt="icon" />
              </div>
            </td>
          </tr>

          {data.map((item) => (
            <tr className="head-row">
              <td className="column-sr lishdf">
                <input type="checkbox" />
                <div>{checkBox()}</div>
                <img src={images.full} alt="icon" />
                
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Body;


//duino-coin - sdhfjkhskfhksdfhshdkfshdf
// johnWick_duin_key_001