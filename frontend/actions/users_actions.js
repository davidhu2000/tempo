import * as UsersApiUtil from '../util/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = id => dispatch => (
  UsersApiUtil.fetchUser(id)
    .then(
      res => dispatch(receiveUser(res))
    )
);
