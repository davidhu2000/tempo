import React from 'react';
import App from './app/app_container';
import { Router, Route, IndexRoute } from 'react-router';

const errorLoading = error => {
  throw new Error(`Dynamic page loading failed: ${error}`)
}

const loadRoute = callback => {
  return module => callback(null, module.default);
}

const importComponent = (path, cb) => (
  System.import(path).then(loadRoute(cb)).catch(errorLoading)
);

const _redirect = (nextState, replace) => {
  if(window.currentUser) {
    replace('/artists');
  } else {
    replace('/splash');
  }
};

const routes = (
  <Route path="/">
    <IndexRoute onEnter={ _redirect } />

    <Route path="/splash" getComponent={(location, cb) => importComponent('./splash', cb) }>
      <IndexRoute getComponent={(location, cb) => importComponent('./splash/display', cb) } />
      <Route path="/login" getComponent={(location, cb) => importComponent('./session_form', cb) } />
      <Route path="/signup" getComponent={(location, cb) => importComponent('./session_form', cb) } />
    </Route>

    <Route getComponent={(location, cb) => importComponent('./app', cb) }>
      <Route path='/browse' getComponent={(location, cb) => importComponent('./browse', cb) }>
        <Route path='/artists' getComponent={(location, cb) => importComponent('./artist_index', cb) } />
        <Route path='/artists/:artistId' getComponent={(location, cb) => importComponent('./artist_detail', cb) } />
        <Route path='/albums' getComponent={(location, cb) => importComponent('./album_index', cb) } />
        <Route path='/albums/:albumId' getComponent={(location, cb) => importComponent('./album_detail', cb) } />
        <Route path='/playlists' getComponent={(location, cb) => importComponent('./playlist_index', cb) } />
        <Route path='/playlists/:playlistId' getComponent={(location, cb) => importComponent('./playlist_detail', cb) } />
      </Route>
      <Route path='/profile' getComponent={(location, cb) => importComponent('./current_user_detail', cb) } />
    </Route>

  </Route>
);

export default routes;
