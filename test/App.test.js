import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';


describe('App', () => {
  it('should shallow', () => {
    const component = mount(<App />);

    console.log( component.find('div[className="App"]').debug() );
  })
})