import key from './key.js';

export default function fetchApi() {
	return fetch('http://api.wunderground.com/api/' + key + '/forecast10day/hourly/conditions/q/CO/Denver.json')
		.then( (response) => response.json() )
		// .then( (data) => [data])
		// .then( (parsedData) => {
		// 	console.log(parsedData);
		// })
		.catch( function(error) {

	})
}