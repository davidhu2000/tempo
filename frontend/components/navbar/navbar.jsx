import { Link, hashHistory } from 'react-router';
import React from 'react';

const Navbar = () => (
  <div className='navbar col'>
    <div className='navbar-logo'>
      <Link to='/'>
        <img
          className='navbar-logo-icon'
          src="https://res.cloudinary.com/davidhu2000/image/upload/v1484198898/logo_hrwwkv.png" />
      </Link>
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
        <a onClick={ () => hashHistory.push('/login?demo=true') }>
          <span>Demo</span>
        </a>
      </div>

    </div>
  </div>
);

export default Navbar;
