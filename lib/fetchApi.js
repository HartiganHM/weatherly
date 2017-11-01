import key from './key.js';

export default function fetchApi () {
	let fetchedData = fetch('http://api.wunderground.com/api/' + key + '/forecast10day/hourly/conditions/q/CO/Denver.json')
		.then( (response) => response.json() )
		.then( (parsedData) => {
			console.log(parsedData)
		})
		.catch( function(error) {

		})

}

function cleanCurrentData(data) {
	city: data.current_observation.display_location.full,
	condition: data.current_observation.weather,
	date: data.current_observation.local_time_rfc822,
	tempF: data.current_observation.temp_f,
	tempC: data.current_observation.temp_c,
	tempHi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
	tempLo: data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
}

//cleandata(fetchApi());