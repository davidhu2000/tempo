import React from 'react';
import { withRouter } from 'react-router';

const Splash = ({ children }) => (
  <div className='splash'>
    <h1>Splash</h1>
    { children }
  </div>
);

export default withRouter(Splash);
