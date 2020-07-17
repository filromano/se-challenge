export const addToCart = (productId, packId, quantity) => {
  const item = {productId, packId, quantity};
  return ({
    type: 'ADD_TO_CART',
    payload: item
  })
};