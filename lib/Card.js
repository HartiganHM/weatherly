import React from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";

const Card = props => {
  return (
    <div className="card">
      <div className="time">{props.title}</div>
      <img src={props.icon} alt="weather condition" />
      <h2 className="temp">
        {props.temp ? props.temp : `${props.high} / ${props.low}`}
      </h2>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,	
  time: PropTypes.string,
  icon: PropTypes.string,
  temp: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string
};

export default Card;
