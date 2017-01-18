import React from 'react';
import { withRouter } from 'react-router';

import LoginForm from './login';
import SignupForm from './signup';

class SessionForm extends React.Component {
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

  renderErrors() {
    return (
      <div className='errors-box'>
        <ul className='form-errors'>
          {this.props.errors.map( (error, idx) => <li key={idx}>{error}</li> ) }
        </ul>
      </div>
    );
  }

  render() {
    if(this.props.formType === 'login') {
      return (
        <div>
          { this.renderErrors() }
          <LoginForm login={this.props.login} />
        </div>
      );
    } else {
      return (
        <div>
          { this.renderErrors() }
          <SignupForm signup={this.props.signup} />
        </div>
      );
    }

  }
}

export default withRouter(SessionForm);
