import React from "react";
import logo from "../Assets/logo.png";
import dots from "../Assets/footerdots.png";

const Footer = () => {
  return (
    <div
      style={{
        padding: "2em",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img
        src={logo}
        alt="machinewallet"
        style={{ width: "15%", height: "1%" }}
      />
      <img src={dots} alt="dots" style={{ width: "2.5%" }} />
    </div>
  );
};

export default Footer;
