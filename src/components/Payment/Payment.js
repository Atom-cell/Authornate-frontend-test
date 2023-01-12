import React from "react";
import "./Payment.css";
import logo from "../../Assets/logo.png";
import metamask from "../../Assets/metamask.png";
import payment from "../../Assets/payment.png";
import tick from "../../Assets/tick.png";
import dots from "../../Assets/footerdots.png";
import { PaymentPageContext } from "../../Helper/Context";

const Payment = () => {
  const { paymentPage, setPaymentPage } = React.useContext(PaymentPageContext);

  const privileges = [
    "Access detailed reports",
    "Check other wallet's details",
    "Access special graphs",
    "Find your whales",
  ];
  return (
    <div className="payment_wrapper">
      <div className="left_div">
        <img src={logo} alt="logo" className="logo1" />
        <div className="text">
          <h1>Track the value </h1>
          <h2 style={{ marginTop: "-1em" }}>of your assets</h2>
          <p style={{ color: "#FFFFFF75", fontSize: "0.7rem" }}>
            Track the value of your assets from any platform all in one place
          </p>
          <img src={payment} alt="payment"></img>
        </div>
        <div className="dots">
          <img src={dots} alt="Dots" />
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
        <p
          style={{
            color: "#FFFFFF75",
            fontSize: "0.7rem",
            marginLeft: "1.5em",
          }}
        >
          This will be a one-time payment that will help you to gain access for
          the all premium features
        </p>
        <p style={{ color: "#FFFFFF75", marginTop: "3em" }}>Privileges</p>
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
        <button
          className="complete_payment"
          onClick={() => setPaymentPage(false)}
        >
          <p>Complete Payment</p>
        </button>
      </div>
    </div>
  );
};

export default Payment;
