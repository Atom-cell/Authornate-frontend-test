import React from "react";
import logo from "../Assets/logo.png";
import printer from "../Assets/printer.png";
import metamask from "../Assets/metamask.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header_wrapper">
      <img src={logo} alt="Logo" className="logo" />
      <div className="header_right">
        <div className="print">
          <img src={printer} alt="Printer" style={{ height: "25%" }} />
          <p>Print Report</p>
        </div>
        <div className="wallet_connection_wrapper">
          <span className="greendot"></span>
          <p>$1,735,50</p>
          <p>Connected to</p>
          <img src={metamask} alt="Metamask" style={{ height: "60%" }} />
          <select className="wallets">
            <option value="volvo">MetaMask</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
