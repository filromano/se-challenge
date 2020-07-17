const products = require('../../products.json');

export const getProducts = () => ({
  type: 'GET_ALL_PRODUCTS',
  payload: products.items,
});

export const addToCart = (productId, packId) => {
  console.log('here')
  const item = {productId, packId};
  return ({
    type: 'ADD_TO_KART',
    payload: item
  })
};
