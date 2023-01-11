import React from "react";
import "./NftCryptoBtn.css";
const NftCryptoBtn = () => {
  const [btnType, setBtnType] = React.useState("nft");
  return (
    <div className="btn_group_wrapper">
      <div className="btn_group">
        <button
          id={btnType === "nft" ? "active" : null}
          className="btn"
          onClick={() => setBtnType("nft")}
        >
          NFT
        </button>
        <button
          className="btn"
          id={btnType === "crypto" ? "active" : null}
          onClick={() => setBtnType("crypto")}
        >
          Crypto
        </button>
      </div>
    </div>
  );
};

export default NftCryptoBtn;
