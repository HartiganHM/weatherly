import React from "react";
import "../styles/Welcome.css";
import Search from "./Search.js";
import PropTypes from "prop-types";


const Welcome = props => {
  let greeting = true;
  return (
    <div className="Welcome">
      <p className="title">Weatherly</p>
      <Search fetch={props.fetch} greeting={greeting} />
    </div>
  );
};

Welcome.propTypes = {
  fetch: PropTypes.func
};

export default Welcome;
