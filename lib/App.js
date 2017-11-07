import React from "react";
import Welcome from "./Welcome";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import TenHour from "./TenHour";
import SevenDay from "./SevenDay";
import denverData from "./denverData";
import key from "./key.js";
import cleanData from "./cleanData";
import "../styles/App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(location) {
    fetch(
      `http://api.wunderground.com/api/${key}/forecast10day/hourly/conditions/q/${location[1]}/${location[0]}.json`
    )
      .then(response => response.json())
      .then(data => cleanData(data))
      .then(obj => this.setState(obj))
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount(location) {
    if (location === undefined) {
      console.log("fetching data");
      location = JSON.parse(localStorage.getItem("location"));
    }

    if (location !== null) {
      this.fetchData(location);
    }
  }

  render() {
    console.log(this.state);
    if (this.state.currentWeatherData) {
      let { currentWeatherData, tenHourData, sevenDayData } = this.state;
      return (
        <div>
          <div className="App">
            <Search fetch={this.fetchData} />
            <CurrentWeather data={currentWeatherData} />
            <TenHour data={tenHourData} />
            <SevenDay data={sevenDayData} />
          </div>
        </div>
      );
    } else if (!JSON.parse(localStorage.getItem("location"))) {
      return <Welcome fetch={this.fetchData} />;
    }

    return null;
  }
}
