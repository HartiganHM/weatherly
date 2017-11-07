import React, { Component } from "react";
import Trie from "@hartiganhm/linked-list";
import CitiesList from "./AutoCompleteData";
import "../styles/Search.css";
import PropTypes from "prop-types";

export default class Search extends Component {
  constructor() {
    super();
    this.trie = new Trie("");
    this.trie.populate(CitiesList.data);

    this.suggestions = [];
    this.state = {
      value: "",
      location: [],
      index: -1
    };

    this.autoComplete = this.autoComplete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickChange = this.handleClickChange.bind(this);
    this.reFocus = this.reFocus.bind(this);
  }

  handleInputChange(event) {
    let value = event.target.value;

    this.setState({
      value
    });

    if (value.length) {
      this.suggestions = this.trie.suggest(value);
    } else {
      this.suggestions = [];
    }
  }

  autoComplete(event) {
    this.setLocation(event.target.innerText);
  }

  handleClickChange() {
    this.setLocation(this.state.value);
  }

  setLocation(location) {
    this.setState({
      location,
      value: "",
      index: -1
    });
    this.suggestions = [];
    localStorage.setItem("location", location);
    this.props.fetch(location);
  }

  reFocus(e) {
    let indexVal = this.state.index;
    else if (e.key === "Enter") {
      this.setLocation(this.state.value);
      return
    } 

    let indexVal = this.state.index;
    let newIndex;

    if (e.key === "ArrowDown" && indexVal < 4) {
      newIndex = indexVal + 1
      this.setState({
        index: newIndex,
        value: this.suggestions[newIndex].toUpperCase()
      })
    } else if (e.key === "ArrowUp" && indexVal >= 0) {
      newIndex = indexVal - 1
      this.setState({
        index: newIndex,
        value: this.suggestions[newIndex].toUpperCase()
      })
    }
  }

  render() {
    return (
      <div className="Search">
        <div className="Inputs">
          <input
            className="searchField"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
            onKeyDown={this.reFocus}
            placeholder="Search by city or zip for Weatherly Forecast"
            autoFocus
          />
          <button className="searchButton" onClick={this.handleClickChange}>
            Search
          </button>
          {!this.props.greeting && <p className="branding">Weatherly</p>}
        </div>
        <ul className="suggestBox">
          {this.suggestions.map((suggestion, index) => {
            let classes = "citySuggestion";

            if (index === this.state.index) {
              classes = `${classes} highlight`;
            }

            if (index < 5) {
              return (
                <li className={classes} onClick={this.autoComplete} key={index}>
                  {suggestion.toUpperCase()}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

Search.propTypes = {
  fetch: PropTypes.func,
  greeting: PropTypes.bool
};
