import React from 'react';
import { Link } from 'react-router';

const SplashDisplay = () => (
  <div className='splash-display'>
    <div className='jumbotron'>
      <h1 className='splash-header'>Find your sound.</h1>
      <h2>Stream your favorite songs now.</h2>
      <div className='splash-buttons'>
        <Link to='/login'>Start Exploring</Link>
      </div>
    </div>
  </div>
);

export default SplashDisplay;
