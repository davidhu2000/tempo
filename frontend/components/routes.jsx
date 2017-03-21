import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

const errorLoading = error => {
  throw new Error(`Dynamic page loading failed: ${error}`)
}

const loadRoute = callback => {
  return module => callback(null, module.default);
}

const _redirect = (nextState, replace) => {
  if(window.currentUser) {
    replace('/artists');
  } else {
    replace('/splash');
  }
};

import Splash from './splash';

const routes = (
  <Route path="/">
    <IndexRoute onEnter={ _redirect } />

    <Route path="/splash" getComponent={(location, cb) => { System.import('./splash').then(loadRoute(cb)).catch(errorLoading) }}>
      <IndexRoute           getComponent={(location, cb) =>  { System.import('./splash/display').then(loadRoute(cb)).catch(errorLoading) }} />
      <Route path="/login"  getComponent={(location, cb) =>  { System.import('./session_form').then(loadRoute(cb)).catch(errorLoading) }} />
      <Route path="/signup" getComponent={(location, cb) =>  { System.import('./session_form').then(loadRoute(cb)).catch(errorLoading) }} />
    </Route>

    <Route getComponent={(location, cb) => { System.import('./app').then(loadRoute(cb)).catch(errorLoading) }}>

      <Route path='/artists'               getComponent={(location, cb) => { System.import('./artist_index').then(loadRoute(cb)).catch(errorLoading) }} />
      <Route path='/artists/:artistId'     getComponent={(location, cb) => { System.import('./artist_detail').then(loadRoute(cb)).catch(errorLoading) }} />
      <Route path='/albums'                getComponent={(location, cb) => { System.import('./album_index').then(loadRoute(cb)).catch(errorLoading) }} />
      <Route path='/albums/:albumId'       getComponent={(location, cb) => { System.import('./album_detail').then(loadRoute(cb)).catch(errorLoading) }} />
      <Route path='/playlists'             getComponent={(location, cb) => { System.import('./playlist_index').then(loadRoute(cb)).catch(errorLoading) }} />
      <Route path='/playlists/:playlistId' getComponent={(location, cb) => { System.import('./playlist_detail').then(loadRoute(cb)).catch(errorLoading) }} />
      <Route path='/profile'               getComponent={(location, cb) => { System.import('./current_user_detail').then(loadRoute(cb)).catch(errorLoading) }} />
    </Route>

  </Route>
);

export default routes;
