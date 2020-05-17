import React, { Component } from "react";

import CanvasJSReact from "./canvasjs.react";
//var CanvasJSReact = require('./canvasjs.react');

import NavBar from "./NavBar.js";
import humidity from "./humidity.json";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = [];

class HumidityChart extends Component {
  render() {
    for (var i = 0; i < humidity.length; i++) {
      dataPoints.push({
        x: new Date(Date.UTC(2019, 8, 30, i % 53, 0, 0)),
        y: humidity[i]
      });
    }
    const options = {
      theme: "light2",
      title: {
        text: "Humidity Against Time"
      },
      axisY: {
        title: "Humidity In g/m**3",
        includeZero: false,
        suffix: " g/m*3"
      },
      data: [
        {
          type: "spline",
          lineColor: "black",
          markerColor: "red",
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "#0.## g/m**3",
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

export default HumidityChart;
