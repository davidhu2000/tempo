import React from 'react';
import { withRouter, Link } from 'react-router';

const Splash = ({ children }) => (
  <div>
    <div className='navbar'>
      <div className='navbar-logo'>
        <h1>Logo</h1>
      </div>

      <div className='navbar-header'>
        <h1>Welcome to Tempo</h1>
      </div>

      <div className='navbar-buttons'>
        <div className='navbar-button btn-login'>
          <Link to='/login'>
            <span>Login</span>
          </Link>
        </div>
        <div className='navbar-button btn-signup'>
          <Link to='/signup'>
            <span>Signup</span>
          </Link>
        </div>
        <div className='navbar-button btn-demo'>
          <Link to='/demo'>
            <span>Demo</span>
          </Link>
        </div>
      </div>
    </div>

    <div className='splash'>

      <h1>Splash</h1>
      { children }
    </div>
  </div>
);

export default withRouter(Splash);
