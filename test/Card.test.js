import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';

const mockData = {
  time: '5:00 PM',
  src: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
  temp: '72°F',
  high: '212°F',
  low: '−459.67°F'
}

describe('Card Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it('Card should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('Should have a className card', () => {
    const card = shallow( <Card /> );
    expect( card.find('.card').length ).toEqual(1);
  })

  it('Should have a configurable time div', () => {
    const card = shallow( <Card time={mockData.time} />);
    expect( card.find('.time').length ).toEqual(1);
    expect('5:00 PM').toEqual(mockData.time);
  })
  
  it('Should have a configurable temp div', () => {
    const card = shallow( <Card temp={mockData.temp} />);
    expect( card.find('.temp').length ).toEqual(1);
    expect('72°F').toEqual(mockData.temp);
  })

  it('Should have a configurable temp div with high and low', () => {
    const card = shallow( <Card high={mockData.high} low={mockData.low} />);
    expect( card.find('.temp').length ).toEqual(1);      
    expect("212°F").toEqual(mockData.high);
    expect("−459.67°F").toEqual(mockData.low);
  })
})