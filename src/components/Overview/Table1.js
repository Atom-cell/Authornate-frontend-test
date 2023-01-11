import React from "react";
import "./Overview.css";
import wallet from "../../Assets/wallet.png";
import cube from "../../Assets/tableCubes.png";
import pro from "../../Assets/Pro.png";
import UnlockProButton from "./UnlockProButton";
const Table1 = () => {
  return (
    <div className="table_wrapper">
      <div className="header">
        <h3>Undercutters of the Project</h3>
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
      <h3 style={{ textAlign: "center" }}>See All ></h3>
    </div>
  );
};

export default Table1;
