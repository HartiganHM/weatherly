import React from 'react';
import Card from './Card.js'
import './SevenDay.css'

const SevenDay = ( sevenDayData ) => {	
	let cleanData = sevenDayData.data.slice(0, 7);
  return (
  	<div className='SevenDay'>
  		{
			cleanData.map( (obj) => {
				return (
					<Card title={obj.day}
						  icon={obj.icon}
						  high={obj.high}
						  low={obj.low}
					/>
				)
			})
		}
  	</div>
  )  
}

export default SevenDay;