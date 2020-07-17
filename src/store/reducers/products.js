const initialState = {
  items: [],
  cart: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'GET_ALL_PRODUCTS':
      return { ...state, items: action.payload};
    case 'ADD_TO_KART':
      return { ...state, cart: [...state.cart, action.payload] }
    default:
      return state
  }
}