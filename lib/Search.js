import './Search.css';
import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      location: []
    }
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleClickChange(event) {
    let location = this.state.value.split(', ');
    this.setState({
      location: location,
      value: ''
    })
    localStorage.setItem('location', JSON.stringify(location));
    this.props.fetch(location);
  }

  render() {
		return (
		  <div className="Search">
        <input type='text'
               value={this.state.value}
               onChange={this.handleInputChange.bind(this)}
               placeholder="Search by city or zip for Weatherly Forecast" />
				<button onClick={this.handleClickChange.bind(this)}>
				Search
				</button>
			</div>
		)
  }
}
