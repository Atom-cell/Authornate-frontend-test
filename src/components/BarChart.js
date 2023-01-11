import React from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";

const BarChart = () => {
  React.useLayoutEffect(() => {
    let root = am5.Root.new("barchartdiv");
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );
    root.setThemes([am5themes_Animated.new(root), am5themes_Dark.new(root)]);
    // Define data
    let data = [
      {
        time: "01 AM",
        value1: 4561,
      },
      {
        time: "02 AM",
        value1: 5687,
      },
      {
        time: "03 AM",
        value1: 6348,
      },
      {
        time: "04 AM",
        value1: 4878,
      },
      {
        time: "05 AM",
        value1: 9867,
      },
      {
        time: "06 AM",
        value1: 7561,
      },
      {
        time: "07 AM",
        value1: 1287,
      },
      {
        time: "08 AM",
        value1: 3298,
      },
      {
        time: "09 AM",
        value1: 5697,
      },
      {
        time: "10 AM",
        value1: 4878,
      },
      {
        time: "11 AM",
        value1: 8788,
      },
      {
        time: "10 PM",
        value1: 8999,
      },
    ];
    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );
    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "time",
      })
    );
    xAxis.data.setAll(data);
    // Create series
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "time",
      })
    );
    series.data.setAll(data);

    series.columns.template.setAll({
      cornerRadiusTL: 15,
      cornerRadiusTR: 15,
      maxWidth: 30,
      strokeOpacity: 0,
    });

    series.columns.template.adapters.add("fill", function (fill, target) {
      if (target.dataItem.get("valueY") > 9000) {
        return am5.color("#34A642");
      } else return am5.color("#4D4D4D");
      //   return fill;
    });
    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));
    return () => {
      root.dispose();
    };
  }, []);
  return (
    <div className="barchart_wrapper">
      <div className="header">
        <h4>Optimal Release Time</h4>
        <div className="days">
          <p style={{ color: "#34A642" }}>1D</p>
          <p>1W</p>
          <p>1M</p>
          <p>6M</p>
          <p>1Y</p>
        </div>
      </div>
      <div id="barchartdiv" style={{ width: "100%", height: "30em" }}></div>
    </div>
  );
};

export default BarChart;
