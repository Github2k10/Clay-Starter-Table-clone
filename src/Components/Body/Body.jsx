import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { images } from "../../constants";
import "./Body.scss";

const notify = (row) =>
  toast(`${row} rows deleted successfully.`, {
    duration: 4000,
    position: "bottom-center",
    style: {
      backgroundColor: "#aa70e6",
      color: "white",
      width: "300px",
      height: "20px",
    },
  });

const icons = {
  T: images.text_T,
  linkedin: images.linkedin,
  play: images.play,
  side: images.sideIcon,
  share: images.share,
};

const Body = ({ data, setData }) => {
  const [columns, setColumns] = useState([
    {
      left: "T",
      mid: null,
      right: null,
      title: "Domain",
    },
    {
      left: "linkedin",
      mid: "",
      right: "play",
      title: "Enrich Company",
    },
    {
      left: "side",
      mid: "share",
      right: "",
      title: "Url",
    },
  ]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (selected.length == 0) {
      document.getElementById("delete-btn").classList.remove("delete-sodjfj");
    }
  }, [selected]);

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
            <p>
              {selected.length}/{data.length} Rows Selected
            </p>
            <div className="hr"></div>
            <div className="header-location app__flex">
              <button
                id="delete-btn"
                className="delete-btn app__flex "
                onClick={() => {
                  const temp = data.filter(
                    (item, index) => !selected.includes(index)
                  );

                  const rows = document.getElementsByClassName("eroisdf");

                  for (let i = 0; i < rows.length; i++) {
                    rows[i].classList.remove("oihsg");
                    rows[i].querySelector("svg").classList.add("kfhskfh");
                  }

                  notify(selected.length);
                  setData(temp);
                  setSelected([]);
                }}
              >
                <img src={images.deteleBtn} alt="delete icon" />
                Delete Rows
              </button>
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
            </td>

            {columns.map((item, index) => (
              <td className="head-column">
                <div>
                  <div className="table-text">
                    <img src={icons[item.left]} alt="T icon" />
                    {item.mid && <img src={icons[item.mid]} alt="T icon" />}
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        columns[index].title = e.target.value;
                        setColumns((pre) => [...pre]);
                      }}
                    />
                  </div>
                  {item.right && (
                    <img
                      src={icons[item.right]}
                      alt="T icon"
                      style={{
                        width: "13px",
                        padding: "3px 5px",
                        backgroundColor: "var(--silver-color)",
                        marginRight: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  )}
                </div>
              </td>
            ))}

            <td className="add-column" onClick={() => {
              setColumns(pre => [...pre, {
                left: "T",
                mid: null,
                right: null,
                title: ""
              }])

              
            }}>
              <div className="table-text app__flex">
                <img src={images.plusLight} alt="icon" />
                Add Column
                <img src={images.downArrawLight} alt="icon" />
              </div>
            </td>
          </tr>

          {/* -=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
          {data.map((item, index) => (
            <tr className="body-row" key={index} id={index}>
              <td className="column-first sr">
                <p>{index + 1}</p>
                <div id={`visible${index}`}>
                  <input type="checkbox" />
                  <span
                    className="eroisdf"
                    onClick={(e) => {
                      e.preventDefault();
                      e.currentTarget.classList.toggle("oihsg");
                      e.target.classList.toggle("kfhskfh");

                      document
                        .getElementById("delete-btn")
                        .classList.add("delete-sodjfj");

                      if (!selected.includes(index)) {
                        setSelected((pre) => [...pre, index]);
                      } else {
                        const temp = selected.filter((ele) => ele != index);

                        setSelected(temp);
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="kfhskfh"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="white"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-slot="icon"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                </div>
                <img src={images.full} alt="icon" />
              </td>

              <td className="body-column c1">
                <input type="text" value={item.column1} />
              </td>

              <td className="body-column c2">
                <div>
                  {item.img ? <img src={item.img} alt="website icon" /> : null}
                  {item.column2}
                </div>
                <img className="play" src={images.play} alt="play icon" />
              </td>

              <td className="body-column c3">
                {item.column3 ? (
                  <div>
                    <a href={item.column3} target="_blank">
                      <img src={images.share} alt="share icon" />
                    </a>
                    <span>{item.column3.substring(0, 22)}</span>...
                  </div>
                ) : null}
              </td>
            </tr>
          ))}
        </table>
        <div
          className="new-row app__flex"
          onClick={() => {
            const newRow = {
              column1: "",
              column2: "",
              column3: "",
            };

            setData((pre) => [...pre, newRow]);
          }}
        >
          <img src={images.plusDark} alt="plus icon" />
          New row
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Body;
