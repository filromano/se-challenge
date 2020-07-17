const initialState = [{
  productId:"50",
  packId:"148",
  quantity: 2,
}];

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TO_CART':   
      return [...state, action.payload];
    case 'ADD_QUANTITY_TO_CART':
      state.map((item) => {
        if(item.productId === action.payload.productId && item.packId === action.payload.packId) {
          return {...item, ...action.payload.quantity}
        } else {
          return item
        }
      })
      
    default:
      return state
  }
}