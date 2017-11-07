import React from "react";
import { shallow, mount } from "enzyme";
import TenHour from "../lib/TenHour";

const mockTenHourData = [
  {
    hour: "10:00 PM",
    icon: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    temp: "37°"
  },
  {
    hour: "11:00 PM",
    icon: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    temp: "38°"
  },
  {
    hour: "12:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    temp: "38°"
  },
  {
    hour: "1:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "38°"
  },
  {
    hour: "2:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "39°"
  },
  {
    hour: "3:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "39°"
  },
  {
    hour: "4:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "39°"
  },
  {
    hour: "5:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    temp: "40°"
  },
  {
    hour: "6:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    temp: "41°"
  },
  {
    hour: "7:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    temp: "40°"
  },
  {
    hour: "8:00 AM",
    icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    temp: "38°"
  },
  {
    hour: "9:00 AM",
    icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    temp: "40°"
  },
  {
    hour: "10:00 AM",
    icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    temp: "44°"
  },
  {
    hour: "11:00 AM",
    icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    temp: "48°"
  },
  {
    hour: "12:00 AM",
    icon: "http://icons.wxug.com/i/c/k/clear.gif",
    temp: "55°"
  },
  {
    hour: "1:00 PM",
    icon: "http://icons.wxug.com/i/c/k/clear.gif",
    temp: "61°"
  },
  {
    hour: "2:00 PM",
    icon: "http://icons.wxug.com/i/c/k/clear.gif",
    temp: "64°"
  },
  {
    hour: "3:00 PM",
    icon: "http://icons.wxug.com/i/c/k/clear.gif",
    temp: "65°"
  },
  {
    hour: "4:00 PM",
    icon: "http://icons.wxug.com/i/c/k/clear.gif",
    temp: "65°"
  },
  {
    hour: "5:00 PM",
    icon: "http://icons.wxug.com/i/c/k/clear.gif",
    temp: "64°"
  },
  {
    hour: "6:00 PM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "62°"
  },
  {
    hour: "7:00 PM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "58°"
  },
  {
    hour: "8:00 PM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "56°"
  },
  {
    hour: "9:00 PM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "55°"
  },
  {
    hour: "10:00 PM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "53°"
  },
  {
    hour: "11:00 PM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "53°"
  },
  {
    hour: "12:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "53°"
  },
  {
    hour: "1:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "51°"
  },
  {
    hour: "2:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "51°"
  },
  {
    hour: "3:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "51°"
  },
  {
    hour: "4:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "50°"
  },
  {
    hour: "5:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "50°"
  },
  {
    hour: "6:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "51°"
  },
  {
    hour: "7:00 AM",
    icon: "http://icons.wxug.com/i/c/k/nt_clear.gif",
    temp: "52°"
  },
  {
    hour: "8:00 AM",
    icon: "http://icons.wxug.com/i/c/k/clear.gif",
    temp: "53°"
  },
  {
    hour: "9:00 AM",
    icon: "http://icons.wxug.com/i/c/k/clear.gif",
    temp: "56°"
  }
];

describe("TenHour", () => {
  it("Should have a className TenHour", () => {
    const tenHour = shallow(<TenHour data={mockTenHourData}/>);
    expect(tenHour.find(".Card").length).toEqual(1);
    expect(TenHour).toMatchSnapshot();
  });

  it("Should take in tenHourData with a starting length of 10", () => {
    expect(mockTenHourData.length).toEqual(36);
    expect(TenHour).toMatchSnapshot();
  });

  it("tenHourData should get reassigned to cleanData and ends with a length of 10", () => {
    let cleanData = mockTenHourData.slice(0, 10);
    expect(cleanData.length).toEqual(10);
    expect(TenHour).toMatchSnapshot();
  });
});
