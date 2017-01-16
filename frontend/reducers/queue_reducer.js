import { merge } from 'lodash';
import { ADD_TO_QUEUE,
         SHUFFLE_QUEUE,
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
      let newState = merge([], state);
      newState = state.concat([action.song]);
      return newState;
    case REMOVE_FIRST_SONG:
      let newState2 = merge([], state);
      newState2.shift();
      return newState;
    case SHUFFLE_QUEUE:
      let newState3 = merge([], state);
      return shuffle(newState3);
    case CLEAR_QUEUE:
      return [];
    default:
      return state;
  }
};

export default queueReducer;
