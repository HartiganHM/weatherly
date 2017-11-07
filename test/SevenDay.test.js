import React from "react";
import { shallow, mount } from "enzyme";
import SevenDay from "../lib/SevenDay";
import Card from "../lib/Card";

const mockSevenDayData = [
  {
    day: "Thursday",
    icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    high: "53°",
    low: "37°"
  },
  {
    day: "Friday",
    icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    high: "67°",
    low: "49°"
  },
  {
    day: "Saturday",
    icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    high: "73°",
    low: "43°"
  },
  {
    day: "Sunday",
    icon: "http://icons.wxug.com/i/c/k/clear.gif",
    high: "59°",
    low: "36°"
  },
  {
    day: "Monday",
    icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    high: "58°",
    low: "33°"
  },
  {
    day: "Tuesday",
    icon: "http://icons.wxug.com/i/c/k/snow.gif",
    high: "43°",
    low: "32°"
  },
  {
    day: "Wednesday",
    icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    high: "55°",
    low: "36°"
  },
  {
    day: "Thursday",
    icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    high: "57°",
    low: "35°"
  },
  {
    day: "Friday",
    icon: "http://icons.wxug.com/i/c/k/clear.gif",
    high: "53°",
    low: "36°"
  },
  {
    day: "Saturday",
    icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    high: "56°",
    low: "34°"
  }
];

describe("SevenDay", () => {
  it("Should have a className SevenDay", () => {
    const sevenDay = shallow(<SevenDay data={mockSevenDayData} />);
    expect(sevenDay.find(".SevenDay").length).toEqual(1);
    expect(SevenDay).toMatchSnapshot();
  });

  it("sevenDayData should create 7 cards", () => {
    const sevenDay = shallow(<SevenDay data={mockSevenDayData} />);    
    expect(sevenDay.find("Card").length).toEqual(7);
    expect(SevenDay).toMatchSnapshot();
  });
});
