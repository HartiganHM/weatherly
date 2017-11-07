function cleanData(data) {
  const sevenDayData = data.forecast.simpleforecast.forecastday.map(day => {
    return {
      day: day.date.weekday,
      icon: weatherIcon(day.icon),
      high: day.high.fahrenheit + "°",
      low: day.low.fahrenheit + "°"
    };
  });
  const tenHourData = data.hourly_forecast.map(obj => {
    let temp = obj.temp.english;
    let icon = weatherIcon(obj.icon);
    let hour = obj.FCTTIME.hour;
    let minute = obj.FCTTIME.min;
    let meridiem = " AM";

    if (hour === "0") {
      hour = 12;
    }

    if (hour > 12) {
      hour = hour - 12;
      meridiem = " PM";
    }
    return {
      hour: hour + ":" + minute + meridiem,
      icon,
      temp: temp + "°"
    };
  });

  // set variable data.forecast.simpleforecast.forecastday[0]
  const currentWeatherData = {
    city: data.current_observation.display_location.full,
    icon: weatherIcon(data.hourly_forecast[0].icon),
    condition: data.current_observation.weather,
    day: data.forecast.txt_forecast.forecastday[0].title,
    date:
      data.forecast.simpleforecast.forecastday[0].date.monthname +
      " " +
      data.forecast.simpleforecast.forecastday[0].date.day +
      ", " +
      data.forecast.simpleforecast.forecastday[0].date.year,
    tempF: data.current_observation.temp_f,
    tempC: data.current_observation.temp_c,
    tempHi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    tempLo: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext
  };

  return { currentWeatherData, tenHourData, sevenDayData };
}

function weatherIcon(weather) {
  return "styles/icons/white/svg/" + weather + ".svg";
}

export default cleanData;
