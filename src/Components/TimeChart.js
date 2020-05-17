import React, { Component } from "react";

import CanvasJSReact from "./canvasjs.react";
//var CanvasJSReact = require('./canvasjs.react');

import NavBar from "./NavBar.js";
import time from "./timeTemp.json";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = [];
class TimeChart extends Component {
  render() {
    for (var i = 0; i < time.length; i++) {
      dataPoints.push({
        x: new Date(Date.UTC(2019, 8, 30, i %   53, 0, 0)),
        y: time[i]
      });
    }

    const options = {
      theme: "light2",
      title: {
        text: "Temperature Against Time"
      },
      axisY: {
        title: "Temperature In Celcius",
        includeZero: false,
        suffix: " °C"
      },
      data: [
        {
          type: "spline",
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "#0.## °C",
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

export default TimeChart;
