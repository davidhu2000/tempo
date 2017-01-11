import React from 'react';
import { withRouter } from 'react-router';

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
        {React.cloneElement(this.props.children, { logout: this.props.logout })}
      </div>
    );
  }
}

export default withRouter(App);
