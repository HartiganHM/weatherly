import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';

describe('CurrentWeather', () => {
    
    it('CurrentWeather should exist', () => {
        expect(<CurrentWeather />).toBeDefined()
    })

    it('Should have a className CurrentWeather', () => {
        const currentWeather = shallow(<div className='CurrentWeather'></div>);
        expect( currentWeather.find('.CurrentWeather').length ).toEqual(1);
    })
});