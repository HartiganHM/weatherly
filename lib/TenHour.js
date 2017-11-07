import React from "react";
import Card from "./Card.js";
import "../styles/TenHour.css";

const TenHour = tenHourData => {
  let cleanData = tenHourData.data.slice(0, 10);
  
  return (
    <div>
      <div className="tenHourHeader">
        <h3>Hourly Forecast</h3>
      </div>

      <div className="TenHour">
        {cleanData.map((obj, index) => {
          return (
            <Card
              title={obj.hour}
              icon={obj.icon}
              temp={obj.temp}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TenHour;
