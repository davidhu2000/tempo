import React from 'react';
import { withRouter } from 'react-router';

import Sidebar from './sidebar';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this._redirectUnlessLoggedIn();
  }

  componentWillUpdate() {
    this._redirectUnlessLoggedIn();
  }

  _redirectUnlessLoggedIn() {
    if(!this.props.loggedIn) {
      this.props.router.replace('/login');
    }
  }

  render() {
    return (
      <div className='main'>
        <div className='col col-1'>
          <Sidebar logout={ this.props.logout }></Sidebar>
        </div>
        <div className='col col-11'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default withRouter(App);
