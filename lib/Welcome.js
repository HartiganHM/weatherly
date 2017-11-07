import React from 'react';
import '../styles/Welcome.css';
import Search from './Search.js';

const Welcome = (props) => {
  let greeting = true;
  return (
    <div className='Welcome'>
    	<p className='title'>Weatherly</p>
      <Search fetch={props.fetch}
              greeting={greeting}/>
		</div>
  )
}

export default Welcome;
