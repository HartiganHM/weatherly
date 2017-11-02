import React from 'react';
import Card from './Card.js'
import './TenHour.css'

const TenHour = ( tenHourData ) => {
	let cleanData = tenHourData.data.slice(0, 10);
  return (
  	<div className='TenHour'>
  		{
				cleanData.map( (obj) => {
					return (
						<Card title={obj.hour}
									icon={obj.icon}
									temp={obj.temp}/>
					)
				})
			}
  	</div>
  )
}

export default TenHour;