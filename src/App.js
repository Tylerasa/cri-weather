import React, { Component } from 'react';
import './App.css'
import Search from './Components/Search';
import MapContainer from './Components/MapContainer';
import Home from './Components/Home';
import TimeChart from './Components/TimeChart'
import HumidityChart from './Components/HumidityChart'
import DensityChat from './Components/DensityChart'



import {
  HashRouter,
  Route
  } from 'react-router-dom'


class App extends Component {
 

  render() {
   
    return (
      <HashRouter>
        <div>
          <Route exact path='/' component={Home}/>
          <Route  path='/search' component={Search}/>
          <Route  path='/map' component={MapContainer}/>
          <Route  path='/tempchart' component={TimeChart}/>
          <Route path='/humiditychart' component={HumidityChart}/>
          <Route path='/densitychart' component={DensityChat}/>
        </div>
      </HashRouter>
    );
  }
}


export default App;
