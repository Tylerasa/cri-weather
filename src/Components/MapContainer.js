import React, { Component } from "react";
import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow
} from "google-maps-react";
import NavBar from "./NavBar";


const api = {
  key: "fefa25c2f4fdadd34b4ba746cf32ca0f",
  base: "https://api.openweathermap.org/data/2.5/"
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        weather: {},
        loc:[
          {lat: 5.55602, lng: -0.1969, name: 'accra', icon: ''},/*accra*/
          {lat: 4.88447, lng: -1.75536, name:'takoradi', icon: ''},/*takoradi*/
          {lat: 9.40079 , lng: -0.8393, name: 'tamale', icon: ''},/*tamale*/
          { lat: 6.68848, lng: -1.62443, name: 'kumasi', icon: '' }, /*kumasi*/ 
          { lat: 5.6698, lng: -0.01657, name: 'tema', icon: '' },
          { lat: 6.20602, lng: -1.66191, name: 'obuasi' , icon: ''}, 
          { lat: 7.58617, lng: -1.94137, name: 'techiman', icon: '' }, 
          { lat: 10.06069, lng: -2.50192, name: 'wa,gh', icon: '' }, 
          { lat: 6.60084, lng: 0.4713, name: 'ho,gh', icon: '' },
          { lat: 7.33991, lng: -2.32676, name: 'sunyani', icon: '' }, 
          { lat: 10.78556, lng: -0.85139, name: 'bolgatanga', icon: '' },
          { lat: 5.10535, lng: -1.2466, name: 'cape coast', icon: '' }, 
          { lat: 6.09408, lng: -0.25913, name: 'koforidua', icon: '' },  
        ],
        ini: '',
        country:'',
        temp:'',
        rain:'',
        name:'',
        wind:'',

  
    };
  }
 
componentDidMount(){
  let ic;
  this.state.loc.map((data, i)=>{
    fetch(`${api.base}weather?q=${data.name}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        ic=result.weather[0].icon
        this.setState({weather: result, ini: result.sys.country, temp: result.main.temp, rain: result.main.humidity, name: result.name , wind: result.wind.speed, loc: [...this.state.loc,{ icon: ic }]});
        data.icon = result.weather[0].icon
        console.log(data.icon)
        console.log(this.state.weather);
      });
  })
}
 

  onMarkerClick = (props, marker, e) =>{
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
  fetch(`${api.base}weather?q=${marker.title}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        this.setState({weather: result, ini: result.sys.country, temp: result.main.temp, rain: result.main.humidity, name: result.name , wind: result.wind.speed, icon: result.weather[0].ico });
        console.log(this.state.weather);
          
      });
    
}
onMapClicked = (props) => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
};


  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    const weather = this.state.weather
    return (
      <div>
        <NavBar/>
        <Map
          google={this.props.google}
          zoom={7}
          style={mapStyles}
          initialCenter={{ lat: 7.9527706, lng: -1.0307118 }}
        >
         
          {
            this.state.loc.map((cord, index)=>{
              return(
                <Marker
              title={cord.name}
              position={ {lat: cord.lat, lng: cord.lng} }
              onClick={this.onMarkerClick}
              icon={`https://openweathermap.org/img/w/${cord.icon}.png`}
            />
              )
            }
            )
          }

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onCLick={this.click}
          >
            <div>
              {(typeof weather.sys ===! 'undefined'? 'hello' : <ol className='marker-info'> `
              
              
              <li>{this.state.name},{this.state.ini} </li>     
              <li>Temperature: {Math.floor(this.state.temp)}°</li>
              <li>Wind: {this.state.wind}m/h</li>
              <li>Rain: {this.state.rain}%</li>

              
              `</ol>)}
            </div>
          </InfoWindow>
          
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAMpOOooTbYHzK151RPHzH3PsgMTAFgEYs"
})(MapContainer);
