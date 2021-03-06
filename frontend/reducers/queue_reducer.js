import { merge, values } from 'lodash';
import { ADD_TO_QUEUE,
         SHUFFLE_QUEUE,
         ADD_ALBUM_TO_QUEUE,
         CLEAR_QUEUE,
         REMOVE_FIRST_SONG } from '../actions/queue_actions';

function shuffle(array) {
   let counter = array.length;

   while (counter > 0) {
       let index = Math.floor(Math.random() * counter);
       counter--;
       let temp = array[counter];
       array[counter] = array[index];
       array[index] = temp;
   }
   return array;
}

const _defaultState = [];

const queueReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_TO_QUEUE:
      let newState = state.concat([action.song]);
      return newState;
    case ADD_ALBUM_TO_QUEUE:
      let newState2 = state.concat(action.songs);
      return newState2;
    case REMOVE_FIRST_SONG:
      let newState3 = merge([], state);
      newState3.shift();
      return newState3;
    case SHUFFLE_QUEUE:
      let newState4 = merge([], state);
      return shuffle(newState4);
    case CLEAR_QUEUE:
      return [];
    default:
      return state;
  }
};

export default queueReducer;
