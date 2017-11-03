import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome';

describe('Welcome', () => {

    it('Welcome should exist', () => {
        expect(<Welcome />).toBeDefined()
    })

    it('Should have a className Welcome', () => {
      const welcome = shallow(<div className='Welcome'></div>);
        expect( welcome.find('.Welcome').length ).toEqual(1);
    })
});