import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

const Root = ({ store }) => {

  const _redirect = (nextState, replace) => {
    if(store.getState().session.currentUser) {
      replace('/artists');
    } else {
      replace('/splash');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory } routes={ routes } />
    </Provider>
  );
};

export default Root;
