import React from "react";
import { shallow, mount } from "enzyme";
import Search from "../lib/Search";

describe("Search", () => {
  it("changing input should change state", () => {
    const search = mount(<Search />);
    const input = search.find("input");

    expect(search.state("value")).toEqual("");

    const value = { target: { value: "Denver, CO" } };

    input.simulate("change", value);

    expect(search.state("value")).toEqual("Denver, CO");
  });

  it("search should exist", () => {
    expect(<search />).toBeDefined();
  });

  it("Should have a className search", () => {
    const search = shallow(<div className="search" />);
    expect(search.find(".search").length).toEqual(1);
    expect(Search).toMatchSnapshot();
  });
});
