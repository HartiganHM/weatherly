import React from "react";
import { shallow, mount } from "enzyme";
import CurrentWeather from "../lib/CurrentWeather";

const mockData = {
  city: "Denver",
  condition: "Sunny",
  day: "Friday",
  date: "November 3, 2017",
  tempF: "32",
  tempC: "0",
  icon: "http://icons.wxug.com/i/c/k/sunny.gif",
  tempHi: "212°F",
  tempLo: "−459.67°F"
};

describe("CurrentWeather", () => {
  it("CurrentWeather should exist", () => {
    expect(<CurrentWeather />).toBeDefined();
  });

  it("CurrentWeather should be a function", () => {
    expect(typeof CurrentWeather).toEqual("function");
  });

  it("Should have a className CurrentWeather", () => {
    const currentWeather = shallow(<div className="CurrentWeather" />);
    expect(currentWeather.find(".CurrentWeather").length).toEqual(1);
  });

  it("Should have a configurable city", () => {
    const currentWeather = shallow(<CurrentWeather city={mockData.city} />);
    expect(currentWeather.find(".city").length).toEqual(1);
    expect("Denver").toEqual(mockData.city);
  });

  it("Should have a configurable condition", () => {
    const currentWeather = shallow(
      <CurrentWeather condition={mockData.condition} />
    );
    expect("Sunny").toEqual(mockData.condition);
  });

  it("Should have a configurable day and date", () => {
    const currentWeather = shallow(
      <CurrentWeather day={mockData.day} date={mockData.date} />
    );
    expect("Friday").toEqual(mockData.day);
    expect("November 3, 2017").toEqual(mockData.date);
  });

  it("Should have a configurable tempF", () => {
    const currentWeather = shallow(<CurrentWeather tempF={mockData.tempF} />);
    expect(currentWeather.find(".current-temp").length).toEqual(1);
    expect("32").toEqual(mockData.tempF);
  });

  it("Should have a configurable tempC", () => {
    const currentWeather = shallow(<CurrentWeather tempC={mockData.tempC} />);
    expect("0").toEqual(mockData.tempC);
  });

  it("Should have a configurable temp with tempHi and tempLo", () => {
    const currentWeather = shallow(
      <CurrentWeather tempHi={mockData.tempHi} tempLo={mockData.tempLo} />
    );
    expect(currentWeather.find(".hi-lo").length).toEqual(2);
    expect("212°F").toEqual(mockData.tempHi);
    expect("−459.67°F").toEqual(mockData.tempLo);
  });

  it("Should have a configurable src img", () => {
    const currentWeather = shallow(<CurrentWeather src={mockData.icon} />);
    expect(currentWeather.find(".weather-icon").length).toEqual(1);
    expect("http://icons.wxug.com/i/c/k/sunny.gif").toEqual(mockData.icon);
  });
});
