import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './errors_actions';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(
    res => {
      dispatch(clearErrors());
      return dispatch(receiveUser(res));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(
    res => {
      dispatch(clearErrors());
      return dispatch(receiveUser(null));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(
    res => {
      dispatch(clearErrors());
      return dispatch(receiveUser(res));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);


window.logout = logout;
