import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';

const mockData = {
  time: '5:00 PM',
  condition: 'Sunny',
  temp: '72°F',
  high: '212°F',
  low: '−459.67°F'
}

describe('Card', () => {
  it('should have a className card', () => {
    const card = shallow(<Card />);
      expect( card.find('.card').length ).toEqual(1);
  })

  it('should have a configurable time div', () => {
    const card = shallow(<Card time={mockData.time} />);
    expect( card.find('.time').length ).toEqual(1);
    expect('5:00 PM').toEqual(mockData.time);
  })

  it('should have a configurable condition div', () => {
    const card = shallow(
      <Card condition={mockData.condition} />);
      expect( card.find('.condition').length ).toEqual(1);
      expect( card.find('.condition').text() ).toEqual('Sunny');
  })

  it('should have a configurable temp div', () => {
    const card = shallow(
      <Card temp={mockData.temp} />);
      expect( card.find('.temp').length ).toEqual(1);
      expect('72°F').toEqual(mockData.temp);
  })

  it('should have a configurable temp div with high and low', () => {
    const card = shallow(
      <Card high={mockData.high} low={mockData.low} />);
      expect("212°F").toEqual(mockData.high);
      expect("−459.67°F").toEqual(mockData.low);
  })
})