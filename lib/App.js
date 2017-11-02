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

		this.state ={}
	}

	componentWillMount() {
		fetch('http://api.wunderground.com/api/' + key + '/forecast10day/hourly/conditions/q/CO/Denver.json')
		.then( response => response.json() )
		.then( data => {
			console.log(data);
			const tenDayData = {
				dayArray: [],
				iconArray: [],
				hiArray: [],
				loArray: []
			}
			const sevenHourData = {
				hourArray: [],
				iconArray: [],
				tempArray: [],
			}
			const currentWeatherData = {
				city: data.current_observation.display_location.full,
				condition: data.current_observation.weather,
				date: data.current_observation.local_time_rfc822,
				tempF: data.current_observation.temp_f,
				tempC: data.current_observation.temp_c,
				tempHi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
				tempLo: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
			}

			data.forecast.simpleforecast.forecastday.forEach ( (day) => {
				tenDayData.dayArray.push(day);
			})

			data.hourly_forecast.forEach ( (obj, index) => {
				if (index < 7) {
					let temp = obj.temp.english;
					let icon = obj.icon_url;
					let hour = obj.FCTTIME.hour;
					let minute = obj.FCTTIME.min;
					let meridiem = ' AM';

					if (hour === '0') {
						hour = 12;
					}

					if (hour > 12) {
						hour = hour - 12;
						meridiem = ' PM';
					}
					sevenHourData.hourArray.push(hour + ':' + minute + meridiem);
					sevenHourData.iconArray.push(icon);
					sevenHourData.tempArray.push(temp);
				}
			})

			this.setState( { currentWeatherData, sevenHourData, tenDayData } )
		})
		.catch( function(error) {
		})
	}

	render() {
		console.log(this.state);
		if(this.state.currentWeatherData) {
			return (
			  <div className='App'>
					<Welcome />
					<CurrentWeather city={this.state.currentWeatherData.city}
									condition={this.state.currentWeatherData.condition}
									date={this.state.currentWeatherData.date}
									tempF={this.state.currentWeatherData.tempF}
									tempC={this.state.currentWeatherData.tempC}
									tempHi={this.state.currentWeatherData.tempHi}
									tempLo={this.state.currentWeatherData.tempLo}
									/>
					<SevenHour />
					<TenDay />
				</div>
		  );
		}
		return null;
	}
}