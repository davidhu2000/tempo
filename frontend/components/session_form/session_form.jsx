import React from 'react';
import { withRouter } from 'react-router';

import LoginForm from './login';
import SignupForm from './signup';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.formType === 'login') {
      return (
        <div>
          <LoginForm login={this.props.login} />
        </div>
      );
    } else {
      return (
        <div>
          <SignupForm login={this.props.signup} />
        </div>
      );
    }

  }
}

export default withRouter(SessionForm);
