import React from 'react';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import denverData from './denverData';
import fetchApi from './fetchApi';
// import cleanCurrentData from './cleanCurrentData';
import './App.css';

export default class App extends React.Component {
	constructor() {
		super();

		this.state ={}
	}

	componentWillMount() {
		// let currentData = cleanCurrentData(fetchApi());
		// console.log(currentData);
		let data = fetchApi();
		console.log(data);
		// cleanCurrentData(fetchApi());
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