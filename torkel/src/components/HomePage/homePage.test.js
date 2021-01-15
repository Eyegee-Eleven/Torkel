import HomePage from './homePage';
import { shallow } from "enzyme";
import React from "react";
import { ExpansionPanelActions } from '@material-ui/core';
import SubList from './homePageComponents/subList';




describe('HomePage', () =>{
    let wrapper;
    
    beforeEach(()=> {
         wrapper = shallow(<HomePage />)
    })

    it('renders subList lmao', () => {
        expect(wrapper.find(SubList).exists()).toBeTruthy()
    })
    


})