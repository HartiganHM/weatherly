import React from 'react';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import denverData from './denverData';
// import fetchApi from './fetchApi';
import key from './key.js';
// import cleanCurrentData from './cleanCurrentData';
import './App.css';

export default class App extends React.Component {
	constructor() {
		super();

		this.state ={
			house: 'red'
		}
	}

	componentWillMount() {
		fetch('http://api.wunderground.com/api/' + key + '/forecast10day/hourly/conditions/q/CO/Denver.json')
		.then( response => response.json() )
		.then( data => {
			const currentWeatherData = {
				city: data.current_observation.display_location.full,
				condition: data.current_observation.weather,
				date: data.current_observation.local_time_rfc822,
				tempF: data.current_observation.temp_f,
				tempC: data.current_observation.temp_c,
				tempHi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
				tempLo: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
			}

			this.setState( {currentWeatherData} )
			console.log(this.state);
		})
		.catch( function(error) {
		})
	}

	render() {
	  return (
	  	<div className='App'>
				<Welcome />
				<CurrentWeather />
				<SevenHour />
				<TenDay />
			</div>
	  );
	}
}