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
      <div>
        <div>App</div>
        <button className='form-button' onClick={ this.props.logout }>Logout</button>
        { this.props.children }
      </div>
    );
  }
}
export default withRouter(App);
