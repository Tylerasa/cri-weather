import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ReactAnimatedWeather from "react-animated-weather";
import NavBar from "./NavBar";
const api = {
  key: "fefa25c2f4fdadd34b4ba746cf32ca0f",
  base: "https://api.openweathermap.org/data/2.5/"
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      weather: {},
      iconType:'',
      dayNight: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { _query } = this.refs;
    this.setState({ query: _query.value });
    /*
    const defaultProto = {
      icon: 'CLEAR_DAY',
      color: 'goldenrod',
      size: 512,
      animate: true
    };
    */
    e.preventDefault();
    console.log(_query.value);
    fetch(`${api.base}weather?q=${_query.value}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        this.setState({ query: "", weather: result, iconType: result.weather[0].main, dayNight: result.weather[0].icon.slice(-1)});
        console.log(result.weather[0].icon.slice(-1));
        
      });
  }

  dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }
  sunrise(s) {
    const sunrise = new Date(s * 1000).toLocaleTimeString().slice(0, 4);
    return sunrise;
  }
  sunset(s) {
    const sunset = new Date(s * 1000).toLocaleTimeString().slice(0, 4);
    return sunset;
  }

  render() {
    const transStyle = {
      top: "15vh"
    };
    const defaultStyle = {
      top: "45vh"
    };
    const { weather, iconType, dayNight } = this.state;
    let main = weather
    console.log(weather.weather)
        let defaults = {
          icon:
          iconType === "Rain"
              ? "SLEET"
              : iconType === "Clouds"
              ? dayNight ==='d'?
              'PARTLY_CLOUDY_DAY'
              :'PARTLY_CLOUDY_NIGHT'



              : iconType === "Clear"
              
              ? dayNight ==='d'?
              'CLEAR_DAY'
              :'CLEAR_NIGHT'


              : iconType === "Drizzle"
              ? "RAIN"
              : "FOG",
          color: "white",
          size: 200,
          animate: true
        };
    return (
      <div
        className='app'
      >
      <NavBar/>

        <main>
          <div
            style={
              typeof weather.main !== "undefined" ? transStyle : defaultStyle
            }
            className="search-box"
          >
            <form onSubmit={this.onSubmit}>
              <span className='icon-fa'>
            <FontAwesomeIcon icon={faSearch} />

              </span>
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                ref="_query"
              />
            </form>
          </div>
          {typeof weather.main !== "undefined" ? (
            <div className="results">
              <div className="row">
                <div className="col-lg-6">
                  <div className="location-box ">
                    <div className="location">
                      <span className='name-weather'>{weather.name},</span> {weather.sys.country}
                    </div>
                    <div className="date">{this.dateBuilder(new Date())}</div>
                   
                  </div>
                </div>
                <div className="col-lg-6 weather-box">
                  <div className='row'>
                      <div className='col-sm-6'>
                      <div className="temp">{Math.round(weather.main.temp)}°C</div>

                      </div>
                      <div className='col-sm-6 temp'>
                      <ReactAnimatedWeather
                      icon={defaults.icon}
                      color={defaults.color}
                      size={defaults.size}
                      animate={defaults.animate}
                    />
                      </div>
                    </div>
                  <div className="weather">{weather.weather[0].main}</div>
                  <div className="row forecast  ">
                    <div className="col fore-item">
                      <div className="row">
                        <div className="col">
                          {Math.floor(weather.main.temp_max)}°
                        </div>
                        <div className="w-100"></div>
                        <div className="col">High</div>
                      </div>
                    </div>
                    <div className="col fore-item">
                      <div className="row">
                        <div className="col">
                          {Math.floor(weather.main.humidity)}%
                        </div>
                        <div className="w-100"></div>
                        <div className="col">Rain</div>
                      </div>
                    </div>
                    <div className="col fore-item">
                      <div className="row">
                        <div className="col">
                          {this.sunrise(weather.sys.sunrise)}
                        </div>
                        <div className="w-100"></div>
                        <div className="col">Sunrise</div>
                      </div>
                    </div>
                    <div className="w-100"></div>

                    <div className="col fore-item">
                      <div className="row">
                        <div className="col">
                          {Math.floor(weather.main.temp_min)}°
                        </div>
                        <div className="w-100"></div>
                        <div className="col">Low</div>
                      </div>
                    </div>

                    <div className="col fore-item">
                      <div className="row">
                        <div className="col">{weather.wind.speed}m/h</div>
                        <div className="w-100"></div>
                        <div className="col">Wind</div>
                      </div>
                    </div>

                    <div className="col fore-item">
                      <div className="row">
                        <div className="col">
                          {this.sunset(weather.sys.sunset)}
                        </div>
                        <div className="w-100"></div>
                        <div className="col">Sunset</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </main>
      </div>
    );
  }
}
export default Search;
