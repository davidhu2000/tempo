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

    <Route path="/splash" getComponent={(location, cb) => importComponent('./splash/splash_container', cb) }>
      <IndexRoute getComponent={(location, cb) => importComponent('./splash/display', cb) } />
      <Route path="/login" getComponent={(location, cb) => importComponent('./session_form/session_form_container', cb) } />
      <Route path="/signup" getComponent={(location, cb) => importComponent('./session_form/session_form_container', cb) } />
    </Route>

    <Route getComponent={(location, cb) => importComponent('./app/app_container', cb) }>
      <Route path='/browse' getComponent={(location, cb) => importComponent('./browse/browse_container', cb) }>
        <Route path='/artists' getComponent={(location, cb) => importComponent('./artist_index/artist_index_container', cb) } />
        <Route path='/artists/:artistId' getComponent={(location, cb) => importComponent('./artist_detail/artist_detail_container', cb) } />
        <Route path='/albums' getComponent={(location, cb) => importComponent('./album_index/album_index_container', cb) } />
        <Route path='/albums/:albumId' getComponent={(location, cb) => importComponent('./album_detail/album_detail_container', cb) } />
        <Route path='/playlists' getComponent={(location, cb) => importComponent('./playlist_index/playlist_index_container', cb) } />
        <Route path='/playlists/:playlistId' getComponent={(location, cb) => importComponent('./playlist_detail/playlist_detail_container', cb) } />
      </Route>
      <Route path='/profile' getComponent={(location, cb) => importComponent('./current_user_detail/current_user_detail_container', cb) } />
    </Route>

  </Route>
);

export default routes;
