import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './app.jsx';
import Splash from './main/splash';
import SessionFormContainer from './session_form/session_form_container';


const Root = ({ store }) => {

  const _redirect = (nextState, replace) => {
    if(store.getState().session.currentUser) {
      replace('/browse');
    } else {
      replace('/splash');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/">
          <IndexRoute onEnter={ _redirect } />

          <Route path="/splash" component={ Splash }>
            <Route path="/login" component={ SessionFormContainer } />
            <Route path="/signup" component={ SessionFormContainer } />
          </Route>

          <Route path="/browse" component={App}>

          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
