import React from 'react';
import { logout } from '../actions/session_actions';

const App = ({ store }) => (
  <div>
    <h1>App</h1>
  </div>
);

export default App;

// TODO: for testing
window.logout = logout;
