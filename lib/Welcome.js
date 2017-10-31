import React, { Component } from 'react';
import './Welcome.css';
import Search from './Search.js';

const Welcome = (props) => {
  return (
    <div className='Welcome'>
    	<Search />
			{ props.welcomeText }
		</div>
  )
}

export default Welcome;