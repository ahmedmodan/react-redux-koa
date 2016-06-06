import React, { PropTypes } from 'react';

// require the sass file corresponding to the component
require('./displaynumber.scss');

// This is a stateless function/component. it only takes in a prop and then displays it
export function DisplayNumber({ numToDisplay }) {
  return (
    <div>
      <h3 className="numToDisplay">{ numToDisplay.get('counter') }</h3>
    </div>
  );
}

DisplayNumber.propTypes = {
  numToDisplay: PropTypes.object
};

export default DisplayNumber;
