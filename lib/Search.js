import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <div className='Search'>
			{ props.searchText }
		</div>
  )
}

export default Search;