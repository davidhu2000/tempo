import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';

import Navbar from '../navbar/navbar';

const demoUser = {
  username: 'Guest',
  password: 'password'
};

class Splash extends React.Component  {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._redirectLoggedIn();
  }

  componentDidUpdate() {
    this._redirectLoggedIn();
  }

  _redirectLoggedIn() {
    if(this.props.loggedIn) {
      this.props.router.replace('/artists');
    }
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className='splash'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
