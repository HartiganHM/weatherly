import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenDay from '../lib/SevenDay';

describe('SevenDay', () => {
    it('should have a className SevenDay', () => {
      const sevenDay = shallow(<div className='SevenDay'></div>);
        expect( sevenDay.find('.SevenDay').length ).toEqual(1);
    })
});