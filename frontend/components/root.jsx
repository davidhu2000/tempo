import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import { logout } from '../actions/session_actions';

// app components
import AppContainer from './app/app_container';
import Sidebar from './app/sidebar';
import BrowseContainer from './browse/browse_container';

// splash components
import SplashContainer from './splash/splash_container';
import SplashDisplay from './splash/display';
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

          <Route path="/splash" component={ SplashContainer }>
            <IndexRoute component={ SplashDisplay } />
            <Route path="/login" component={ SessionFormContainer } />
            <Route path="/signup" component={ SessionFormContainer } />
          </Route>

          <Route component={AppContainer}>
            <Route path='/browse' component={ BrowseContainer }>

            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
