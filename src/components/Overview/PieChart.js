import React from "react";
import "../Chart.css";
import pro from "../../Assets/Pro.png";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import UnlockProButton from "./UnlockProButton";

const PieChart = () => {
  React.useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        // radius: am5.percent(100),
        innerRadius: am5.percent(20),
      })
    );
    // Define data
    let data = [{ country: "Excellent", sales: 743 }];
    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country",
      })
    );
    series.get("colors").set("colors", [am5.color("#34A642")]);
    series.data.setAll(data);
    return () => {
      root.dispose();
    };
  }, []);
  const pies = [
    { title: "Excellent", num: 743, color: "#34A642" },
    { title: "Good", num: 167, color: "#4E87BC" },
    { title: "Neutral", num: 372, color: "#79B4D5" },
    { title: "Poor", num: 193, color: "#6462E1" },
  ];
  return (
    <div className="pie_wrapper">
      <div className="types">
        <h2>
          Analysing <span style={{ color: "white" }}>1873</span> Wallet
        </h2>
        {pies.map((p, i) => {
          return (
            <div
              className="pie_pill"
              key={i}
              style={{ backgroundColor: p.color }}
            >
              <p>{p.title}</p> <UnlockProButton class="pro" />
            </div>
          );
        })}
      </div>
      <div id="chartdiv" style={{ width: "40%", height: "30em" }}></div>
    </div>
  );
};

export default PieChart;
