import React from "react";
import pro from "../../Assets/Pro.png";
import "../Chart.css";
const UnlockProButton = (props) => {
  return (
    <button className={props.class} onClick={() => props.showModalFunc("t")}>
      <img src={pro} alt="pro" />
      Unlock Pro
    </button>
  );
};

export default UnlockProButton;
