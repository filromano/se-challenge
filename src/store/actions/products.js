const products = require('../../products.json');

export const getProducts = () => ({
  type: 'GET_ALL_PRODUCTS',
  payload: products,
});
