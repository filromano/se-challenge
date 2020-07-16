import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';

const store = storeConfig();

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById("container")
);