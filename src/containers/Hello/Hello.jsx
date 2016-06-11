import React from 'react';
import { Link } from 'react-router';

/* eslint-disable react/prefer-stateless-function */
export default class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Routing Example</h1>
        <Link to="/counter">Go Back To The Counter page.</Link>
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */
