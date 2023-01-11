import React from "react";
import pro from "../../Assets/Pro.png";
import "../Chart.css";
const UnlockProButton = (props) => {
  return (
    <button className={props.class}>
      <img src={pro} alt="pro" />
      Unlock Pro
    </button>
  );
};

export default UnlockProButton;
