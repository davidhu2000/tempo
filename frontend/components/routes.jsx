import React from 'react';
import App from './app/app_container';
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

const routes = (
  <Route path="/">
    <IndexRoute onEnter={ _redirect } />

    <Route path="/splash" getComponent={(location, cb) => System.import('./splash/splash_container').then(loadRoute(cb)).catch(errorLoading) }>
      <IndexRoute getComponent={(location, cb) => System.import('./splash/display').then(loadRoute(cb)).catch(errorLoading) } />
      <Route path="/login" getComponent={(location, cb) => System.import('./session_form/session_form_container').then(loadRoute(cb)).catch(errorLoading) } />
      <Route path="/signup" getComponent={(location, cb) => System.import('./session_form/session_form_container').then(loadRoute(cb)).catch(errorLoading) } />
    </Route>

    <Route getComponent={(location, cb) => System.import('./app/app_container').then(loadRoute(cb)).catch(errorLoading) }>
      <Route path='/browse' getComponent={(location, cb) => System.import('./browse/browse_container').then(loadRoute(cb)).catch(errorLoading) }>
        <Route path='/artists' getComponent={(location, cb) => System.import('./artist_index/artist_index_container').then(loadRoute(cb)).catch(errorLoading) } />
        <Route path='/artists/:artistId' getComponent={(location, cb) => System.import('./artist_detail/artist_detail_container').then(loadRoute(cb)).catch(errorLoading) } />
        <Route path='/albums' getComponent={(location, cb) => System.import('./album_index/album_index_container').then(loadRoute(cb)).catch(errorLoading) } />
        <Route path='/albums/:albumId' getComponent={(location, cb) => System.import('./album_detail/album_detail_container').then(loadRoute(cb)).catch(errorLoading) } />
        <Route path='/playlists' getComponent={(location, cb) => System.import('./playlist_index/playlist_index_container').then(loadRoute(cb)).catch(errorLoading) } />
        <Route path='/playlists/:playlistId' getComponent={(location, cb) => System.import('./playlist_detail/playlist_detail_container').then(loadRoute(cb)).catch(errorLoading) } />
      </Route>
      <Route path='/profile' getComponent={(location, cb) => System.import('./current_user_detail/current_user_detail_container').then(loadRoute(cb)).catch(errorLoading) } />
    </Route>

  </Route>
);

export default routes;
