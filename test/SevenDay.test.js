import React from "react";
import { shallow, mount } from "enzyme";
import SevenDay from "../lib/SevenDay";
import Card from "../lib/Card";

const mockSevenDayData = {
  data: [
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
  ]
};

let wrapper = <Card />;

describe("SevenDay", () => {
  it("Should have a className SevenDay", () => {
    const sevenDay = shallow(<div className="SevenDay" />);
    expect(sevenDay.find(".SevenDay").length).toEqual(1);
  });

  it("Should take in sevenDayData with a starting length of 10", () => {
    expect(mockSevenDayData.data.length).toEqual(10);
  });

  it("sevenDayData should get reassigned to cleanData and ends with a length of 7", () => {
    let cleanData = mockSevenDayData.data.slice(0, 7);
    expect(cleanData.length).toEqual(7);
  });

  it("cleanData should map over sevenDayData", () => {
    let cleanData = mockSevenDayData.data.slice(0, 7);
    cleanData.map(obj => {
      return (
        <Card title={obj.day} icon={obj.icon} high={obj.high} low={obj.low} />
      );
    });
    // expect(wrapper.props().data).toBe('something');
  });
});
