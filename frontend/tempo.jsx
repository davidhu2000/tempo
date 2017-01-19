import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import configureStore from './store/store.js';

import Root from './components/root';

// TODO: For testing
import { fetchSearchSongs } from './util/search_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const appElement = document.getElementById('current-user-profile');
  Modal.setAppElement(root);

  let store;
  if(window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };

    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={ store } />, root);

  // TODO: for testing
  window.store = store;
});
