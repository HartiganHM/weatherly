import React, { Component } from "react";
import Trie from "@hartiganhm/linked-list";
import CitiesList from "./AutoCompleteData";
import "../styles/Search.css";

export default class Search extends Component {
  constructor() {
    super();
    this.trie = new Trie("");
    this.trie.populate(CitiesList.data);
    this.suggestions = [];
    this.autoComplete = this.autoComplete.bind(this);
    this.state = {
      value: "",
      location: [],
      index: 0
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

  handleClickChange(event) {
    let location = this.state.value.split(", ");
    this.setState({
      location: location,
      value: ""
    });
    localStorage.setItem("location", JSON.stringify(location));
    this.props.fetch(location);
    this.props.greeting = false;
  }

  autoComplete(event) {
    let location = event.target.innerText.split(", ");
    this.setState({
      location: location,
      value: ""
    });
    this.suggestions = [];
    localStorage.setItem("location", JSON.stringify(location));
    this.props.fetch(location);
    this.props.greeting = false;
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
            onChange={this.handleInputChange.bind(this)}
            onKeyDown={this.reFocus.bind(this)}
            placeholder="Search by city or zip for Weatherly Forecast"
            autoFocus
          />
          <button
            className="searchButton"
            onClick={this.handleClickChange.bind(this)}
          >
            Search
          </button>
          {!this.props.greeting && <p className="branding">Weatherly</p>}
        </div>
        <ul className="suggestBox">
          {this.suggestions.map((suggestion, index) => {
            let classes = ["citySuggestion"];

            if (index === this.state.index) {
              classes.push("highlight");
              this.state.value = this.suggestions[index].toUpperCase();
            }

            if (index < 5) {
              return (
                <li
                  className="citySuggestion"
                  onClick={this.autoComplete}
                  key={index}
                >
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
