import App from './App';
import { shallow } from "enzyme";
import React from "react";

describe("test", () => {
    it("passes", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(".Webheader")).toBeTruthy();
    })
})