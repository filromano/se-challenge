const initialState = {
  products: [],
  description: 'tste'
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'GET_ALL_PRODUCTS':
      return { ...state, products: action.payload}
    default:
      return state
  }
}