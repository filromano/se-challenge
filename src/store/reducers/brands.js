const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'GET_ALL_BRANDS':
      console.log(action.payload)
      return {...state, items: action.payload};
    default:
      return state
  }
}