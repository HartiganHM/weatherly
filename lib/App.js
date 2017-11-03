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
					high: day.high.fahrenheit + '°',
					low: day.low.fahrenheit + '°',
				}
			})
			const tenHourData = data.hourly_forecast.map( (obj, index) => {
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
				return {
					hour: hour + ':' + minute + meridiem,
					icon: icon,
					temp: temp + '°',
				}
			})
			const currentWeatherData = {
				city: data.current_observation.display_location.full,
				icon: data.hourly_forecast[0].icon_url,
				condition: data.current_observation.weather,
				day: data.forecast.txt_forecast.forecastday[0].title,
				date: data.forecast.simpleforecast.forecastday[0].date.monthname + ' ' + data.forecast.simpleforecast.forecastday[0].date.day + ', ' + data.forecast.simpleforecast.forecastday[0].date.year,
				tempF: data.current_observation.temp_f,
				tempC: data.current_observation.temp_c,
				tempHi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
				tempLo: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
				summary: data.forecast.txt_forecast.forecastday[0].fcttext,
			}

			this.setState( { currentWeatherData, tenHourData, sevenDayData } )
		})
		.catch( (error) => {console.log(error)})
	}

	render() {
		console.log(this.state);
		if(this.state.currentWeatherData) {
			let { currentWeatherData, tenHourData, sevenDayData } = this.state;
			return (
			  <div className='App'>
					<Search />
					<CurrentWeather city={currentWeatherData.city}
									icon={currentWeatherData.icon}
									condition={currentWeatherData.condition}
									day={currentWeatherData.day}
									date={currentWeatherData.date}
									tempF={currentWeatherData.tempF}
									tempC={currentWeatherData.tempC}
									tempHi={currentWeatherData.tempHi}
									tempLo={currentWeatherData.tempLo}
									summary={currentWeatherData.summary}
									/>
					<TenHour data={ tenHourData }/>
					<SevenDay data={ sevenDayData }/>
				</div>
		  );
		}
		return null;
	}
}