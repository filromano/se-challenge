export const addToCart = (productId, packId, quantity) => {
  const item = {productId, packId, quantity};
  return ({
    type: 'ADD_TO_CART',
    payload: item
  })
};

export const updateQuantityToCart = (productId, packId, quantity) => {
  const item = {productId, packId, quantity};
  return ({
    type: 'UPDATE_QUANTITY_TO_CART',
    payload: item
  })
};