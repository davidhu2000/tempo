import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';

const demoUser = {
  username: 'Guest',
  password: 'password'
};

const Splash = ({ login, children }) => (
  <div>
    <div className='navbar'>
      <div className='navbar-logo'>
        <h1><Link to='/'>Logo</Link></h1>
      </div>

      <div className='navbar-header'>
        <h1><Link to='/'>Welcome to Tempo</Link></h1>
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
          <a onClick={ () => login(demoUser) }>
            <span>Demo</span>
          </a>

        </div>
      </div>
    </div>

    <div className='splash'>
      { children }
    </div>
  </div>
);

export default withRouter(Splash);
