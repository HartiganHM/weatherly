import React, { Component } from "react";
import Trie from "@hartiganhm/linked-list";
import CitiesList from "./AutoCompleteData";
import "../styles/Search.css";

export default class Search extends Component {
  constructor() {
    super();
    this.trie = new Trie("");
    this.trie.populate(CitiesList.data);

    this.autoComplete = this.autoComplete.bind(this);
    this.enterHit = this.enterHit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickChange = this.handleClickChange.bind(this);
    this.reFocus = this.reFocus.bind(this);

    this.suggestions = [];
    this.state = {
      value: "",
      location: [],
      index: -1
    };
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value
    });

    if (event.target.value.length) {
      this.suggestions = this.trie.suggest(event.target.value);
    } else {
      this.suggestions = [];
    }
  }

  autoComplete(event) {
    this.setLocation(event.target.innerText.split(", "));
  }

  enterHit(event) {
    if (this.state.value.length && event.key === "Enter") {
      this.setLocation((location = this.state.value.split(", ")));
    }
  }

  handleClickChange(event) {
    this.setLocation((location = this.state.value.split(", ")));
  }

  setLocation(location) {
    this.setState({
      location: location,
      value: ""
    });
    this.suggestions = [];
    localStorage.setItem("location", JSON.stringify(location));
    this.props.fetch(location);
  }

  reFocus(e) {
    let indexVal = this.state.index;
    
    if (e.key === "ArrowDown") {
      this.setState({
        index: Math.min(indexVal + 1, 5)
      });
    } else if (e.key === "ArrowUp") {
      this.setState({
        index: Math.max(indexVal - 1, 0)
      });
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
              this.state.value = this.suggestions[index].toUpperCase();
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
