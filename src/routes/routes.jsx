import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CoreLayout from './../layouts/CoreLayout';
import LandingView from './../containers/Landing/LandingView';

import counterRoutes from './counterRoutes';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={LandingView} />
    { counterRoutes }
    <Redirect from="*" to="/" />
  </Route>
);
