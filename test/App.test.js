import React from "react";
import { shallow, mount } from "enzyme";
import App from "../lib/App";
import cleanData from "../lib/cleanData";
import denverData from "../lib/denverData";



global.localStorage = {
  getItem(keyword) {
    if (!global.localStorage[keyword]) {
      return null;
    }
    return JSON.stringify(global.localStorage[keyword]);
  },
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  }
};

describe("App", () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it("App should exist", () => {
    expect(app).toBeDefined();
  });

  it("App should mount <Welcome />", () => {
    expect(app.find("Welcome")).toBeDefined();
    expect(app.find("Welcome").length).toEqual(1);
  });

  it("should be a function", () => {
    expect(typeof app.state).toEqual("function");
  });

  it("should render the weather page when a city is specified", () => {
    app.setState(cleanData(denverData))

    expect(app.find("Search")).toBeDefined();
    expect(app.find("Search").length).toEqual(1);

    expect(app.find("CurrentWeather")).toBeDefined();
    expect(app.find("CurrentWeather").length).toEqual(1);

    expect(app.find("TenHour")).toBeDefined();
    expect(app.find("TenHour").length).toEqual(1);

    expect(app.find("SevenDay")).toBeDefined();
    expect(app.find("SevenDay").length).toEqual(1);
  });
});
