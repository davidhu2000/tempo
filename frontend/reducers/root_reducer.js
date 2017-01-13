import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import currentSongReducer from './current_song_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  currentSong: currentSongReducer
});

export default rootReducer;
