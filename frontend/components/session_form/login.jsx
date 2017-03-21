import React from 'react';
import { Link, hashHistory } from 'react-router';

const demoUser = {
  username: 'Guest',
  password: 'password'
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginGuest: false
    };

    this.loginUser = this.loginUser.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.demo && !this.state.loginGuest) {
      this.demoLogin();
      this.setState({
        loginGuest: true
      })
    }
  }

  writeUsername(usernameIdx = 0, username = 'Guest') {
    if(usernameIdx > username.length) {
      return this.writePassword();
    } else {
      setTimeout(() => {
        this.setState({
          username: username.slice(0, usernameIdx)
        });
        this.writeUsername(usernameIdx + 1, 'Guest');
      }, 70);
    }
  }

  writePassword(passwordIdx = 0, password = 'password') {
    if(passwordIdx > password.length) {
      this.setState({
        loginGuest: false
      })
      return this.props.login(this.state).then(hashHistory.replace('/artists'));
    } else {
      setTimeout(() => {
        this.setState({
          password: password.slice(0, passwordIdx)
        });
        this.writePassword(passwordIdx + 1, 'password');
      }, 70);
    }
  }

  demoLogin() {
    this.writeUsername();
  }

  loginUser(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.loginUser} className='form'>
          <label htmlFor='username' className='form-label'>
            { "Username / Email" }
          </label>

          <input
            name='username'
            value={ this.state.username }
            onChange={ this.update('username') }
            className='form-input'></input>


          <label htmlFor='password' className='form-label'>
            { "Password" }
          </label>

          <input
            type='password'
            name='password'
            value={ this.state.password }
            onChange={ this.update('password')}
            className='form-input'></input>

          <input
            type='submit'
            className='form-button'
            value='Login'></input>

          <span className='form-span'>
            <p>Need an account?</p> <Link to='/signup'>Sign Up</Link>
          </span>
        </form>

      </div>

    );
  }
}

export default LoginForm;
