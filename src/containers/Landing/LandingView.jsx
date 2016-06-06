import React from 'react';
import { Link } from 'react-router';


export function LandingView() {
  return (
    <div>
      <h1>This is the landing Page</h1>
      <Link to="/counter">
        <button className="btn btn-default">Go to the Counter Example</button>
      </Link>
    </div>
  );
}

export default LandingView;
