import React from "react";
import "./Chart.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

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
    let data = [
      { country: "Excellent", sales: 743 },
      {
        country: "Good",
        sales: 167,
      },
      {
        country: "Neutral",
        sales: 372,
      },
      {
        country: "Poor",
        sales: 193,
      },
    ];
    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country",
      })
    );
    series
      .get("colors")
      .set("colors", [
        am5.color("#34A642"),
        am5.color("#4E87BC"),
        am5.color("#79B4D5"),
        am5.color("#6462E1"),
      ]);
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
              <p>{p.title}</p> <p>{p.num}</p>
            </div>
          );
        })}
      </div>
      <div id="chartdiv" style={{ width: "40%", height: "30em" }}></div>
    </div>
  );
};

export default PieChart;
