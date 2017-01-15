import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import currentSongReducer from './current_song_reducer';
import songsReducer from './songs_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  currentSong: currentSongReducer,
  songs: songsReducer,
  albums: albumsReducer,
  artists: artistsReducer
});

export default rootReducer;
