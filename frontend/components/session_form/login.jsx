import React from 'react';
import { Link } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.loginUser = this.loginUser.bind(this);
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
          <label htmlFor='username'
                 className='form-label'>
            { "Username / Email" }
          </label>

          <input name='username'
                 value={ this.state.username }
                 onChange={ this.update('username') }
                 className='form-input'></input>


          <label htmlFor='password'
                 className='form-label'>
            { "Password" }
          </label>

          <input type='password'
                 name='password'
                 onChange={ this.update('password')}
                 className='form-input'></input>

          <input type='submit'
                 className='form-button'
                 value='Login'></input>

          <span className='form-span'>
            Need to create an account? <Link to='/signup'>Sign Up</Link>
          </span>
        </form>

      </div>

    );
  }
}

export default LoginForm;
