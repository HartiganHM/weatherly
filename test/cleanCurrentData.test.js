import React from 'react';
import { shallow, mount } from 'enzyme';
import cleanCurrentData from '../lib/cleanCurrentData';

describe('cleanCurrentData', () => {
    
    it('cleanCurrentData should exist', () => {
        expect(<cleanCurrentData />).toBeDefined()
    })

    it('Should have a className cleanCurrentData', () => {
        const cleanCurrentData = shallow(<div className='cleanCurrentData'></div>);
        expect( cleanCurrentData.find('.cleanCurrentData').length ).toEqual(1);
    })
});