import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import { logout } from '../actions/session_actions';

import routes from './routes';

// // app components
// import App from './app';
// import Sidebar from './app/sidebar';
// import Browse from './browse';
//
// import ArtistIndex from './artist_index';
// import SongIndex from './song_index';
// import AlbumIndex from './album_index';
// import PlaylistIndex from './playlist_index';
//
// import AlbumDetail from './album_detail';
// import ArtistDetail from './artist_detail';
// import PlaylistDetail from './playlist_detail';
// import CurrentUserDetail from './current_user_detail';
//
//
// // splash components
// import Splash from './splash';
// import SplashDisplay from './splash/display';
// import SessionForm from './session_form';

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
