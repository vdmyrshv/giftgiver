import React from 'react';

import { shallow } from 'enzyme'

import Gift from './Gift'

describe('Gift', () => {
    
    const id = 1;
    const mockRemove = jest.fn();
    const props = { gift: { id }, removeGift: mockRemove };
    const gift = shallow(<Gift {...props}/>);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
        
    });

    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({person: "", present: ""});
    });

    describe('when typing into the person input', () => {
        const person = 'uncle';

        beforeEach(() => {
            gift.find('.gift-form__input--person').simulate('change', { target: {value: person} });
        });

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person);
        });
    });

    describe('when typing into the present input', () => {
        const present = 'gift';

        beforeEach(() => {
            gift.find('.gift-form__input--present').simulate('change', {target: {value: present}});
        });

        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(present);
        });
    })

    describe('when clicking the `remove gift` button', () => {
        beforeEach(() => {
            gift.find('.gift-form__button-delete').simulate('click');
        });

        it('calls the removeGift callback', () => {
            //the jest.fn method provides the ability to fire a mock function to check whether or not its called
            expect(mockRemove).toHaveBeenCalled();
        });
    })
    
    
    
})
