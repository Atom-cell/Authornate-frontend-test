import React from "react";
import "./Overview.css";
import wallet from "../../Assets/wallet.png";
import cube from "../../Assets/tableCubes.png";
import UnlockProButton from "./UnlockProButton";
import unlock from "../../Assets/unlock.png";
const TableBlur = () => {
  return (
    <>
      <div className="tableblur_wrapper">
        <div className="header">
          <h3 style={{ color: "#131313" }}>Individual Wallet Reports</h3>

          <div className=""></div>
        </div>
        <table className="wallet">
          <thead>
            <tr>
              <th>Wallet</th>
              <th>Asset Value</th>
              <th>Score</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td>
                {" "}
                <img src={wallet} alt="pro"></img>00xHaPLL71....16TYXPQZA
              </td>
              <td>
                <UnlockProButton class="tablePro" />
              </td>
              <td>
                <UnlockProButton class="tablePro" />
              </td>
              <td className="cube">
                <img src={cube} alt="pro" />
              </td>
            </tr>

            <tr className="row">
              <td>
                <img src={wallet} alt="pro"></img>YZXPQZa1....1PLL7Qs2aCA
              </td>
              <td>
                <UnlockProButton class="tablePro" />
              </td>
              <td>
                <UnlockProButton class="tablePro" />
              </td>
              <td className="cube">
                <img src={cube} alt="pro" />
              </td>
            </tr>
            <tr className="row">
              <td>
                <img src={wallet} alt="pro"></img>00xHaPLL71....16TYXPQZA
              </td>
              <td>
                <UnlockProButton class="tablePro" />
              </td>
              <td>
                <UnlockProButton class="tablePro" />
              </td>
              <td className="cube">
                <img src={cube} alt="pro" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tableblur_text">
        <h3>Individual Wallet Reports</h3>
        <img src={unlock} alt="unlock" className="unlockimg" />
        <p>Upgrade to access the exclusive reports</p>
        <UnlockProButton class="tablePro blur" />
      </div>
    </>
  );
};

export default TableBlur;
