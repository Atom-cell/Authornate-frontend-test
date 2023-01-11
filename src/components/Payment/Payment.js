import React from "react";
import "./Payment.css";
import logo from "../../Assets/logo.png";
import metamask from "../../Assets/metamask.png";
import payment from "../../Assets/payment.png";
import tick from "../../Assets/tick.png";
const Payment = () => {
  const privileges = [
    "Access detailed reports",
    "Check other wallet's details",
    "Check other wallet’s details",
    "Find your whales",
  ];
  return (
    <div className="payment_wrapper">
      <div className="left_div">
        <img src={logo} alt="logo" className="logo1" />
        <div className="text">
          <h1>Track the value </h1>
          <h2>of your assets</h2>
          <p style={{ color: "#FFFFFF75" }}>
            Track the value of your assets from any platform all in one place
          </p>
          <img src={payment} alt="payment"></img>
        </div>
      </div>
      <div className="right_div">
        <div className="wallet_connection_wrapper">
          <span className="greendot"></span>
          <p>$1,735,50</p>
          <p>Connected to</p>
          <img src={metamask} alt="Metamask" style={{ height: "60%" }} />
          <select className="wallets">
            <option value="volvo">MetaMask</option>
          </select>
        </div>
        <p>Payment Details</p>
        <p style={{ color: "#FFFFFF75" }}>
          This will be a one-time payment that will help you to gain access for
          the all premium features
        </p>
        <p style={{ color: "#FFFFFF75" }}>Privileges</p>
        {privileges.map((p, i) => {
          return (
            <div className="priv" key={i}>
              <img src={tick} alt="Tick" />
              <p>{p}</p>
            </div>
          );
        })}
        <p className="onetime">One-time payment</p>
        <div className="priv1">
          <p>Premium Membership</p>
          <h2>$10</h2>
        </div>
        <button className="complete_payment">
          <p>Complete Payment</p>
        </button>
      </div>
    </div>
  );
};

export default Payment;
