import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';


describe('Search', () => {
  it('changing input should change state', () => {
    const search = shallow(<Search filterFunction={ ()=>{} }/>)
    const input = search.find('input');

    const mockEvent = {
      target: {
        value: 'Solar'
      }
    }

    expect( search.state('inputVal') ).toEqual('')

    input.simulate('change', mockEvent);

    expect( search.state('inputVal') ).toEqual('Solar')

  })
});
