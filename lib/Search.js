import './Search.css';
import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      locationArr: ['Denver']
	    /*I like the idea here! Like we talked about though, I don't know if we need to save all searched locations;
	    /*we'll likely just need to have the most recent location persist*/
    }
  }

  render() {
		return (
		  <div className="Search">
		  	<input value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })} 
          type="search" placeholder="Search by city or zip for Weatherly Forecast" 
        />
				<button onClick={() => {
					const updatedLocationArr = this.state.locationArr;
          updatedLocationArr.push(this.state.value);
						 /*Looks like we're pushing new values to the locationArr here, see above comment*/
          this.setState({ location: updatedLocationArr, value: '' });
				}}>
				Search
				</button>
			</div>
		)
  }
}
