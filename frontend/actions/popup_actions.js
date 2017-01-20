export const RECEIVE_POPUP = 'RECEIVE_POPUP';
export const REMOVE_POPUP = 'REMOVE_POPUP';

export const receivePopup = popup => ({
  type: RECEIVE_POPUP,
  popup
});

export const removePopup = () => ({
  type: REMOVE_POPUP
});
