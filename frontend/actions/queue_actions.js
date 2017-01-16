export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const SHUFFLE_QUEUE = 'SHUFFLE_QUEUE';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';
export const REMOVE_FIRST_SONG = 'REMOVE_FIRST_SONG';

export const addToQueue = song => ({
  type: ADD_TO_QUEUE,
  song
});

export const shuffleQueue = () => ({
  type: SHUFFLE_QUEUE
});

export const clearQueue = () => ({
  type: CLEAR_QUEUE
});

export const removeFirstSong = () => ({
  type: REMOVE_FIRST_SONG
});
