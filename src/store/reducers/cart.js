const initialState = localStorage.getItem('se-cart') ?
                     JSON.parse(localStorage.getItem('se-cart')) :
                     [];


function removeItem(array, action) {
  console.log('action', action)
  console.log('array', array)
  return array.filter((item) => (item.productId !== action.payload.productId || (item.productId === action.payload.productId && item.packId !== action.payload.packId)))
}

function updateItem(array, action) {
  return array.map((item) => {
    if(item.packId === action.payload.packId && item.productId === action.payload.productId) {
      return {...item, quantity: action.payload.quantity};
    } else {
      return item
    }
  })
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TO_CART':   
      return [...state, action.payload];
    case 'UPDATE_QUANTITY_TO_CART':
      if(action.payload.quantity > 0) {
        return updateItem(state, action)
      } else {
        return removeItem(state, action)
      }
    default:
      return state
  }
}