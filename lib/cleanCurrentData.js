export default function cleanCurrentData(dataSet) {
	console.log('Hi');
	const cleanedData = dataSet.map( (data) => {
		return {
			city: data[0].current_observation.display_location.full,
			condition: data[0].current_observation.weather,
			date: data[0].current_observation.local_time_rfc822,
			tempF: data[0].current_observation.temp_f,
			tempC: data[0].current_observation.temp_c,
			tempHi: data[0].forecast.simpleforecast.forecastday[0].high.fahrenheit;
			tempLo: data[0].forecast.simpleforecast.forecastday[0].low.fahrenheit;
		})
	}
	return cleanedData;
}