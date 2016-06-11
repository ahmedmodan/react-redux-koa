import React, { PropTypes } from 'react';

function CounterLayout({ children }) {
  return (
    <div className="row">
      <div className="col offset-m3">
        <h2>A Temporary Counter</h2>
      </div>
      {children}
    </div>
  );
}

CounterLayout.propTypes = {
  children: PropTypes.element
};

export default CounterLayout;
