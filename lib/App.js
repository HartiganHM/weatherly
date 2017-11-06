import React from 'react';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import TenHour from './TenHour';
import SevenDay from './SevenDay';
import denverData from './denverData';
import key from './key.js';
// import fetchApi from './fetchApi';
// import cleanCurrentData from './cleanCurrentData';
import '../styles/App.css';

export default class App extends React.Component {
	constructor() {
		super();

		this.state ={}
		this.fetchData = this.fetchData.bind(this);
		this.weatherIcon = this.weatherIcon.bind(this);
	}

	fetchData(location) {
		fetch('http://api.wunderground.com/api/' + key + '/forecast10day/hourly/conditions/q/' + location[1] + '/' + location[0] + '.json')
		.then( response => response.json() )
		.then( data => {
			console.log(data);
			const sevenDayData = data.forecast.simpleforecast.forecastday.map( day => {
				return {
					day: day.date.weekday,
					icon: this.weatherIcon(day.icon),
					high: day.high.fahrenheit + '°',
					low: day.low.fahrenheit + '°',
				}
			})
			const tenHourData = data.hourly_forecast.map( (obj, index) => {
				let temp = obj.temp.english;
				let icon = this.weatherIcon(obj.icon);
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
				icon: this.weatherIcon(data.hourly_forecast[0].icon),
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

	componentWillMount(location) {
		if (location === undefined) {
			location = JSON.parse(localStorage.getItem('location'));
		}

		if (location !== null) {
			this.fetchData(location);
		}

	}

	weatherIcon(weather) {
		return 'styles/icons/white/svg/' + weather + '.svg'
	}

	render() {
		console.log(this.state);
		if(this.state.currentWeatherData) {
			let { currentWeatherData, tenHourData, sevenDayData } = this.state;
			return (
				<div>
						<div className='App'>
							<Search fetch={this.fetchData}/>
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
				</div>
			);
		} else if (!JSON.parse(localStorage.getItem('location'))) {
			return <Welcome fetch={this.fetchData} />
		}
		return null;
	}
}