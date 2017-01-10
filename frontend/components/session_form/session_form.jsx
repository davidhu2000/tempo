import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
      </div>
    );
  }
}

export default withRouter(SessionForm);
