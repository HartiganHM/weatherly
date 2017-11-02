import React from 'react'
import './Card.css'

const Card = () => {
	return (
		<div className='card'>
			<div className='time'>5:00 PM</div>
			<div className='condition'>Sunny</div>
			<div className='temp'>72°F</div>
			<div className='day'>Friday</div>
			<div className='highLow'>
				<h2>55°</h2>
				<span className='spacer'>|</span>
				<h2>32°</h2>
			</div>
		</div>
	)
}

export default Card;