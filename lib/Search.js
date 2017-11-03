import './Search.css';
import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      locationArr: ['Denver']
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
          this.setState({ location: updatedLocationArr, value: '' });
				}}>
				Search
				</button>
			</div>
		)
  }
}
