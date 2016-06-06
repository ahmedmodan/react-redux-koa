import React, { PropTypes } from 'react';

function CounterLayout({ children }) {
  return (
    <div>
      <h2>A Temporary Counter</h2>
      {children}
    </div>
  );
}

CounterLayout.propTypes = {
  children: PropTypes.element
};

export default CounterLayout;
