import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';

const mockData = {
  time: '5:00 PM',
  condition: 'Sunny',
  temp: '72°F',
  day: 'Friday'
}

describe('Card', () => {
  it('should have a className card', () => {
    const card = shallow(<Card />);
      expect( card.find('.card').length ).toEqual(1);
  })

  it('should have a configurable time div', () => {
    const card = shallow(
      <Card time={mockData.time} />);
      expect( card.find('.time').length ).toEqual(1);
      expect( card.find('.time').text() ).toEqual('5:00 PM');
  })

  it('should have a configurable condition div', () => {
    const card = shallow(
      <Card time={mockData.condition} />);
      expect( card.find('.condition').length ).toEqual(1);
      expect( card.find('.condition').text() ).toEqual('Sunny');
  })

  it('should have a configurable temp div', () => {
    const card = shallow(
      <Card time={mockData.temp} />);
      expect( card.find('.temp').length ).toEqual(1);
      expect( card.find('.temp').text() ).toEqual('72°F');
  })

  it('should have a configurable day div', () => {
    const card = shallow(
      <Card time={mockData.day} />);
      expect( card.find('.day').length ).toEqual(1);
      expect( card.find('.day').text() ).toEqual('Friday');
  })
})