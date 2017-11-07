import React from 'react';
import Card from './Card.js'
import '../styles/SevenDay.css'

const SevenDay = ( sevenDayData ) => {
	let cleanData = sevenDayData.data.slice(0, 7);
  return (
	<div>
		<div className='sectionHeader'>
			<h3>Weekly Forecast</h3>
		</div>

		<div className='SevenDay'>
			{
				cleanData.map( (obj, index) => {
					return (
						<Card title={obj.day}
							icon={obj.icon}
							high={obj.high}
							low={obj.low}
							key={index}
						/>
					)
				})
			}
		</div>
  	</div>
  )
}

export default SevenDay;