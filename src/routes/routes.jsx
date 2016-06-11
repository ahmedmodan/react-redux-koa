import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CoreLayout from './../layouts/CoreLayout';
import Landing from './../containers/Landing/Landing';

import counterRoutes from './counterRoutes';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Landing} />
    {counterRoutes}
    <Redirect from="*" to="/" />
  </Route>
);
