import React, { Component } from 'react';
import Trie from '@hartiganhm/linked-list';
import CitiesList from './AutoCompleteData';
import '../styles/Search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.trie = new Trie('');
    this.trie.populate(CitiesList.data);
    this.suggestions = [];
    this.autoComplete = this.autoComplete.bind(this);
    this.state = {
      value: '',
      location: []
    }
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value
    })
    if (event.target.value.length) {
      this.suggestions = this.trie.suggest(event.target.value);
    } else {
      this.suggestions = [];
    }
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

  autoComplete(event) {
    let location = event.target.innerText.split(', ');
    this.setState({
      location: location,
      value: ''
    })
    this.suggestions = [];
    localStorage.setItem('location', JSON.stringify(location));
    this.props.fetch(location);
  }

  render() {
		return (
      <div className='Search'>
        <div className='Inputs'>
          <input  className='searchField'
                  type='text'
                  value={this.state.value}
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="Search by city or zip for Weatherly Forecast" />
          <button className='searchButton'
                  onClick={this.handleClickChange.bind(this)}>
          Search
          </button>
        </div>
        <ul className='suggestBox'>
          {
            this.suggestions.map( (suggestion, index) => {
              if (index < 5) {
                return <li className='citySuggestion'
                          onClick={this.autoComplete}>{suggestion.toUpperCase()}</li>
              }
            })
          }
        </ul>
			</div>
		)
  }
}
