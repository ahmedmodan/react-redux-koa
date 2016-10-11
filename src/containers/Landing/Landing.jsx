import React from 'react';
import { Link } from 'react-router';
import reactLogo from './../../assets/reactLogo.png';
import reduxLogo from './../../assets/reduxLogo.png';
import koaLogo from './../../assets/koaLogo.png';

export function Landing() {
  return (
    <div>
      <h1>Landing Page</h1>
      <img src={reactLogo} alt="react-logo" />
      <img src={reduxLogo} alt="redux-logo" />
      <img src={koaLogo} alt="koa-logo" />
      <Link to="/counter">
        <button >Go to the Counter Example</button>
      </Link>
    </div>
  );
}

export default Landing;
