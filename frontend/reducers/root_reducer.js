import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import currentSongReducer from './current_song_reducer';
import songsReducer from './songs_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducer';
import queueReducer from './queue_reducer';
import playlistsReducer from './playlists_reducer';
import usersReducer from './users_reducer';
import searchReducer from './search_reducer';
import popupReducer from './popup_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  currentSong: currentSongReducer,
  songs: songsReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  queue: queueReducer,
  playlists: playlistsReducer,
  users: usersReducer,
  search: searchReducer,
  popups: popupReducer
});

export default rootReducer;
