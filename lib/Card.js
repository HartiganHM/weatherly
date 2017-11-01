import React from 'react'
import './Card.css'

const Card = () => {
	return (
		<div className='card'>
			<div className='time'>5:00 PM</div>
			<div className='condition'>Sunny</div>
			<div className='temp'>72°F</div>
		</div>
	)
}

export default Card;