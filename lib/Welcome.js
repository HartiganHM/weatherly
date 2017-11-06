import React from 'react';
import '../styles/Welcome.css';
import Search from './Search.js';

const Welcome = (props) => {
  return (
    <div className='Welcome'>
    	<h1>Welcome to Weatherly!</h1>
    	<Search fetch={props.fetch} />
		</div>
  )
}

export default Welcome;
