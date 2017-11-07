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
  tempLo: "−459.67°F",
  summary: "Sunny"
};


describe("CurrentWeather", () => {
  let data = mockData;

  it("CurrentWeather should exist", () => {
    expect(<CurrentWeather />).toBeDefined();
  });

  it("CurrentWeather should be a function", () => {
    expect(typeof CurrentWeather).toEqual("function");
  });

  it("Should have a className CurrentWeather", () => {
    const currentWeather = shallow(<div className="CurrentWeather" />);
    expect(currentWeather.find(".CurrentWeather").length).toEqual(1);
    expect(currentWeather).toMatchSnapshot();    
  });

  it("Should have a configurable city", () => {    
    const currentWeather = shallow(<CurrentWeather data={mockData} />);
    expect(currentWeather).toMatchSnapshot();
  });

  it("Should have a configurable condition", () => {
    const currentWeather = shallow(
      <CurrentWeather data={mockData} />
    );
    expect("Sunny").toEqual(mockData.condition);
    expect(currentWeather).toMatchSnapshot();    
  });

  it("Should have a configurable day and date", () => {
    const currentWeather = shallow(
      <CurrentWeather data={mockData} />
    );
    expect("Friday").toEqual(mockData.day);
    expect("November 3, 2017").toEqual(mockData.date);
    expect(currentWeather).toMatchSnapshot();    
  });

  it("Should have a configurable tempF", () => {
    const currentWeather = shallow(<CurrentWeather data={mockData} />);
    expect(currentWeather.find(".current-temp").length).toEqual(1);
    expect("32").toEqual(mockData.tempF);
    expect(currentWeather).toMatchSnapshot();    
  });

  it("Should have a configurable tempC", () => {
    const currentWeather = shallow(<CurrentWeather data={mockData} />);
    expect("0").toEqual(mockData.tempC);
    expect(currentWeather).toMatchSnapshot();    
  });

  it("Should have a configurable temp with tempHi and tempLo", () => {
    const currentWeather = shallow(
      <CurrentWeather data={mockData} />
    );
    expect(currentWeather.find(".hi-lo").length).toEqual(2);
    expect("212°F").toEqual(mockData.tempHi);
    expect("−459.67°F").toEqual(mockData.tempLo);
    expect(currentWeather).toMatchSnapshot();    
  });

  it("Should have a configurable src img", () => {
    const currentWeather = shallow(<CurrentWeather data={mockData} />);
    expect(currentWeather.find(".weather-icon").length).toEqual(1);
    expect("http://icons.wxug.com/i/c/k/sunny.gif").toEqual(mockData.icon);
    expect(currentWeather).toMatchSnapshot();    
  });
});
