import React from 'react';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import TenHour from './TenHour';
import SevenDay from './SevenDay';
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
			const sevenDayData = data.forecast.simpleforecast.forecastday.map( day => {
				return {
					day: day.date.weekday,
					icon: day.icon_url,
					high: day.high.fahrenheit,
					low: day.low.fahrenheit,
				}
			})
			const tenHourData = {
				hourArray: [],
				iconArray: [],
				tempArray: [],
			}
			const currentWeatherData = {
				city: data.current_observation.display_location.full,
				condition: data.current_observation.weather,
				day: data.forecast.txt_forecast.forecastday[0].title,
				date: data.forecast.simpleforecast.forecastday[0].date.monthname + ' ' + data.forecast.simpleforecast.forecastday[0].date.day + ', ' + data.forecast.simpleforecast.forecastday[0].date.year,
				tempF: data.current_observation.temp_f,
				tempC: data.current_observation.temp_c,
				tempHi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
				tempLo: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
				summary: data.forecast.txt_forecast.forecastday[0].fcttext,
			}

			data.hourly_forecast.forEach ( (obj, index) => {
				if (index < 10) {
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
					tenHourData.hourArray.push(hour + ':' + minute + meridiem);
					tenHourData.iconArray.push(icon);
					tenHourData.tempArray.push(temp);
				}
			})

			this.setState( { currentWeatherData, tenHourData, sevenDayData } )
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
									day={this.state.currentWeatherData.day}
									date={this.state.currentWeatherData.date}
									tempF={this.state.currentWeatherData.tempF}
									tempC={this.state.currentWeatherData.tempC}
									tempHi={this.state.currentWeatherData.tempHi}
									tempLo={this.state.currentWeatherData.tempLo}
									summary={this.state.currentWeatherData.summary}
									/>
					<TenHour />
					<SevenDay />
				</div>
		  );
		}
		return null;
	}
}