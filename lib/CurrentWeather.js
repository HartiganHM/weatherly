import React from 'react';
import '../styles/CurrentWeather.css';

const CurrentWeather = (props) => {
	const {city, icon, condition, day, date, tempF, tempC, tempHi, tempLo, summary } = props.data;
  return (
		<div>
			<h3 className='currentHeader'>Current Forecast</h3>
			<div className='CurrentWeather'>
				<div className='weather-box'>
					<h3 className='city'>{city}</h3>
					<img className='weather-icon' src={icon}/>
					<h4 className='subHeader'>{condition}</h4>
				</div>
				<div className='weather-box'>
				<h3>{day}</h3>
					<h3>{date}</h3>
					<h2 className='current-temp'>{tempF}°F</h2>
					<h4 className='subHeader'>{tempC}°C</h4>
				</div>
				<div className='weather-box'>
					<div className='hi-lo'><h3>Hi | Lo</h3></div>
					<div className='hi-lo'><h2 className='rangeTemp'>{tempHi}°</h2><span className='spacer'>/</span><h2 className='rangeTemp'>{tempLo}°</h2></div>
					<h4 className='subHeader'>{summary}</h4>
				</div>
			</div>
  	</div>
  )
}

export default CurrentWeather;