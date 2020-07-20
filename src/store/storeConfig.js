import { createStore, combineReducers } from 'redux';

import productsReducer from './reducers/products';
import cartReducers from './reducers/cart';
import brandsReducers from './reducers/brands';

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducers,
  brands: brandsReducers,
});

function storeConfig() {
  return createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

export default storeConfig;
