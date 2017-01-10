import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  let formType = location.pathname.slice(1);

  let formAction = formType === 'login' ? login : signup;

  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),  
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
