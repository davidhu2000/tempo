import React from 'react';
import { Link } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      image_url: ''
    };

    this.signupUser = this.signupUser.bind(this);
  }

  signupUser(e) {
    e.preventDefault();
    this.props.signup(this.state);
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
        <form onSubmit={this.signupUser} className='form'>

          <label htmlFor='email' className='form-label'>
            { "Email" }
          </label>

          <input name='email'
                 value={ this.state.email }
                 onChange={ this.update('email') }
                 className='form-input'></input>


          <label htmlFor='username' className='form-label'>
            { "Username" }
          </label>

          <input name='username'
                 value={ this.state.username }
                 onChange={ this.update('username') }
                 className='form-input'></input>


          <label htmlFor='password' className='form-label'>
            { "Password" }
          </label>

          <input type='password'
                 name='password'
                 onChange={ this.update('password')}
                 className='form-input'></input>


          <label htmlFor='first_name' className='form-label'>
            { "First Name" }
          </label>

          <input name='first_name'
                 value={ this.state.first_name }
                 onChange={ this.update('first_name') }
                 className='form-input'></input>

          <label htmlFor='last_name' className='form-label'>
            { "Last Name" }
          </label>

          <input name='last_name'
                 value={ this.state.last_name }
                 onChange={ this.update('last_name') }
                 className='form-input'></input>

          <label htmlFor='image_url' className='form-label'>
             { "Image URL" }
          </label>

          <input name='image_url'
                 value={ this.state.image_url }
                 onChange={ this.update('image_url') }
                 className='form-input'></input>

          <input type='submit'
                 className='form-button'
                 value='Signup'></input>

          <span className='form-span'>
            Have an account? <Link to='/login'>Login</Link>
          </span>
        </form>

      </div>

    );
  }
}

export default SignupForm;
