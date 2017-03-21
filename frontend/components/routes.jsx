import React from 'react';
// import App from './app';
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

function lazyLoadComponent(lazyModule) {
  return (location, cb) => {
    lazyModule(module => {
      cb(null, module)
    })
  }
}

function lazyLoadComponents(lazyModules) {
  return (location, cb) => {
    const moduleKeys = Object.keys(lazyModules);
    const promises = moduleKeys.map(key =>
      new Promise(resolve => lazyModules[key](resolve))
    )

    Promise.all(promises).then(modules => {
      cb(null, modules.reduce((obj, module, i) => {
        obj[moduleKeys[i]] = module;
        return obj;
      }, {}))
    })
  }
}

import Splash from './splash';

const routes = (
  <Route path="/">
    <IndexRoute onEnter={ _redirect } />

    <Route path="/splash" getComponent={ lazyLoadComponent(Splash) }>
      <IndexRoute           getComponent={(location, cb) => require.ensure(['./splash'], require => cb(null, require('./splash/display'))) } />
      <Route path="/login"  getComponent={(location, cb) => require.ensure(['./splash'], require => cb(null, require('./session_form'))) } />
      <Route path="/signup" getComponent={(location, cb) => require.ensure(['./splash'], require => cb(null, require('./session_form'))) } />
    </Route>

    <Route getComponent={(location, cb) => require.ensure([], require => require('./app')) }>
      <Route path='/browse' getComponent={(location, cb) => require.ensure(['./app'], require => require('./browse')) }>
        <Route path='/artists'               getComponent={(location, cb) => require.ensure(['./browse'], require => require('./artist_index')) } />
        <Route path='/artists/:artistId'     getComponent={(location, cb) => require.ensure(['./browse'], require => require('./artist_detail')) } />
        <Route path='/albums'                getComponent={(location, cb) => require.ensure(['./browse'], require => require('./album_index')) } />
        <Route path='/albums/:albumId'       getComponent={(location, cb) => require.ensure(['./browse'], require => require('./album_detail')) } />
        <Route path='/playlists'             getComponent={(location, cb) => require.ensure(['./browse'], require => require('./playlist_index')) } />
        <Route path='/playlists/:playlistId' getComponent={(location, cb) => require.ensure(['./browse'], require => require('./playlist_detail')) } />
      </Route>
      <Route path='/profile' getComponent={(location, cb) => require.ensure(['./app'], require => require('./current_user_detail')) } />
    </Route>

  </Route>
);

export default routes;
