import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';


describe('Search', () => {
  it('changing input should change state', () => {
    const search = mount(<Search />)
    const input = search.find('input');

    expect( search.state('value') ).toEqual('')

    const value = { target: { value: 'Denver' } }

    input.simulate('change', value);

    expect( search.state('value') ).toEqual('Denver')

  })

  it('search should exist', () => {
    expect(<search />).toBeDefined()
  })

  it('Should have a className search', () => {
      const search = shallow(<div className='search'></div>);
      expect( search.find('.search').length ).toEqual(1);
  })
});
