import React from "react";
import "./ProModal.css";
import wallet from "../../Assets/wallet.png";
import pro from "../../Assets/Pro.png";
import tick from "../../Assets/tick.png";
import cross from "../../Assets/cancel.png";
import { PaymentPageContext } from "../../Helper/Context";

const ProModal = ({ closeModal }) => {
  const { paymentPage, setPaymentPage } = React.useContext(PaymentPageContext);
  const privileges = [
    "Access detailed reports",
    "Check other wallet's details",
    "Access special graphs",
    "Find your whales",
  ];
  return (
    <div className="modal_wrapper">
      <div className="modal">
        <div className="modal-header" onClick={() => closeModal("t")}>
          <img src={cross} alt="cancelbutton" style={{ width: "50%" }} />
        </div>
        <div className="modal-body">
          <img src={wallet} alt="logo" style={{ width: "5%" }} />
          <p
            style={{
              color: "#999999",
              fontSize: "0.8rem",
              marginBottom: "0.5em",
            }}
          >
            THIS IS A PRO FEATURE
          </p>
          <h2>Upgrade to access the exclusive reports</h2>
          <p style={{ color: "#999999", marginTop: "-1em" }}>
            Change the way you gather your reports and see the Pro features
          </p>

          <button className="modalProbtn" onClick={() => setPaymentPage(true)}>
            <img src={pro} alt="pro" style={{ width: "10%" }} />
            <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Unlock for $10
            </p>
          </button>
          <p className="onetimemodal">One-time payment</p>
          <div style={{ display: "flex", width: "100%" }}>
            <div className="privmodal">
              <img src={tick} alt="Tick" />
              <p>Access detailed reports</p>
            </div>
            <div className="privmodal">
              <img src={tick} alt="Tick" />
              <p>Check other wallet's details</p>
            </div>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div className="privmodal">
              <img src={tick} alt="Tick" />
              <p>Access special graphs</p>
            </div>
            <div className="privmodal">
              <img src={tick} alt="Tick" />
              <p>Find your whales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProModal;
