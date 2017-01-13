import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import currentSongReducer from './current_song_reducer';
import songsReducer from './songs_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  currentSong: currentSongReducer,
  songs: songsReducer
});

export default rootReducer;
