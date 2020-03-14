import React from 'react'

import { shallow } from 'enzyme'

import App from './App'

describe('App', ()=> {

    //the global describe fn groups tests together
    const app = shallow(<App />);
    
    
    
    it('renders correctly', ()=> {
        expect(app).toMatchSnapshot();
    }); 
    
    //backticks denote that what is in those backticks is a special variable within the app
    
    it('initializes the `state` with an empty list of gifts', ()=>{
        expect(app.state().gifts).toEqual([]);
    });

    describe('when clicking the `add-gift` button', ()=> {
        
        const id = 1;
        //a beforeEach function is what should be run before each it block (each test)
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        //an afterEach block clears the test so that there is no test pollution
        afterEach(()=>{
            app.setState({gifts: []});
        })
        
        //the find method finds the button on the shallowly rendered app component
        it('adds a new gift to `state`', ()=>{
            expect(app.state().gifts).toEqual([{id}]);
        });
        
        
        //throws error because the btn-add class is clicked twice - this is called TEST POLLUTION
        //this is temporarily resolved by changing the expectation to 2
        it('adds a new gift to the rendered list', ()=> {
            expect(app.find('.gift-list').children().length).toEqual(id);
        });

        it('creates a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('and the user wants to remove the added gift', () => {
            beforeEach(() => {
                //instance of the removeGift fn - value passed for test fn is the value id chosen a few tests above when added
                app.instance().removeGift(id);
            });

            it('removes the gift from the `state` ', () => {
                expect(app.state().gifts).toEqual([]);
            });
        })
        

    });

});

