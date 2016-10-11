import React, { PropTypes } from 'react';

import s from './displaynumber.styl';

// require the sass file corresponding to the component

// This is a stateless function/component. it only takes in a prop and then displays it
export function DisplayNumber({ numToDisplay }) {
  return (
    <div>
      <h3 className={s.numToDisplay}>{numToDisplay.get('counter')}</h3>
    </div>
  );
}

DisplayNumber.propTypes = {
  numToDisplay: PropTypes.object
};

export default DisplayNumber;
