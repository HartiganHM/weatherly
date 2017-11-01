import key from './key.js';

export default function fetchApi() {
	let fetchedData = fetch('http://api.wunderground.com/api/' + key + '/forecast10day/hourly/conditions/q/CO/Denver.json')
		.then( (response) => response.json() )
		.then( (parsedData) => [parsedData] )
		.then( (parsedData) => {
			console.log(parsedData);
		})
		.catch( function(error) {

		})

}