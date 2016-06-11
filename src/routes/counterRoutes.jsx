import React from 'react';
import { Route, IndexRoute } from 'react-router';


import Hello from '../containers/Hello/Hello';
import Counter from './../containers/Counter/Counter';
import CounterLayout from './../layouts/CounterLayout';

export default (
  <Route path="counter" component={CounterLayout} >
    <IndexRoute component={Counter} />
    <Route path="hello" component={Hello} />
  </Route>
);
