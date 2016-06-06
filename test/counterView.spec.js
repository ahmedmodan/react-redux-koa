import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { CounterView } from '../src/containers/Counter/counterView';
import counterState from './../src/redux/states/counterState';
import { actions } from './../src/redux/modules/counter';
import DisplayNumber from './../src/components/displayNumber/displayNumber';


describe('(Container) CounterView', () => {
  it('contains the Displayumber ', () => {
    const wrapper = shallow(<CounterView counter={counterState} { ...actions } />);
    expect(wrapper.contains(<DisplayNumber numToDisplay={counterState} />)).to.equal(true);
  });
});

describe('(Component) DisplayNumber', () => {
  it('contains a div', () => {
    const wrapper = shallow(<DisplayNumber numToDisplay={counterState} />);
    expect(wrapper.find('h3')).to.have.length(1);
  });
});
