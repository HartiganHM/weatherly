import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = () => {
  return (
  	<div className='CurrentWeather'>
  		<div className='weather-box'>
  			<h3>Denver, CO</h3>
  			<img className='weather-icon' src='https://maxcdn.icons8.com/Share/icon/p1em/Weather//sun1600.png'/>
  			<h4>Sunny</h4>
  		</div>
  		<div className='weather-box'>
  			<h3>Tuesday</h3>
  			<h2 className='current-temp'>43°F</h2>
  			<h4>6°C</h4>
  		</div>
  		<div className='weather-box'>
  			<div className='hi-lo'><h3>Hi</h3><span className='spacer'>|</span><h3>Lo</h3></div>
  			<div className='hi-lo'><h2>55°</h2><span className='spacer'>|</span><h2>32°</h2></div>
  			<h4 className='condition'>Sunny with cooler temperatures throughout</h4>
  		</div>
  	</div>
  )
}

export default CurrentWeather;