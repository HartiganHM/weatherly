import React from 'react'
import './Card.css'

const Card = (props) => {
	console.log(props.tenHour)
	return (
		<div className='card'>
			<div className='time'>{props.title}</div>
			<div className='condition'>Sunny</div>
			<h2 className='temp'>{props.temp ? props.temp : `${props.high}|${props.low}`}</h2>
		</div>
	)
}

export default Card;