import React from "react";
import "./Chart.css";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import overview from "../Assets/overview.png";
import pastmints from "../Assets/pastmints.png";
import releaseTime from "../Assets/releaseTime.png";
import walletbalance from "../Assets/walletbalance.png";
import whale from "../Assets/whale.png";
import Overview from "./Overview/Overview.js";
import Table1 from "./Overview/Table1";
import TableBlur from "./Overview/TableBlur";

const Charts = () => {
  const [navBtn, setNavBtn] = React.useState("overview");
  return (
    <div className="charts_wrapper">
      <div className="nav_group">
        <button
          className="nav_btn"
          id={navBtn === "overview" ? "active" : ""}
          onClick={() => setNavBtn("overview")}
        >
          <img
            src={overview}
            alt="overview"
            style={{ width: "19%", marginRight: "0.5em" }}
          ></img>
          Overview
        </button>
        <button className="nav_btn">
          <img
            src={pastmints}
            alt="past mints"
            style={{ width: "15%", marginRight: "0.5em" }}
          ></img>
          Past Mints
        </button>
        <button
          className="nav_btn"
          onClick={() => setNavBtn("time")}
          id={navBtn === "time" ? "active" : ""}
        >
          <img
            src={releaseTime}
            alt="time"
            style={{ width: "11%", marginRight: "0.5em" }}
          ></img>
          Optimal Release Time
        </button>
        <button className="nav_btn">
          <img
            src={walletbalance}
            alt="wallet"
            style={{ width: "15%", marginRight: "0.5em" }}
          ></img>
          Wallet Balances
        </button>
        <button className="nav_btn">
          <img
            src={whale}
            alt="whale"
            style={{ width: "25%", marginRight: "0.5em" }}
          ></img>
          Whales
        </button>
      </div>
      <span className="line">&nbsp;</span>
      {/* <PieChart />
      <BarChart /> */}
      {navBtn === "overview" ? (
        <>
          <Overview />
          {/* <Table1 />
          <TableBlur /> */}
        </>
      ) : (
        <>
          <PieChart />
          <BarChart />
        </>
      )}
    </div>
  );
};

export default Charts;
