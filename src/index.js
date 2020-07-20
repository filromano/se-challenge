import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';

const store = storeConfig();

// add cart to localStorage
store.subscribe(() => {
  localStorage.setItem('se-cart', JSON.stringify(store.getState().cart));
})

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById("container")
);