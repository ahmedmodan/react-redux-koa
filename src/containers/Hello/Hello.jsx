import React from 'react';
import { Link } from 'react-router';

/* eslint-disable react/prefer-stateless-function */
export default class Hello extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col offset-s2 offset-m3">
          <h1>Routing Example</h1>
        </div>
        <div className="col offset-s1 offset-m4">
          <Link className="btn waves-effect waves-light" to="/counter">
          Go Back To The Counter page
          </Link>
        </div>
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */
