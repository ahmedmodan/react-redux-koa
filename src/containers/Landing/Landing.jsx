import React from 'react';
import { Link } from 'react-router';
import reactLogo from './../../assets/reactLogo.png';
import reduxLogo from './../../assets/reduxLogo.png';
import koaLogo from './../../assets/koaLogo.png';

export function Landing() {
  return (
    <div className="row">
      <div className="col offset-m3">
        <h1>Landing Page</h1>
      </div>
      <div className="col offset-m3">
        <div className="col s4 m3">
          <img className="responsive-img"src={reactLogo} alt="react-logo" />
        </div>
        <div className="col s4 m3">
          <img className="responsive-img"src={reduxLogo} alt="redux-logo" />
        </div>
        <div className="col s4 m3">
          <img className="responsive-img"src={koaLogo} alt="koa-logo" />
        </div>
      </div>
      <div className="col offset-s1 offset-m5">
        <Link to="/counter">
          <button className="btn btn-default">Go to the Counter Example</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
