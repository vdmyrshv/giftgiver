import React from 'react'

import { shallow } from 'enzyme'

import App from './App'

const app = shallow(<App />);

it('renders correctly', ()=> {
    expect(app).toMatchSnapshot();
}); 

//backticks denote that what is in those backticks is a special variable within the app

it('initializes the `state` with an empty list of gifts', ()=>{
    expect(app.state().gifts).toEqual([]);
});

//the find method finds the button on the shallowly rendered app component
it('adds a new gift to `state` when clicking the `add gift` button', ()=>{
    app.find('.btn-add').simulate('click');

    expect(app.state().gifts).toEqual([{id: 1}]);
});