import React from 'react';
import '../styles/Welcome.css';
import Search from './Search.js';

const Welcome = (props) => {
  return (
    <div className='Welcome'>
    	<p className='title'>Weatherly</p>
    	<Search fetch={props.fetch} />
		</div>
  )
}

export default Welcome;
