import * as actionTypes from "./actions";
const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_ONE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.INCREASE_FIVE:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case actionTypes.RESET:
      return {
        ...state,
        counter: 0,
      };
    case actionTypes.REMOVE_ONE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.REMOVE_FIVE:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
