import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import { logout } from '../actions/session_actions';

import routes from './routes';

// // app components
// import AppContainer from './app/app_container';
// import Sidebar from './app/sidebar';
// import BrowseContainer from './browse/browse_container';
//
// import ArtistIndexContainer from './artist_index/artist_index_container';
// import SongIndexContainer from './song_index/song_index_container';
// import AlbumIndexContainer from './album_index/album_index_container';
// import PlaylistIndexContainer from './playlist_index/playlist_index_container';
//
// import AlbumDetailContainer from './album_detail/album_detail_container';
// import ArtistDetailContainer from './artist_detail/artist_detail_container';
// import PlaylistDetailContainer from './playlist_detail/playlist_detail_container';
// import CurrentUserDetailContainer from './current_user_detail/current_user_detail_container';
//
//
// // splash components
// import SplashContainer from './splash/splash_container';
// import SplashDisplay from './splash/display';
// import SessionFormContainer from './session_form/session_form_container';

const errorLoading = error => {
  throw new Error(`Dynamic page loading failed: ${error}`)
}

const loadRoute = callback => {
  return module => callback(null, module.default);
}

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

//
// <Router history={ hashHistory }>
//   <Route path="/">
//     <IndexRoute onEnter={ _redirect } />
//
//     <Route path="/splash" component={ SplashContainer }>
//       <IndexRoute component={ SplashDisplay } />
//       <Route path="/login" component={ SessionFormContainer } />
//       <Route path="/signup" component={ SessionFormContainer } />
//     </Route>
//
//     <Route component={AppContainer}>
//       <Route path='/browse' component={ BrowseContainer }>
//
//         <Route path='/artists' component={ ArtistIndexContainer } />
//         <Route path='/artists/:artistId' component={ ArtistDetailContainer } />
//         <Route path='/albums' component={ AlbumIndexContainer } />
//         <Route path='/albums/:albumId' component={ AlbumDetailContainer} />
//         <Route path='/songs' component={ SongIndexContainer } />
//         <Route path='/playlists' component={ PlaylistIndexContainer } />
//         <Route path='/playlists/:playlistId' component={ PlaylistDetailContainer } />
//       </Route>
//       <Route path='/profile' component={ CurrentUserDetailContainer } />
//     </Route>
//
//   </Route>
// </Router>
