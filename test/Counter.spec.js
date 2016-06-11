import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Counter } from '../src/containers/Counter/Counter';
import counterState from './../src/redux/states/counterState';
import { actions } from './../src/redux/modules/counterReducer';
import DisplayNumber from './../src/components/displayNumber/displayNumber';


describe('(Container) CounterView', () => {
  it('contains the Displayumber ', () => {
    const wrapper = shallow(<Counter counter={counterState} { ...actions } />);
    expect(wrapper.contains(<DisplayNumber numToDisplay={counterState} />)).to.equal(true);
  });
});

describe('(Component) DisplayNumber', () => {
  it('contains a div', () => {
    const wrapper = shallow(<DisplayNumber numToDisplay={counterState} />);
    expect(wrapper.find('h3')).to.have.length(1);
  });
});
