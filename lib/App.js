import React from 'react';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import './App.css';

const App = () => {
  return (
  	<div className='App'>
			<Welcome />
			<Search />
			<CurrentWeather />
			<SevenHour />
			<TenDay />
		</div>
  );
}

export default App;