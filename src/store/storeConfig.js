import { createStore, combineReducers } from 'redux';

import productsReducer from './reducers/products';
import cartReducers from './reducers/cart';

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducers,
});

function storeConfig() {
  return createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

export default storeConfig;
