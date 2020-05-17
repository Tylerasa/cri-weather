import React, { Component } from "react";

import CanvasJSReact from "./canvasjs.react";
//var CanvasJSReact = require('./canvasjs.react');

import NavBar from "./NavBar.js";
import humidity from "./humidity.json";
import density from "./density.json";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = [];

class DensityChart extends Component {
  render() {
    for (var i = 0; i < humidity.length; i++) {
      dataPoints.push({
        x: new Date(Date.UTC(2019, 8, 30, i % 53, 0, 0)),
        y: density[i]
      });
    }
    const options = {
      theme: "light2",
      title: {
        text: "Density Against Time"
      },
      axisY: {
        title: "Density In g/cm**3",
        includeZero: false,
        suffix: ""
      },
      data: [
        {
          type: "spline",
          lineColor: "red",
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "#0.## g/cm**3",
          dataPoints: dataPoints
        }
      ]
    };

    return (
      <div>
        <div>
          <div className="down-me"></div>
          <NavBar />
        </div>

        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
      </div>
    );
  }
}

export default DensityChart;
