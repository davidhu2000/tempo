import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveUser = currentUser => ({
  type: RECEIVE_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(
    res => {
      dispatch(clearErrors());
      return dispatch(receiveUser(res));
    },
    err => dispatch(receiveErrors(err.reponseJSON))
  )
);

export const logout = user => dispatch => (
  SessionAPIUtil.lgout().then(
    res => {
      dispatch(clearErrors());
      return dispatch(receiveUser(null));
    },
    err => dispatch(receiveErrors(err.reponseJSON))
  )
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(
    res => {
      dispatch(clearErrors());
      return dispatch(receiveUser(res));
    },
    err => dispatch(receiveErrors(err.reponseJSON))
  )
);
