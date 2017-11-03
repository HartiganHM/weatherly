import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
  return (
  	<div className='CurrentWeather'>
  		<div className='weather-box'>
  			<h3 className='city'>{props.city}</h3>
  			<img className='weather-icon' src={props.icon}/>
  			<h4>{props.condition}</h4>
  		</div>
		  <div className='weather-box'>
			<h3>{props.day}</h3>
  			<h3>{props.date}</h3>
  			<h2 className='current-temp'>{props.tempF}°F</h2>
  			<h4>{props.tempC}°C</h4>
  		</div>
  		<div className='weather-box'>
  			<div className='hi-lo'><h3>Hi</h3><span className='spacer'>|</span><h3>Lo</h3></div>
  			<div className='hi-lo'><h2>{props.tempHi}°</h2><span className='spacer'>|</span><h2>{props.tempLo}°</h2></div>
  			<h4 className='condition'>{props.summary}</h4>
  		</div>
  	</div>
  )
}

export default CurrentWeather;